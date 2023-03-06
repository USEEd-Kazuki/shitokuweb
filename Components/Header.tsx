import {FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Header: FC = (props) => {

    const [navbar, setNav] = useState(false)

    useEffect(() =>{
        const handleScroll = () =>{
            if (window.scrollY >= 800){
                setNav(true);
            }else{
                setNav(false)
            }
        };

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    },[])

  return (
    <>
              <Head>
            <title>進徳海運株式会社</title>
            <meta property="og:title" content="進徳海運株式会社" key="title" />
      </Head>
    <nav className={navbar ? 'navbar active' : 'navbar'}>
    <div className='headerNav'>
        <Link href='/' scroll={false}>
        <h1 className='headerTitle'>進徳海運</h1>
        </Link>

        <div className="navLinks">
       <ul >
        <li className='navLink'>
        <Link href='/about' scroll={false}>
            <a className='navLinkWord'>
                会社概要
            </a>
            </Link>
        </li>
        <li className='navLink'>
        <Link href='/service' scroll={false}>
        <a className='navLinkWord'>
                サービス
            </a>
        </Link>
        </li>
        <li className='navLink' >
        <Link href='/sdgs'scroll={false}>
            <a className='navLinkWord'>
                SDGsについて
            </a>
        </Link>
        </li>
        <li className='navLink' >
        <Link href='/recruit' scroll={false}>
            <a className='navLinkWord'>
                採用
            </a>
        </Link>
        </li>
        </ul>
        </div>
    </div>
    </nav>
</>
  )
}

export default Header