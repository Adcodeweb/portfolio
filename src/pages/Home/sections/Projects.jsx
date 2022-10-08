import React from "react";
import Card from "../../../Components/Card";

export default function Projects() {
  return (
    <div
      className="p-5 bg-gradient-to-b from-black to-gray-600 text-white"
      id="code"
    >
      <h2 className="text-2xl">Projects</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum
        corporis laudantium sapiente ducimus est sit similique ipsam ut odio.
      </p>
      <div className="grid gap-5 mt-5 md:grid-cols-2 ">
        <Card />
        <Card />
      </div>
    </div>
  );
}
