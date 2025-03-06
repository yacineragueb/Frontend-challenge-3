import React from "react";

export default function Input({type, placeholder}) {
  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      <span className="text-smokey-grey font-bold tracking-[3px]">{type}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="border p-4 rounded-lg border-light-grey font-bold text-[2rem] outline-none transition-colors duration-200 focus:border-purple caret-purple"
      />
      <p className="text-light-red text-[15px] font-italic">
        this field is required
      </p>
    </div>
  );
}
