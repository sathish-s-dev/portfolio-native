import { Button, Text, View } from '@/components/themed';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';
import { SkillSection } from '@/components/SkillSection';
import { Image } from 'expo-image';
import Animated, { FadeInDown } from 'react-native-reanimated';
import ProjectsSection from '@/components/ProjectsSection';
import { LinearGradient } from 'expo-linear-gradient';
import { SocialLinks } from './contact';

const image = require('../../../public/product.png');
const Home = () => {
	return (
		<ScrollView
			className='flex-1 bg-slate-100 dark:bg-slate-900'
			showsVerticalScrollIndicator={false}>
			<Hero />
			<SkillSection />
			<ProjectsSection />
			<SocialLinks />
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
					<View className='gap-4 items-stretch'>
						<Text className='text-5xl'>Nice to Meet you!</Text>
						<View>
							<LinearGradient
								colors={[
									'transparent',
									'transparent',
									'#0E5D6Ff0',
									'transparent',
									'transparent',
								]}
								className='w-60 dark:opacity-80 opacity-5 h-12 absolute -bottom-4 '
							/>
							<Text className='text-5xl text-primary w-64'>I'm Sathish</Text>
						</View>
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
						className='self-start w-48'
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
