import ball from '../img/trab.png'

import {BsSearch} from 'react-icons/bs'

import {GiSoccerBall,GiCricketBat} from 'react-icons/gi'

import {BiTennisBall,BiBasketball} from 'react-icons/bi'

import {MdCasino,MdSportsEsports,MdSportsRugby} from 'react-icons/md'





import { Link } from "react-router-dom"

const Header = (props) => {

    const goInPlay = () => {
       
        props.setSportState(true)
        props.setInPlayState(false)
    }

  return (
    <div className='flex flex-col'>
        <div className='hidden md:flex py-3 px-[14em] bg-[#1f1e1e] justify-between'>
        <div className=''>
            <ul className='flex text-[0.8rem] gap-8'>
                <li className={`text-[#7a7979] ${props.sportState ? 'text-white' : 'text-[#7a7979]'} hover:text-white cursor-pointer`}>Sport</li>
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
        <div className='flex justify-between px-4 md:px-8 lg:px-11 xl:px-56 bg-green-900'>
            <Link onClick={goInPlay} to={'/'}>
            <div className='flex'>
                <img className='w-16 hidden md:inline-block cursor-pointer ' src={ball} alt='ball logo' />
                <p className='text-white font-[900] cursor-pointer mt-2 inline-block text-[2rem]'>
                bet<span className='text-yellow-400 font-[900]'>365</span></p>
            </div>
            </Link>
            <div className='flex gap-4 md:gap-11 mt-4'>
                <a className={`text-white ${props.sportState ? 'border-b-[2px] border-yellow-500' : ''} text-[1rem] hover:text-green-500`} href="#">Sports</a>
                <a className={`text-white text-[1rem] ${props.inPlayState ? 'border-b-[2px] border-yellow-500' : ''} hover:text-green-500`} href="#">In-Play</a>
            </div>
            <div className='flex gap-4 mt-4'>
                <BsSearch className='text-white mt-2 w-9 cursor-pointer hover:text-green-500' />
                <a className='flex ml-3 bg-yellow-400 h-7 cursor-pointer
                items-center justify-center rounded-sm hover:bg-slate-300 text-[0.8rem] w-11 text-center'>Join</a>
                <a className='text-[0.85rem] mt-1 text-white hover:text-green-500 cursor-pointer'>Log In</a>
            </div>
        </div>
        <div className='flex gap-3 bg-[#3a3939] py-1 w-full justify-center md:hidden'>
            <div className='cursor-pointer hover:brightness-75'>
                <GiSoccerBall className='text-white text-[2rem] ml-2' />
            <p className='text-white font-semibold'>Soccer</p>
            </div>
            <div className='cursor-pointer hover:brightness-75'>
                <BiTennisBall className='text-yellow-500 text-[2rem] ml-2' />
            <p className='text-white font-semibold'>Tennis</p>
            </div>
            <div className='cursor-pointer hover:brightness-75'>
                <BiBasketball className='text-amber-700 text-[2rem] ml-4' />
            <p className='text-white font-semibold'>Basketball</p>
            </div>
            <div className='cursor-pointer hover:brightness-75'>
                <MdCasino className='text-red-700 text-[2rem] ml-2' />
            <p className='text-white font-semibold'>Casino</p>
            </div>
            
            <div className='cursor-pointer hover:brightness-75'>
                <GiCricketBat className='text-amber-400 text-[2rem] ml-2' />
            <p className='text-white font-semibold'>Cricket</p>
            </div>
            <div className='cursor-pointer hover:brightness-75'>
                <MdSportsEsports className='text-cyan-400 text-[2rem] ml-2' />
            <p className='text-white font-semibold'>Esports</p>
            </div>
            <div className='cursor-pointer hover:brightness-75'>
                <MdSportsRugby className='text-amber-900 text-[2rem] ml-2' />
            <p className='text-white font-semibold'>Rugby</p>
            </div>
        </div>
    </div>
  )
}

export default Header