import Nikelogo from '../assets/nike-logo.svg?react'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Nav() {
    return <nav className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'><Nikelogo className='h-20 w-20' /></a>
        {/* burger button */}
        <button className='rounded-lg p-2 focus:ring-2 focus:ring-gray-100 hover:bg-gray-100' ><RxHamburgerMenu size={25}/></button>
    </nav>
}