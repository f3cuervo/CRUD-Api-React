import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import CrudApp from './components/crudApp/crudApp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <CrudApp></CrudApp>
    </>
  )
}
