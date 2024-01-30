import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { Avatar, TouchableRipple, Tooltip, Switch } from 'react-native-paper';
import { useColorScheme } from 'nativewind';
import { View } from '@/components/themed';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants';
import { AnimatePresence } from 'moti';

const DrawerLayour = () => {
	const HeaderRight = () => (
		<View className='flex-row gap-4 bg-transparent items-center'>
			<Switch
				value={colorScheme === 'dark'}
				onValueChange={toggleColorScheme}></Switch>
			<TouchableRipple
				className='mr-4 rounded-full bg-slate-900'
				onPress={() => {
					console.log('pressed');
				}}>
				<Tooltip title='avatar'>
					<Avatar.Image
						size={36}
						source={require('../../../public/avatar.jpg')}
					/>
				</Tooltip>
			</TouchableRipple>
		</View>
	);

	const { colorScheme, toggleColorScheme } = useColorScheme();

	const isDark = colorScheme === 'dark';

	return (
		<AnimatePresence exitBeforeEnter>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Drawer
					screenOptions={{
						headerRight: HeaderRight,
						headerStyle: {
							backgroundColor: isDark ? colors.primary_dark : colors.white,
						},
						headerTintColor: isDark ? colors.white : colors.primary_dark,
					}}>
					<Drawer.Screen
						name='index'
						options={{ title: 'Home', headerTitle: '' }}
					/>
					<Drawer.Screen name='contact' />
					<Drawer.Screen
						name='projects'
						options={{ title: 'projects' }}
					/>
					<Drawer.Screen
						name='project-details'
						options={{ drawerItemStyle: { display: 'none' } }}
					/>
				</Drawer>
				<StatusBar style={isDark ? 'light' : 'dark'} />
			</GestureHandlerRootView>
		</AnimatePresence>
	);
};

export default DrawerLayour;
