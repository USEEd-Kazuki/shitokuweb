import React from 'react';
import Image from 'next/image';
import {  motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';


const AboutHero = () => {

  SwiperCore.use([Autoplay])

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
    <section>
        <div className='heroContainer'>
          <div className="heroContent">
          <div className="Suboverlay"></div>
            <div className="heroCloudContent">
              <motion.h1 
                              variants={{
                                offscreen: { // 画面外の場合のスタイル
                                  opacity: 0,
                                },
                                onscreen: { // 画面内の場合のスタイル
                                  opacity: 1,
                                  transition: {
                                    duration: 1.5,
                                    delay:1.75
                                  },
                                },
                              }}
                              initial="offscreen" // 初期表示はoffscreen
                              whileInView="onscreen" // 画面内に入ったらonscreen
                              viewport={{ once: true, amount: 0 }}
              className='heroCloudTitle'>進徳海運</motion.h1>
              <motion.div
                variants={{
                  offscreen: { // 画面外の場合のスタイル
                    opacity: 0,
                  },
                  onscreen: { // 画面内の場合のスタイル
                    opacity: 1,
                    transition: {
                      duration: 1.5,
                      delay:1.5
                    },
                  },
                }}
                initial="offscreen" // 初期表示はoffscreen
                whileInView="onscreen" // 画面内に入ったらonscreen
                viewport={{ once: true, amount: 0 }}
              className="heroCloud">
              <Image src={'/cloud.svg'} alt={'cloud'} width={400} height={200}></Image>
              </motion.div>
            </div>
            <div className="heroMessageContent">
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
                      delay:2.5
                    },
                  },
                }}
                initial="offscreen" // 初期表示はoffscreen
                whileInView="onscreen" // 画面内に入ったらonscreen
                viewport={{ once: true, amount: 0 }}
              className="heroMessageEn">
              <h1 className="AboutheroMessageEn1">About</h1>
              </motion.div>
              <motion.p 
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
                                    delay:2.5,
                                  },
                                },
                              }}
                              initial="offscreen" // 初期表示はoffscreen
                              whileInView="onscreen" // 画面内に入ったらonscreen
                              viewport={{ once: true, amount: 0 }}
              className='verticalLine'></motion.p>
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
                                    duration: 1,
                                    delay:2.5
                                  },
                                },
                              }}
                              initial="offscreen" // 初期表示はoffscreen
                              whileInView="onscreen" // 画面内に入ったらonscreen
                              viewport={{ once: true, amount: 0 }}
              className="heroMessageJp">
              <h1 className="AboutheroMessageJp1">会社概要について</h1>
              </motion.div>
            </div>
          </div>
            <div className="heroShipContent">
              <motion.div 
                              variants={{
                                offscreen: { // 画面外の場合のスタイル
                                  opacity: 0,
                                },
                                onscreen: { // 画面内の場合のスタイル
                                  opacity: 1,
                                  transition: {
                                    duration: 1.5,
                                    delay:1.5
                                  },
                                },
                              }}
                              initial="offscreen" // 初期表示はoffscreen
                              whileInView="onscreen" // 画面内に入ったらonscreen
                              viewport={{ once: true, amount: 0 }}
              className="heroShip">
              <Image src={'/HeroMainWave.svg'} alt={'heroVessel'} width={800} height={400}></Image>
              </motion.div>
            </div>
            {/* Slide */}
            <motion.div className="sliderContent"
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
                <div className='heroSlideShip1'>
            <Image src={'/SlideShip1.jpg'} alt={'SlideShip1'}  width={1360} height={854} className='heroSlideShip1'></Image>
                </div>
                <div className="mobileShip1">
            <Image src={'/mobileSlideShip1.jpg'} alt={'mobileSlideShip'} width={360} height={896} className='mobileShip1'></Image>
                </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className='mobileSlideShip'>
              <div className="heroSlideShip1">
            <Image src={'/SlideShip2.JPG'} alt={'SlideShip1'}  width={1360} height={854}></Image>
              </div>
              <div className="mobileShip1">
            <Image src={'/mobileSlideShip2.jpg'} alt={'mobileSlideShip'} width={360} height={896} className='mobileShip1'></Image>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='mobileSlideShip'>
              <div className="heroSlideShip1">
            <Image src={'/SlideShip3.JPG'} alt={'SlideShip1'}  width={1360} height={854}></Image>
              </div>
            <div className="mobileShip1">
            <Image src={'/mobileSlideShip3.jpg'} alt={'mobileSlideShip'} width={360} height={896} className='mobileShip1'></Image>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='mobileSlideShip'>
              <div className="heroSlideShip1">
            <Image src={'/SlideShip4.JPG'} alt={'SlideShip1'}  width={1360} height={854}></Image>
              </div>
            <div className="mobileShip1">
            <Image src={'/mobileSlideShip4.jpg'} alt={'mobileSlideShip'} width={360} height={896} className='mobileShip1'></Image>
                </div>
              </div>
            </SwiperSlide>
            </Swiper>
            </motion.div>
            {/* Scroll */}
            <motion.div className="scrollContent"
                                                      variants={{
                                                        offscreen: { // 画面外の場合のスタイル
                                                          opacity: 0,
                                                        },
                                                        onscreen: { // 画面内の場合のスタイル
                                                          opacity: 1,
                                                          transition: {
                                                            duration: 1.5,
                                                            delay:2.5
                                                          },
                                                        },
                                                      }}
                                                      initial="offscreen" // 初期表示はoffscreen
                                                      whileInView="onscreen" // 画面内に入ったらonscreen
                                                      viewport={{ once: true, amount: 0 }}
            >
            <svg width={300} height={200} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 80">
            <motion.path d="M 0 0 L 0 40 L 80 40 L 80 80 L 90 65" 
              stroke="#F8F5F0" 
              strokeWidth="0.5" 
              fill="none"
              variants={svgVariants}
              initial="start"
              animate="finished"
              />
            </svg>
            </motion.div>
            {/*Video */}
            <div className='movieContent'
            >
                <video className='HeroMovie' src="/Herowave.mp4"  playsInline autoPlay loop muted />
            </div>
        </div>
    </section>
  )
}

export default AboutHero;