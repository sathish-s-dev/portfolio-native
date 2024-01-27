import { Button, Text, View } from '@/components/themed';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';
import { SkillSection } from '@/components/SkillSection';
import { Image } from 'expo-image';
import Animated, { FadeInDown } from 'react-native-reanimated';

const image = require('../../../public/product.png');
const Home = () => {
	return (
		<ScrollView
			className='flex-1 bg-slate-100 dark:bg-slate-900'
			showsVerticalScrollIndicator={false}>
			<Hero />
			<SkillSection />
		</ScrollView>
	);
};

export default Home;

function Hero() {
	const router = useRouter();

	return (
		<Animated.View
			entering={FadeInDown}
			className='flex-1 pt-10 justify-center dark:bg-slate-900 bg-slate-100'>
			<View className='gap-10 items-s justify-center w-[90%] px-6'>
				<View className='gap-4 w-full items-start '>
					<View className='gap-2 items-stretch'>
						<Text className='text-4xl dark:text-slate-200'>
							Nice to Meet you!
						</Text>
						<Text className='text-5xl text-primary'>I'm Sathish</Text>
						<Text className='text-primary/50 text-xl'>
							React Native Developer
						</Text>
						<Text className='text-slate-500 dark:text-slate-400'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
							beatae animi labore quisquam nesciunt illum. Odio aliquam, magni
							dolorum possimus nobis earum voluptatum.
						</Text>
					</View>
					<Button
						icon='phone'
						className='self-'
						onPress={() => router.push('/home/contact')}>
						hire me
					</Button>
					<View className='bg-slate-50/5 w-[90%] max-w-sm p-6 my-12'>
						<Image
							source={image}
							contentFit='contain'
							style={{ width: '100%', height: 200 }}
							className='rounded-full max-w-full h-80 self-end'
						/>
					</View>
				</View>
			</View>
		</Animated.View>
	);
}
