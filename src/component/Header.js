import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="grid grid-flow-col p-2 pl-5  h-24 items-center shadow-lg">
      <div className="col-span-2">
        <Link to={"/add"}>
          {" "}
          <i class="fa-solid fa-square-plus pb-3 pr-2 text-4xl mt-1.5 cursor-pointer "></i>{" "}
        </Link>
      </div>

      <div className="col-span-8 flex justify-center">
        <Link to={"/"}>
          {" "}
          <img
            className=" mx-2 mt-2 cursor-pointer h-20"
            src="https://uploads-ssl.webflow.com/57634d4b219799bf287ea3a4/5ad253963b9e2b4d589f6c15_Instagram.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex justify-center col-span-2">
        {" "}
        <i class="fa-solid fa-circle-user text-4xl"></i>
        {isAuthenticated ? (
          <button
            className="font-bold ml-8 px-4 bg-blue-500 text-white rounded-md"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="font-bold ml-8 px-4 bg-blue-500 text-white rounded-md"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
