import React from "react";
import type { ReactNode } from "react";

interface TabCardProps {
  props: ReactNode;
}

export default function AboutCard({ props }: TabCardProps) {
  console.log(props);
  return (
    <div className="card md:text-[14px] xl:text-[16px] md:w-2/3 lg:max-w-2xl mt-4">
      <div>
        {props.map((paragraph, index) => (
          <p key={index} className="w-full mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
