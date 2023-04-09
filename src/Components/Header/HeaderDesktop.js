import React from 'react'
import { NavLink } from 'react-router-dom'
import UserMenu from './UserMenu'


export default function HeaderDesktop() {
    return <div className='h-20 shadow w-full'>
    <div className="container mx-auto h-full flex items-center justify-between">
        <NavLink to="/">
        <span className='font-medium text-2xl text-red-500 animate-ping'>NguyenThanhFilm</span>
        </NavLink>
        <UserMenu/>
        
    </div>
  </div>
  
}
