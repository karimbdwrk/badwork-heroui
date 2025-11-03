import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import HeroSection from "@/components/HeroSection";

export default function Home() {
	return (
		<>
			<HeroSection />

			<div
				className='contact-section h-screen w-screen overflow-hidden flex flex-col items-center justify-center'
				id='contact'>
				<div className='contact-form'>
					<div className='flex flex-col w-full flex-wrap md:flex-nowrap gap-4'>
						<Input
							isRequired
							className='max-w-xs'
							label='Email'
							type='email'
							placeholder='Enter your email'
						/>
						<Textarea
							isRequired
							className='max-w-xs'
							label='Description'
							labelPlacement='inside'
							placeholder='Enter your description'
						/>
						<Button color='primary'>Send</Button>
					</div>
				</div>
			</div>
		</>
	);
}
