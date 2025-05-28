import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { fireStore } from '../firebase/firebase';

export interface Item {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  userId: string;
  userName: string;
  createdAt: string;
  imageUrl?:string
}

type ItemContextType = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const useItemContext = () => {
  const ctx = useContext(ItemContext);
  if (!ctx) throw new Error('useItemContext must be used within ItemProvider');
  return ctx;
};

interface ItemProviderProps {
  children: ReactNode;
}

export const ItemProvider: React.FC<ItemProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const productCollection = collection(fireStore, 'products');
        const snapshot = await getDocs(productCollection);
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Item[];
        setItems(productsList);
        console.log('Fetched products:', productsList);
      } catch (error: any) {
        console.error('Error fetching products:', error.message);
        setItems([]);
      }
    };
    fetchItems();
  }, []);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};