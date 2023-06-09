"use client"
import Image from "next/image";


const Card = (props) => {
  return (
    <div href="#" className="flex  p-5 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://source.unsplash.com/200x200/?Face,people" alt="" />
      <div>
      <h6 className="font-bold text-end">{props.card_type} </h6>
      <div className="flex flex-col justify-around p-4 leading-normal">
  
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        
      
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.expiry?`Expiry Date - ${props.expiry}`:`Limit  ${props.limit}`}</p>
      </div>
      </div>
    </div>




  );
}

export default Card;
