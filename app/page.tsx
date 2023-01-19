import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from './Navbar';
import Hero from './Hero';
import Burners from './Burners';
import Content from './Content';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />
    <Burners />
    <Content />
    </>
  )
}
