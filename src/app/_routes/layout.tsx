import { Outlet, LayoutComponent } from "rasengan";
import Sidebar from "@/components/common/layout/sidebar";
import { useTheme } from "@rasenganjs/theme";

const RootLayout: LayoutComponent = () => {
	const { isDark } = useTheme();

	return (
		<div className={isDark ? "dark" : ""}>
			<div className='w-screen h-screen flex bg-muted dark:bg-muted font-host-grotesk'>
				<div className='w-auto'>
					<Sidebar />
				</div>

				<div className='w-full h-screen p-4 pl-0'>
					<main className='w-full h-full rounded-lg bg-background border border-border overflow-auto'>
						<Outlet />
					</main>
				</div>
			</div>
		</div>
	);
};

export default RootLayout;
