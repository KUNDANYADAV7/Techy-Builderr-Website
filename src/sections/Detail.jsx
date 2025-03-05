
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import blogData from "./blogData";

// function Detail() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const foundBlog = blogData.find((blog) => blog._id === id);
//     setBlog(foundBlog);
//   }, [id]);

//   if (!blog)
//     return <p className="text-center mt-10 text-gray-500">Blog not found</p>;

//   const handleBack = () => {
//     navigate("/");
//     setTimeout(() => {
//       const blogSection = document.getElementById("blogs");
//       if (blogSection) {
//         blogSection.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 400);
//   };

//   return (
//     <section className="w-full min-h-screen bg-white py-10">
//       <div className="max-w-[90%] lg:max-w-[80%] mx-auto bg-gray-100 p-8 shadow-lg rounded-lg">
//         {/* Back Button */}
//         <button
//           onClick={handleBack}
//           className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
//         >
//           ← Back to Blogs
//         </button>

//         {/* Blog Category & Date */}
//         <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm mb-4">
//           <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-xl">
//             {blog.category}
//           </span>
//           <span className="text-gray-700 text-sm sm:text-base mt-2 sm:mt-0 whitespace-nowrap">
//             <span className="text-lg font-medium text-black">Created on: </span>
//             {new Date(blog.createdAt).toLocaleDateString()}
//           </span>
//         </div>

//         {/* Blog Title */}
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
//           {blog.title}
//         </h1>

//         {/* Blog Image and Description */}
//         <div className="prose">
//           <div className="clearfix">
//             {blog.blogImage && (
//               <div className="md:float-left md:mr-6 md:mb-4 w-full md:w-80">
//   <img
//     src={blog.blogImage.url}
//     alt={blog.title}
//     className="w-full h-auto object-contain rounded-lg shadow-md"
//   />
// </div>

//             )}
//             <div className="text-lg text-gray-700 leading-relaxed">
//               <div dangerouslySetInnerHTML={{ __html: blog.description }} />
//             </div>
//           </div>
//           {/* Clear the float so remaining content appears below the image */}
//           <div className="w-full clear-both"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Detail;







import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogData from "./blogData";

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  // Function to generate slug from title
  const generateSlug = (title) =>
    title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  useEffect(() => {
    const foundBlog = blogData.find((b) => generateSlug(b.title) === slug);
    setBlog(foundBlog);
  }, [slug]);

  if (!blog)
    return (
      <p className="text-center mt-10 text-gray-500">Blog not found</p>
    );

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
