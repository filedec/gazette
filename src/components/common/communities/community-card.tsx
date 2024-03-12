import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import {
  DotsVerticalIcon,
  HeartIcon,
  PlusCircledIcon,
  Share2Icon,
} from '@radix-ui/react-icons';

export const CommunityCard = () => {
  return (
    <div>
      <div className='flex gap-2 items-center py-1 px-1 pr-3 bg-accent rounded-md hover:brightness-95 duration-300 cursor-pointer group'>
        <Avatar className='h-14 w-14 rounded-sm'>
          <AvatarImage
            className=' group-hover:scale-110 duration-200'
            src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
          />
          <AvatarFallback>MF</AvatarFallback>
        </Avatar>
        <div className=''>
          <p className=''>$techlearner</p>
          <p className='text-sm text-muted-foreground'>2353 members</p>
        </div>
      </div>
    </div>
  );
};
