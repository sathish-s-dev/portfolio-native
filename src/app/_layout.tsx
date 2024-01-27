import { colors } from '@/constants';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import '../global.css';
import 'react-native-reanimated';

export default function Layout() {
	const { colorScheme } = useColorScheme();
	console.log(colorScheme === 'dark');
	const theme: ThemeProp = {
		isV3: true,
		...MD3LightTheme,
		colors: {
			...MD3LightTheme.colors,
			primary: colors.primary,
		},
		dark: colorScheme === 'dark',
	};
	return (
		<PaperProvider theme={theme}>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			/>
		</PaperProvider>
	);
}
