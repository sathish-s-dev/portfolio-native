import { StyleSheet, Text, TextProps, View } from 'react-native';
import React from 'react';
import { cn } from '@/utils/cn';

const ThemedText = ({ children, className, ...restProps }: TextProps) => {
	return (
		<Text
			{...restProps}
			className={cn('dark:text-white text-black', className)}>
			{children}
		</Text>
	);
};

export default ThemedText;
