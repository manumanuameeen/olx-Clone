import React from 'react';

interface ChildComponent<T> {
  setInput: React.Dispatch<React.SetStateAction<T>>;
  placeholder: string;
  type?: 'text' | 'number';
}

const Input = <T extends string >({ setInput, placeholder, type = 'text' }: ChildComponent<T>) => {
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as T;
    // const convertedValue = (place/holder.toLowerCase() === 'price' || type === 'number' ? Number(value) || 0 : value) as T;
    setInput(value);
  };

  return (
    <div className="pt-2 w-full">
      <input
        type={type}
        onChange={handleChanges}
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;