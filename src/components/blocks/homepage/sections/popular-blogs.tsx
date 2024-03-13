import { ArticleHighlight } from '@/components/common/articles/article-highlight';
import { FeaturedArticle } from '@/components/common/articles/featured-article';
import { PreviewArticle } from '@/components/common/articles/preview-article';
import React from 'react';

export const PopularBlogs = () => {
  return (
    <section className=''>
      <div className='container py-24 space-y-8 '>
        <FeaturedArticle />
        <div className='grid grid-cols-7 gap-12 relative pt-12 '>
          <div className='col-span-7 lg:col-span-5 space-y-10 '>
            <PreviewArticle />
            <FeaturedArticle />
            <PreviewArticle />
            <PreviewArticle />
            <FeaturedArticle />
            <PreviewArticle />
          </div>
          <div className='col-span-7 lg:col-span-2 pl-4'>
            <div className='grid col-span-1 sm:grid-cols-2 lg:grid-cols-1 sticky top-20 gap-x-6 gap-y-2 lg:gap-x-0 lg:gap-y-0'>
              <p className='sm:col-span-2 lg:col-span-1 text-2xl font-medium mb-4'>
                Highlights
              </p>
              
              <ArticleHighlight />
              <ArticleHighlight />
              <ArticleHighlight />
              <ArticleHighlight />
              <ArticleHighlight />
            </div>
          </div>
        </div>
        <div className='space-y-8'>
          <div className='pt-10 pb-6  flex justify-between items-center'>
            <div className='space-y-1'>
              <h2 className='text-4xl font-semibold tracking-tight text-primary'>
                Education
              </h2>
              <p className='text-sm text-muted-foreground'>
                Explore popular Education blogs.
              </p>
            </div>
            <div className='text-lg'>
              <p>See all</p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-8 divide-y sm:divide-y-0'>
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
          </div>
        </div>
        <div className='space-y-8'>
          <div className='pt-10 pb-6  flex justify-between items-center'>
            <div className='space-y-1'>
              <h2 className='text-4xl font-semibold tracking-tight text-primary'>
                Education
              </h2>
              <p className='text-sm text-muted-foreground'>
                Explore popular Education blogs.
              </p>
            </div>
            <div className='text-lg'>
              <p>See all</p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-8 divide-y sm:divide-y-0'>
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
          </div>
        </div>
        <div className='grid grid-cols-7 gap-4 relative pt-12 divide-x'>
          <div className='col-span-7 lg:col-span-5 space-y-10 '>
            <PreviewArticle />
            <FeaturedArticle />
            <PreviewArticle />
            <PreviewArticle />
            <FeaturedArticle />
            <PreviewArticle />
          </div>
          <div className='col-span-2 pl-4'>
            <div className=' sticky top-20'>
              <p className='text-2xl font-medium mb-4'>Highlights</p>
              <ArticleHighlight />
              <ArticleHighlight />
              <ArticleHighlight />
              <ArticleHighlight />
              <ArticleHighlight />
            </div>
          </div>
        </div>
        <div className='space-y-8'>
          <div className='pt-10 pb-6  flex justify-between items-center'>
            <div className='space-y-1'>
              <h2 className='text-4xl font-semibold tracking-tight text-primary'>
                Education
              </h2>
              <p className='text-sm text-muted-foreground'>
                Explore popular Education blogs.
              </p>
            </div>
            <div className='text-lg'>
              <p>See all</p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-8 divide-y sm:divide-y-0'>
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
            <PreviewArticle />
          </div>
        </div>
      </div>
    </section>
  );
};
