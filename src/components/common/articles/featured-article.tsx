import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import {
  BookmarkIcon,
  DotsVerticalIcon,
  PlusCircledIcon,
  Share2Icon,
} from '@radix-ui/react-icons';
import { HiSparkles } from 'react-icons/hi2';

export const FeaturedArticle = () => {
  return (
    <div id='featured_article' className='w-full'>
      <div id='article_description' className='py-4 space-y-2'>
        <div className='flex gap-4 items-center'>
          <time
            dateTime='2020-03-16'
            className='text-sm font-light text-muted-foreground'>
            Mar 16, 2020
          </time>
          <div className='px-3 py-1 border rounded-full'>
            <p className='text-sm'>Technology</p>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='text-3xl sm:text-4xl font-bold'>
            UX/UI Design Trends Going Into 2024
          </h2>
          <p className='line-clamp-3 md:text-lg text-muted-foreground font-light'>
            Every year, we have a line up of new design trends that not only
            look good, but also stick around and influence other designers to
            “steal” the trend. Love it or hate it, there are actually some
            design waves that are smart and functional. These functions could
            range from including more information in less space, to build more
            engagement with the users.
          </p>
        </div>
        <div className='flex items-center gap-2 sm:gap-4 text-muted-foreground'>
          <div className='flex gap-2 items-center py-1.5 px-1.5 pr-3 bg-accent rounded-full hover:brightness-95 duration-300 cursor-pointer group'>
            <Avatar className='h-8 w-8'>
              <AvatarImage
                className=' group-hover:scale-110 duration-200'
                src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
              />
              <AvatarFallback>MF</AvatarFallback>
            </Avatar>
            <p className='hidden sm:block whitespace-nowrap group-hover:text-emerald-500 font-medium duration-200'>
              Michael Foster
            </p>
            <PlusCircledIcon className='h-5 w-5 group-hover:text-emerald-500 duration-200' />
          </div>
          <p className='text-sm'>2 min read</p>
          <div className='flex gap-4 ml-auto'>
            <BookmarkIcon className='h-5 w-5' />
            <Share2Icon className='h-5 w-5' />
            <DotsVerticalIcon className='h-5 w-5' />
          </div>
        </div>
      </div>
      <div
        id='article_banner'
        className='h-56 sm:h-64 w-full bg-accent relative'>
        <div className='absolute top-0 left-0 p-2'>
          <p className='font-medium text-sm flex items-center gap-2 text-amber-500/80 dark:text-amber-600/80 px-3 py-0.5 bg-amber-100/50 dark:bg-amber-900/40 rounded-full border border-amber-400/50 dark:border-amber-600/40'>
            Featured Article <HiSparkles />
          </p>
        </div>
      </div>
    </div>
  );
};
