import React from "react";

const Shimmer = () => {
  return (
    <div>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="shimmer ml-[30%] w-[45rem] h-[37rem] bg-gray-200 border border-gray-400 m-8 shadow-xl "
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
