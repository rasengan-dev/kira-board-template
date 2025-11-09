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
import { NavLink } from "rasengan";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import ThemeButton from "../atom/theme-button";

export default function Sidebar() {
	return (
		<aside className='w-[256px] h-screen p-4'>
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

			<div className='mt-4 flex flex-col gap-1'>
				<NavigationItem href='#' icon={<Home size={18} />} label='Home' />
				<NavigationItem
					href='/'
					icon={<FileText size={18} />}
					label='Tasks'
					active
				/>
				<NavigationItem href='#' icon={<FileCheck size={18} />} label='Docs' />
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
				<NavigationItem href='#' icon={<Users size={18} />} label='Customers' />
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
		</aside>
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
