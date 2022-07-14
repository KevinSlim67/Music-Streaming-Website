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
    <div style={style} className={`${className} relative flex z-10 overflow-hidden`}>
      <div className="image h-full w-1/2 absolute right-[-2rem]">
        <img src="/images/artists/woman.png" alt="woman" className="max-w-full max-h-full" />
      </div>

      <div className="text relative w-1/2 ml-7 flex flex-col justify-between pt-5 pb-11">
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
          <span className="flex mb-1 items-center">
            <img src="/images/icons/heart.png" alt="" className="mr-2 w-[1.3em] h-[1.3em]" />
            100000 Likes
          </span>
          <span className="flex items-center">
            <img src="/images/icons/music_note.png" alt="" className="mr-2 w-[1.3em] h-[1.3em]" />
            100 Songs
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentTopArtist;
