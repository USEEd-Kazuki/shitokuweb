import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

import 'swiper/css';

const RecruitSection = () => {


    function SafeEmailLink() {
        const user = "toiawase"; 
        const domain = "shintokukk.co.jp"; 
        const mailto = "mailto:" + user + "@" + domain; 
      
        return (
          <a className='blackMailNumber' href={mailto}>{user}@{domain}</a>
        );
      }

  return (
   <>
   {/*    
   <div className="recruitVideo">
        <div className="recruitOverlay"></div>
            <motion.div
                                 variants={{
                                    offscreen: { // 画面外の場合のスタイル
                                     y: 100,
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
                >
                <video className='recruitMovie' src="/recruitHome.mp4"  playsInline autoPlay loop muted />
                </motion.div>
   </div>
   */}
   <div className="recruitContainer">
    <div className="recruitContent">
        <div className="recruitTitleContainer">
            <div className="recruitTitleContent">
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
                                                   duration: 0.5,
                                                    },
                                                   },
                                                   }}
                                                   initial="offscreen" // 初期表示はoffscreen
                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                   viewport={{ once: false, amount: 0 }}
                        className='recruitTitle'>採用</motion.h1>
                    <motion.div 
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
                    className='wave2'>
                        <Image src={'/wave2.svg'} alt={'wave2'} width={600} height={300}></Image>
                    </motion.div>
                    <div className="recruitSubTitleContent">
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
                        className="recruitSubTitle1">進徳海運は、</motion.h1>
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
                        className="recruitSubTitle2">従業員及び、その家族の生活を守ります。</motion.h1>
                        <motion.p 
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
                        className="recruitWord1">船主である進徳海運は、あくまでも「サービス会社」です。傲慢にならず、常に誇りを持って「顧客満足を高める」ことを念頭としています。</motion.p>
                        <motion.p 
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
                        className="recruitWord2">私たちは、顧客満足度の向上を目指して、自ら高い志を創り出し、機会によって自らを変える人材を求めます。</motion.p>
                        <motion.p 
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
                        className="recruitWord3">そして、そんな人材の個性とアイディア、時間を尊重し、安心して働ける職場の実現を共に目指します。</motion.p>
                        <motion.p 
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
                        className="recruitWord4">誠実で良質な海上運輸サービス提供に向けて、共に挑戦できる仲間を心よりお待ちしております。</motion.p>
                    </div>
                                {/* Slide */}
            <motion.div className="RecruitSliderContent"
                                                      variants={{
                                                        offscreen: { // 画面外の場合のスタイル
                                                          opacity: 0,
                                                        },
                                                        onscreen: { // 画面内の場合のスタイル
                                                          opacity: 1,
                                                          transition: {
                                                            duration:1.5,
                                                            delay:0.5
                                                          },
                                                        },
                                                      }}
                                                      initial="offscreen" // 初期表示はoffscreen
                                                      whileInView="onscreen" // 画面内に入ったらonscreen
                                                      viewport={{ once: true, amount: 0 }}
            >
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay:3000
              }}
            >
            <SwiperSlide>
              <div >
            <Image src={'/RecruitSlide1.JPG'} alt={'SlideShip1'} width={1360} height={854}></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
            <Image src={'/RecruitSlide2.JPG'} alt={'SlideShip1'} width={1360} height={854}></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
            <Image src={'/RecruitSlide3.JPG'} alt={'SlideShip1'} width={1360} height={854}></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
            <Image src={'/RecruitSlide4.JPG'} alt={'SlideShip1'} width={1360} height={854}></Image>
              </div>
            </SwiperSlide>
            </Swiper>
            </motion.div>

            <div className="recruitDetailContainer">
                <div className="recruitDetailContent">
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
                    className="recruitDetailTitle">営業職</motion.h1>
                    <div className="recruitDeatilall">
                    <div className="recruitDetailSub1">
                        <div className="recruitDetailSub">
                            <div className="recruitDeatilWrapper">
                            <div className="recruitDetailSubTitle">
                            <motion.h2 
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
                            className="recruitDetailSubTitle1">職務内容 : </motion.h2>
                            <motion.p 
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
                            className="recruitBoder"></motion.p>
                            </div>
                            <div className="recruitdeatilSubWord">
                                <motion.p 
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
                                className="recruitdeatilSubWord1">・新規船舶案件の確立</motion.p>
                                <motion.p 
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
                                className="recruitdeatilSubWord2">・用船者、造船所、商社、シップブローカー等への営業</motion.p>
                            </div>
                            </div>
                            <div className="recruitDeatilWrapper">
                            <div className="recruitDetailSubTitle">
                            <motion.h2 
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
                            className="recruitDetailSubTitle1">応募資格 : </motion.h2>
                                                        <motion.p 
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
                            className="recruitBoder"></motion.p>
                            </div>
                            <div className="recruitdeatilSubWord">
                                <motion.p 
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
                                className="recruitdeatilSubWord1">TOEIC 600点以上又は同等の能力</motion.p>
                            </div>
                            </div>
                            <div className="recruitDeatilWrapper">
                            <div className="recruitDetailSubTitle">
                            <motion.h2 
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
                            className="recruitDetailSubTitle1">スキル・経験 : </motion.h2>
                                                        <motion.p 
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
                            className="recruitBoder"></motion.p>
                            </div>
                            <div className="recruitdeatilSubWord">
                                <motion.p 
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
                                className="recruitdeatilSubWord1">パソコン操作(Word、Excel、メール送受信など)</motion.p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="recruitDeatilSub2">
                    <div className="recruitDetailSub">
                    <div className="recruitDeatilWrapper">
                            <div className="recruitDetailSubTitle">
                            <motion.h2 
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
                            className="recruitDetailSubTitle1">給与・待遇 : </motion.h2>
                                                        <motion.p 
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
                            className="recruitBoder"></motion.p>
                            </div>
                            <div className="recruitdeatilSubWord">
                                <motion.p 
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
                                className="recruitdeatilSubWord1">当社規定による</motion.p>
                            </div>
                    </div>
                    <div className="recruitDeatilWrapper">
                            <div className="recruitDetailSubTitle">
                            <motion.h2 
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
                            className="recruitDetailSubTitle1">休日・休暇 : </motion.h2>
                                                        <motion.p 
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
                            className="recruitBoder"></motion.p>
                            </div>
                            <div className="recruitdeatilSubWord">
                                <motion.p 
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
                                className="recruitdeatilSubWord1">休日 / 土日祝日</motion.p>
                                <motion.p 
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
                                className="recruitdeatilSubWord2">週休二日制 / 毎週・年末年始、夏季休暇 </motion.p>
                                <motion.p 
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
                                className="recruitdeatilSubWord3">年間休日数 / 120日 </motion.p>
                            </div>
                    </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="recruitDetailContent">
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
                    className="recruitDetailTitle">船舶管理職</motion.h1>
                    <div className="recruitDeatilall">
                    <div className="recruitDetailSub1">
                        <div className="recruitDetailSub">
                            <div className="recruitDeatilWrapper">
                            <div className="recruitDetailSubTitle">
                            <motion.h2 
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
                            className="recruitDetailSubTitle1">職務内容 : </motion.h2>
                                                        <motion.p 
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
                            className="recruitBoder"></motion.p>
                            </div>
                            <div className="recruitdeatilSubWord">
                                <motion.p 
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
                                className="recruitdeatilSubWord1">・船舶(タンカー)の保全、管理</motion.p>
                                <motion.p 
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
                                className="recruitdeatilSubWord2">・海外、国内のドックヤード、港への訪船</motion.p>
                                <motion.p 
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
                                className="recruitdeatilSubWord2">・修繕ドック時の監督業務</motion.p>
                                <motion.p 
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
                                className="recruitdeatilSubWord2">・建造監督</motion.p>
                                <motion.p 
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
                                className="recruitdeatilSubWord2">・船舶修繕費、消耗品室等のコスト管理</motion.p>
                            </div>
                            </div>
                            <div className="recruitDeatilWrapper">
                            <div className="recruitDetailSubTitle">
                            <motion.h2 
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
                            className="recruitDetailSubTitle1">応募資格 : </motion.h2>
                                                        <motion.p 
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
                            className="recruitBoder"></motion.p>
                            </div>
                            <div className="recruitdeatilSubWord">
                                <motion.p 
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
                                className="recruitdeatilSubWord1">TOEIC 600点以上又は同等の能力</motion.p>
                            </div>
                            </div>
                            <div className="recruitDeatilWrapper">
                            <div className="recruitDetailSubTitle">
                            <motion.h2 
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
                            className="recruitDetailSubTitle1">スキル・経験 : </motion.h2>
                                                        <motion.p 
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
                            className="recruitBoder"></motion.p>
                            </div>
                            <div className="recruitdeatilSubWord">
                                <motion.p 
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
                                className="recruitdeatilSubWord1">パソコン操作(Word、Excel、メール送受信など)</motion.p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="recruitDeatilSub2">
                    <div className="recruitDetailSub">
                    <div className="recruitDeatilWrapper">
                            <div className="recruitDetailSubTitle">
                            <motion.h2 
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
                            className="recruitDetailSubTitle1">給与・待遇 : </motion.h2>
                                                        <motion.p 
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
                            className="recruitBoder"></motion.p>
                            </div>
                            <div className="recruitdeatilSubWord">
                                <motion.p 
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
                                className="recruitdeatilSubWord1">当社規定による</motion.p>
                            </div>
                    </div>
                    <div className="recruitDeatilWrapper">
                            <div className="recruitDetailSubTitle">
                            <motion.h2 
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
                            className="recruitDetailSubTitle1">休日・休暇 : </motion.h2>
                                                        <motion.p 
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
                            className="recruitBoder"></motion.p>
                            </div>
                            <div className="recruitdeatilSubWord">
                                <motion.p 
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
                                className="recruitdeatilSubWord1">休日 / 土日祝日</motion.p>
                                <motion.p 
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
                                className="recruitdeatilSubWord2">週休二日制 / 毎週・年末年始、夏季休暇  </motion.p>
                                <motion.p 
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
                                className="recruitdeatilSubWord3">年間休日数 / 120日 </motion.p>
                            </div>
                    </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="applyContent">
                    <motion.div className='apply'
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
                        <h1 className='applyTitle'>応募方法</h1>
                        <div className='applyDeatil'>履歴書（写真貼付・勤務開始可能日を明記）、職務経歴書を下記宛先に郵送又は、メールにてお送りください。（確認可能なメールアドレスを必ず記載してください）</div>
                        <div className='applyDeatil1'>※お送りいただいた履歴書等の書類は返却いたしません。予めご了承ください。</div>
                        <div className='applyDeatil2'>※ご応募いただきました個人情報は、厳重にお取り扱いいたします。本採用以外の目的で使用することはございません。</div>
                        <h1 className='applyTitle1'>問い合わせ先</h1>
                        <div className='applyDeatil4'>進徳海運　株式会社</div>
                        <div className='applyDeatil5'>住所 : 〒739-0024 広島県東広島市 西条町御薗宇6200番地1</div>
                        <div className='applyDeatil6'>TEL : 082-423-1958</div>
                        <div className='applyDeatil7'>Mail : <SafeEmailLink /></div>
                    </motion.div>
                </div>
            </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default RecruitSection;