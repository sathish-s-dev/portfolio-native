import { cn } from '@/utils/cn';
import { View, ViewProps } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function ThemedView({
	children,
	className,
	...restProps
}: ViewProps) {
	const { dark } = useTheme();
	return (
		<View
			className={cn('bg-slate-100 dark:bg-slate-900', className)}
			{...restProps}>
			{children}
		</View>
	);
}
