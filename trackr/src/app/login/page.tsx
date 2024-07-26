import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import loginBg from "@/../public/login.jpg";
import logo from "@/../public/logo.svg";

export default function Login() {
	return (
		<div className="flex flex-row h-screen">
			<div className="flex-1 h-full">
				<div className="relative inset-0 -z-10 overflow-hidden h-full">
					<Image
						src={loginBg.src}
						quality={100}
						alt="No picture"
						fill
						style={{
							objectFit: "cover",
							width: '100%',
							height: '100%',
						}}
						className="blur-0"
					/>
					<div className="relative mt-8 ml-8">
						<Image
							src={logo.src}
							alt="Trackr"
							width={100}
							height={100}
						/>
					</div>
				</div>
			</div>
			<div className="flex-1 border-l border-gray-500 h-full flex justify-center items-center">
				
				<div className="flex flex-col gap-2 text-gray-50 text-center">
				<span className="">Login to continue</span>
				<span className="text-xs mb-4">or signup</span>

					<Input type="email" placeholder="E-mail"/>
					<Input type="password" placeholder="Password"/>
					<Button size="sm">Login</Button>
				</div>

			</div>
		</div>
	);
}
