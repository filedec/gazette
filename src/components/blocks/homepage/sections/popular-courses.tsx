import { FeaturedCourse } from '@/components/common/courses/featured-course';
import { PreviewCourse } from '@/components/common/courses/preview-course';
import React from 'react';

export const PopularCourses = () => {
  return (
    <section>
      <div className='container py-24 space-y-8'>
        <div className='text-center pb-4'>
          <p className='sm:text-lg text-muted-foreground'>
            Master New Skills and Connect with Experts
          </p>
          <h1 className='text-3xl sm:text-5xl font-bold'>
            Explore Doqett Courses
          </h1>
        </div>
        <div className='flex gap-2 flex-wrap justify-center'>
          <div className='px-3 py-2 border rounded-full w-fit'>
            Digital Marketing
          </div>
          <div className='px-3 py-2 border rounded-full w-fit'>SEO Expert</div>
          <div className='px-3 py-2 border rounded-full w-fit'>Frontend</div>
          <div className='px-3 py-2 border rounded-full w-fit'>
            Public Service Commission
          </div>
          <div className='px-3 py-2 border rounded-full w-fit'>
            10 +2 Classes
          </div>
          <div className='px-3 py-2 border rounded-full w-fit'>
            EPS Coaching
          </div>
          <div className='px-3 py-2 border rounded-full w-fit'>IELTS</div>
        </div>
        <FeaturedCourse />
        <div className='pt-10 flex justify-between items-center'>
          <div className='space-y-1'>
            <h2 className='text-3xl sm:text-4xl font-semibold tracking-tight text-primary'>
              Trending Courses
            </h2>
            <p className='text- text-muted-foreground'>
              Selected for you. Updated daily.
            </p>
          </div>
          <div className='text-lg'>
            <p>See all</p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 divide-y sm:divide-y-0'>
          <PreviewCourse />
          <PreviewCourse />
          <PreviewCourse />
        </div>
      </div>
    </section>
  );
};
