import  { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Login from '../../components/modal/login';
import Sell from '../../components/modal/Sell';
import Card from '../../components/card/card';
import { useItemContext } from '../../components/context/item';
import CategoryBar from '../../components/category/category';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../../components/footer/footer';

const Home = () => {
  const [openModalSell, setModalSell] = useState(false);
  const [openModal, setModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
 

  const toggleModalSell = () => setModalSell((prev) => !prev);
  const toggleModal = () => setModal((prev) => !prev);

  const itemcontext = useItemContext();
  const { items } = useItemContext();

  useEffect(() => {
    console.log("Updated Items:", itemcontext.items);
  }, [itemcontext.items]);

  return (
    <div>
      <Navbar toggleModal={toggleModal} toggelModalSell={toggleModalSell} />
      <CategoryBar/>
      
      <Login
        toggleModal={toggleModal}
        status={openModal}
        onEmailLoginClick={() => {
          setShowEmailModal(true);
          setModal(false);
        }}
      
      />
      <Sell setItems={itemcontext.setItems} toggleModalSell={toggleModalSell} status={openModalSell} />
      <Card items={items} />
  <Footer/>
    
    </div>
  );
};

export default Home;