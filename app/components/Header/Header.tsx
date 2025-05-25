import React from 'react'
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <header className='flex'>
        <div className='bg-[#0b2430] border-r border-b border-slate-950 w-1/6'>
            <h1 className='font-medium uppercase text-slate-200 md:text-2xl lg:text-3xl text-center p-5'>Flori Tech</h1>
        </div>
        <div className='flex justify-between bg-[#0b2430] w-full items-center'>
            <MdMenu className='cursor-pointer text-slate-300 ml-7' size={45}/>
            <button className='text-slate-200 text-xl md:text-2xl mr-14'>Sair</button>
        </div>
    </header>
  )
}

export default Header
