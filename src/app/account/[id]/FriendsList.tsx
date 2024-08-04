// FriendsList.js
import React from "react";

const FriendsList = ({ friends }) => {
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
      <h3 style={{ fontFamily: "Arial, sans-serif", color: "#D87093" }}>
        Family Members
      </h3>
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {friends?.map((friend) => (
          <li
            key={friend.id}
            style={{
              marginRight: "10px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={friend.profilePic}
              alt={friend.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #FFB6C1",
              }}
            />
            <p
              style={{
                marginTop: "5px",
                fontFamily: "Arial, sans-serif",
                color: "#666",
              }}
            >
              {friend.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
