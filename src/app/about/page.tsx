import React from 'react'
import { Spotlight } from '@/comonents/ui/Spotlight'
import { TextGenerateEffect } from '@/comonents/ui/TextGenerateEffect'
import Link from 'next/link'
import { MagicButton } from '@/comonents/ui/MagicButton'




import { FaBeer } from 'react-icons/fa';
import { GoSignIn } from "react-icons/go";



import Image from 'next/image'
 
const About = () => {
  return (
	<main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full"></div>
	<div className='pb-20 pt-36'>
		<div className="">
		<Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill = "purple" /> 
		<Spotlight className='-top-10 left-full -h-[90vh] w-[50vw]' fill = "purple" /> 

		<div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
				<div className="flex justify-center relative my-20 z-10">

				 	<div className="max-w-[90vw] md-max-w-2xl lg:max-w-[60] flex flex-col items-center justify-center">
					
						<TextGenerateEffect 
						className='text-left text-[100px] md:text-9xl lg:text-6xl'
						words='
						FAQ'
						
						/>
						<ul className="text-center text md:tracking-wider mb-4 md:text-lg pt-3">
							<li className="">How to use you own account?</li>
							<li className="">How to register new account? </li>
							<li className="">in me accounts was blocked?</li>
							<li className="">KYC Regulator</li>
						</ul>
						
						
						<TextGenerateEffect 
						className='text-left text-[100px] md:text-9xl lg:text-6xl'
						words='
						Deposite/Withdrawal'

						/>
						<ul className="text-center text md:tracking-wider mb-4 md:text-lg pt-3">
							<li className="">How to top up your account</li>
							<li className="">How does it work P2P? </li>
							<li className="">in me accounts was blocked?</li>
							<li className="">KYC Regulator</li>
						</ul>


						{/* <a href = "/sign-up">
						{/* <MagicButton
							title = "SIGN UP NOW"
							icon = {<GoSignIn />}
							position='left'
						/> */}
						
					</div>
				</div>	
    		</div>
		</div>
	</div>
	</main>
  )
}

export default About