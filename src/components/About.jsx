import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
<div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
    <div className='w-1/2 '>
        <h1 className='text-7xl'>Our approach:</h1>
        <button className='flex gap-10 items-center px-10 py-6 bg-zinc-800 mt-10 rounded-full text-white'>Read More
        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
    </div>
    <div className='w-1/2 h-[70vh] rounded-3xl bg-[#7e8d49] '>
    <div className="image-container" style={{ backgroundImage: 'url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '100%', borderRadius: 'inherit' }}></div>
    </div>
</div>
    </div>
  )
}

export default About
