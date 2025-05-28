import React, { useState } from 'react';
import { Modal, ModalBody } from 'flowbite-react';
import Input from '../input/input';
import { useAuth } from '../context/Auth';
import { addDoc, collection } from 'firebase/firestore';
import { fetchFromFireStore, fireStore } from '../firebase/firebase';
import close from "../../assets/close.svg"
import file_upload from "../../assets/fileUpload.svg"
// import { icon } from '@fortawesome/fontawesome-svg-core';
// import { resolve } from 'path';
// import { rejects } from 'assert';
// import { read } from 'fs';



interface ModelProps {
    status: boolean;
    toggleModalSell: () => void;
    setItems: React.Dispatch<React.SetStateAction<any[]>>
}



const Sell: React.FC<ModelProps> = ({ toggleModalSell, status, setItems }) => {
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [image, setImage] = useState<File | null>(null)

    const auth = useAuth();




    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!auth) {
            alert('Please log in to list an item.');
            return;
        }

        setSubmitting(true);

const readImageAsDataUrl = (file:File)=>{
    return new Promise((resolve,rejects)=>{
        const reader = new FileReader();
       reader.onload=()=>{
        resolve(reader.result as string)
       };
       reader.onerror=(error)=>{
        rejects(error)
       }
       reader.readAsDataURL(file)
    })

}

let imageUrl;
if(image){
    try {
        imageUrl = await readImageAsDataUrl(image)
    } catch (error) {
        console.log(error);
        alert("Failed to read image")
        return
    }
}


        const trimmedTitle = title.trim();
        const trimmedCategory = category.trim();
        const trimmedDescription = description.trim();

        if (!trimmedCategory || !trimmedDescription || !trimmedTitle || !price) {
            alert('Please fill in all fields with valid values.');
            setSubmitting(false);
            return;
        }

        try {
            await addDoc(collection(fireStore, 'products'), {
                title: trimmedTitle,
                category: trimmedCategory,
                price,
                description: trimmedDescription,
                imageUrl,
                userId: auth.uid,
                userName: auth.displayName || 'Anonymous',
                createdAt: new Date().toISOString(),
            });

            const data = await fetchFromFireStore()
            setItems(data)
            alert('Item listed successfully!');
            toggleModalSell();
        } catch (error: any) {
            console.error('Error adding item to Firestore:', error.message);
            alert(`Failed to list item: ${error.message}`);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Modal
            theme={{
                content: {
                    base: 'relative w-full p-4 md:h-auto  pt-[9rem]',
                    inner: 'relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700',
                },
            }}
            show={status}
            onClose={toggleModalSell}
            className="bg-black "
            position="center"
            size="md"
            popup
        >
            <ModalBody className="bg-white h-90 p-0 rounded-md" onClick={(e) => e.stopPropagation()}>
                <img src={close} alt=""  className='w-6 absolute z-10 top-6 right-8 cursor-pointer ' onClick={()=>{toggleModalSell()
                    setImage(null)
                }}/>
                <div className="p-6 pl-8 pr-8 pb-8">
                    <p className="font-bold text-lg mb-3">Sell Item</p>
                    <form onSubmit={handleSubmit}>
                        <Input setInput={setTitle} placeholder="Title" />
                        <Input setInput={setCategory} placeholder="Category" />
                        <Input setInput={setPrice} placeholder="Price" type="text" />
                        <Input setInput={setDescription} placeholder="Description" />


                        <div className="pt-2 w-full relative">
                            {image ? (
                                <div className="relative h-40 sm:h-60 w-full flex justify-center border-2 border-black border-solid rounded-md overflow-hidden">
                                    <img
                                        className="object-cover"
                                        src={URL.createObjectURL(image)}
                                        alt="Preview"
                                    />
                                </div>
                            ) : (
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center">
                                    <img className="w-12" src={file_upload} alt="" />
                                    <p className="text-center text-sm pt-2">Click to upload images</p>
                                    <p className="text-center text-sm pt-2">SVG, PNG, JPG</p>
                                </div>
                            )}
                            <div className="relative h-40 sm:h-60 w-full border-2 border-black border-solid rounded-md">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 h-full w-full opacity-0 cursor-pointer z-30"
                                    onChange={e => {
                                        if (e.target.files && e.target.files[0]) {
                                            setImage(e.target.files[0]);
                                        }
                                    }}
                                    required
                                />
                            </div>
                        </div>

                        {submitting ? (
                            <div>
                                <p>Loading...</p>
                            </div>
                        ) : (
                            <div>
                                <button
                                    type="submit"
                                    className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                                    disabled={submitting}
                                >
                                    Sell Item
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default Sell;