import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'

function App() {

  return (
    <div className='min-h-screen w-full flex justify-center items-center flex-col gap-3 p-3 basis-2'>
        <Link to='Cards' 
        className='bg-[#1976d2] px-20 py-4 text-center rounded-md font-semibold text-white hover:scale-110 transition-transform duration-200'
        >Cards</Link>
        <Link to='TextField' 
        className='bg-[#1976d2] px-20 py-4 text-center rounded-md font-semibold text-white hover:scale-110 transition-transform duration-200'
        >TextField</Link>
        <Link to='Buttons' 
        className='bg-[#1976d2] px-20 py-4 text-center rounded-md font-semibold text-white hover:scale-110 transition-transform duration-200'
        >Buttons</Link>
        <Link to='Dialogs' 
        className='bg-[#1976d2] px-20 py-4 text-center rounded-md font-semibold text-white hover:scale-110 transition-transform duration-200'
        >Dialogs</Link>
        <Link to='Tabs' 
        className='bg-[#1976d2] px-20 py-4 text-center rounded-md font-semibold text-white hover:scale-110 transition-transform duration-200'
        >Tabs</Link>
        <Link to='Modal-Chip' 
        className='bg-[#1976d2] px-20 py-4 text-center rounded-md font-semibold text-white hover:scale-110 transition-transform duration-200'
        >Modal + chip</Link>
        <Link to='Typography-Colors' 
        className='bg-[#1976d2] px-20 py-4 text-center rounded-md font-semibold text-white hover:scale-110 transition-transform duration-200'
        >Typography + Colors</Link>
    </div>
  )
}

export default App