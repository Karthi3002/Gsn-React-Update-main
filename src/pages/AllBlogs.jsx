// import React from "react";
// import { Link } from "react-router-dom";
// import blogs from "../data/data.json";

// const AllBlogs = () => {
//   return (
//     <div>
//       <h1>All Blogs</h1>
//       {blogs.map((blog) => (
//         <div key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>{blog.excerpt}</p>
//           <Link to={`/blog/${blog.slug}`}>Read More</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllBlogs;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../data/data.json";
import { Navigation } from "../components/navigation";
// import { useParams, useNavigate } from "react-router-dom";

const categories = [
  "All",
  "Referral Strategies",
  "Member Success Stories",
  "Leadership & Mind-set",
  "AI Revolution in Networking",
  "GSN Culture & Values",
];

const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogData.blog
      : blogData.blog.filter((post) => post.category === selectedCategory);

  return (
        <>
          <Navigation />
    <div className="all-blogs-container">
      <h2 className="section-title">Explore Our Blogs</h2>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`cat-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredBlogs.map((post) => (
          <div className="blog-card" key={post.id}>
            <img
              src={`${process.env.PUBLIC_URL}${post.image}`}
              alt={post.title}
              className="blog-img"
            />
            <div className="blog-content">
              <h5 className="blog-title">{post.title}</h5>
              <p className="blog-meta">
                By {post.author} • {post.date}
              </p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <span className="blog-category">{post.category}</span>
              <Link to={`/blog/${post.id}`} className="read-more-btn">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="back-home">
        <Link to="/" className="back-home-link">
          ← Back to Home
        </Link>
      </div>
    </div>
        </> 
  );
};

export default AllBlogs;