import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useItemContext, Item } from '../context/item'
import Navbar from '../navbar/navbar'
import Login from '../modal/login'
import Sell from '../modal/Sell'

const Details = () => {
    const location = useLocation();
    const item = location.state as Item | undefined;
    const [opemModal, setModal] = useState<boolean>(false);
    const [openModalSell, setModalSell] = useState<boolean>(false);
    const itemctxt = useItemContext();

    const toggleModal = () => setModal((prev) => !prev);
    const toggleModalSell = () => setModalSell((prev) => !prev);

    if (!item) {
        return <div className="text-center mt-10 text-gray-500">No item details found.</div>;
    }

    return (
        <div className='pt-[5rem]'>
            <Navbar toggelModalSell={toggleModalSell} toggleModal={toggleModal} />
            <Login toggleModal={toggleModal} status={opemModal} />
            <div className="grid gap-0 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-10 px-5 sm:px-15 md:px-30 lg:px-40">
                <div className="border-2 w-full rounded-lg flex justify-center overflow-hidden h-96">
                    <img className='object-cover' src={item.imageUrl} alt={item.title} />
                </div>
                <div className="flex flex-col relative w-full">
                    <p>{item.price}</p>
                    <p>{item.category}</p>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <div className="w-full relative sm:relative md:absolute bottom-0 flex justify-between">
                        <p>Seller : {item.userName}</p>
                        <p>{item.createdAt}</p>
                    </div>
                </div>
            </div>
            <Sell toggleModalSell={toggleModalSell} status={openModalSell} setItems={itemctxt.setItems}/>
        </div>
    )
}

export default Details
