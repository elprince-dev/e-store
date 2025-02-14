'use client'
import { useEffect } from "react";

const InstaPost = ({ postUrl }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center items-center p-4">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="12"
      ></blockquote>
    </div>
  );
};

export default InstaPost;
