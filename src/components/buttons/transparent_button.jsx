import React from "react";

function TransparentButton(props) {
  const { className, text, onClick } = props;

  return (
    <div className="flex justify-center items-center">
      <button
        className={`${className} text-accent-400 bg-transparent border-[3px] border-accent-400 
        rounded-[40px] text-center w-[8rem] h-[3rem] hover:text-white hover:bg-accent-400`}
      >
        {text}
      </button>
    </div>
  );
}

export default TransparentButton;
