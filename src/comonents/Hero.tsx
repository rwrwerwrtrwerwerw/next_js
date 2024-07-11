import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Link from 'next/link'
import { MagicButton } from './ui/MagicButton'




import { FaBeer } from 'react-icons/fa';
import { GoSignIn } from "react-icons/go";


import Image from 'next/image'
 
const Hero = () => {
  return (
	<div className='pb-20 pt-36'>
		<div className="">
		<Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill = "purple" /> 
		<Spotlight className='-top-10 left-full -h-[90vh] w-[50vw]' fill = "purple" /> 

		<div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
				<div className="flex justify-center relative my-20 z-10">

				 	<div className="max-w-[90vw] md-max-w-2xl lg:max-w-[60] flex flex-col items-center justify-center">
					 <Image
						src="bitcoin.svg"
						width={500}
						height={500}
						alt="bitcoin picture"
						className=''
						/>

						<TextGenerateEffect 
						className='text-left text-[100px] md:text-9xl lg:text-6xl'
						words='
						NEXT LEVEL
						TO EXCHANGE
						YOUR CRYPTO
						ASSETS'
						/>

						
						<p className="text-center text md:tracking-wider mb-4 md:text-lg pt-3 ">
							Sign up to get $5,020 in Bonuses and Mystery Boxes
							</p>
						
						<a href = "/sign-up">
						<MagicButton
							title = "SIGN UP NOW"
							icon = {<GoSignIn />}
							position='left'
						/>
						</a>
					</div>
				</div>	
    		</div>
		</div>
	</div>
  )
}

export default Hero