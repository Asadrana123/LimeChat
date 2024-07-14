import React from 'react'
import HeroSection from '../../Components/HomeComponents/HeroSection/HeroSection'
import Features from '../../Components/HomeComponents/Features/Features'
function Home() {
  return (
    <>
         <HeroSection/> 
         <Features
          subtitle={"GPT-Powered support"}
          imgSrc={"https://cdn.prod.website-files.com/65a7d71f66faf59e3ec83095/66262efc0d47046571b0cff7_1-p-500.webp"}
          title={"Automate queries and surpass agents with GPT-powered support"}
          desc={"Revolutionize your e-commerce support with the world's first GPT bot. Solve 90% of inquiries instantly. Transform support from a cost center into a revenue generator with Level-3 AI. Embrace swift, scalable solutions that drive real results."}
         />
         <Features
         subtitle={"Commerce Journey"}
         imgSrc={"https://cdn.prod.website-files.com/65a7d71f66faf59e3ec83095/66262efc47005b2583b39ff7_2-p-500.webp"}
         title={"Unlock a new revenue stream with WhatsApp"}
         desc={"Capture users dropping off from QR codes, ads, and website product pages and bring them to WhatsApp. Make it super easy for them to buy with a seamless WhatsApp commerce journey. Collect first-party data and nurture them until they are ready to buy."}
         />
    </>
  )
}

export default Home;