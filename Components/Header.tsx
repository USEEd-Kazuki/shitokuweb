import { useEffect, useState } from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Navlinks from './Navlinks';



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [nav, setNav] = useState(false)

  const handleNav = () => {
      setNav(!nav);
  };

  useEffect(() =>{
      const handleScroll = () =>{
          if (window.scrollY > 0){
              setIsScrolled(true)
          } else {
              setIsScrolled(false)
          }
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
          window.removeEventListener("scroll", handleScroll)
      }
  },[])
  
  return (
    <>
    <div className='Header'>
    <div className='headerNav'>
       <ul >
        <li className='navLink'>
        <Link href='/about'>
            <a className='navLinkWord'>
                会社概要
            </a>
            </Link>
        </li>
        <li className='navLink'>
        <Link href='/service' >
        <a className='navLinkWord'>
                サービス
            </a>
        </Link>
        </li>
        <li className='navLink' >
        <Link href='/recruit'>
            <a className='navLinkWord'>
                採用
            </a>
        </Link>
        </li>
        </ul>
    </div>

    <header className='`${isScrolled}`'>
        <div className="headerWrapper">
        <Link href='/'>
        <h1 className='headerTitle'>進徳海運</h1>
        </Link>
    {/*Mobile Button*/}
        <div onClick={handleNav} className='mobileButton'>
          {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
          {nav && <Navlinks />}
        </div>
        </div>
    </header>
    </div>
</>
  )
}

export default Header