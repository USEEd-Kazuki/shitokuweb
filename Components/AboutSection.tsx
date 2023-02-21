import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
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
   <div className="aboutContainer">
        <div className="aboutContent">
                <div className="aboutDeatilTitle">
                        <motion.h1 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            opacity: 0,
                           },
                           onscreen: { // 画面内の場合のスタイル
                           opacity: 1,
                           transition: {
                           duration: 0.5,
                            },
                           },
                           }}
                           initial="offscreen" // 初期表示はoffscreen
                           whileInView="onscreen" // 画面内に入ったらonscreen
                           viewport={{ once: false, amount: 0 }}
                        className='aboutDetailTitle'>会社概要</motion.h1>
                            <motion.div 
                            variants={{
                                offscreen: { // 画面外の場合のスタイル
                                opacity: 0,
                               },
                               onscreen: { // 画面内の場合のスタイル
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
                </div>
                <div className="aboutDeatilContent">
                    <div className="aboutDeatilName">
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
                                                       duration: 1,
                                                        },
                                                       },
                                                       }}
                                                       initial="offscreen" // 初期表示はoffscreen
                                                       whileInView="onscreen" // 画面内に入ったらonscreen
                                                       viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName1'>商号</motion.h1>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName2'>進徳海運株式会社</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName3'>SHINTOKU KAIUN CO., LTD.</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutBorderDetail'></motion.p>
                    </div>
                    <div className="aboutDeatilName">
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName1'>住所</motion.h1>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName2'>〒 739-0024</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName3'>広島県東広島市 西条町御薗宇6200番地1</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutBorderDetail'></motion.p>
                    </div>
                    <div className="aboutDeatilName">
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName1'>代表取締役</motion.h1>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName2'>佐川　明正</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName3'>SAGAWA AKIMASA</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutBorderDetail'></motion.p>
                    </div>
                    <div className="aboutDeatilName">
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName1'>創業</motion.h1>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName3'>1958年 9月 24日</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutBorderDetail'></motion.p>
                    </div>
                    <div className="aboutDeatilName">
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName1'>TEL</motion.h1>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName3'>082-423-1958</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutBorderDetail'></motion.p>
                    </div>
                    <div className="aboutDeatilName">
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName1'>MAIL</motion.h1>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName3'>toiawase@shintokukk.co.jp</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutBorderDetail'></motion.p>
                    </div>
                    <div className="aboutDeatilName">
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName1'>主要取引銀行</motion.h1>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName3'>商工組合中央金庫、広島銀行、福岡銀行、みずほ銀行、三井住友信託銀行、山口銀行（五十音順）</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutBorderDetail'></motion.p>
                    </div>
                    <div className="aboutDeatilName">
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName1'>資本金</motion.h1>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName3'>15,000,000円</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutBorderDetail'></motion.p>
                    </div>
                    <div className="aboutDeatilName">
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName1'>主要業務</motion.h1>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName3'>外航海運業、内航海運業</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutBorderDetail'></motion.p>
                    </div>
                    <div className="aboutDeatilName">
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName1'>売上高</motion.h1>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName3'>About 5,000,000.00 USD (2022年)</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutBorderDetail'></motion.p>
                    </div>
                    <div className="aboutDeatilName">
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName1'>従業員数</motion.h1>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutDeatilName3'>15人（2022年）</motion.p>
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
                                                                               duration: 1,
                                                                                },
                                                                               },
                                                                               }}
                                                                               initial="offscreen" // 初期表示はoffscreen
                                                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                                                               viewport={{ once: false, amount: 0 }}
                        className='aboutBorderDetail'></motion.p>
                    </div>
         </div>
         <div className="aboutCompanyAdress">
            <div className="aboutCompanyAdressTitleContent">
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
                className='aboutCompanyAdressTitle'>会社所在</motion.h1>
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
                </div>
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
         className="aboutMap2">
         <Image src={'/map2.svg'} alt={'map2'} width={800} height={800}></Image>
         </motion.div>
         <div className="aboutMa2Deatilcontent">
                                                            <motion.div className="aboutMap2Detail"
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
                                                            >
                                                                <div className='shintokuFlag'>
                                                                <Image src={'/shintokuLogo.svg'} alt={'shintokuLogo'} width={100} height={100}></Image>
                                                                </div>
                                                                <h1 className='aboutMap2DetailName1'>SHINTOKU KAIUN CO., LTD.</h1>
                                                                <h1 className='aboutMap2DetailName2'>〒739-0024</h1>
                                                                <h1 className='aboutMap2DetailName3'>広島県 東広島市 西条町御薗宇６２００−１</h1>
                                                            </motion.div>
         </div>
         <div className="aboutCompanyMap">
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
            className='aboutCompanyMapMainTitle'>組織図</motion.h1>
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
            className="wave4">
                <Image src={'/wave4.svg'} alt={'wave4'} width={500} height={500}></Image>
            </motion.div>
            <div className="aboutCompanyMemberMap">
                <div className="aboutCompanyMap1">
                    <div className="aboutCompanyMapTitle">
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
                        >経営全般</motion.h1>
                        <motion.p className="aboutCompanyLine"
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
                        ></motion.p>
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
                    className="aboutCompanyMapName">取締役会長 佐川文明</motion.div>
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
                    className="aboutCompanyMapName">代表取締役社長 佐川明正</motion.div>
                </div>
                <div className="aboutCompanyMap2">
                    <div className="aboutCompanyMapTitle">
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
                        >財務・経理・総務</motion.h1>
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
                        className="aboutCompanyLine"></motion.p>
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
                    className="aboutCompanyMapName">常務取締役 佐川真也</motion.div>
                </div>
                <div className="aboutCompanyMap3">
                    <div className="aboutCompanyMapTitle">
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
                        >営業・経営企画</motion.h1>
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
                        className="aboutCompanyLine"></motion.p>
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
                    className="aboutCompanyMapName">専務取締役 柏原智</motion.div>
                </div>
                <div className="aboutCompanyMap4">
                    <div className="aboutCompanyMapTitle">
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
                        >船舶管理</motion.h1>
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
                        className="aboutCompanyLine"></motion.p>
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
                    className="aboutCompanyMapName">部長 小川克彦</motion.div>
                </div>
                <div className="aboutCompanyMap5">
                    <div className="aboutCompanyMapTitle">
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
                        >外部アドバイザー</motion.h1>
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
                        className="aboutCompanyLine"></motion.p>
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
                    className="aboutCompanyMapName">木原知巳</motion.div>
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
                    className="aboutCompanyMapName">飯塚俊郎</motion.div>
                </div>
                <div className="aboutCompanyMap6">
                    <div className="aboutCompanyMapTitle">
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
                        >監査役</motion.h1>
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
                        className="aboutCompanyLine"></motion.p>
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
                    className="aboutCompanyMapName">佐川誠三</motion.div>
                </div>
            </div>
         </div>
         <div className="aboutShintokuInfoContaner">
            <div className="aboutShintokuInfoContent">
            <div className="aboutInfoTitle">
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
                        className='aboutInfoTitle'>進徳海運とは</motion.h1>
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
            </div>
            <div className="aboutShintokuInfoSubTitle">
                <motion.h1
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
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                >日本と海外との架け橋に</motion.h1>
            </div>
            <div className="aboutShintokuInfoSubWord">
                <motion.p 
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
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                className="aboutShintokuInfoSubWord1">私たち「進徳海運」は、創業当時より海上物流の一翼を担う*「船主業」を生業として、日々、船舶の保全管理・法令遵守、安全運航に努め、円滑な運航サービスを提供しています。</motion.p>
                <motion.p 
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
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                className="aboutShintokuInfoSubWord2">創業当時は、主に日本国内を初め東南アジア近海の海上物流に従事する船舶を保有していました。その他、顧客や需要が多様化したため、現在は北南極圏を除く世界各地に向かう船舶を保有しております。</motion.p>
                <motion.p
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
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                className="aboutShintokuInfoSubWord3">当社は、他国間の海上物流に従事する企業として、全社を挙げてサービスの高度化を目指します。</motion.p>
                <motion.p 
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
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                className="aboutShintokuInfoSubWord4">*船の持ち主の意、略式には「船屋」、正式には「船舶貸渡業」</motion.p>
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
         className="aboutInfoPhoto">
         <Image src={'/house1.JPG'} alt={'house'} width={1640} height={1080}></Image>
         </motion.div>
         <div className="aboutShintokuCompanyContaner">
            <div className="aboutShintokuCompanyContetn">
            <div className="aboutShintokuCompanyTitleContent">
                <motion.h1 
                                        variants={{
                                            offscreen: { // 画面外の場合のスタイル
                                            opacity: 0,
                                           },
                                           onscreen: { // 画面内の場合のスタイル
                                           opacity: 1,
                                           transition: {
                                           duration: 0.5,
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                className='aboutShintokuCompanyTitle'>企業として</motion.h1>
                    <motion.div 
                                            variants={{
                                                offscreen: { // 画面外の場合のスタイル
                                                opacity: 0,
                                               },
                                               onscreen: { // 画面内の場合のスタイル
                                               opacity: 1,
                                               transition: {
                                               duration: 0.5,
                                                },
                                               },
                                               }}
                                               initial="offscreen" // 初期表示はoffscreen
                                               whileInView="onscreen" // 画面内に入ったらonscreen
                                               viewport={{ once: false, amount: 0 }}
                    className='wave3'>
                        <Image src={'/wave3.svg'} alt={'wave3'} width={600} height={300}></Image>
                    </motion.div>
                </div>
                <div className="aboutShintokuInfoSubTitle">
                <motion.h1
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
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                >暮らしを運ぶ大動脈</motion.h1>
            </div>
            <div className="aboutShintokuInfoSubWord">
                <motion.p 
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
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                className="aboutShintokuInfoSubWord1">四方を海に囲まれている日本の貿易量は輸出入を合わせて年間9億トン以上に上がりますが、そのうち実に99%以上は「船」が運んでいます。</motion.p>
                <motion.p 
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
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                className="aboutShintokuInfoSubWord2">原材料や工業製品を大量に、しかも低コストで運ぶことができる「船」は、貿易立国ニッポンを縁の下から支えています。</motion.p>
                <motion.p 
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
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                className="aboutShintokuInfoSubWord3">活発な経済活動、そして豊かな生活にはモノの移動が不可欠であり、その物流の根幹を担っているのが「船」なのです。</motion.p>
                <motion.p 
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
                                            },
                                           },
                                           }}
                                           initial="offscreen" // 初期表示はoffscreen
                                           whileInView="onscreen" // 画面内に入ったらonscreen
                                           viewport={{ once: false, amount: 0 }}
                className="aboutShintokuInfoSubWord5">物流の根幹を担っているのが「船」なのです。私たちは、そんな「船」を扱う一企業として、日々の業務へ努め、皆さんの生活を支えます。</motion.p>
            </div>
            </div>
         </div>
    </div>
   </div>
   </>
  )
}

export default AboutSection