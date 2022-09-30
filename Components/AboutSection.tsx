import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
   <>
   <div className="aboutContainer">
        <div className="aboutContent">
                <div className="aboutDeatilTitle">
                        <h1 className='aboutDetailTitle'>会社概要</h1>
                            <div className='wave2'>
                                <Image src={'/wave2.svg'} alt={'wave2'} width={1000} height={400}></Image>
                            </div>
                </div>
                <div className="aboutDeatilContent">
                    <div className="aboutDeatilName">
                        <h1 className='aboutDeatilName1'>商号</h1>
                        <p className='aboutDeatilName2'>進徳海運株式会社</p>
                        <p className='aboutDeatilName3'>SHINTOKU KAIUN CO., LTD.</p>
                    </div>
                    <div className="aboutDeatilName">
                        <h1 className='aboutDeatilName1'>住所</h1>
                        <p className='aboutDeatilName2'>〒 739-0024</p>
                        <p className='aboutDeatilName3'>広島県東広島市 西条町御薗宇６２００−１</p>
                    </div>
                    <div className="aboutDeatilName">
                        <h1 className='aboutDeatilName1'>代表取締役</h1>
                        <p className='aboutDeatilName2'>佐川　明正</p>
                        <p className='aboutDeatilName3'>SAGAWA AKIMASA</p>
                    </div>
                    <div className="aboutDeatilName">
                        <h1 className='aboutDeatilName1'>創業</h1>
                        <p className='aboutDeatilName3'>1958年 9月 24日</p>
                    </div>
                    <div className="aboutDeatilName">
                        <h1 className='aboutDeatilName1'>TEL</h1>
                        <p className='aboutDeatilName3'>090-4545-2659</p>
                    </div>
                    <div className="aboutDeatilName">
                        <h1 className='aboutDeatilName1'>MAIL</h1>
                        <p className='aboutDeatilName3'>shintoku_biz@shintokukk.co.jp</p>
                    </div>
                    <div className="aboutDeatilName">
                        <h1 className='aboutDeatilName1'>主要取引銀行</h1>
                        <p className='aboutDeatilName3'>みずほ銀行、山口銀行、広島銀行</p>
                    </div>
                    <div className="aboutDeatilName">
                        <h1 className='aboutDeatilName1'>資本金</h1>
                        <p className='aboutDeatilName3'>15,000,000円</p>
                    </div>
                    <div className="aboutDeatilName">
                        <h1 className='aboutDeatilName1'>主要業務</h1>
                        <p className='aboutDeatilName3'>外航海運業、内航海運業</p>
                    </div>
                    <div className="aboutDeatilName">
                        <h1 className='aboutDeatilName1'>売上高</h1>
                        <p className='aboutDeatilName3'>30,767,100.00 USD (2019年)</p>
                    </div>
                    <div className="aboutDeatilName">
                        <h1 className='aboutDeatilName1'>従業員数</h1>
                        <p className='aboutDeatilName3'>11人</p>
                    </div>
         </div>
         <div className="aboutCompanyAdress">
            <div className="aboutCompanyAdressTitleContent">
                <h1 className='aboutCompanyAdressTitle'>会社所在</h1>
                    <div className='wave3'>
                        <Image src={'/wave3.svg'} alt={'wave3'} width={1000} height={400}></Image>
                    </div>
                </div>
         </div>
         <div className="aboutMap2">
         <Image src={'/map2.svg'} alt={'map2'} width={1000} height={1200}></Image>
         </div>
         <div className="aboutCompanyMap">
            <h1 className='aboutCompanyMapMainTitle'>組織図</h1>
            <div className="wave4">
                <Image src={'/wave4.svg'} alt={'wave4'} width={500} height={500}></Image>
            </div>
            <div className="aboutCompanyMemberMap">
                <div className="aboutCompanyMap1">
                    <div className="aboutCompanyMapTitle">
                        <h1>経営全般</h1>
                    </div>
                    <div className="aboutCompanyMapName">取締役会長 佐川文明</div>
                    <div className="aboutCompanyMapName">代表取締役社長 佐川明正</div>
                </div>
                <div className="aboutCompanyMap2">
                    <div className="aboutCompanyMapTitle">
                        <h1>財務・経理・総務</h1>
                    </div>
                    <div className="aboutCompanyMapName">常務取締役 佐川真也</div>
                    <div className="aboutCompanyMapName">社外取締役 飯塚俊郎</div>
                </div>
                <div className="aboutCompanyMap3">
                    <div className="aboutCompanyMapTitle">
                        <h1>営業・経営企画</h1>
                    </div>
                    <div className="aboutCompanyMapName">専務取締役 柏原智</div>
                    <div className="aboutCompanyMapName">取締役 佐川誠三</div>
                </div>
                <div className="aboutCompanyMap4">
                    <div className="aboutCompanyMapTitle">
                        <h1>船舶管理</h1>
                    </div>
                    <div className="aboutCompanyMapName">部長 小川克彦</div>
                </div>
                <div className="aboutCompanyMap5">
                    <div className="aboutCompanyMapTitle">
                        <h1>外部アドバイザー</h1>
                    </div>
                    <div className="aboutCompanyMapName">木原知巳</div>
                </div>
            </div>
         </div>
         <div className="aboutShintokuInfoContaner">
            <div className="aboutShintokuInfoContent">
            <div className="aboutInfoTitle">
                        <h1 className='aboutInfoTitle'>進徳海運とは</h1>
                            <div className='wave2'>
                                <Image src={'/wave2.svg'} alt={'wave2'} width={1000} height={400}></Image>
                            </div>
                </div>
            </div>
            <div className="aboutShintokuInfoSubTitle">
                <h1>日本と海外との架け橋に</h1>
            </div>
            <div className="aboutShintokuInfoSubWord">
                <p className="aboutShintokuInfoSubWord1">私たち「進徳海運」は、創業当時より海上物流の一翼を担う*「船主業」を生業として、日々、船舶の保全管理・法令遵守、安全運航に努め、円滑な運航サービスを提供しています。</p>
                <p className="aboutShintokuInfoSubWord2">創業当時は、主に日本国内を初め東南アジア近海の海上物流に従事する船舶を保有していました。その他、顧客や需要が多様化したため、現在は北南極圏を除く世界各地に向かう船舶を保有しております。</p>
                <p className="aboutShintokuInfoSubWord3">当社は、他国間の海上物流に従事する企業として、全社を挙げてサービスの高度化を目指します。</p>
                <p className="aboutShintokuInfoSubWord4">*船の持ち主の意、略式には「船屋」、正式には「船舶貸渡業」</p>
            </div>
         </div>
         <div className="aboutInfoPhoto">
         <Image src={'/house1.JPG'} alt={'house'} width={1640} height={1080}></Image>
         </div>
         <div className="aboutShintokuCompanyContaner">
            <div className="aboutShintokuCompanyContetn">
            <div className="aboutShintokuCompanyTitleContent">
                <h1 className='aboutShintokuCompanyTitle'>企業として</h1>
                    <div className='wave3'>
                        <Image src={'/wave3.svg'} alt={'wave3'} width={1000} height={400}></Image>
                    </div>
                </div>
                <div className="aboutShintokuInfoSubTitle">
                <h1>暮らしを運ぶ大動脈</h1>
            </div>
            <div className="aboutShintokuInfoSubWord">
                <p className="aboutShintokuInfoSubWord1">四方を海に囲まれている日本の貿易量は輸出入を合わせて年間9億トン以上に上がりますが、そのうち実に99%以上は「船」が運んでいます。</p>
                <p className="aboutShintokuInfoSubWord2">原材料や工業製品を大量に、しかも低コストで運ぶことができる「船」は、貿易立国ニッポンを縁の下から支えています。</p>
                <p className="aboutShintokuInfoSubWord3">活発な経済活動、そして豊かな生活にはモノの移動が不可欠であり、その物流の根幹を担っているのが「船」なのです。</p>
                <p className="aboutShintokuInfoSubWord5">物流の根幹を担っているのが「船」なのです。私たちは、そんな「船」を扱う一企業として、日々の業務へ努め、皆さんの生活を支えます。</p>
            </div>
            </div>
         </div>
    </div>
   </div>
   </>
  )
}

export default AboutSection