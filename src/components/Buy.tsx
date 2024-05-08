"use client"
import { motion } from 'framer-motion'
import React from 'react'
import HeroAnimation from './HeroAnimation'

const Buy = () => {
    const wrapper = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                staggerChildren:0.25,
            }
        }
    }

    const list = {
        hidden:{opacity:0, x:-100},
        visible:{
            opacity:1,
            x:0,
            transition:{duration:0.5 , ease:[0.455, 0.03, 0.515, 0.955], delay:1}
        }
    }
    const container = {
        visible:{
            transition:{
                staggerChildren:0.025
            }
        }
    }

    
  return (
    <section className='bg-[#000000e4]  min-h-screen'>
        <div className='flex flex-col gap-7 items-center justify-center py-20 relative'>
            <motion.h1 initial='hidden' whileInView="visible" variants={container} className='text-white font-semibold'>
                <HeroAnimation text="BE CLOSER." className='font-bold text-4xl md:text-7xl text-white text-center' />
            </motion.h1>
            <motion.img whileHover={{scale:1.4, rotate:15}} transition={{duration:0.7, ease:[0.9, 0.2, 0.5, 0.9]}} src="./jbl3.png" alt="product" className='w-auto h-[33rem] drop-shadow-[500px] z-40'/>
            
            <div className='flex flex-1 absolute'>
                <p className=' text-5xl md:text-[11rem] text-white opacity-20'>SUB WOOFER 3</p>
            </div>
            <motion.button className='w-20 h-10 bg-blue-500 rounded-full text-white z-50'>BUY</motion.button>
        </div>
    </section>
  )
}

export default Buy