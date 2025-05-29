import React, { useState } from 'react';
import { Item } from '../context/item';
import { Link } from 'react-router-dom';
import favorite from '../../assets/favorite.svg';

interface CardProps {
  items: Item[];
}

const Card: React.FC<CardProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (itemId: string) => {
    setExpanded((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const truncateDescription = (description: string, maxLength: number = 100) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen px-4 md:px-20 lg:px-40 pt-[9rem] pb-10 bg-gray-50">
      <h1 className="text-2xl font-bold text-[#002f34] mb-6 text-center">
        Fresh Recommendations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No items available.</p>
        ) : (
          items.map((item) => (
            <Link
              to={'/details'}
              state={item}
              key={item.id}
              style={{ borderWidth: '1px', borderColor: 'lightgray' }}
            >
              <div
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow relative"
              >
                {item.imageUrl && (
                  <img
                    src={item.imageUrl || 'https://via.placeholder.com/150'}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <h2 className="text-xl font-bold text-[#002f34] mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600">Category: {item.category}</p>
                <p className="text-base font-medium text-gray-800 mt-1">₹{item.price}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {expanded[item.id] ? item.description : truncateDescription(item.description)}
                  {item.description.length > 100 && (
                    <button
                      onClick={(e) => {
                        e.preventDefault(); 
                        toggleDescription(item.id);
                      }}
                      className="text-blue-500 text-sm ml-2 hover:underline"
                    >
                      {expanded[item.id] ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </p>
                <p className="text-xs text-gray-400 mt-3">Posted by: {item.userName}</p>

                <div className="absolute flex justify-center items-center p-2 bg-white rounded-full top-3 right-3 cursor-pointer">
                  <img className="w-5" src={favorite} alt="Favorite" />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Card;