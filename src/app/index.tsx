import { Link, Redirect, useRouter } from 'expo-router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
// import {
// 	Button,
// 	Checkbox,
// 	CheckboxProps,
// 	TextInput,
// 	TouchableRipple,
// 	useTheme,
// 	Switch,
// 	Appbar,
// 	IconButton,
// } from 'react-native-paper';
import { View, Text } from '@/components/themed';

export default function Page() {
	Redirect({ href: '/home/' });
	return (
		<View className=''>
			<View>
				<Text>hello</Text>
			</View>
		</View>
	);
}
