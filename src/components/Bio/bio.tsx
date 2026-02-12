import React from "react";

export default function Bio({ about }) {
  const bio: string[] = about.bio;
  return (
    <div>
      {bio.map((paragraph, index) => (
        <p key={index} className="w-full mb-4">
          {index}
        </p>
      ))}
    </div>
  );
}
