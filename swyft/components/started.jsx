
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';


const Started  = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-24">
        <div className="pb-20 px-6 mt-20">
        
        {/* Left Section (Text) */}
        <div className="conatiner mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight gradient-title gradient">
            Ready to Start your Journey to Financial Freedom?
          </h1>
          
  
          {/* Download Buttons */}
          <div className="justify-center pt-4">
              <Link href="/dashboard">
              <Button variant="def" size="lg" className="px-8 ">Get Started</Button>
              </Link>
          </div>
        </div>
  
  
      </div>
    </section>
  )
}

export default Started; 
