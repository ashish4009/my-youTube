import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="shadow-xl w-48 p-2 m-2">
      <h1 className="font-bold">PREMIUM</h1>
      <ul>
        <li>HOME</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Youtube Music</li>
      </ul>
      <h1 className="font-bold mt-5">Subscriptions</h1>
      <ul className="">
        <li>HOME</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Youtube Music</li>
      </ul>
      <h1 className="font-bold mt-5">favorite</h1>
      <ul className="">
        <li>Ashish's Channel</li>
        <li>Mr-Bits</li>
        <li>Cricket</li>
        <li>Mumbai</li>
      </ul>
      <h1 className="font-bold mt-5">For You</h1>
      <ul className="">
        <li>New Channel</li>
        <li>sports</li>
        <li>career</li>
        <li>Youtube theme</li>
      </ul>
      <h1 className="font-bold mt-5">New features</h1>
      <ul className="">
        <li>sleep mode</li>
        <li>offers</li>
        <li>upcomming</li>
        <li>tips</li>
      </ul>
      <h1 className="font-bold mt-5">FAQ</h1>
      <ul className="">
        <li>why</li>
        <li>how</li>
        <li>what</li>
        <li>when</li>
      </ul>
    </div>
  );
};

export default SideBar;
