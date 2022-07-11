import React, { useRef } from "react";
import "./items_list.scss";

function ItemsList(props) {
  const { title, items } = props;

  const list = [
    { song: "Shape Of You", singer: "Ed Sheeran" },
    { song: "Stiches", singer: "Shawn Mendes" },
    { song: "Shake It Off", singer: "Taylor Swift" },
    { song: "Stiches", singer: "Shawn Mendes" },
    { song: "Shape Of You", singer: "Ed Sheeran" },
    { song: "Shake It Off", singer: "Taylor Swift" },
    { song: "Stiches", singer: "Shawn Mendes" },
    { song: "Shape Of You", singer: "Ed Sheeran" },
    { song: "Shake It Off", singer: "Taylor Swift" },
    { song: "Stiches", singer: "Shawn Mendes" },
    { song: "Shape Of You", singer: "Ed Sheeran" },
  ];

  const ref = useRef(null);

  return (
    <div className="mb-12 w-full">
      <h2 className="text-2xl font-bold mb-8 w-full">{title}</h2>
      <div className="list flex gap-5 w-full p-3 overflow-x-scroll">

        {list.map((e) => (
          <div className="flex flex-col">
            <div class="element w-[12rem] h-[12rem] rounded-[20px] bg-white"></div>
            <span className="mt-3 font-bold text-[1.1rem]">{e.song}</span>
            <span>{e.singer}</span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default ItemsList;
