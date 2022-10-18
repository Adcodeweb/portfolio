import {
  RiExternalLinkLine,
  RiGithubFill,
  RiReactjsFill,
} from "react-icons/ri";
import { TbLetterS } from "react-icons/tb";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { DiSass } from "react-icons/di";

import { TiArrowBackOutline } from "react-icons/ti";
import { useNavigate, useParams } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/sea-green";
import { urlFor, client } from "../../client";
import { useState } from "react";
import { useEffect } from "react";
import { BounceLoader } from "react-spinners";

export default function Project() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [works, setWorks] = useState();

  useEffect(() => {
    setLoading(true);

    const query = `*[_type == 'projects' && _id == "${id}" ]`;
    if (id) {
      client.fetch(query).then((data) => {
        setWorks(data[0]);
        setLoading(false);
      });
    }
  }, []);

  const icons = (icon, id) => {
    if (icon == "React") {
      return <RiReactjsFill key={id} className="text-blue-300" />;
    } else if (icon == "Firebase") {
      return <SiFirebase key={id} className="text-yellow-600" />;
    } else if (icon == "Scss") {
      return <DiSass key={id} className="text-pink-600" />;
    } else if (icon == "Tailwind css") {
      return <SiTailwindcss key={id} className="text-sky-500" />;
    } else if (icon == "Sanity") {
      return <TbLetterS key={id} className="text-white/80" />;
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen w-full text-red-500 text-7xl">
        <BounceLoader color="#36d7b7" loading={loading} size={150} />
      </div>
    );

  return (
    <div className="py-16 text-light bg-gradient-to-br from-black to-fn ">
      <button
        onClick={() => navigate(-1)}
        className="fixed bottom-6 right-4 bg-primary/25 rounded-full p-2 text-4xl z-40"
      >
        <TiArrowBackOutline />
      </button>
      <div className="pattern2 h-28 w-full"></div>

      <main className="p-5 mt-5 md:max-w-6xl m-auto max-w-lg md:px-5 ">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          {/* left */}
          <div className="flex-1">
            <h1 className="text-4xl text-center mb-2 font-title text-primary uppercase font-bold sm:text-4xl lg:text-left md:text-6xl ">
              {works?.title}
            </h1>
            <p className="text-xs mb-4 underline ">{works?.status}</p>
            <p className=" text-white/80 mb-4 sm:text-center md:text-lg md:text-left ">
              {works?.overview}
            </p>
            <p className="capitalize mb-3">Created with</p>
            <div className="flex gap-4 mb-6 text-3xl md:text-5xl ">
              {works?.tags.map((i, index) => {
                return icons(i, index);
              })}
            </div>
            <div className="flex flex-wrap gap-4  justify-center p-4 md:border-b md:mt-7 md:pb-10 border-primary">
              <a
                href={works?.projectLink}
                className="flex items-center shadow-sm shadow-primary p-3 rounded-md gap-2  hover:text-primary hover:bg-dark ease-in-out duration-200"
              >
                <RiExternalLinkLine />
                Live Page
              </a>
              <a
                href={works?.codeLink}
                className="flex items-center shadow-sm shadow-primary p-3 rounded-md gap-2 hover:text-primary hover:bg-dark ease-in-out duration-200"
              >
                <RiGithubFill />
                Code
              </a>
            </div>
          </div>

          {/* right */}
          <Splide
            options={{
              perPage: 1,
              classes: {
                arrow: "splide__arrow your-class-arrow",
                page: "splide__pagination__page your-class-page",
              },
            }}
            className="flex-1 min-w-0 "
          >
            <SplideSlide>
              <img
                src={works && urlFor(works?.imageurl)}
                alt="project img"
                className="md:w-10/12 m-auto object-cover"
              />
            </SplideSlide>
            {works?.images?.map((i) => {
              return (
                <SplideSlide key={i._key}>
                  <img
                    src={urlFor(i)}
                    alt="project img"
                    className="md:w-10/12 m-auto object-cover"
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </main>

      {/* info */}
      {works?.moreInfo?.map((i) => {
        return (
          <article
            className="my-10 p-10 md:px-16 max-w-4xl m-auto"
            key={i?._key}
          >
            <h3 className="text-2xl mb-4 text-secondary md:text-3xl">
              {i?.title}
            </h3>
            <p className="text-white/90 md:text-lg">{i?.info}</p>
          </article>
        );
      })}
    </div>
  );
}
