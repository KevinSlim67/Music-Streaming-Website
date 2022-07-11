import React from "react";

const style = {
  background: "linear-gradient(249.78deg, #FFE145 26.94%, #C86C00 74.07%)",
};

const songs = [
  "Song 1",
  "Song 2",
  "Song 3",
  "Song 4",
  "Song 5",
  "Song 6",
  "Song 7",
  "Song 8",
  "Song 9",
  "Song 10",
  "Song 11",
  "Song 12",
  "Song 13",
  "Song 14",
];

const eightSongs = songs.slice(0, 8);

function CurrentTopArtist(props) {
  const { className } = props;
  return (
    <div style={style} className={`${className} relative flex z-10`}>
      <div className="h-full w-1/2 absolute right-0 flex items-end">
        <img src="/images/artists/woman.png" alt="woman" />
      </div>

      <div className="relative w-1/2 ml-7 flex flex-col justify-between pt-5 pb-11">
        <div>
          <h2 className="text-3xl font-bold mt-[20%] text-accent-800">{`[Artist Name] Hits`}</h2>

          <p className="text-md font-semibold mt-11">
            {eightSongs.map((s, i, { length }) => {
              if (i + 1 !== length) return `${s}, `;
              else return s;
            }, 1)}
          </p>
        </div>

        <div className="flex flex-col font-semibold">
          <span className="flex mb-1">
            <img src="/images/icons/heart.png" alt="" className="mr-2 max-h-[90%]" />
            100000 Likes
          </span>
          <span className="flex">
            <img src="/images/icons/music_note.png" alt="" className="mr-2 max-h-[90%]" />
            100 Songs
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentTopArtist;
