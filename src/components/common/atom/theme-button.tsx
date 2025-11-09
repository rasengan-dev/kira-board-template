import { useTheme } from "@rasenganjs/theme";
import { Moon, Sun } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";

export default function ThemeButton() {
	const { setTheme, isDark } = useTheme();

	const handleThemeChange = () => {
		setTheme(isDark ? "light" : "dark");
	};

	return (
		<Button
			size='icon'
			onClick={handleThemeChange}
			variant='ghost'
			className={twMerge(
				"relative aspect-square rounded-md flex shrink-0 items-center justify-center overflow-hidden hover:cursor-pointer backdrop-blur-2xl"
			)}
			aria-label='Toggle theme'
		>
			{isDark ? (
				<div
					key='moon'
					className='absolute grow-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
				>
					<Moon size={20} className='text-primary' />
				</div>
			) : (
				<div
					key='sun'
					className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
				>
					<Sun size={20} className='text-primary' />
				</div>
			)}
		</Button>
	);
}
