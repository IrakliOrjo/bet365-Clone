import React from 'react'

import bet3 from '../img/bet3.png'

import {games} from './data.js'

import { Link } from "react-router-dom"

import {BiFootball} from 'react-icons/bi'

import FeaturedMatch from './FeaturedMatch'

const Sport = (props) => {

    console.log(props.sportState)

    const goInPlay = () => {
        console.log('clicked')
        props.setSportState(false)
        props.setInPlayState(true)
    }

  return (
    <div className='w-[32em] md:w-[40em] xl:w-[65em] lg:w-[75em] max-w-[75em] '>
        <div className='w-full flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex flex-col pl-8 pt-4'>
                    <div className='bg-[#09d6aa] mb-1 self-start px-1 text-center'>
                        <p className='text-[.75rem]  font-semibold'>Bet Boosts</p>
                    </div>
                    <p className='text-white leading-6 mb-2 font-semibold text-[1.20rem] max-w-[13em]'>Available on wide range of sports, every day</p>
                    <a className='font-bold mb-2 text-[#09d6aa] px-2 border-[#09d6aa] border self-start'>View Latest Odds</a>
                    <p className='text-[.7rem] text-[#b8b6b6]'>Bet Boosts are available on selected sports, these are located within the classification and marked with a green arrow.</p>
                    <p className='text-[.7rem] text-[#b8b6b6]'>Availability may be withdrawn at the discraction of website.</p>
                </div>
                <div>
                <img className='object-cover w-full' src={bet3} />
                </div>
            </div>
            <div className='w-full border-t-[1px] text-center p-3 border-b-2 border-b-green-700 border-t-[#777575] bg-[#444242]'>
                <p className='text-white text-[.8rem] 
                cursor-pointer max-w-[6em] mx-auto font-bold border-0 bg-[#7c797963] rounded-md'>Featured</p>
            </div>
            <div className='flex flex-col px-8 bg-green-900'>
                <p className='text-[1rem] mb-3 text-white font-bold'>
                    Bet <span className='text-[#09d6aa] text-[1rem] font-bold'>Boost {'>>'}</span>
                </p>
                <div className='flex justify-around pb-3'>
                    <div className='flex flex-col'>
                        <Link onClick={goInPlay} to={`/match/${games[0].id}`}>
                        <p className='text-white text-[.90rem] xl:text-[1rem] mb-1 font-semibold'><BiFootball className='inline-block mr-1 text-white' />
                        {games[0].home} v {games[0].away}</p>
                        <p className='text-white font-semibold mb-2 text-[.8rem]'>Bet Builder</p>
                        <ul className='list-disc pl-4 mb-2'>
                            <li className='text-[.85rem] text-[#b9b3b3]'>Match result will be {games[0].home}</li>
                            <li className='text-[.85rem] text-[#b9b3b3]'>Both Teams to score in the match - Yes</li>
                            <li className='text-[.85rem] text-[#b9b3b3]'>Total Corners Over 9.5</li>
                        </ul>
                        <p className='text-[.9rem] text-[#b9b3b3]'><span className='line-through'>5.50</span> <span className='text-green-500'>{'>>'}</span>
                        <span className='text-white font-bold'> 6.00</span></p>
                        </Link>
                    </div>
                    <div className='flex flex-col'>
                        <Link onClick={goInPlay} to={`/match/${games[1].id}`}>
                        <p className='text-white text-[.90rem] xl:text-[1rem] mb-1 font-semibold'><BiFootball className='inline-block mr-1 text-white' />
                        {games[1].home} v {games[1].away}</p>
                        <p className='text-white font-semibold mb-2 text-[.8rem]'>Bet Builder</p>
                        <ul className='list-disc pl-4 mb-2'>
                            <li className='text-[.85rem] text-[#b9b3b3]'>Match result will be {games[1].home}</li>
                            <li className='text-[.85rem] text-[#b9b3b3]'>Both Teams to score in the match - Yes</li>
                            <li className='text-[.85rem] text-[#b9b3b3]'>Total Corners Over 9.5</li>
                        </ul>
                        <p className='text-[.9rem] text-[#b9b3b3]'><span className='line-through'>4.33</span> <span className='text-green-500'>{'>>'}</span>
                        <span className='text-white font-bold'> 4.50</span></p>
                        </Link>
                    </div>
                    <div className='hidden md:flex flex-col'>
                        <Link onClick={goInPlay} to={`/match/${games[2].id}`}>
                        <p className='text-white text-[.90rem] xl:text-[1rem] mb-1 font-semibold'><BiFootball className='inline-block mr-1 text-white' />
                        {games[2].home} v {games[2].away}</p>
                        <p className='text-white font-semibold mb-2 text-[.8rem]'>Bet Builder</p>
                        <ul className='list-disc pl-4 mb-2'>
                            <li className='text-[.85rem] text-[#b9b3b3]'>Match result will be {games[2].home}</li>
                            <li className='text-[.85rem] text-[#b9b3b3]'>Both Teams to score in the match - Yes</li>
                            <li className='text-[.85rem] text-[#b9b3b3]'>Total Corners Over 9.5</li>
                        </ul>
                        <p className='text-[.9rem] text-[#b9b3b3]'><span className='line-through'>7.22</span> <span className='text-green-500'>{'>>'}</span>
                        <span className='text-white font-bold'> 8.00</span></p>
                        </Link>
                    </div>
                    
                </div>
            </div>
                <FeaturedMatch />
        </div>
    </div>
  )
}

export default Sport