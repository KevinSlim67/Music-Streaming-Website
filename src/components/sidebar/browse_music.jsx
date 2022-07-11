import React from "react";

const navlinks = [
  { name: "Home", href: "./" },
  { name: "Library", href: "./" },
  { name: "Genres", href: "./" },
];

function BrowseMusic() {
  return (
    <div className="mb-7">
      <h2 className="text-md font-semibold mb-6">Browse Music</h2>
      <ul>
        {navlinks.map((n) => (
          <li className="text-gray-300 text-sm font-normal">
            <a href={n.href}>
                <h3 className="hover:underline">{n.name}</h3> 
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseMusic;
