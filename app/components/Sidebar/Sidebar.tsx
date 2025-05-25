"use client"

import { User, HelpCircle, CircleCheck, ArrowRight, MoveUpRight } from "lucide-react";
import { useEffect, useState } from 'react';

interface SidebarProps {
    aberta: boolean;
}

function Sidebar({ aberta }: SidebarProps) {

    const [activeOption, setActiveOption] = useState<string>('dashboard');
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const tamanhoIcone = 20;

    const optionsNav = [
        {
            title: 'Dashboard',
            icon: <CircleCheck size={tamanhoIcone} />
        },
        {
            title: 'Visualizar Meus Dados',
            icon: <MoveUpRight size={tamanhoIcone} />
        },
        {
            title: 'Ajuda',
            icon: <HelpCircle size={tamanhoIcone} />
        },
        {
            title: 'Editar Meu Perfil',
            icon: <User size={tamanhoIcone} />
        },
        {
            title: 'Sair',
            icon: <ArrowRight size={tamanhoIcone} />
        },
    ]

    useEffect(() => {
        const verificarMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        verificarMobile();

        window.addEventListener('resize', verificarMobile);
        return () => window.removeEventListener('resize', verificarMobile);
    }, []);

    return (
        <aside className={`flex flex-col h-screen ${!aberta && !isMobile ? 'w-24' : 'w-1/6'}
                        w-1/6 bg-[#0b2430] text-white transition-all duration-500 ease-in-out`}>
            <nav className="p-4 space-y-4">
                {optionsNav.map((option, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`flex items-center ${isMobile || !aberta ? 'justify-center' : ''}
                                 gap-3 p-2 rounded-full transition-colors ${activeOption === option.title
                                ? 'bg-[#06151c]'
                                : 'hover:bg-gray-800'
                            }`}
                        onClick={() => setActiveOption(option.title)}
                    >
                        {option.icon}
                        {!isMobile && aberta && <span>{option.title}</span>}

                    </a>
                ))}
            </nav>
        </aside>
    );

}
export default Sidebar