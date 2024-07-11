import React from 'react'
import { Spotlight } from '../comonents/ui/Spotlight'
import { TextGenerateEffect } from '../comonents/ui/TextGenerateEffect'
import Link from 'next/link'
import { MagicButton } from '../comonents/ui/MagicButton'



import { FaArrowPointer } from "react-icons/fa6";


export default function NotFound() {
	const words = ["404", "found", "beautiful", "modern"];
	
	return (

		
		<div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center">
		<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
		<div className="flex justify-center relative my-20 z-10"></div>
		<div className="flex-col items-center flex min-h-screen font-bold text-9xl justify-center ">
		
			
			
				<h2 className="text-9xl">404</h2>
				<p className="text-3xl">Not Found</p>
				{/* <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill = "purple" /> 
				<Spotlight className='-top-10 left-full -h-[90vh] w-[50vw]' fill = "purple" />  */}

				<Link href = "." className=''>
				<MagicButton
								title = "back to page"
								icon  = {<FaArrowPointer />}
								position='left'
							/>
				</Link>
	    </div>
	</div>
	
	)
} 