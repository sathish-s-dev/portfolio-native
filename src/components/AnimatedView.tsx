import { cn } from '@/utils/cn';
import { MotiView } from 'moti';
import { FadeInLeft, FadeOutRight } from 'react-native-reanimated';

export function AnimatedView({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<MotiView
			entering={FadeInLeft}
			exiting={FadeOutRight}
			className={cn('w-full', className)}>
			{children}
		</MotiView>
	);
}
