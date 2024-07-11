import Image from "next/image";
import Link from 'next/link'

export default function signin() {
	return (
		<div className="flex-col items-center flex min-h-screen font-bold justify-center">
			
			<Link href = "." className=" text-5xl flex-col">EXBTC</Link>

			<div className="">Sign in</div>
			<div className="">Login</div>
			<input type="text" className="" />
			<div className="">Password</div>
			<input type="text" className="" />
			<Link href = "/forgot"  className="">Forgot</Link>
			<Link href = "/sign-up" className="">Sign in</Link>
			<div className="">OR USE</div>
			
			<button className=""></button>
			<button className=""></button>
			
		</div>
	)
} 