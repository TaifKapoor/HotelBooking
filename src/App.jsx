import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Home from './Pages/Home'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import RoomDetails from './Pages/RoomDetails/RoomDetails'
import MyBookings from './Pages/MyBookings/MyBookings'
import AllRoom from './Pages/AllRooms/AllRooms'
import Blog from './Pages/Blog/Blog'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blog/>} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/rooms' element={<AllRoom />} />
        <Route path='/rooms/:id' element={<RoomDetails />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
