import Image from "next/image";
import Link from 'next/link'

export default function Signup() {
	return (
		<div className="flex-col items-center flex min-h-screen font-bold justify-center">
			
			<Link  href  = "." className="text-5xl flex-col">EXBTC</Link>

			<div className="">Write Login</div>
			<div className="">Login</div>
			<input type="text" className="" />
			
			<div className="">Create new acconut</div>
			<Link href = "/sign-in" className="" >Sign in</Link>
			
			
			<button className=""></button>
			
			
		</div>
	)
} 