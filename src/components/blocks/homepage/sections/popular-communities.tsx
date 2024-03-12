import { CommunityCard } from '@/components/common/communities/community-card';
import { CommunityPreview } from '@/components/common/communities/community-preview';
import React from 'react';

export const PopularCommunities = () => {
  return (
    <section>
      <div className='container py-24 space-y-8'>
        <div className='text-center pb-4'>
          <p className='sm:text-lg text-muted-foreground'>
            The Doqett Community for Support and Inspiration
          </p>
          <h1 className='text-3xl sm:text-5xl font-bold'>Find Your Tribe</h1>
        </div>
        <div className='pt-10 flex justify-between items-center'>
          <div className='space-y-1'>
            <h2 className='text-3xl sm:text-4xl font-semibold tracking-tight text-primary'>
              Trending Forums
            </h2>
            <p className='text- text-muted-foreground'>
              Selected for you. Updated daily.
            </p>
          </div>
          <div className='text-lg'>
            <p>See all</p>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 divide-y sm:divide-y-0'>
          <CommunityPreview />
          <CommunityPreview />
          <CommunityPreview />
          <CommunityPreview />
        </div>
        <div className='pt-10 flex justify-between items-center'>
          <div className='space-y-1'>
            <h2 className='text-2xl font-semibold tracking-tight text-primary'>
              Popular Communities
            </h2>
          </div>
        </div>
        <div className='grid [@media(min-width:550px)_and_(max-width:768px)]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-6'>
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </div>
      </div>
    </section>
  );
};
