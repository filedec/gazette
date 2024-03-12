import { cn } from '@/lib/utils';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui';

export const ArticlePreview = ({
  className,
  size = 'lg',
}: {
  className?: string;
  size?: 'sm' | 'lg';
}) => {
  return (
    <article id='article' className={cn(' w-full h-fit', className)}>
      {size === 'lg' && (
        <time
          dateTime='2020-03-16'
          className='text-sm font-light text-muted-foreground'>
          Mar 16, 2020
        </time>
      )}
      <div className='flex flex-wrap-reverse md:flex-nowrap gap-4 w-full mt-4'>
        <div
          className={cn(
            'w-full md:w-[calc(100%-17rem)]',
            size === 'sm' && 'md:w-[calc(100%-9rem)]'
          )}>
          <h2
            id='featured-post'
            className={cn(
              'font-semibold text-4xl',
              size === 'sm' && 'text-2xl line-clamp-1'
            )}>
            We’re incredibly proud to announce we have secured $75m in Series B
          </h2>
          <p
            className={cn(
              'text-lg text-muted-foreground mt-4 line-clamp-4 lg:line-clamp-6 font-light',
              size === 'sm' && 'mt-1 text-base line-clamp-2 lg:line-clamp-3'
            )}>
            Libero neque aenean tincidunt nec consequat tempor. Viverra odio id
            velit adipiscing id. Nisi vestibulum orci eget bibendum dictum.
            Velit viverra posuere vulputate volutpat nunc. Nunc netus sit
            faucibus. Libero neque aenean tincidunt nec consequat tempor.
            Viverra odio id velit adipiscing id. Nisi vestibulum orci eget
            bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc
            netus sit faucibus. Libero neque aenean tincidunt nec consequat
            tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci
            eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc.
            Nunc netus sit faucibus. Libero neque aenean tincidunt nec consequat
            tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci
            eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc.
            Nunc netus sit faucibus.
          </p>
        </div>
        <div
          className={cn(
            'h-56 md:h-auto w-full md:w-64 overflow-hidden',
            size === 'sm' && 'h-24 md:w-32'
          )}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=512&amp;h=512&amp;q=80'
            alt='Featured Image'
            className='h-full w-full object-center object-cover hover:scale-105 duration-300'
          />
        </div>
      </div>
      <div
        className={cn(
          'flex flex-col gap-8 mt-4 divide-y',
          size === 'sm' && 'gap-4 mt-1'
        )}>
        <div className='flex'>
          <a
            href='#'
            className='font-medium text-sm text-primary'
            aria-describedby='featured-post'>
            Continue reading <span aria-hidden='true'>→</span>
          </a>
        </div>
        <a
          href='#'
          className={cn(
            'flex gap-2 items-center pt-6',
            size === 'sm' && 'pt-2'
          )}>
          <Avatar className='h-6 w-6'>
            <AvatarImage src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' />
            <AvatarFallback>MF</AvatarFallback>
          </Avatar>
          <p className='text-sm font-medium'>Michael Foster</p>
          {size === 'sm' && (
            <time
              dateTime='2020-03-16'
              className='text-sm font-light text-muted-foreground'>
              Mar 16, 2020
            </time>
          )}
        </a>
      </div>
    </article>
  );
};

        {
        /* <div className='flex h-fit container gap-8 py-24'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14'>
          <div className='shadow rounded-lg border'>
            <div className='relative'>

              <img
                className='rounded-t-lg'
                src='https://zoyothemes.com/tailwind/blogza/assets/images/blog-2.jpg'
                alt=''
              />
            </div>
                        <a href='#' className={cn('flex gap-2 items-center pt-6 px-4')}>
              <Avatar className='h-6 w-6'>
                <AvatarImage src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' />
                <AvatarFallback>MF</AvatarFallback>
              </Avatar>
              <p className='text-sm font-medium'>Michael Foster</p>

              <time
                dateTime='2020-03-16'
                className='text-sm font-light text-muted-foreground'>
                Mar 16, 2020
              </time>
            </a>
            <div className='flex gap-4 p-4'>
              <div>
                <a
                  href='#'
                  className='text-2xl font-semibold leading-9 line-clamp-1'>
                  How to provide more effective feedback
                </a>
                <p className='mt-1 mb-4 text-muted-foreground line-clamp-3'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <a
                  href='#'
                  className='flex items-center gap-2 text-base font-medium text-primary hover:text-blue-600 transition-all duration-500'>
                  Read more
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className='shadow rounded-lg border'>
            <div className='relative'>

              <img
                className='rounded-t-lg'
                src='https://zoyothemes.com/tailwind/blogza/assets/images/blog-3.jpg'
                alt=''
              />
              <div className='absolute top-4 right-4 bg-white/70 px-2 py-1 rounded-full border text-sm'>
                Technology
              </div>
            </div>
            <a href='#' className={cn('flex gap-2 items-center pt-6 px-4')}>
              <Avatar className='h-6 w-6'>
                <AvatarImage src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' />
                <AvatarFallback>MF</AvatarFallback>
              </Avatar>
              <p className='text-sm font-medium'>Michael Foster</p>

              <time
                dateTime='2020-03-16'
                className='text-sm font-light text-muted-foreground'>
                Mar 16, 2020
              </time>
            </a>
            <div className='flex gap-4 p-4'>
              <div>
                <a
                  href='#'
                  className='text-2xl font-semibold leading-9 line-clamp-1'>
                  UI designers to acquire coding skills
                </a>
                <p className='mt-1 mb-4 text-muted-foreground line-clamp-3'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <a
                  href='#'
                  className='flex items-center gap-2 text-base font-medium text-primary hover:text-blue-600 transition-all duration-500'>
                  Read more
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className='shadow rounded-lg border'>
            <div className='relative'>

              <img
                className='rounded-t-lg'
                src='https://zoyothemes.com/tailwind/blogza/assets/images/blog-1.jpg'
                alt=''
              />
            </div>
            <a href='#' className={cn('flex gap-2 items-center pt-6 px-4')}>
              <Avatar className='h-6 w-6'>
                <AvatarImage src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' />
                <AvatarFallback>MF</AvatarFallback>
              </Avatar>
              <p className='text-sm font-medium'>Michael Foster</p>

              <time
                dateTime='2020-03-16'
                className='text-sm font-light text-muted-foreground'>
                Mar 16, 2020
              </time>
            </a>
            <div className='flex gap-4 p-4'>
              <div>
                <a
                  href='#'
                  className='text-2xl font-semibold leading-9 line-clamp-1'>
                  Step by step guide for conducting usability
                </a>
                <p className='mt-1 mb-4 text-muted-foreground line-clamp-3'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <a
                  href='#'
                  className='flex items-center gap-2 text-base font-medium text-primary hover:text-blue-600 transition-all duration-500'>
                  Read more
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */
    }
