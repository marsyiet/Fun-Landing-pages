'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import HeroAnimation from './HeroAnimation'

const About = () => {
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
    <section className='bg-[#000000e4] min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-20'>
            <div className='p-9 flex flex-col gap-10 justify-center'> 
                <motion.h1 initial='hidden' whileInView="visible" variants={container} className='text-white font-semibold'>
                    <HeroAnimation text="What's" className='font-bold text-4xl md:text-7xl text-white' />
                    <HeroAnimation text="SPEAKER ?" className='font-bold text-4xl md:text-7xl text-white' />
                </motion.h1>
                <motion.p initial={{x:-200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration: 1}} className='font-thin text-lg text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, aut blanditiis! Dolorum illum nobis unde mollitia aperiam, earum ab veritatis ea ipsam dicta sunt corrupti magnam vitae aut fugit provident?</motion.p>
                <motion.div   className='w-[100%] h-[40rem] overflow-hidden bg-black flex'>
                    <motion.img initial={{scale:1.2}} whileInView={{scale:1}} transition={{ duration:1.2 }} src="/jbl3.png" alt='speaker' className='w-auto h-[100rem] object-cover' />
                </motion.div>
            </div>
            <div className='p-9 flex flex-col gap-10 justify-center'> 
                <div className='w-[100%] h-[40rem] overflow-hidden bg-black flex items-center'>
                    <motion.img initial={{scale:1.3}} whileInView={{scale:0.6}} transition={{ duration:1.2 }} src="/jbl3.png" alt='speaker' className='w-auto h-[100rem] object-cover object-center' />
                </div>
                <motion.h1 initial='hidden' whileInView="visible" variants={container} className='text-white font-semibold'>
                    <HeroAnimation text="ALSO." className='font-bold text-4xl md:text-7xl text-white' />
                </motion.h1>
                <motion.p initial={{x:200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration: 1}} className='font-thin text-lg text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, aut blanditiis! Dolorum illum nobis unde mollitia aperiam, earum ab veritatis ea ipsam dicta sunt corrupti magnam vitae aut fugit provident?</motion.p>
            </div>
        </div>
    </section>
  )
}

export default About