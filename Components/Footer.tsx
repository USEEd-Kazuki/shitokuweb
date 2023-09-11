import React from 'react';

const Footer = () => {
  function SafeEmailLink() {
    const user = "toiawase"; 
    const domain = "shintokukk.co.jp"; 
    const mailto = "mailto:" + user + "@" + domain; 
  
    return (
      <a className='MailNumber' href={mailto}>{user}@{domain}</a>
    );
  }
  
  return (
    <>
    <footer>
      <div className="fooetrContainer">
          <div className="footerTitleContent">
            <h1 className="footerTitle">進徳海運</h1>
            <h1 className="footerSubTitle">株式会社</h1>
          </div>
        <div className="footerContent">
        <div className="footerShintokuDetail">
          <div className="footerTel">
            <div className="footerTelTitle">TEL : </div>
            <div className="footerTelNumber">082-423-1958</div>
          </div>
          <div className="footerAddress">
            <div className="footerAddressTitle">ADDRESS : </div>
            <div className="footerAddressPostNumber">〒739-0024</div>
            <div className="footerAddress">広島県東広島市 西条町御薗宇6200番地1</div>
          </div>
        </div>
        </div>
      </div>
        <div className='copyContent'>
        <small className='shintokuCopy'>© 2022 SHINTOKU KAIUN CO., LTD. All Rights Reserved.</small>
        </div>
    </footer>
    </>
  )
}

export default Footer