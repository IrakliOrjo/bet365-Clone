import React, {useState} from 'react'

const Bet = (props) => {

    
    const [betWarning, setBetWarning] = useState(false)
    const [maxBetWarning, setMaxBetWarning] = useState(false)
    const [balance, setBalance] = useState(1000)

    const [minimize, setMinimize] = useState(false)

    const [placedBet, setPlacedBet] = useState(false)

    const handleInputChange  = (event) => {
        props.setTotalBet(event.target.value)
    }

    const placeBet = () => {
        if(props.totalBet > 0 && props.totalBet <= 1000){

        setPlacedBet(true)
        setBalance(balance - props.totalBet)
        props.setMyBets(props.betSlip)
        
        }else if(props.totalBet <= 0){
            setBetWarning(true)
        }else if(props.totalBet > 1000){
            setMaxBetWarning(true)
        }
    }

    const totalSum = props.totalBet * props.odd

  return (
    <div className='relative'>
        <div className='flex p-3 justify-between border-b-[1px] border-zinc-400'>
            <p className='font-bold text-slate-800'>Selections <span className='bg-yellow-400 rounded-md text-black text-[.95rem]'>{props.betSlip.length}</span></p>
        <div className='flex'>
            <p onClick={() => setMinimize(!minimize)}
            className='text-[.85rem] bg-green-300 hover:bg-green-200 cursor-pointer flex justify-center items-center mr-8  text-emerald-700' >Minimize</p>
            <p className='text-[.85rem] border-r-[1px] pr-1 border-black text-zinc-700'>Balance: {balance}$</p>
            <p onClick={() => props.setShowBet(false)}
            className='text-[.8rem] text-zinc-900 cursor-pointer hover:text-black ml-1'>Close</p>
            </div>
        </div>
        {!minimize && props.betSlip.map((game) => {
          return (
            <div key={game.id}
             className='flex justify-between bg-zinc-300 px-6'
            >
                <div className='flex flex-col'>
                    <p className='font-semibold text-zinc-800 text-[1rem]'>{game.result}</p>
                    <p className='text-[.8rem] text-zinc-700'>Fulltime Result</p>
                    <p className='text-[.70rem] text-zinc-700'>{game.home} vs {game.away}</p>
                </div>
                <p className=' self-center font-semibold text-zinc-800'>{game.odd}</p>
            </div>
            
          )
        })}
        {!placedBet && <div className='flex p-3 justify-between border-t-[1px] border-zinc-400'>
            <p className='font-bold text-slate-800'>Total:</p>
            <div className='flex flex-col'>
            <form>
                <label htmlFor='stake' className='font-bold text-zinc-700'>{props.odd}</label>
                <input id='stake' type='text' onChange={handleInputChange} value={props.totalBet} placeholder='Stake' 
                className='w-[7.5em] ml-2 border-b-[1px] border-zinc-400 outline-none  placeholder:text-slate-500 text-right'
                />
            </form>
            <p className='text-[.7rem] mt-3 text-zinc-700 self-end'>To Return: ${totalSum.toFixed(1)}</p>
            {betWarning && <p className='text-[.7rem] text-red-500 text-end'>Stake at least 0.10 cents!</p>}
            {maxBetWarning && <p className='text-[.7rem] text-red-500 text-end'>You can place maximum 1000$!</p>}
            </div>
        </div>}
        {!placedBet && <button onClick={placeBet} className=' bg-emerald-600 hover:bg-emerald-400 w-full h-11'>PLACE A BET</button>}
        {placedBet && <div className='p-6'>
            <p className='text-green-500 text-[1.3rem] font-bold text-center'>You have succefully placed a bet!</p>
            <p className='text-green-500 text-[1.3rem] font-bold text-center'>Possible Return: ${totalSum.toFixed(1)}</p>
            </div>}
    </div>
  )
}

export default Bet