import { View, Text } from 'react-native';
import React from 'react';
import { Button, ButtonProps } from 'react-native-paper';
import { colors } from '@/constants';
import { useRouter } from 'expo-router';
import { cn } from '@/utils/cn';

const ThemedButton = ({
	children,
	mode,
	onPress,
	textColor,
	buttonColor,
	className,
	icon,
	...restProps
}: ButtonProps) => {
	return (
		<Button
			icon={icon}
			{...restProps}
			elevation={4}
			mode={mode || 'elevated'}
			buttonColor={buttonColor || colors.primary}
			textColor={textColor || colors.primary_darkText}
			onPress={onPress}
			className={cn('text-black dark:text-white self-stretch', className)}>
			{children}
		</Button>
	);
};

export default ThemedButton;
