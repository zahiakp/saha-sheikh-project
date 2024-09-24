import React from "react";

function StyledButton({ text,className }: { text: any,className?:any }) {
  return (
    <p className="relative overflow-hidden flex justify-center items-center group">
      <span className="flex">
        {[...text].map((char, index) => (
          <span
            style={{ transitionDelay: `calc(0.02s * ${index + 1})` }}
            className={`-translate-y-7 group-hover:translate-y-0 duration-300`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      <span className="flex absolute">
        {[...text].map((char, index) => (
          <span
            style={{ transitionDelay: `calc(0.02s * ${index + 1})` }}
            className="group-hover:translate-y-7 translate-y-0 delay-[.15s] duration-300"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </p>
  );
}

export default StyledButton;
