import React from 'react'

const Contact = () => {
  const config={
    email:'msdaktharali@gmail.com'
  }
  return (
    <section id='contact' className='flex flex-col bg-primary px-5 py-20'>
    <div className='flex flex-col items-center  text-white'>
        <h1 className='text-4xl border-b-4 border-secondary font-bold w-[140px] mb-5'>Contact</h1>
        <p>If you want to discuss more in detail,please contact me.</p>
        <p className='py-2'><span className='font-extrabold'>Email:</span>{config.email}</p>
    </div>
</section>
  )
}

export default Contact