import React from 'react'
import { MdMenu } from "react-icons/md";

interface HeaderProps {
    onToggleSidebar: () => void;
}
function Header({ onToggleSidebar }: HeaderProps) {

    return (
        <header className='flex'>
            <div className='bg-[#0b2430] border-r-2 border-b-2 border-[#06151c] w-1/6'>
                <h1 className='font-medium uppercase text-slate-200 text-sm md:text-xl lg:text-2xl text-center p-5'>Flori Tech</h1>
            </div>
            <div className='flex justify-between bg-[#0b2430] items-center w-5/6'>
                <MdMenu className='cursor-pointer text-slate-300 ml-5 hover:text-slate-400' size={45} onClick={onToggleSidebar}/>
                <button className='text-slate-200 text-sm md:text-xl mr-7 md:mr-14 hover:text-slate-400'>Sair</button>
            </div>
        </header>
    )
}

export default Header
