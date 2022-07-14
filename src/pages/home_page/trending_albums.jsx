import React, { useEffect, useRef, useState } from "react";

function TrendingAlbums(props) {
  const { className } = props;
  const [height, setHeight] = useState(0);
  const albumContainer = useRef(null);

  const albumStyle = {
    backgroundColor: 'white',
    borderRadius: '50px'
  }

  useEffect(() => {
    //ResizeObserver will observe albumContainer, and in this case changing the height when
    //albumContainer's width changes
    const resizeObserver = new ResizeObserver((entries) => {
      //if condition to make sure it's responsive
      if (window.innerWidth <= 600) setHeight(albumContainer.current.clientWidth);
      else setHeight(albumContainer.current.clientWidth / 2);
    });
    resizeObserver.observe(albumContainer.current);
  });

  return (
    <div className={`${className} w-full `}>
      <h2 className="text-2xl font-bold mb-8 w-full">Trending Albums</h2>
      <div ref={albumContainer} className="trending-albums w-full flex gap-5">
        <div style={{ height: height, ...albumStyle }} className="big-album w-1/2"></div>

        <div style={{height: height}} className="small-albums-grid w-1/2">
          <div style={albumStyle} ></div>
          <div style={albumStyle} ></div>
          <div style={albumStyle} ></div>
          <div style={albumStyle} ></div>
        </div>
      </div>
    </div>
  );
}

export default TrendingAlbums;
