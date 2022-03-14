import React from 'react';
import { useState, useEffect } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import { fetchBlogs } from '../../services/Blogs/Blogs';

export default function Main() {
  const [blogs, setBlogs] = useState([]);
//nonsense note
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchBlogs();
        setBlogs(resp);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);
  return (
    <section className="main">
      {blogs.map((data) => (
        <BlogCard {...data} key={data.id} />
      ))}
    </section>
  );
}