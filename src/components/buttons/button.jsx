import React from "react";

function Button(props) {
  const { className, text, onClick } = props;

  return (
    <div className="flex justify-center items-center">
      <button className={`${className} text-white bg-accent-400 rounded-[40px] w-[8rem] h-[3rem] hover:bg-accent-200`}>
        {text}
      </button>
    </div>
  );
}

export default Button;
