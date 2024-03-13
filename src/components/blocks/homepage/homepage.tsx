import React from 'react';
import { Hero } from './sections/hero';
import { PopularBlogs } from './sections/popular-blogs';
import { PopularCourses } from './sections/popular-courses';
import { PopularCommunities } from './sections/popular-communities';

export const Homepage = () => {
  return (
    <>
      <PopularBlogs />
    </>
  );
};
