import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1   ">
        <img
          className="h-8"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        ></img>
        <img
          className="h-8  mx-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        ></img>
      </div>
      <div className="flex col-span-10 justify-center">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
        ></input>
        <button className=" border border-gray-400 rounded-r-full px-2 py-2 bg-gray-200">
          🔍
        </button>
      </div>
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
