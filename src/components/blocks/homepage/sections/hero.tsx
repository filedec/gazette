'use client';
import { ScrollArea, ScrollBar } from '@/components/ui';
import Link from 'next/link';
import React from 'react';

export const Hero = () => {
  return (
    <section className='flex w-full flex-col items-start justify-start pt-20'>
      <div className='container text-center pt-4 md:pt-10'>
        <h2 className='text-lg sm:text-xl text-primary text-pretty font-semibold'>
          Explore from a World of Knowledge.
        </h2>

        <div className='relative flex h-8 justify-center mt-8 '>
          <div className='absolute h-8 w-12 right-0 -top-1 bg-gradient-to-l from-background z-10 sm:hidden'></div>
          <ScrollArea>
            <nav className='text-sm sm:text-base font-light flex gap-6 items-center text-muted-foreground pr-12 md:pr-0'>
              <Link
                href={'/'}
                className='underline underline-offset-8  hover:text-primary ease-in-out duration-300'>
                Trending
              </Link>
              <Link
                href={'/features'}
                className=' hover:text-primary ease-in-out duration-300'>
                Courses
              </Link>
              <Link
                href={'/blog'}
                className=' hover:text-primary ease-in-out duration-300'>
                Articles
              </Link>
              <Link
                href={'/about'}
                className=' hover:text-primary ease-in-out duration-300'>
                Communities
              </Link>
              <Link
                href={'/about'}
                className=' hover:text-primary ease-in-out duration-300'>
                Saved
              </Link>
            </nav>
            <ScrollBar orientation='horizontal' />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};
