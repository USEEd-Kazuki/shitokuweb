import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const SdgsSection = () => {
  return (
    <>
    <div className="sdgsContainer">
      <div className="sdgsContent">
      <div className="serviceSdgsContainer">
            <div className="serviceSdgsContent">
                <div className="serviceSdgsTitleContainer">
                    <div className="serviceSdgsTitleContent">
                        <motion.div 
                                                                        variants={{
                                                                            offscreen: { // 画面外の場合のスタイル
                                                                            opacity: 0,
                                                                           },
                                                                           onscreen: { // 画面内の場合のスタイル
                                                                           opacity: 1,
                                                                           transition: {
                                                                           duration: 2,
                                                                            },
                                                                           },
                                                                           }}
                                                                           initial="offscreen" // 初期表示はoffscreen
                                                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                                                           viewport={{ once: false, amount: 0 }}
                        className="SdgsTitlePhoto">
                        <Image src={'/SdgsTitlePhoto.JPG'} alt={'SdgsTitlePhoto'} width={600} height={600}></Image>
                        </motion.div>
                        <div className="serviceSdgsSubTitleContainer">
                            <div className="serviceSdgsSubTitleContent">
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
                                className='serviceSdgsSubTitle1'>進徳海運株式会社</motion.h1>
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
                                className='serviceSdgsSubTitle2'>SDGs 宣言</motion.h1>
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
                                className='serviceSdgsSubTitle3'>当社は国連が提唱する「持続可能な開発目標(SDGs)」に賛同し、積極的な取組みを通じて持続可能な社会の実現に貢献してまいります。</motion.p>
                            </div>
                        </div>
                        <div className="serviceSdgsDetailContainer">
                            <div className="serviceSdgsDetailContent">
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
                                className="serviceSdgsDetailTitle">暮らしと産業を支える</motion.h1>
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
                                className='sdgsBorder'></motion.p>
                                <div className="serviceSdgsDetailPhoto">
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}>
                                <Image src={'/9.svg'} alt={'9'} width={254} height={254}></Image>
                                    </motion.div>
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}>
                                <Image src={'/12.svg'} alt={'12'} width={254} height={254}></Image>
                                    </motion.div>
                                </div>
                                <div className="serviceSdgsDetailWord">
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
                                    className="serviceSdgsDetailWord1">海上物流の縁の下の力持ちである船主業を生業として、生活と産業の発展に欠かすことのできない石油化学製品を運搬するケミカル船を主軸に、誠実 かつ良質な海上運輸サービスを提供してまいります。</motion.p>
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
                                                                                       duration: 1,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    className="serviceSdgsDetailWord2">【主な取組み】</motion.h2>
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
                                    className="serviceSdgsDetailWord3">・保全管理・法令順守・安全運航の徹底による円滑な運航サービスの提供</motion.p>
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
                                    className="serviceSdgsDetailWord4">・船舶管理の品質向上と無事故実現への取組み</motion.p>
                                </div>
                            </div>
                            <div className="serviceSdgsDetailContent">
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
                                className="serviceSdgsDetailTitle">環境配慮</motion.h1>
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
                                className='sdgsBorder'></motion.p>
                                <div className="serviceSdgsDetailPhoto">
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}>
                                <Image src={'/11.svg'} alt={'11'} width={254} height={254}></Image>
                                    </motion.div>
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}>
                                <Image src={'/12.svg'} alt={'12'} width={254} height={254}></Image>
                                    </motion.div>
                                </div>
                                <div className="serviceSdgsDetailPhoto">
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    >
                                <Image src={'/13.svg'} alt={'13'} width={254} height={254}></Image>
                                    </motion.div>
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    >
                                <Image src={'/14.svg'} alt={'14'} width={254} height={254}></Image>
                                    </motion.div>
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    >
                                <Image src={'/17.svg'} alt={'17'} width={254} height={254}></Image>
                                    </motion.div>
                                </div>
                                <div className="serviceSdgsDetailWord">
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
                                    className="serviceSdgsDetailWord1">環境規制への的確な対応のもと、省エネルギーの推進など事業活動による環境負荷低減に努め、地球環境の保全に貢献してまいります。</motion.p>
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
                                                                                       duration: 1,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    className="serviceSdgsDetailWord2">【主な取組み】 </motion.h2>
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
                                    className="serviceSdgsDetailWord3">・所有船舶のCO2排出量把握 ・新社屋での再生可能エネルギー活用、LED照明導入 </motion.p>
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
                                    className="serviceSdgsDetailWord4">・クリーンエネルギー、LNGなど次世代燃料の活用</motion.p>
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
                                    className="serviceSdgsDetailWord4">・バラスト水規制、Nox・Sox規制などの各種規制への的確な対応</motion.p>
                                </div>
                            </div>
                            <div className="serviceSdgsDetailContent">
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
                                className="serviceSdgsDetailTitle">従業員と家族を守る</motion.h1>
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
                                className='sdgsBorder'></motion.p>
                                <div className="serviceSdgsDetailPhoto">
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    >
                                <Image src={'/3.svg'} alt={'3'} width={254} height={254}></Image>
                                    </motion.div>
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    >
                                <Image src={'/4.svg'} alt={'4'} width={254} height={254}></Image>
                                    </motion.div>
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    >
                                <Image src={'/8.svg'} alt={'8'} width={254} height={254}></Image>
                                    </motion.div>
                                </div>
                                <div className="serviceSdgsDetailWord">
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
                                    className="serviceSdgsDetailWord1">労働安全衛生徹底のもと、人材育成への取組みと働きやすい職場づくりを通じて、従業員とその家族の生活を守り、ともに成長する企業を目指します。</motion.p>
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
                                                                                       duration: 1,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    className="serviceSdgsDetailWord2">【主な取組み】 </motion.h2>
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
                                    className="serviceSdgsDetailWord3">・社内外の研修・セミナーを活用した人材育成強化</motion.p>
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
                                    className="serviceSdgsDetailWord4">・福利厚生の充実や自己啓発への補助など働きがいをもてる職場環境づくりへの取組み</motion.p>
                                </div>
                            </div>
                            <div className="serviceSdgsDetailContent">
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
                                className="serviceSdgsDetailTitle">社会貢献</motion.h1>
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
                                className='sdgsBorder'></motion.p>
                                <div className="serviceSdgsDetailPhoto">
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    >
                                <Image src={'/8.svg'} alt={'8'} width={254} height={254}></Image>
                                    </motion.div>
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    >
                                <Image src={'/11.svg'} alt={'11'} width={254} height={254}></Image>
                                    </motion.div>
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
                                                                                       duration: 0.5,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    >
                                <Image src={'/12.svg'} alt={'12'} width={254} height={254}></Image>
                                    </motion.div>
                                </div>
                                <div className="serviceSdgsDetailWord">
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
                                    className="serviceSdgsDetailWord1">事業活動を通じた地域経済の活性化への貢献と、社会貢献活動の実践を通じて、持続可能な社会の実現に貢献してまいります。</motion.p>
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
                                                                                       duration: 1,
                                                                                        },
                                                                                       },
                                                                                       }}
                                                                                       initial="offscreen" // 初期表示はoffscreen
                                                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                       viewport={{ once: false, amount: 0 }}
                                    className="serviceSdgsDetailWord2">【主な取組み】 </motion.h2>
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
                                    className="serviceSdgsDetailWord3">・地元人材の積極採用</motion.p>
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
                                    className="serviceSdgsDetailWord4">・赤十字への寄付の継続実施</motion.p>
                                </div>
                            </div>
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
                                                                               duration: 0.5,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                            className="serviceSdgsMainTitlePhoto">
                            <Image src={'/SdgsMainTitle.JPG'} alt={'SdgsMainTitle'} width={1920} height={505}></Image>
                            </motion.div>
                            <div className="serviceAboutSdgs">
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
                                className="serviceAboutSdgsTitle1">SDGsとは？</motion.h1>
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
                                className='sdgsBorder'></motion.p>
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
                                className="serviceAboutSdgsDetail2">Sustainable Development Goals(持続可能な開発目標)の略。持続可能な社会 をつくるために、世界が抱える問題を17の目標と169のターゲットに整理したもの(2015年9月に国連で採択)。</motion.p>
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
                                className="serviceAboutSdgsDetail3">2030年までに、政府、企業、地域社会の あらゆる人が、SDGsを実現するための役割を担っている。</motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default SdgsSection