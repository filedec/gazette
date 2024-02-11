'use client';
import { Logo } from '@/assets/jsx/logo';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import ThemeSwitch from '../blocks/theme-switcher';

export function Header() {
  return (
    <header className='fixed top-0 w-full text-foreground z-50 backdrop-blur-sm'>
      <div className='max-w-screen-2xl text-lg mx-auto flex justify-between items-center p-5'>
        <Link href={'/'}>
          <Logo className='h-10 [&>path]:fill-primary transition-colors duration-300' />
        </Link>
        <div className='hidden md:flex gap-6 items-center'>
          <Link
            href={'/docs'}
            className=' hover:text-primary ease-in-out duration-300'>
            Features
          </Link>
          <Link
            href={'/'}
            className=' hover:text-primary ease-in-out duration-300'>
            About us
          </Link>
          <Link
            href={'/contact'}
            className=' hover:text-primary ease-in-out duration-300'>
            Documentation
          </Link>
          <ThemeSwitch />
          <Link
            href={'/lightpaper'}
            className=' text-white select-none hover:text-white/80 ease-in-out duration-300 border px-3 py-2 bg-primary hover:bg-primary/90 rounded-md'>
            Join Waitlist
          </Link>
        </div>
        <div className='flex md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger className='focus:border-0 focus:outline-none focus:ring-0 focus:ring-transparent'>
              <HamburgerMenuIcon className='h-8 w-8 hover:text-white transition-colors duration-300' />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='p-5 w-64 rounded-xl bg-black/70 backdrop-blur-sm hidden'>
              <DropdownMenuGroup className='pt-12'>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/'}>Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/docs'}>Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/lightpaper'}>Lightpaper</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='h-12 focus:bg-white/25 rounded-[6px]'>
                  <Link href={'/contact'}>Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup className='px-2 pt-12 pb-6'>
                <h4 className='mt-6 text-sm mb-4 '>Join us on </h4>
                <ul className='flex gap-3 '>
                  <li className='p-1 bg-primary/50 rounded hover:bg-primary/100 transition-colors duration-200'>
                    <a
                      href='https://discord.com/invite/PJcWyCB8'
                      target='_blank'>
                      <Image
                        src='/discord.png'
                        alt=''
                        className='invert'
                        height={20}
                        width={20}
                      />
                    </a>
                  </li>
                  <li className='p-1 bg-primary/50 rounded hover:bg-primary/100 transition-colors duration-200'>
                    <a href='https://twitter.com/adsflow_net' target='_blank'>
                      <Image
                        src='/x.png'
                        alt=''
                        className='invert '
                        height={20}
                        width={20}
                      />
                    </a>
                  </li>
                </ul>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
