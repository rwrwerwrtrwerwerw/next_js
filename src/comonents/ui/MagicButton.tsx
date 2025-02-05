import React from 'react'

export const MagicButton = ({
	title, position, icon
}: {
	title: string;
  icon: React.ReactNode,
  position: string;
  otherClasses?: string;
  handleClick?: () => void; 
}) => {
  return (

	<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 ">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
    {position === "left" && icon}
    {title}
    {position === "right" && icon}
  </span>
</button>

	
  )
}
