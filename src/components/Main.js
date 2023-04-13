import {AiOutlineStar, AiOutlineArrowDown} from 'react-icons/ai'

import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {

    const [data, setData] = useState(null);

    

  useEffect(() => {

    const options = {
      headers: {
    Package: '4a788ec11cd42226e2fdcbd62253379c',
    'X-RapidAPI-Key': 'a7f421131emshf7efca25ead2456p118cd5jsn25031a5983ce',
    'X-RapidAPI-Host': 'sports-odds-betapi.p.rapidapi.com'
  }
    };

    axios.get('https://sports-odds-betapi.p.rapidapi.com/v1/sports/line/en',options)
      .then(response => {
        console.log(response.data)
        setData(response.data);
        
      })
      .catch(error => {
        console.error(error);
      });

  
  }, []);

  return (
    <div className='bg-[#313030] flex flex-col w-[53%] overflow-hidden overflow-y-scroll'>
        {/*Header div */}
        <div className='flex flex-col p-6'>
            <a className='text-[#9e9e9e] text-[.9rem] cursor-pointer'>{'< back'}</a>
            <p className='text-gray-300 text-[1.5rem] font-bold mb-6'>Chelsea  v Napoli</p>
            <div>
                <ul className='flex text-[.9rem] cursor-pointer gap-6 text-[#9e9e9e]'>
                    <li className='hover:text-white'>All</li>
                    <li className='hover:text-white'>Bet Builder</li>
                    <li className='hover:text-white'>Set</li>
                    <li className='hover:text-white'>Games</li>
                </ul>
            </div>
        </div>
        {/*Odds divs begin */}
        <div className='flex flex-col cursor-pointer border-t-2 border-green-800  bg-[#474646]'>
            <div className='h-11 flex px-6 justify-between items-center border-b-[1px] group border-[#807f7f]'>
                <p className='text-white font-bold hover:text-green-400'>Fulltime Result</p>
                <div className='flex invisible group-hover:visible gap-8'>
                <AiOutlineStar className='text-[#797878] hover:text-[#c9c4c4] ' />
                <AiOutlineArrowDown className='text-[#797878]' />
                </div>
            </div>
            <div className='h-11 flex'>
                <div className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p className='mt-2'>Chelsea <span className='text-yellow-300 ml-1 text-[.9rem]'>4.60</span></p>
                </div>
                <div className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p className='mt-2'>Draw <span className='text-yellow-300 ml-1 text-[.9rem]'>3.25</span></p>
                </div>
                <div className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p className='mt-2'>Napoli <span className='text-yellow-300 ml-1 text-[.9rem]'>1.80</span></p>
                </div>
            </div>
        </div>
        <div className='flex flex-col cursor-pointer border-t-2 border-green-800  bg-[#474646]'>
            <div className='h-11 flex px-6 justify-between items-center border-b-[1px] group border-[#807f7f]'>
                <p className='text-white font-bold hover:text-green-400'>Double Chance</p>
                <div className='flex invisible group-hover:visible gap-8'>
                <AiOutlineStar className='text-[#797878] hover:text-[#c9c4c4] ' />
                <AiOutlineArrowDown className='text-[#797878]' />
                </div>
            </div>
            <div className='h-11 flex'>
                <div className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p className='mt-2'>Chelsea or Draw <span className='text-yellow-300 ml-1 text-[.9rem]'>1.60</span></p>
                </div>
                <div className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p className='mt-2'>Chelsea or Napoli <span className='text-yellow-300 ml-1 text-[.9rem]'>1.45</span></p>
                </div>
                <div className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p className='mt-2'>Napoli or Draw <span className='text-yellow-300 ml-1 text-[.9rem]'>1.2</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main