// PostsList.js
import React from "react";

const PostsList = ({ posts }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontFamily: "Arial, sans-serif", color: "#D87093" }}>
        Wedding Updates
      </h2>
      {posts?.map((post) => (
        <div
          key={post.id}
          style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}
        >
          <p
            style={{
              margin: "0",
              fontFamily: "Arial, sans-serif",
              color: "#333",
            }}
          >
            {post.content}
          </p>
          <p style={{ color: "#666", fontFamily: "Arial, sans-serif" }}>
            {post.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
