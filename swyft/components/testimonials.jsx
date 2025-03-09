"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";

import Lenis from "@studio-freight/react-lenis";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/landing";



const TestimonialCarousel = () => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 400; // Adjust scroll speed
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 400;
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-yellow-100 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-title gradient">
              Fun things people are <br /> saying about us
            </h2>
          </div>
          <p className="text-gray-500 mt-2">
            Our customers rave about us. Join the conversation and experience
            excellence firsthand.
          </p>
        </div>

        {/* Carousel */}
        <Lenis root>
          <div
            ref={sliderRef}
            className="flex overflow-x-auto space-x-6 scrollbar-hide snap-x scroll-smooth"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[90%] md:min-w-[60%] bg-white rounded-lg p-6 shadow-md"
              >
                <div className="relative">
                <Quote className="absolute  top-1 bottom-4 text-orange-500 text-3xl" />
                  <p className="text-1xl md:text-2xl font-medium text-black pt-6 pb-3">
                    {testimonial.quote}
                  </p>
                  <Quote className="absolute right-4 bottom-4 text-orange-500 text-3xl" />
                </div>
                {/* Profile */}
                <div className="flex items-center mt-8 border-t pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border"
                  />
                  <div className="flex flex-col ">
                  <p className="ml-4 text-lg font-semibold gradient-title gradient">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 ml-4 max-w-sm">
                    {testimonial.role}
                </p>                
                </div>
                  
                </div>
                
              </div>
            ))}
          </div>
        </Lenis>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-6 gap-4">
          <Button onClick={handlePrev} variant="secondary" className="p-3">
            <ArrowLeft />
          </Button>
          <Button onClick={handleNext} className="p-3 bg-orange-500">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
