"use client";

import useIntersectionObserver from "@/blocks/custom-hooks/intersection-observer";
import dynamic from "next/dynamic";
import React, { useState, useEffect, ReactNode } from "react";

const LazyLoader = (props: {
  children: ReactNode;
  title: string;
  id: string;
}) => {
  const { children, title, id } = props;
  const [nodeRef, entry] = useIntersectionObserver({ threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      setIsVisible(true);
    }
  }, [entry]);
  console.log("isVisible", isVisible, title);

  return (
    <div
      id={`${id}`}
      ref={nodeRef}
      style={{ minHeight: "200px", width: isVisible ? "100%" : "0" }}
    >
      {isVisible && children}
    </div>
  );
};

export default LazyLoader;
