import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Body = () => {
  const { isAuthenticated } = useAuth0();

  return !isAuthenticated ? (
    <div className="flex justify-center mt-[20%] font-bold text-2xl">
      Please, login/register to see the Post.
    </div>
  ) : (
    <div className=" flex justify-center ">
      <Outlet />
      {/* <AddPost 
            <PostContainer/>
         */}
    </div>
  );
};

export default Body;
