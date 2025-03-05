

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import blogData from "./blogData";

function Blogs() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-shine",
      delay: 100,
    });
  }, []);

  // Function to generate slug from title
  const generateSlug = (title) =>
    title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  // Sort blogs by date (newest first)
  const sortedBlogs = [...blogData].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="w-full bg-white py-10">
      <div className="w-[95%] m-auto bg-[#F3F5F5] py-5 px-6 md:px-20 rounded-xl shadow-lg">
        <section id="blogs" className="w-full h-fit rounded-xl">
          <div className="mx-auto my-10 p-2">
            <h1
              data-aos="zoom-in"
              className="text-[32px] font-semibold leading-10 text-[#000045] mb-6"
            >
              Recent Blogs
            </h1>

            {/* Blog Grid (Show only 6 blogs) */}
            <div
              className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-12"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {sortedBlogs.length > 0 ? (
                sortedBlogs.slice(0, 6).map((blog, index) => (
                  <div
                    className="group relative w-full rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
                    key={index}
                  >
                    <Link to={`/blog/${generateSlug(blog.title)}`}>
                      {/* Blog Image */}
                      <img
                        src={blog?.blogImage?.url}
                        alt={blog?.title}
                        className="w-full h-auto aspect-[16/9] object-cover"
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black opacity-30"></div>

                      {/* Date at the Top */}
                      <div className="absolute top-2 left-2 bg-opacity-70 text-white text-xs px-3 py-1 rounded-md">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </div>

                      {/* Text Overlay (Bottom) */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-lg font-semibold group-hover:text-yellow-500">
                          {blog?.title}
                        </h2>
                        <p className="text-sm">{blog?.category}</p>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No blogs available</p>
              )}
            </div>

            {/* See All Blogs Button */}
            <div className="mt-8 text-center">
              <Link to="/all-blogs">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all">
                  See All Blogs →
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blogs;
