import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Login from '../../components/modal/login';
import Sell from '../../components/modal/Sell';
import Card from '../../components/card/card';
import { useItemContext } from '../../components/context/item';

const Home = () => {
  const [openModalSell, setModalSell] = React.useState<boolean>(false);
  const toggleModalSell = () => {
    setModalSell((prev) => !prev);
  };

  const [openModal, setModal] = React.useState<boolean>(false);
  const toggleModal = () => {
    console.log('Toggling login modal, new state:', !openModal);
    setModal((prev) => !prev);
  };

  const itemcontext = useItemContext()
  const { items } = useItemContext();

useEffect(()=>{
  console.log("Updated Iteams :",itemcontext.items)
},[itemcontext.items])

  return (
    <div>
      <Navbar toggleModal={toggleModal} toggelModalSell={toggleModalSell} />
      <Login toggleModal={toggleModal} status={openModal} />
      <Sell setItems={(itemcontext).setItems} toggleModalSell={toggleModalSell} status={openModalSell} />
      <Card items={items} />
    </div>
  );
};

export default Home;