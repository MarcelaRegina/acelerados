import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from 'src/styles/globals.css';
//import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>Acelerados</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      {/* Barra de Menu no Topo */}
 
      <div className="top-menu flex justify-center ">
  <p className="mr-4">Home</p>
  <p className="mr-4">Seguros</p>
  <p className="mr-4">Contatos</p>
  <p className="mr-4">Sobre Nós</p>
  <p>Para Empresas</p>
</div>
      
      <div className="relative h-screen">
      <img src="/assets/home.jpg" alt="Imagem da Página Inicial" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-4 flex flex-col items-left justify-end text-left p-20 ml-20">
        <div className="mb-4">
          <h1 className="text-white text-5xl font-extrabold  mb-1 custom-text-shadow">Assegure seu futuro</h1>
          <h1 className="text-white text-5xl font-extrabold mb-1 custom-text-shadow">com apenas alguns</h1>
          <h1 className="text-white text-5xl font-extrabold mb-5 custom-text-shadow">cliques</h1>
        </div>
        <div>
          <a href="#" className="simule-button">Simule Agora</a>
        </div>
      </div>
    </div>

    {/* Menu Lateral Fixo */}
    <div class="side-menu">
  <div class="square"><a href="# font-bold">logo</a></div>
  <div class="square"><a href="#">Simule Online</a></div>
  <div class="square"><a href="#">Nós te Ligamos</a></div>
  <div class="square"><a href="#">Whatsapp</a></div>
  <div class="square"><a href="#">Central de Ajuda</a></div>
</div>

    </div>
  );
}