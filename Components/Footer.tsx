import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="fooetrContainer">
        <div className="footerContent">
        <div className="footerTitleWrapper">
          <Link href='/'>
          <h1 className='footerTitle'>進徳海運</h1>
          </Link>
        </div>
        <div className="footerShintokuDetail">
          <div className="footerTel">
            <div className="footerTelTitle">TEL</div>
            <div className="footerTelNumber">090-4545-2659</div>
          </div>
          <div className="footerMail">
            <div className="footerMailTitle">Mail</div>
            <div className="footerMailNumber">shintoku_biz@shintokukk.co.jp</div>
          </div>
          <div className="footerAddress">
            <div className="footerAddressTitle">ADDRESS</div>
            <div className="footerAddressPostNumber">〒739-0024</div>
            <div className="footerAddress">広島県東広島市 西条町御薗宇６２００−１</div>
          </div>
        </div>
          <div className="footerLinkDetail">
          <ul >
              <li className='footerLink'>
                <Link href='/about'>
                  <a className='footerLinkWord'>
                    会社概要
                  </a>
                </Link>
              </li>
              <li className='footerLink'>
                <Link href='/service' >
                <a className='footerLinkWord'>
                  サービス
                </a>
                </Link>
              </li>
              <li className='footerLink' >
                <Link href='/recruit'>
                <a className='footerLinkWord'>
                  採用
                </a>
              </Link>
              </li>
          </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer