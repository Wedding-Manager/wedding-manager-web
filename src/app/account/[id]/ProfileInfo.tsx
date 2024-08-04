// ProfileInfo.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faEnvelope, faEdit } from "@fortawesome/free-solid-svg-icons";

const ProfileInfo = ({ user, isFollowing, toggleFollow }) => {
  const handleEditClick = () => {
    // Implement edit functionality here
    console.log("Edit clicked!");
    // You can open a modal, navigate to an edit page, etc.
  };
  const getStatusIndicator = () => {
    if (user.status?.is_active) {
      return (
        <span style={{ color: "green", marginRight: "4px" }}>
          <FontAwesomeIcon icon={faCheckCircle} size="sm" />
        </span>
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
      }}
    >
      <div style={{ position: "relative", marginRight: "20px" }}>
        <img
          src="https://via.placeholder.com/150"
          alt={`${user.firstName} ${user.lastName}'s profile`}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5px",
            right: "5px",
            // backgroundColor: "#fff",
            padding: "2px 8px",
            borderRadius: "10px",
            // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {getStatusIndicator()}
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <h1
            style={{
              margin: "0",
              fontSize: "2rem",
              fontFamily: "'Arial, sans-serif",
              color: "#D87093",
            }}
          >
            {`${user.name} ${user.surname}`}
          </h1>
          <span
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              marginTop: "19px",
              fontSize: "12px",
              color: "#666",
            }}
            onClick={handleEditClick}
          >
            <FontAwesomeIcon icon={faEdit} style={{ marginRight: "5px" }} />
          </span>
        </div>
        <p
          style={{
            margin: "5px 0",
            color: "#666",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
          {user.mobile} |{" "}
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ marginLeft: "5px", marginRight: "5px" }}
          />
          {user.email}{" "}
        </p>
        <p
          style={{
            margin: "5px 0",
            color: "#666",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {user.intro}
        </p>
        <div>
          <button
            onClick={toggleFollow}
            style={{
              padding: "6px 6px",
              backgroundColor: "#FFB6C1",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontFamily: "Arial, sans-serif",
              marginRight: "6px",
            }}
          >
            {isFollowing ? "Unfollow" : "Invite"}
            {/*To-Do integrate post for
            follow-unfollow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
