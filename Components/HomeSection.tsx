import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

const HomeSection = () => {

    const svgVariants  = {
        start: {
          opacity: 0,
          pathLength:0
        },
        finished: {
          opacity:1,
          pathLength:1,
          transition:{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }
        }
      };

  return (
    <>
    <div className="homeContainer">
            {/* homeTitleSection */}
        <div className="homeTitleContainer">
        <div className="homeTitleContent">
            <div className="homeMainTitle">
                <motion.h1 
                 variants={{
                 offscreen: { // 画面外の場合のスタイル
                  x: -10,
                 opacity: 0,
                },
                onscreen: { // 画面内の場合のスタイル
                x: 0,
                opacity: 1,
                transition: {
                duration: 1,
                 },
                },
                }}
                initial="offscreen" // 初期表示はoffscreen
                whileInView="onscreen" // 画面内に入ったらonscreen
                viewport={{ once: false, amount: 0 }}
                className='homeMainTitle1'>海上物流の一翼を担う「船主業」として、</motion.h1>
                <motion.h1 
                                 variants={{
                                    offscreen: { // 画面外の場合のスタイル
                                     x: -10,
                                    opacity: 0,
                                   },
                                   onscreen: { // 画面内の場合のスタイル
                                   x: 0,
                                   opacity: 1,
                                   transition: {
                                   duration: 1,
                                    },
                                   },
                                   }}
                                   initial="offscreen" // 初期表示はoffscreen
                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                   viewport={{ once: false, amount: 0 }}
                className='homeMainTitle2'>良質な海上運輸サービスを目指す、</motion.h1>
                <motion.h1 
                                 variants={{
                                    offscreen: { // 画面外の場合のスタイル
                                     x: -10,
                                    opacity: 0,
                                   },
                                   onscreen: { // 画面内の場合のスタイル
                                    x: 0,
                                   opacity: 1,
                                   transition: {
                                   duration: 1,
                                    },
                                   },
                                   }}
                                   initial="offscreen" // 初期表示はoffscreen
                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                   viewport={{ once: false, amount: 0 }}
                className='homeMainTitle3'>サービス会社として、そして、企業として。</motion.h1>
            </div>
            </div>
            {/* homeMovie　*/}
            <div className='homeMovieContent'>
                <div className='wave1'>
                <motion.div
                                 variants={{
                                    offscreen: { // 画面外の場合のスタイル
                                    opacity: 0,
                                   },
                                   onscreen: { // 画面内の場合のスタイル
                                   opacity: 1,
                                   transition: {
                                   duration: 1,
                                    },
                                   },
                                   }}
                                   initial="offscreen" // 初期表示はoffscreen
                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                   viewport={{ once: true, amount: 0 }}
                                   className="wave1Image"
                                   >
                <Image src={'/Wave1.svg'} alt={'Wave1'} width={1000} height={400}></Image>
                </motion.div>
                <motion.h1 
                                 variants={{
                                    offscreen: { // 画面外の場合のスタイル
                                     y: 10,
                                    opacity: 0,
                                   },
                                   onscreen: { // 画面内の場合のスタイル
                                   y: 0,
                                   opacity: 1,
                                   transition: {
                                   duration: 0.5,
                                    },
                                   },
                                   }}
                                   initial="offscreen" // 初期表示はoffscreen
                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                   viewport={{ once: false, amount: 0 }}
                className='overlayTitle'>SHINTOKU</motion.h1>
                    <div className="subWaveContentTitle">
                    <motion.h2 
                                     variants={{
                                        offscreen: { // 画面外の場合のスタイル
                                         x: 10,
                                        opacity: 0,
                                       },
                                       onscreen: { // 画面内の場合のスタイル
                                       x: 0,
                                       opacity: 1,
                                       transition: {
                                       duration: 0.5,
                                        },
                                       },
                                       }}
                                       initial="offscreen" // 初期表示はoffscreen
                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                       viewport={{ once: false, amount: 0 }}
                    className="subWaveContentTitle1">As a shipowner, Shintoku Kaiun, is a “Service Company”</motion.h2>
                    <motion.h2 
                                     variants={{
                                        offscreen: { // 画面外の場合のスタイル
                                         x: -10,
                                        opacity: 0,
                                       },
                                       onscreen: { // 画面内の場合のスタイル
                                       x: 0,
                                       opacity: 1,
                                       transition: {
                                       duration: 0.5,
                                        },
                                       },
                                       }}
                                       initial="offscreen" // 初期表示はoffscreen
                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                       viewport={{ once: false, amount: 0 }}
                    className="subWaveContentTitle2">We will always be humble and take pride in putting customer satisfaction as our top priority.</motion.h2>
                    </div>
                </div>
                <div className='overlay'
                >
                <div className='homeWaveContentTitle'>
                    <motion.h1 
                                     variants={{
                                        offscreen: { // 画面外の場合のスタイル
                                         y: -10,
                                        opacity: 0,
                                       },
                                       onscreen: { // 画面内の場合のスタイル
                                       y: 0,
                                       opacity: 1,
                                       transition: {
                                       duration: 1,
                                        },
                                       },
                                       }}
                                       initial="offscreen" // 初期表示はoffscreen
                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                       viewport={{ once: false, amount: 0 }}
                    className="WaveContentTitle1">船主である進徳海運は、あくまでも「サービス会社」です。</motion.h1>
                    <motion.h1 
                                     variants={{
                                        offscreen: { // 画面外の場合のスタイル
                                         y: -10,
                                        opacity: 0,
                                       },
                                       onscreen: { // 画面内の場合のスタイル
                                       y: 0,
                                       opacity: 1,
                                       transition: {
                                       duration: 1,
                                        },
                                       },
                                       }}
                                       initial="offscreen" // 初期表示はoffscreen
                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                       viewport={{ once: false, amount: 0 }}
                    className="WaveContentTitle2">傲慢にならず、常に誇りを持って「顧客満足を高める」ことを念頭におきます。</motion.h1>
                </div>
                </div>
                <div
                >
                <video className='HeroMovie' src="/ShintokuHome.mp4" poster='/ShintokuHome.jpg' playsInline autoPlay loop muted />
                </div>
            </div>
        </div>
        {/* homeAboutTitleSection */}
        <div className="homeAboutTitleContainer">
            <motion.div 
                             variants={{
                                offscreen: { // 画面外の場合のスタイル
                                 y: 10,
                                opacity: 0,
                               },
                               onscreen: { // 画面内の場合のスタイル
                               y: 0,
                               opacity: 1,
                               transition: {
                               duration:  1,
                                },
                               },
                               }}
                               initial="offscreen" // 初期表示はoffscreen
                               whileInView="onscreen" // 画面内に入ったらonscreen
                               viewport={{ once: false, amount: 0 }}
            className="homeAboutTitleContent">
                <motion.h1 
                                 variants={{
                                    offscreen: { // 画面外の場合のスタイル
                                    opacity: 0,
                                   },
                                   onscreen: { // 画面内の場合のスタイル
                                   opacity: 1,
                                   transition: {
                                   duration: 1,
                                    },
                                   },
                                   }}
                                   initial="offscreen" // 初期表示はoffscreen
                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                   viewport={{ once: false, amount: 0 }}
                className='homeAboutTitle'>会社概要</motion.h1>
                <motion.div className='wave2'
                                                 variants={{
                                                    offscreen: { // 画面外の場合のスタイル
                                                    opacity: 0,
                                                   },
                                                   onscreen: { // 画面内の場合のスタイル
                                                   opacity: 1,
                                                   transition: {
                                                   duration: 1,
                                                    },
                                                   },
                                                   }}
                                                   initial="offscreen" // 初期表示はoffscreen
                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                   viewport={{ once: false, amount: 0 }}
                >
                <Image src={'/wave2.svg'} alt={'wave2'} width={600} height={300}></Image>
                </motion.div>
            </motion.div>
        </div>
        {/* homeAboutMapSection */}
        <div className="homeAboutMapContainer">
            <div className="homeAboutMapContent">
                <div className="homeAboutMapTitle">
                    <motion.h1 
                                     variants={{
                                        offscreen: { // 画面外の場合のスタイル
                                         x: -10,
                                        opacity: 0,
                                       },
                                       onscreen: { // 画面内の場合のスタイル
                                       x: 0,
                                       opacity: 1,
                                       transition: {
                                       duration: 1,
                                        },
                                       },
                                       }}
                                       initial="offscreen" // 初期表示はoffscreen
                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                       viewport={{ once: false, amount: 0 }}
                    className='homeAboutTitle1'>進徳海運は、創業当時より海上物流の一翼を担う「船主業」を生業として、</motion.h1>
                    <motion.h1 
                                     variants={{
                                        offscreen: { // 画面外の場合のスタイル
                                         x: -10,
                                        opacity: 0,
                                       },
                                       onscreen: { // 画面内の場合のスタイル
                                       x: 0,
                                       opacity: 1,
                                       transition: {
                                       duration: 1,
                                        },
                                       },
                                       }}
                                       initial="offscreen" // 初期表示はoffscreen
                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                       viewport={{ once: false, amount: 0 }}
                    className='homeAboutTitle2'>日々、船舶の保全管理・法令遵守、安全運航に努め、</motion.h1>
                    <motion.h1 
                                     variants={{
                                        offscreen: { // 画面外の場合のスタイル
                                         x: -10,
                                        opacity: 0,
                                       },
                                       onscreen: { // 画面内の場合のスタイル
                                       x: 0,
                                       opacity: 1,
                                       transition: {
                                       duration: 1,
                                        },
                                       },
                                       }}
                                       initial="offscreen" // 初期表示はoffscreen
                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                       viewport={{ once: false, amount: 0 }}
                    className='homeAboutTitle3'>円滑な運航サービスを提供しています。</motion.h1>
                    <Link href={'/about'} scroll={false}>
                                            <motion.div 
                                                                 variants={{
                                                                    offscreen: { // 画面外の場合のスタイル
                                                                     x: -10,
                                                                    opacity: 0,
                                                                   },
                                                                   onscreen: { // 画面内の場合のスタイル
                                                                   x: 0,
                                                                   opacity: 1,
                                                                   transition: {
                                                                   duration: 1,
                                                                    },
                                                                   },
                                                                   }}
                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                   viewport={{ once: false, amount: 0 }}
                        className="moreSection">
                            <div className="viewMoreContent">
                            <p className='viewMore'>View More</p>
                            <div className="arrow">
                            <svg width={100} height={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 80">
                                <motion.path d="M 20 10 L 60 10 L 45 0 L 60 10" 
                                stroke="#000000" 
                                strokeWidth="0.4" 
                                fill="none"
                                variants={svgVariants}
                                initial="start"
                                animate="finished"
                                />
                            </svg>
                            </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>
                <motion.div 
                                 variants={{
                                    offscreen: { // 画面外の場合のスタイル
                                    opacity: 0,
                                   },
                                   onscreen: { // 画面内の場合のスタイル
                                   opacity: 1,
                                   transition: {
                                   duration: 1,
                                    },
                                   },
                                   }}
                                   initial="offscreen" // 初期表示はoffscreen
                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                   viewport={{ once: false, amount: 0 }}
                className="map1">
                <Image src={'/map1.svg'} alt={'map1'} width={900} height={900}></Image>
                </motion.div>
                
            </div>
        </div>
        {/* homeServiceSection */}
        <div className="homeServiceContainer">
                <div className='homeServiceContent'>
                    <motion.div 
                                     variants={{
                                        offscreen: { // 画面外の場合のスタイル
                                         y: 10,
                                        opacity: 0,
                                       },
                                       onscreen: { // 画面内の場合のスタイル
                                       y: 0,
                                       opacity: 1,
                                       transition: {
                                       duration: 1,
                                        },
                                       },
                                       }}
                                       initial="offscreen" // 初期表示はoffscreen
                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                       viewport={{ once: false, amount: 0 }}
                    className="homePhoto1">
                        <Image src={'/photo1.jpg'} alt={'photo1'} width={1640} height={1080}></Image>
                    </motion.div>
                    <div className="homeServiceTitle">
                        <motion.h1 
                                         variants={{
                                            offscreen: { // 画面外の場合のスタイル
                                            opacity: 0,
                                           },
                                           onscreen: { // 画面内の場合のスタイル
                                           opacity: 1,
                                           transition: {
                                           duration: 1,
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                        className='homeServiceTitle'>サービス</motion.h1>
                    <motion.div 
                                     variants={{
                                        offscreen: { // 画面外の場合のスタイル
                                        opacity: 0,
                                       },
                                       onscreen: { // 画面内の場合のスタイル
                                       opacity: 1,
                                       transition: {
                                       duration: 1,
                                        },
                                       },
                                       }}
                                       initial="offscreen" // 初期表示はoffscreen
                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                       viewport={{ once: false, amount: 0 }}
                    className='wave3'>
                        <Image src={'/wave3.svg'} alt={'wave3'} width={600} height={300}></Image>
                    </motion.div>
                    <div className="homeServiceSubTitle">
                        <motion.h1 
                                         variants={{
                                            offscreen: { // 画面外の場合のスタイル
                                             x: -10,
                                            opacity: 0,
                                           },
                                           onscreen: { // 画面内の場合のスタイル
                                           x: 0,
                                           opacity: 1,
                                           transition: {
                                           duration: 1,
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                        className='homeServiceSubTitle1'>海運は、</motion.h1>
                        <motion.h1 
                                         variants={{
                                            offscreen: { // 画面外の場合のスタイル
                                             x: -10,
                                            opacity: 0,
                                           },
                                           onscreen: { // 画面内の場合のスタイル
                                           x: 0,
                                           opacity: 1,
                                           transition: {
                                           duration: 1,
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                        className='homeServiceSubTitle2'>私たちの暮らしや</motion.h1>
                        <motion.h1 
                                         variants={{
                                            offscreen: { // 画面外の場合のスタイル
                                             x: -10,
                                            opacity: 0,
                                           },
                                           onscreen: { // 画面内の場合のスタイル
                                           x: 0,
                                           opacity: 1,
                                           transition: {
                                           duration: 1,
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                        className='homeServiceSubTitle3'>産業を支える「縁の下の力持ち」です。</motion.h1>
                    </div>
                    <div className='homeServiceDetail'>
                        <motion.div 
                                                                 variants={{
                                                                    offscreen: { // 画面外の場合のスタイル
                                                                     x: -10,
                                                                    opacity: 0,
                                                                   },
                                                                   onscreen: { // 画面内の場合のスタイル
                                                                   x: 0,
                                                                   opacity: 1,
                                                                   transition: {
                                                                   duration: 1,
                                                                    },
                                                                   },
                                                                   }}
                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                   viewport={{ once: false, amount: 0 }}
                        className='homeServiceDetail1'>進徳海運株式会社は1958年設立、広島県東広島市に事務所を構え、「船主業」として、船舶の保有・保全管理をしている会社です。</motion.div>
                        <motion.div 
                                                                 variants={{
                                                                    offscreen: { // 画面外の場合のスタイル
                                                                     x: -10,
                                                                    opacity: 0,
                                                                   },
                                                                   onscreen: { // 画面内の場合のスタイル
                                                                   x: 0,
                                                                   opacity: 1,
                                                                   transition: {
                                                                   duration: 1,
                                                                    },
                                                                   },
                                                                   }}
                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                   viewport={{ once: false, amount: 0 }}
                        className='homeServiceDetail2'>特に「ケミカル船」(石油化学製品運搬船)を基軸に置き、北極南極を除く全世界の海上物流における縁の下の力持ちとして船屋を営んでいます。</motion.div>
                        <Link href={'/service'} scroll={false}>
                                            <motion.div 
                                                                 variants={{
                                                                    offscreen: { // 画面外の場合のスタイル
                                                                     x: -10,
                                                                    opacity: 0,
                                                                   },
                                                                   onscreen: { // 画面内の場合のスタイル
                                                                   x: 0,
                                                                   opacity: 1,
                                                                   transition: {
                                                                   duration: 1,
                                                                    },
                                                                   },
                                                                   }}
                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                   viewport={{ once: false, amount: 0 }}
                        className="moreSection">
                            <div className="viewMoreContent">
                            <p className='viewMore'>View More</p>
                            <div className="arrow">
                            <svg width={100} height={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 80">
                                <motion.path d="M 20 10 L 60 10 L 45 0 L 60 10" 
                                stroke="#ffffff" 
                                strokeWidth="0.4" 
                                fill="none"
                                variants={svgVariants}
                                initial="start"
                                animate="finished"
                                />
                            </svg>
                            </div>
                            </div>
                        </motion.div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
                {/* homeRecruitSection */}
                <div className="homeRecruitContainer">
                        <div className="homeRecruitContent">
                            <div className="homeRectuitTitleContent">
                                    <motion.h1 
                                    variants={{
                                        offscreen: { // 画面外の場合のスタイル
                                        opacity: 0,
                                       },
                                       onscreen: { // 画面内の場合のスタイル
                                       opacity: 1,
                                       transition: {
                                       duration: 1,
                                        },
                                       },
                                       }}
                                       initial="offscreen" // 初期表示はoffscreen
                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                       viewport={{ once: false, amount: 0 }}
                                    className='homeRecruitTitle'>採用</motion.h1>
                                <motion.div 
                                variants={{
                                    offscreen: { // 画面外の場合のスタイル
                                    opacity: 0,
                                   },
                                   onscreen: { // 画面内の場合のスタイル
                                   opacity: 1,
                                   transition: {
                                   duration: 1,
                                    },
                                   },
                                   }}
                                   initial="offscreen" // 初期表示はoffscreen
                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                   viewport={{ once: false, amount: 0 }}
                                className='wave2'>
                                    <Image src={'/wave2.svg'} alt={'wave2'} width={600} height={300}></Image>
                                </motion.div>
                            </div>
                            <div className="homeServiceSubTitle">
                        <motion.h1 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                             x: -10,
                            opacity: 0,
                           },
                           onscreen: { // 画面内の場合のスタイル
                           x: 0,
                           opacity: 1,
                           transition: {
                           duration: 1,
                            },
                           },
                           }}
                           initial="offscreen" // 初期表示はoffscreen
                           whileInView="onscreen" // 画面内に入ったらonscreen
                           viewport={{ once: false, amount: 0 }}
                        className='homeServiceSubTitle1'>海運業界で、</motion.h1>
                        <motion.h1 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                             x: -10,
                            opacity: 0,
                           },
                           onscreen: { // 画面内の場合のスタイル
                           x: 0,
                           opacity: 1,
                           transition: {
                           duration: 1,
                            },
                           },
                           }}
                           initial="offscreen" // 初期表示はoffscreen
                           whileInView="onscreen" // 画面内に入ったらonscreen
                           viewport={{ once: false, amount: 0 }}
                        className='homeServiceSubTitle2'>最も必要とされる</motion.h1>
                        <motion.h1
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                             x: -10,
                            opacity: 0,
                           },
                           onscreen: { // 画面内の場合のスタイル
                           x: 0,
                           opacity: 1,
                           transition: {
                           duration: 1,
                            },
                           },
                           }}
                           initial="offscreen" // 初期表示はoffscreen
                           whileInView="onscreen" // 画面内に入ったらonscreen
                           viewport={{ once: false, amount: 0 }}
                        className='homeServiceSubTitle3'>企業グループへ。</motion.h1>
                    </div>
                    <div className='homeServiceDetail'>
                        <motion.div 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                             x: -10,
                            opacity: 0,
                           },
                           onscreen: { // 画面内の場合のスタイル
                           x: 0,
                           opacity: 1,
                           transition: {
                           duration: 1,
                            },
                           },
                           }}
                           initial="offscreen" // 初期表示はoffscreen
                           whileInView="onscreen" // 画面内に入ったらonscreen
                           viewport={{ once: false, amount: 0 }}
                        className='homeServiceDetail1'>船主である進徳海運は、あくまでも「サービス会社」です。傲慢にならず、常に誇りを持って「顧客満足を高める」ことを念頭としています。</motion.div>
                        <motion.div 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                             x: -10,
                            opacity: 0,
                           },
                           onscreen: { // 画面内の場合のスタイル
                           x: 0,
                           opacity: 1,
                           transition: {
                           duration: 1,
                            },
                           },
                           }}
                           initial="offscreen" // 初期表示はoffscreen
                           whileInView="onscreen" // 画面内に入ったらonscreen
                           viewport={{ once: false, amount: 0 }}
                        className='homeServiceDetail2'>私たちは、顧客満足度の向上を目指して、自ら高い志を創り出し、機会によって自らを変える人材を求めます。</motion.div>
                        <motion.div 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                             x: -10,
                            opacity: 0,
                           },
                           onscreen: { // 画面内の場合のスタイル
                           x: 0,
                           opacity: 1,
                           transition: {
                           duration: 1,
                            },
                           },
                           }}
                           initial="offscreen" // 初期表示はoffscreen
                           whileInView="onscreen" // 画面内に入ったらonscreen
                           viewport={{ once: false, amount: 0 }}
                        className='homeServiceDetail2'>そして、そんな人材の個性とアイディア、時間を尊重し、安心して働ける職場の実現を共に目指します。</motion.div>
                        <Link href={'/recruit'} scroll={false}>
                                            <motion.div 
                                                                 variants={{
                                                                    offscreen: { // 画面外の場合のスタイル
                                                                     x: -10,
                                                                    opacity: 0,
                                                                   },
                                                                   onscreen: { // 画面内の場合のスタイル
                                                                   x: 0,
                                                                   opacity: 1,
                                                                   transition: {
                                                                   duration: 1,
                                                                    },
                                                                   },
                                                                   }}
                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                   viewport={{ once: false, amount: 0 }}
                        className="moreSection">
                            <div className="viewMoreContent">
                            <p className='viewMore'>View More</p>
                            <div className="arrow">
                            <svg width={100} height={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 80">
                                <motion.path d="M 20 10 L 60 10 L 45 0 L 60 10" 
                                stroke="#ffffff" 
                                strokeWidth="0.4" 
                                fill="none"
                                variants={svgVariants}
                                initial="start"
                                animate="finished"
                                />
                            </svg>
                            </div>
                            </div>
                        </motion.div>
                    </Link>
                    </div>
                        </div>
                    </div>
    </div>
    </>
  )
}

export default HomeSection;