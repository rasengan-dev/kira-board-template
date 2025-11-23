import {
	ArrowRightLeft,
	CalendarClock,
	FileCheck,
	FileText,
	Home,
	MessagesSquare,
	MousePointerClick,
	Network,
	Search,
	UserPlus,
	Users,
} from "lucide-react";
import AppLogo from "../atom/app-logo";
import { Link, NavLink } from "rasengan";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import ThemeButton from "../atom/theme-button";
import useNavigationStore from "@/store/navigation";
import { useScreen } from "@/hooks/use-screen";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
	const {
		sidebar: { opened },
		toggle,
	} = useNavigationStore();
	const { isMobile } = useScreen();

	return (
		<>
			<aside
				className={cn(
					" w-[256px] h-screen p-4 lg:pr-0 bg-muted z-30 flex flex-col justify-between overflow-auto",
					isMobile
						? opened
							? "absolute translate-x-0"
							: "absolute -translate-x-full"
						: opened
						? "relative"
						: "absolute -translate-x-full"
					// (!opened || isMobile) && "absolute -translate-x-full"
				)}
			>
				<div>
					<div className='py-2 flex items-center justify-between'>
						<AppLogo />
						<ThemeButton />
					</div>
					<div className='relative mt-4'>
						<Input
							placeholder='Search'
							className='rounded-md bg-input/40 p-2 pl-8 w-full text-sm'
						/>

						<Search
							size={18}
							className='absolute left-2 top-1/2 -translate-y-1/2 text-foreground/70'
						/>
					</div>

					<div className='mt-4 flex flex-col gap-1 overflow-auto'>
						<NavigationItem href='#' icon={<Home size={18} />} label='Home' />
						<NavigationItem
							href='/'
							icon={<FileText size={18} />}
							label='Tasks'
							active
						/>
						<NavigationItem
							href='#'
							icon={<FileCheck size={18} />}
							label='Docs'
						/>
						<NavigationItem
							href='#'
							icon={<CalendarClock size={18} />}
							label='Schedule'
						/>
						<NavigationItem
							href='#'
							icon={<MessagesSquare size={18} />}
							label='Chat'
						/>
						<NavigationItem
							href='#'
							icon={<ArrowRightLeft size={18} />}
							label='Payments'
						/>
						<NavigationItem
							href='#'
							icon={<Users size={18} />}
							label='Customers'
						/>
						<NavigationItem
							href='#'
							icon={<MousePointerClick size={18} />}
							label='Automations'
						/>
						<NavigationItem
							href='#'
							icon={<UserPlus size={18} />}
							label='User Management'
						/>
						<NavigationItem
							href='#'
							icon={<Network size={18} />}
							label='Workflows'
						/>
					</div>
				</div>

				<div className='mt-4 border rounded-lg p-4 text-foreground bg-background'>
					<h2 className='font-bold text-sm'>Rasengan UI Kit</h2>

					<p className='text-foreground/70 my-4 text-sm text-pretty'>
						Build fast and modern web applications with ready to use React
						components and templates powered by{" "}
						<span className='text-foreground font-medium'>Shadcn UI.</span>
					</p>

					<Link to='https://ui.rasengan.dev' target='_blank'>
						<Button className='w-full'>Visit Rasengan UI</Button>
					</Link>
				</div>
			</aside>

			{isMobile && opened && (
				<div
					onClick={toggle}
					className='fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-black/60 z-20'
				></div>
			)}
		</>
	);
}

type NavigationItemProps = {
	href: string;
	icon: React.ReactNode;
	label: string;
	active?: boolean;
};

const NavigationItem = ({
	// href,
	icon,
	label,
	active = false,
}: NavigationItemProps) => {
	return (
		<div
			className={cn(
				"flex items-center gap-2 py-2 px-2 rounded-md hover:bg-input/40 cursor-pointer text-foreground/60 hover:text-foreground transition-all",
				active && "bg-input/40 hover:bg-input/40 text-foreground font-medium"
			)}
		>
			{icon}
			<label className='text-sm cursor-pointer'>{label}</label>
		</div>
	);
};
