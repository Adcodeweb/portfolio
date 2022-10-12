import React from "react";
import Card from "../../../Components/Card";

export default function Projects() {
  return (
    <div className="p-5 pt-14 text-light">
      <div className="max-w-6xl m-auto">
        <h2
          className="text-3xl mb-10 text-primary font-title md:ml-8 md:mt-20 "
          id="code"
        >
          Projects
        </h2>
        <p className="mb-10 max-w-3xl md:ml-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          harum corporis laudantium sapiente ducimus est sit similique ipsam ut
          odio.
        </p>
        <div className="grid gap-5 mt-5 md:grid-cols-2 max-w-7xl m-auto ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
