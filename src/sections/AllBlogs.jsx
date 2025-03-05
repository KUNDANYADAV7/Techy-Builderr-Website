



import React, { useState, useEffect, useRef } from "react";
import blogData from "./blogData";
import { Link } from "react-router-dom";

function AllBlogs() {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisibleBlogs(6);
  }, []);

    // Function to generate slug from title
    const generateSlug = (title) =>
      title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  const loadMoreBlogs = () => {
    if (visibleBlogs < blogData.length) {
      setLoading(true);
      setTimeout(() => {
        setVisibleBlogs((prev) => prev + 6);
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreBlogs();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [visibleBlogs]);

  const sortedBlogs = blogData.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="w-full bg-white py-10">
      <div className="w-[95%] m-auto bg-[#F3F5F5] py-5 px-6 md:px-20 rounded-xl shadow-lg">
        <h1 className="text-[32px] font-semibold text-[#000045] mb-6 text-center">
          All Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-12">
          {sortedBlogs.slice(0, visibleBlogs).map((blog, index) => (
            <Link
            to={`/blog/${generateSlug(blog.title)}`}
              key={index}
              className="group relative w-full rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={blog?.blogImage?.url}
                alt={blog?.title}
                className="w-full h-auto aspect-[16/9] object-cover"
              />

              <div className="absolute inset-0 bg-black opacity-30"></div>

              <div className="absolute top-2 left-2 bg-opacity-70 text-white text-xs px-3 py-1 rounded-md">
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>

              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold group-hover:text-yellow-500 transition-colors duration-300">
                  {blog?.title}
                </h2>
                <p className="text-sm">{blog?.category}</p>
              </div>
            </Link>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center my-4">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          </div>
        )}

        <div ref={observerRef} className="h-10"></div>
      </div>
    </div>
  );
}

export default AllBlogs;
