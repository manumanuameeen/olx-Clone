import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyATwz_SYDcUfI45HE4A-Jq1m4gNaQTt7e0',
  authDomain: 'olx-clone-35ce2.firebaseapp.com',
  projectId: 'olx-clone-35ce2',
  storageBucket: 'olx-clone-35ce2.appspot.com',
  messagingSenderId: '264556611038',
  appId: '1:264556611038:web:9971010e5f722595ec494f',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const fireStore = getFirestore(app);

const fetchFromFireStore = async () => {
  try {
    const productCollection = collection(fireStore, 'products');
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log('Fetched products from Firestore:', productList);
    return productList;
  } catch (error) {
    console.error('Error fetching products from Firestore:', error);
    return [];
  }
};

export { app, auth, provider, storage, fireStore, fetchFromFireStore };
