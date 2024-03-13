import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';

export const ArticleHighlight = () => {
  return (
    <div id='article-preview' className='w-full md:max-w-lg py-4'>
      <div className='flex flex-col gap-3'>
      {/* <div className='flex gap-4 items-center '>
          <time
            dateTime='2020-03-16'
            className='text-sm font-light text-muted-foreground'>
            Mar 16, 2020
          </time>
          <div className='px-2 py-0.5 border rounded-full'>
            <p className='text-xs'>Technology</p>
          </div>
          <p className='text-sm text-muted-foreground'>2 min read</p>
        </div> */}
        <div className='flex gap-4 items-center'>
          {/* <div className='h-24 w-24 aspect-square bg-accent'></div> */}
          <div className='space-y-1'>
            <h2 className='text-lg'>
              Design by AI: The Fast-Food of the Future
            </h2>
            <p className='w-full text-sm text-wrap text-muted-foreground line-clamp-2 font-light'>
              AI is going to reduce the demand for designers. Which areas will
              be affected? Which will survive?
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};
