import React from 'react';
import Link from 'next/link';

const Navlinks = () => {
  return (
    <>
    <div className="mobileMenuContenr">
               {/*Mobile Menu*/}
               <div className='mobileMenu'>
               <ul className='mobileHeaderNav'>
                   <li className='mobileNavLink'>
                       <Link href='/about'>会社概要</Link>
                   </li>
                   <li className='mobileNavLink'>
                       <Link href='/service'>サービス</Link>
                   </li>
                   <li className='mobileNavLink'>
                       <Link href='/recruit'>採用</Link>
                   </li>
               </ul>
                   </div>
    </div>
    </>
  )
}

export default Navlinks