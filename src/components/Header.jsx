import Hero from './Hero'
import Navbar from './Navbar'
import Mountain from '../../public/mountain.webp'

const Header = () => {
  return (
    <div className='header border-b  '>
      <Navbar/>
      <Hero/>
      <img src={Mountain} alt=""  className=' mt-[-500px]'/>
    </div>
  )
}

export default Header