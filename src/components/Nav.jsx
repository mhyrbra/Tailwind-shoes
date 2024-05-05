import Nikelogo from '../assets/nike-logo.svg?react'
import { RxHamburgerMenu } from 'react-icons/rx'

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact']

export default function Nav() {
    return <nav className='flex flex-wrap justify-between items-center'>
        {/* logo */}
        <a href='#'><Nikelogo className='h-20 w-20' /></a>
        {/* burger button */}
        <button className='rounded-lg p-2 focus:ring-2 focus:ring-gray-100 hover:bg-gray-100' ><RxHamburgerMenu size={25}/></button>
        <div className='w-full'>
            <ul className='bg-gray-50 text-lg border border-gray-50 rounded-lg p-4'>{ROUTES.map((route,i) => <li key={route} className={`px-3 py-2 cursor-pointer rounded ${i === 0 ? 'first:bg-blue-500 first:text-white' : 'hover:bg-gray-100'}`}>{route}</li>)}</ul>
        </div>
    </nav>
}
