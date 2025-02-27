


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import config from "../Config";

// function Detail() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const { data } = await axios.get(
//           `${config.apiUrl}/api/blogs/single-blogs/${id}`,
//           {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//           }
//         );
//         setBlog(data);
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//       }
//     };
//     fetchBlog();
//   }, [id]);

//   if (!blog)
//     return <p className="text-center mt-10 text-gray-500">Loading...</p>;

//   const styledAbout = blog?.about
//     ?.replace(
//       /<ul>/g,
//       '<ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0;">'
//     )
//     ?.replace(
//       /<ol>/g,
//       '<ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 0;">'
//     )
//     ?.replace(
//       /<li>/g,
//       '<li style="margin-bottom: 0.5rem; display: list-item;">'
//     );

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-[90%] lg:max-w-[80%] mx-auto bg-gray-100 p-8 shadow-lg rounded-lg">
//         {/* Blog Category & Date */}
//         <div className="flex justify-between items-center text-gray-600 text-sm mb-4">
//           <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-xl">
//             {blog.category}
//           </span>
//           <span className="text-gray-700 text-sm sm:text-base whitespace-nowrap">
//             <span className="text-lg font-medium text-black">Created on: </span>
//             {new Date(blog.createdAt).toLocaleDateString()}
//           </span>
//         </div>

//         {/* Blog Title */}
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
//           {blog.title}
//         </h1>

//         {/* Blog Image and Description using Flexbox */}
//         <div className="flex flex-wrap items-start gap-6">
//           {/* Blog Image */}
//           {blog.blogImage && (
//             <div className="flex-shrink-0 w-full md:w-[300px]">
//               <img
//                 src={blog.blogImage.url}
//                 alt={blog.title}
//                 className="w-full h-auto rounded-lg shadow-md"
//               />
//             </div>
//           )}

//           {/* Blog Description */}
//           <div
//             className="flex-1 text-lg text-gray-700 leading-relaxed"
//             dangerouslySetInnerHTML={{ __html: styledAbout }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Detail;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import blogData from "./blogData";

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogData.find((blog) => blog._id === id);
    setBlog(foundBlog);
  }, [id]);

  if (!blog)
    return <p className="text-center mt-10 text-gray-500">Blog not found</p>;

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const blogSection = document.getElementById("blogs");
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <section className="w-full min-h-screen bg-white py-10">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto bg-gray-100 p-8 shadow-lg rounded-lg">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
        >
          ← Back to Blogs
        </button>

        {/* Blog Category & Date */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-xl">
            {blog.category}
          </span>
          <span className="text-gray-700 text-sm sm:text-base mt-2 sm:mt-0 whitespace-nowrap">
            <span className="text-lg font-medium text-black">Created on: </span>
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Blog Image and Description */}
        <div className="prose">
          <div className="clearfix">
            {blog.blogImage && (
              <div className="md:float-left md:mr-6 md:mb-4 w-full md:w-80">
  <img
    src={blog.blogImage.url}
    alt={blog.title}
    className="w-full h-auto object-contain rounded-lg shadow-md"
  />
</div>

            )}
            <div className="text-lg text-gray-700 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: blog.description }} />
            </div>
          </div>
          {/* Clear the float so remaining content appears below the image */}
          <div className="w-full clear-both"></div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
