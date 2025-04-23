import React from "react";
import { Link } from "react-router-dom";
import blogData from "../data/data.json";

const Blog = () => {
  const posts = blogData.blog;

  return (
    <section className="blog-section py-5" id="blog">
      <div className="blogContainer">
        <h2 className="text-center mb-4">Insights for Smarter Success</h2>
        <div className="row g-4">
          {posts.map((post) => (
            <div className="col-md-4 d-flex" key={post.id}>
              <div className="blog-card blogcard d-flex flex-column w-100">
                <img
                  src={`${process.env.PUBLIC_URL}${post.image}`}
                  alt={post.title}
                  className="blogcard-img-top"
                />
                <div className="blogcard-body d-flex flex-column">
                  <h5 className="blogcard-title">{post.title}</h5>
                  <p className="blogcard-text">{post.excerpt}</p>
                  <small>{post.author} — {post.date}</small>
                  <Link
                    to={`/blog/${post.id}`}
                    className="btn readmore-btn w-100 mt-2"
                    onClick={(e) => e.stopPropagation()} // prevents jQuery from hijacking the link
                  >Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
