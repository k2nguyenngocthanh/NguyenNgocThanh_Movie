import React from 'react'
import Header from '../../Components/Header/Header'
import ListMovie from './ListMovie.js/ListMovie'
import TabsMovie from './TabsMovie/TabsMovie'
import Footer from '../../Components/Footer/Footer'

export default function HomePage() {
  return  <div className='space-y-10'>
    <Header/>
    <ListMovie/>
    <TabsMovie/>
    <Footer/>
  </div>
  
}
