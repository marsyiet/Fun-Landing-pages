'use client'
import { delay, motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import HeroAnimation from './HeroAnimation'


const Hero = () => {
    const scrollref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target:scrollref,
        offset:["start end", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 1] , [1, 0.8 , 0.3, 0.2])
    console.log(scale)

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
    <section className='overflow-hidden relative'>
        <motion.video autoPlay muted playsInline={true} initial={{scale:2, rotate:12}} animate={{scale:1, rotate:0}} transition={{ duration:1.5, ease:[0.9, 0.2, 0.7, 0.95]}}  className=' rotate-6 w-[500px]  md:w-[1800px] h-[80vh] md:h-screen object-cover object-center'>
            <source src='./heroVideo.mp4' type='video/mp4' />
        </motion.video>
        <div className='w-full flex flex-wrap gap-7 justify-between items-center absolute p-2 bottom-20 md:bottom-0'>
            <motion.h1 initial='hidden' whileInView='visible' variants={container} className='px-2 text-white font-semibold'>
                <HeroAnimation  text='EXPLORE' className='text-6xl md:text-8xl' />
                <HeroAnimation text='WITH CONFIDENCE.' className='text-3xl md:text-5xl' />
            </motion.h1>
            <motion.button initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:2}} className='z-50 w-20 h-10 bg-blue-500 rounded-full text-white'>BUY</motion.button>
            <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{ duration:1}} className=' max-w-md'>
                <span className='text-2xl font-thin text-white opacity-70'>Unleash your inspiration with the latest util from <span className='font-bold'>SPEAK.</span></span>
            </motion.div>
        </div>
        
    </section>
  )
}

export default Hero