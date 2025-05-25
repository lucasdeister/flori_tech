"use client"

import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function Home() {
  
  const [sidebarAberta, setSidebarAberta] = useState(true);

  const toggleSidebar = () => {
    setSidebarAberta((prev) => !prev);
  };

  return (
    <>
      <Header onToggleSidebar={toggleSidebar}/>
      <div className="flex">
        <Sidebar aberta={sidebarAberta}/>
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold">Conteúdo principal</h1>
        </main>
      </div>
    </>
  );
}


export default Home