"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AppDispatch } from '@/redux/store';
import { TestimonialState } from '@/types/testimonials';
import { getAllTestimonials } from '@/redux/api/testimonials/testimonialSlice';

const ReviewSlider: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: testimonials, loading, error } = useSelector((state: { testimonials: TestimonialState }) => state.testimonials);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 3, // Default: show 3 slides
      breakpoints: {
        '(max-width: 767px)': {
          slidesToScroll: 1, // Show 1 slide on mobile
          align: 'center', // Center the single slide
        },
      },
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    dispatch(getAllTestimonials());
  }, [dispatch]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, testimonials]);

  if (loading) {
    return <div className="text-center">Loading testimonials...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  if (testimonials.length === 0) {
    return <div className="text-center">No testimonials available.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-[1288px] mx-auto mb-12 md:mb-14 relative">
      <div className="relative w-full flex flex-col md:flex-row md:items-center md:justify-center">
        <h2 className="text-[22px] poppins-medium leading-8 lg:leading-12 text-center md:text-left">
          Customers Feedback
        </h2>
        <a
          href="/b/customer-reviews"
          className="text-sm text-gray-700 hover:text-gray-800 underline text-center md:text-right mt-2 md:mt-0 md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2"
        >
          View All Reviews
        </a>
      </div>

      <div className="w-full px-5 md:px-9 lg:px-10 relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_calc(100%/3)] max-[767px]:flex-[0_0_100%] px-2 min-w-0"
              >
                <div className="flex flex-col items-center bg-[#FAFAFB] p-4 min-h-[372px]">
                  <a href={`/p/${testimonial.id}`} className="no-underline">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.title}
                      width={100}
                      height={100}
                      className="border border-gray-400 object-cover max-[767px]:max-w-full"
                      loading="lazy"
                      sizes="(max-width: 767px) 100vw, 100px"
                    />
                  </a>
                  <a
                    href={`/p/${testimonial.id}`}
                    className="text-center no-underline hover:no-underline my-2"
                  >
                    <span className="text-lg font-medium line-clamp-1 h-7">
                      {testimonial.title}
                    </span>
                  </a>
                  <div className="flex gap-1">
                    {Array.from({ length: parseInt(testimonial.rating) }).map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-center mt-6 text-sm line-clamp-2">
                    {testimonial.description}
                  </div>
                  <span className="text-sm underline cursor-pointer mt-2">
                    Read more
                  </span>
                  <p className="text-sm font-medium mt-4 lg:mt-6">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{new Date(testimonial.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-1.5 border border-grayscale-800 outline-none focus:outline-none slick-prev shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] border-0"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-1.5 border border-grayscale-800 outline-none focus:outline-none slick-next shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] border-0"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;