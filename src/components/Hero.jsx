import React from 'react';
import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
const Hero = () => {
  const config={
    subtitle:"I'm an aspiring Full Stack Developer",
    social:{
      linkedIn:'https://www.linkedin.com/in/aktharalis/',
      github:'https://github.com/SAktharali'
    }
  }
  return (
<section  className='flex flex-col md:flex-row px-5 py-20 md:py-32 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
     <h1 className='text-white text-5xl font-hero-font'>Hi , <br /> 
     I'm 
     <span className='text-yellow-500'> Aktharali S</span>
     <p className='text-2xl'>{config.subtitle}</p>  
     </h1>
     <div className='flex py-10'>
        <a href={config.social.linkedIn} target='_blank' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
        <a href={config.social.github} target='_blank' className='hover:text-white'><AiOutlineGithub size={40}/></a>
     </div>
    </div>
     <img className='md:w-1/3' src={HeroImg} alt='heroImage' title='heroImage'/>
</section>
  )
}

export default Hero