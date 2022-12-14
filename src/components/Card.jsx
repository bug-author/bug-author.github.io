import React from "react";
import { Icon } from "@iconify/react";
import "../App.css";

function Card(props) {
  const hashtags = props.tags.map((tag) => {
    return (
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #{tag}
      </span>
    );
  });
  return (
    <div class="rounded h-full text-center w-full overflow-hidden shadow-lg">
      <img src={props.img} alt="project image" />
      <div class="px-6 py-4">
        <div class="font-bold text-2xl mb-2">{props.title}</div>
        <p class="text-gray-700 text-base">{props.caption}</p>
      </div>
      <div className="inline-flex px-3 py-3 text-white rounded-lg cursor-pointer justify-center gap-2 items-center btn">
        <a href={props.repo} target="_blank">
          <div className="flex justify-center gap-2 items-center ">
            <p className="font-normal text-sm dark:text-slate-900">
              More details
            </p>
            <Icon
              icon="icon-park-outline:github-one"
              style={{ fontSize: "20px" }}
              color={props.darkMode ? "rgba(15, 23, 42, 1)" : "white"}
            />
          </div>
        </a>
      </div>
      <div class="px-6 pt-4 pb-2">{hashtags}</div>
    </div>
  );
}

export default Card;
