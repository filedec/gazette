import { FeaturedArticle } from '@/components/common/articles/featured-article';
import { PreviewArticle } from '@/components/common/articles/preview-article';
import React from 'react';

export const PopularBlogs = () => {
  return (
    <section>
      <div className='container py-8 space-y-8'>
        <FeaturedArticle />
        <div className='pt-10 pb-6  flex justify-between items-center'>
          <div className='space-y-1'>
            <h2 className='text-4xl font-semibold tracking-tight text-primary'>
              Popular Blogs
            </h2>
            <p className='text- text-muted-foreground'>
              Selected for you. Updated daily.
            </p>
          </div>
          <div className='text-lg'>
            <p>See all</p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          <PreviewArticle />
          <PreviewArticle />
          <PreviewArticle />
        </div>
      </div>
      
    </section>
  );
};
