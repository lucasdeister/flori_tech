"use client"

import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function Home() {

  const [sidebarAberta, setSidebarAberta] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>('Dashboard');

  const toggleSidebar = () => {
    setSidebarAberta((prev) => !prev);
  };

  useEffect(() => {
    const verificarMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    verificarMobile();

    window.addEventListener('resize', verificarMobile);
    return () => window.removeEventListener('resize', verificarMobile);
  }, []);

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar aberta={sidebarAberta} isMobile={isMobile} activeOption={activeOption} setActiveOption={setActiveOption} />
        <main className="flex p-6">
          {activeOption === 'Dashboard' && <Dashboard isMobile={isMobile} />}
          {activeOption === 'Visualizar Meus Dados' && <h1>Visualizar Meus Dados</h1>}
          {activeOption === 'Ajuda' && <h1>Ajuda</h1> }
          {activeOption === 'Editar Meu Perfil' && <h1>Editar Meu Perfil</h1> }
        </main>
      </div>
    </>
  );
}


export default Home