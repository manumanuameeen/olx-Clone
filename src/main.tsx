import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'flowbite'; // Add this line
import {AuthProvider} from './components/context/Auth';
import { ItemProvider } from './components/context/item';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter>

 <ItemProvider>
  <React.StrictMode>
  <AuthProvider>

    <App />
  </AuthProvider>
  </React.StrictMode>
  </ItemProvider>
  </BrowserRouter>
);