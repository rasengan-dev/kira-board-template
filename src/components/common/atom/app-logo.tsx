import { Button } from "@/components/ui/button";
import { AlignStartHorizontal } from "lucide-react";

export default function AppLogo() {
	return (
		<div className='flex items-center gap-2 text-foreground'>
			<Button size='icon' variant={"outline"} className='size-8'>
				<AlignStartHorizontal />
			</Button>
			<span className='font-bold'>Kira Board</span>
		</div>
	);
}
