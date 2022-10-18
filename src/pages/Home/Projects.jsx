import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../../Components/Card";
import { urlFor, client } from "../../client";

export default function Projects() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]{_id, imageurl,overview,title}';

    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);

  return (
    <div className="p-5 pt-14 text-light">
      <div className="max-w-6xl m-auto">
        <h2
          className="text-3xl mb-10 text-primary font-title md:ml-8 md:mt-20 "
          id="projects"
        >
          Projects
        </h2>
        <p className="mb-10 max-w-3xl md:ml-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          harum corporis laudantium sapiente ducimus est sit similique ipsam ut
          odio.
        </p>
        <div className="grid gap-5 mt-5 md:grid-cols-2 max-w-7xl m-auto ">
          {works &&
            works.map((i) => {
              return (
                <Card
                  key={i._id}
                  title={i.title}
                  overview={i.overview}
                  img={urlFor(i.imageurl)}
                  id={i._id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
