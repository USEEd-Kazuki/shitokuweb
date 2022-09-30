import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <>
    <div className="homeContainer">
            {/* homeTitleSection */}
        <div className="homeTitleContainer">
        <div className="homeTitleContent">
            <div className="homeMainTitle">
                <h1 className='homeMainTitle1'>海上物流の一翼を担う「船主業」として、</h1>
                <h1 className='homeMainTitle2'>良質な海上運輸サービスを目指す、</h1>
                <h1 className='homeMainTitle3'>サービス会社として、そして、企業として。</h1>
            </div>
            </div>
            {/* homeMovie　*/}
            <div className='homeMovieContent'>
                <div className='wave1'>
                <Image src={'/Wave1.svg'} alt={'Wave1'} width={1000} height={400}></Image>
                </div>
                <video className='HeroMovie' src="/HeroMovie.mp4"  playsInline autoPlay loop muted />
            </div>
        </div>
        {/* homeAboutTitleSection */}
        <div className="homeAboutTitleContainer">
            <div className="homeAboutTitleContent">
                <h1 className='homeAboutTitle'>会社概要</h1>
                <div className='wave2'>
                <Image src={'/wave2.svg'} alt={'wave2'} width={1000} height={400}></Image>
                </div>
            </div>
        </div>
        {/* homeAboutMapSection */}
        <div className="homeAboutMapContainer">
            <div className="homeAboutMapContent">
                <div className="homeAboutMapTitle">
                    <h1 className='homeAboutTitle1'>進徳海運は、創業当時より海上物流の一翼を担う「船主業」を生業として、</h1>
                    <h1 className='homeAboutTitle2'>日々、船舶の保全管理・法令遵守、安全運航に努め、</h1>
                    <h1 className='homeAboutTitle3'>円滑な運航サービスを提供しています。</h1>
                </div>
                <div className="map1">
                <Image src={'/map1.svg'} alt={'map1'} width={1640} height={1640}></Image>
                </div>
            </div>
        </div>
        {/* homeServiceSection */}
        <div className="homeServiceContainer">
                <div className='homeServiceContent'>
                    <div className="homePhoto1">
                        <Image src={'/photo1.jpg'} alt={'photo1'} width={1640} height={1080}></Image>
                    </div>
                    <div className="homeServiceTitle">
                        <h1 className='homeServiceTitle'>サービス</h1>
                    <div className='wave3'>
                        <Image src={'/wave3.svg'} alt={'wave3'} width={1000} height={400}></Image>
                    </div>
                    <div className="homeServiceSubTitle">
                        <h1 className='homeServiceSubTitle1'>海運は、</h1>
                        <h1 className='homeServiceSubTitle2'>私たちの暮らしや</h1>
                        <h1 className='homeServiceSubTitle3'>産業を支える「縁の下の力持ち」です。</h1>
                    </div>
                    <div className='homeServiceDetail'>
                        <div className='homeServiceDetail1'>進徳海運株式会社は1958年設立、広島県東広島市に事務所を構え、「船主業」として、船舶の保有・保全管理をしている会社です。</div>
                        <div className='homeServiceDetail2'>特に「ケミカル船」(石油化学製品運搬船)を基軸に置き、北極南極を除く全世界の海上物流における縁の下の力持ちとして船屋を営んでいます。</div>
                        <Link href='/service'>
                        <div className="moreSection">
                            <p className='viewMore'>View More</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
                {/* homeRecruitSection */}
                <div className="homeRecruitContainer">
                        <div className="homeRecruitContent">
                            <div className="homeRectuitTitleContent">
                                    <h1 className='homeRecruitTitle'>採用</h1>
                                <div className='wave2'>
                                    <Image src={'/wave2.svg'} alt={'wave2'} width={1000} height={400}></Image>
                                </div>
                            </div>
                            <div className="homeServiceSubTitle">
                        <h1 className='homeServiceSubTitle1'>海運業界で、</h1>
                        <h1 className='homeServiceSubTitle2'>最も必要とされる</h1>
                        <h1 className='homeServiceSubTitle3'>企業グループへ。</h1>
                    </div>
                    <div className='homeServiceDetail'>
                        <div className='homeServiceDetail1'>船主である進徳海運は、あくまでも「サービス会社」です。傲慢にならず、常に誇りを持って「顧客満足を高める」ことを念頭としています。</div>
                        <div className='homeServiceDetail2'>私たちは、顧客満足度の向上を目指して、自ら高い志を創り出し、機会によって自らを変える人材を求めます。そして、そんな人材の個性とアイディア、時間を尊重し、安心して働ける職場の実現を共に目指します。</div>
                        <Link href='/recruit'>
                        <div className="moreSection">
                            <p className='viewMore'>View More</p>
                        </div>
                        </Link>
                    </div>
                        </div>
                    </div>
    </div>
    </>
  )
}

export default HomeSection;