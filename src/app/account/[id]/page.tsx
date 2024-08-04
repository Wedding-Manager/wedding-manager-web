// ProfilePage.js
"use client";
import React, { useEffect, useState } from "react";
import CoverPhoto from "./CoverPhoto";
import ProfileInfo from "./ProfileInfo";
import FriendsList from "./FriendsList";
import PostsList from "./PostsList";
import { fetchAccountDetailsById } from "@/stores/account";

const ProfilePage = (props: any) => {
  const { params } = props;
  const { id } = params;
  const [user, setUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await fetchAccountDetailsById(id);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <CoverPhoto />
      <ProfileInfo
        user={user}
        isFollowing={isFollowing}
        toggleFollow={toggleFollow}
      />
      <FriendsList friends={user.friends} />
      <PostsList posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
