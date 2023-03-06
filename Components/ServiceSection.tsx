import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';


const ServiceSection = () => {
  return (
    <>
    <Head>
    <title>進徳海運株式会社</title>
            <meta property="og:title" content="進徳海運株式会社" key="title" />
    </Head>
    <div className="serviceContaner">
        <div className='serviceContent'>
            <div className="serviceStoryContaner">
                <div className="serviceStoryContent">
                <div className="serviceStoryTitle">
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
                        className='serviceStoryTitle'>沿革</motion.h1>
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
                </div>
                </div>
            </div>
            <div className="serviceHistoryContainer">
                <div className="serviceHistoryContent">
   
                        <div className='serviceHistory'>
                            <div className="serviceHistoryA">
                                <table>
                                    <tbody>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>1959年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                                進徳海運有限会社設立(資本金500万円) 内航貨物船”進徳丸”(600DWT) 建造
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>1961年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            資本金を1500万円に増資 内航タンカー”進油丸” (250DWT) 建造
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryHead'>1965年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            内外航併用ケミカルタンカー”第七進徳丸”(2,348DWT) 建造
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryHead'>1979年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            所有船を運航する為、東京ケミカルタンカー株式会社を設立
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>1989年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            東京ケミカルタンカー株式会社から撤退
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>2000年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            MR型プロダクトタンカー”SPIRIT EXPRESS”(45,861DWT) 建造
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>2009年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            進徳ホールディング株式会社を設立
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>2013年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            進徳ホールディング株式会社と福萬海運株式会社を吸収合併
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>2015年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            現・代表取締役社長が就任
                                            </motion.td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="serviceHistoryB">
                            <table>
                                    <tbody>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>1959年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            進徳海運株式会社に改組 (資本金 1,000万円)
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>1963年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            “進油丸”をケミカルタンカー(558DWT)へ改造
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>1973年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            中古船運用の為、福萬海運株式会社を設立
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>1986年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            船舶便宣置籍の為、SHINTOKU PANAMA S.A.を設立
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>1996年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            ダブルハル構造・ステンレスタンク搭載のケミカルタンカー”SHINTOKU”(18,523DWT)建造
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>2002年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            船舶管理会社SHINTOKU MARINE CO., LTD.(韓国)を設立
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>2012年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            外航バルクキャリア”CORAL OPAL”(78,000DWT) 建造
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>2014年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            SHINTOKU MARINE CO., LTD.全株を売却
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                            className='serviceHistoryHead'>2019年</motion.td>
                                        </tr>
                                        <tr>
                                            <motion.td 
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
                                                                                                   delay:0.1
                                                                                                    },
                                                                                                   },
                                                                                                   }}
                                                                                                   initial="offscreen" // 初期表示はoffscreen
                                                                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                                                                   viewport={{ once: false, amount: 0 }}
                                            className='serviceHistoryBody'>
                                            定期用船5隻、裸傭船6隻(合計11隻)を所有
                                            </motion.td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryHeadEmpty'>X</td>
                                        </tr>
                                        <tr>
                                            <td className='serviceHistoryBodyEmpty'>
                                                X
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                    </div>
                        <motion.div className="verticalWave1"
                    variants={{
                     offscreen: { // 画面外の場合のスタイル
                    opacity: 0,
                    },
                    onscreen: { // 画面内の場合のスタイル
                    opacity: 0.6,
                    transition: {
                    duration: 4,
                     },
                    },
                    }}
                    initial="offscreen" // 初期表示はoffscreen
                     whileInView="onscreen" // 画面内に入ったらonscreen
                    viewport={{ once: false, amount: 0 }}
                        >
                        <Image src={'/verticalwave1.svg'} alt={'verticalwave1'} width={350} height={2500}></Image>
                        </motion.div>
                </div>
            </div>
                <div className="serviceShintokuContainer">
                    <div className="serviceShintokuContent">
                    <div className="serviceShintokuTitleContent">
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
                                                   duration: 0.5,
                                                    },
                                                   },
                                                   }}
                                                   initial="offscreen" // 初期表示はoffscreen
                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                   viewport={{ once: false, amount: 0 }}
                        className='serviceShintokuTitle'>サービス</motion.h1>
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
                    <div >
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
                className="serviceShintokuSubTitle">船は、私たちの娘です。</motion.h1>
            </div>
            <div className="serviceShintokuSubWord">
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
                className="serviceShintokuSubWord1">当社は、ステンレスタンクを保有するケミカルタンカーを主軸に、メタノール専用船・プロダクト船・ばら積み貨物船(バルクキャリアー)といった船隊を有しています。</motion.p>
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
                className="serviceShintokuSubWord2">全世界に広がる航路で、石油化学製品・ガソリン・軽油・石炭・鉱石などの輸送に従事・活躍しています。</motion.p>
            </div>
            <div className="serviceHelloTitleContent">
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
                                                   duration: 0.5,
                                                    },
                                                   },
                                                   }}
                                                   initial="offscreen" // 初期表示はoffscreen
                                                   whileInView="onscreen" // 画面内に入ったらonscreen
                                                   viewport={{ once: false, amount: 0 }}
                        className='serviceHelloTitle'>ご挨拶</motion.h1>
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
                    className="serviceHelloPohoto">
                    <Image src={'/shintokuHello.JPG'} alt={'ShintokuHello'} width={1200} height={800}></Image>
                    </motion.div>
                    <div >
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
                className="serviceShintokuHelloTitle">代表取締役社長　佐川　明正</motion.h1>
            </div>
            <div className="serviceShintokuHelloSubWord">
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
                className="serviceShintokuHelloSubWord1"> 進徳海運株式会社は、1958年設立、広島県東広島市に事務所を構え、「船主業」として、船舶の保有・保全管理をしている会社です。</motion.p>
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
                className="serviceShintokuHelloSubWord2">特に「ケミカル船」(石油化学製品運搬船)を基軸に置き、北極南極を除く全世界の海上物流における縁の下の力持ちとして船屋を営んでいます。</motion.p>
            </div>
            <div >
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
                className="serviceShintokuHelloSubTitle">なぜケミカルなのか？</motion.h1>
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
                className="serviceWhy"></motion.p>
            </div>
            <div className="serviceShintokuHelloSubWord">
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
                className="serviceShintokuHelloSubWord1">TVやパソコン、家庭用品などに使われているプラスチック、シャツやセーターなどに使われている合成繊維、タイヤ、ジョギングシューズなどに使われている合成ゴムなど、日常の生活に欠かすことの出来ないモノを生み出す原料であり、代替となる原料は今日においてもありません。</motion.p>
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
                className="serviceShintokuHelloSubWord2"> ケミカル船は、危険物質でもある化学製品を運搬するため高度なレベルの運航管理が求められますが、当社としては60年超の経験とノウハウをもって上記の様な需要が絶えることのが無いケミカルを運ぶ船舶に注力しております。</motion.p>
            </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default ServiceSection;