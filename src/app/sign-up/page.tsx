import Image from "next/image";
import Link from 'next/link'

import { MagicButton } from "@/comonents/ui/MagicButton";
import { Spotlight } from "@/comonents/ui/Spotlight";




import { SparklesCore  } from "@/comonents/ui/sparkles";
export default function Signup() {
	return (		
		<div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center" >
			
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			<div className="flex justify-center relative my-20 z-10"></div>
			<div className="flex-col items-center flex min-h-screen font-bold justify-center">
			<div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
			
		
			<Link  href  = "." className="md:text-7xl text-3xl lg:text-5xl font-bold text-center text-white relative z-10">
			EXXBTC
			</Link>
			
			
			<div className="w-[40rem] h-40 relative">
				{/* Gradients */}
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
			</div>
			
			{/* <Link  href = "." className="text-5xl flex-col">EXBTC</Link> */}

			<p className="relative">Sign up</p>
			<div className="">Login</div>
			<input type="text" className="" />
			<div className="">Password</div>
			<input type="text" className="" />
			<MagicButton
				title = "Create " />
			<Link href = "/sign-in" className="" >Sign in</Link>
			<div className="">OR USE</div>
			
			<button className=""></button>
			<button className=""></button>
			
		</div>
		</div>
		</div>
		
	)
} 