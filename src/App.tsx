import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import 'flowbite';
import Details from './components/Details/details';

const App = () => {
  return (
   <>
   <Routes>

  <Route path='/' element={<Home/>}/>
<Route path='/details' element={<Details/>}  />


   </Routes> 
   
   </>
  );
};

export default App;