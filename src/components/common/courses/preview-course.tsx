import React from 'react';
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components/ui';
import {
  BookmarkIcon,
  DotsVerticalIcon,
  PlusCircledIcon,
  Share2Icon,
} from '@radix-ui/react-icons';
export const PreviewCourse = () => {
  return (
    <div id='course-preview' className='w-full md:max-w-lg py-4 '>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-4 items-center'>
          <time
            dateTime='2020-03-16'
            className='text-sm font-light text-muted-foreground'>
            Mar 16, 2020
          </time>
          <div className='px-2 py-0.5 border rounded-full'>
            <p className='text-xs'>Technology</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 items-start'>
          <div className='h-40 w-full aspect-square bg-accent relative'>
            <div className='absolute top-0 left-0 p-2'>
              <p className='font-medium text-sm flex items-center gap-2 text-emerald-500/80 dark:text-emerald-600/80 px-3 py-0.5 bg-emerald-100/50 dark:bg-emerald-900/40 rounded-full border border-emerald-400/50 dark:border-emerald-600/40'>
                20% off
              </p>
            </div>
          </div>
          <div className='space-y-1'>
            <h2 className='text-xl'>
              Design by AI: The Fast-Food of the Future
            </h2>
          </div>
        </div>
        <div className='flex gap-2 items-baseline'>
          <p className='text-lg text-emerald-500'>NPR 3000</p>
          <p className='text-sm text-amber-500 line-through'> NPR 3500</p>
        </div>
        <div className=' flex gap-4 items-end flex-wrap'>
          <Button className='text-base'> Enroll Now</Button>
          <div className=''>
            <p className='text-muted-foreground'>Starts 15 March 2020</p>
            <p className='text-xs text-amber-500'>Inclusive of taxes *</p>
          </div>
        </div>
        <div className='flex items-center gap-2 sm:gap-4 text-muted-foreground w-full'>
          <div className='flex gap-2 items-center py-1 px-1 pr-2 bg-accent rounded-full hover:brightness-95 duration-300 cursor-pointer group'>
            <Avatar className='h-6 w-6'>
              <AvatarImage
                className=' group-hover:scale-110 duration-200'
                src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
              />
              <AvatarFallback>MF</AvatarFallback>
            </Avatar>
            <PlusCircledIcon className='h-5 w-5 group-hover:text-emerald-500 duration-200' />
          </div>
          <p className='text-sm'>1-3 Months</p>
          <div className='flex gap-4 ml-auto'>
            <BookmarkIcon className='h-5 w-5' />
            <Share2Icon className='h-5 w-5' />
            <DotsVerticalIcon className='h-5 w-5' />
          </div>
        </div>
      </div>
    </div>
  );
};
