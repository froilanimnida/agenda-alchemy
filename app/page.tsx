import Logo from './components/logo'
import Image from 'next/image'
import GetStarted from '../public/images/get-started-banner.png'
import Link from 'next/link'
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className='p-7 flex min-h-screen justify-between flex-col'>
      <Logo />
      <main className='flex flex-col items-center h-5/6 p-5 gap-20'>
        <div className='flex flex-col gap-3'>
          <Image alt='Image of Yellow Paper with Pin' src={ GetStarted }/>
          <h1 className='text-center font-medium'>Jot Down Notes like ever before.</h1>
        </div>
      </main>
      <Link className='btn shadow-lg' href={'/sign-up'}>
        Get Started
        <FaCircleArrowRight />
      </Link>
    </div>
  )
}
