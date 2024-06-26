import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {MenuIcon} from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from './mode-toggle'

type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className='fixed top-0 left-0 right-0 py-4 px-4 bg-current dark:bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between '>
      <aside className='flex items-center gap-[2px]'>
        <Image
          src="/logo.png"
          width={65}
          height={65}
          alt='Garuda logo'
          className='shadow-sm'
        />
      </aside>
      <nav className='absolute left-[50%] top-[50%] transform translate-x-[-50%] dark:text-white text-white translate-y-[-50%] hidden md:block'>
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="https://cdrgaruda.vercel.app"
          className="relative inline-fl ex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {/** WIP : Wire up User */}
            {true ? 'Download' : 'Get Started'}
          </span>
        </Link>
        {//WIP : Wire up User  
        }
        <div className=''>
        <ModeToggle />

        </div>
        {/* <UserButton/>  */}

        <MenuIcon className='md:hidden' />




      </aside>
    </header>
  )
}

export default Navbar