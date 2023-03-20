import ball from '../img/trab.png'

import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex py-3 px-8 bg-[#1f1e1e] justify-between'>
        <div>
            <ul className='flex text-[0.8rem] gap-8'>
                <li className='text-[#7a7979] hover:text-white cursor-pointer'>Sport</li>
                <li className='text-[#7a7979] hover:text-white cursor-pointer'>Casino</li>
                <li className='text-[#7a7979] hover:text-white cursor-pointer'>Live Casino</li>
                <li className='text-[#7a7979] hover:text-white cursor-pointer'>Poker</li>
                <li className='text-[#7a7979] hover:text-white cursor-pointer'>Bingo</li>
            </ul>
        </div>
        <div className='flex text-[0.8rem] gap-5 '>
            <a className='text-[#7a7979] hover:text-white cursor-pointer'>Responsible Gaming</a>
            <a className='text-[#7a7979] hover:text-white cursor-pointer'>Help</a>
        </div>
        </div>
        <div className='flex justify-between px-4 bg-green-900'>
            <div className='flex'>
                <img className='w-16 cursor-pointer inline-block' src={ball} alt='ball logo' />
                <p className='text-white font-[900] cursor-pointer mt-2 inline-block text-[2rem]'>
                bet<span className='text-yellow-400 font-[900]'>365</span></p>
            </div>
            <div className='flex gap-11 mt-4'>
                <a className='text-white text-[1rem] hover:text-green-500' href="#">Sports</a>
                <a className='text-white text-[1rem] hover:text-green-500' href="#">In-Play</a>
            </div>
            <div className='flex gap-4 mt-4'>
                <BsSearch className='text-white mt-2 w-9 cursor-pointer hover:text-green-500' />
                <a className='flex ml-3 bg-yellow-400 h-7 cursor-pointer
                items-center justify-center rounded-sm hover:bg-slate-300 text-[0.8rem] w-11 text-center'>Join</a>
                <a className='text-[0.85rem] mt-1 text-white hover:text-green-500 cursor-pointer'>Log In</a>
            </div>
        </div>
    </div>
  )
}

export default Header