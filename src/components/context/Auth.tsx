import { onAuthStateChanged, User, getAuth } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";


const AuthContext = createContext<User | null>(null);


export const useAuth = () => {
  return useContext(AuthContext);
}

interface AuthProviderProps {
    children: ReactNode;
}


const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider} ;
