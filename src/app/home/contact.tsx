import { AnimatedView } from '@/components/AnimatedView';
import { ContactForm } from '@/components/ContactForm';
import { Button, View } from '@/components/themed';
import { colors } from '@/constants';
import { openURL } from 'expo-linking';
import React from 'react';
import { Image, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';

const Contact = () => {
	return (
		<ScrollView className='flex-1 dark:bg-slate-900 bg-slate-100'>
			<View className='flex-1 items-center'>
				<AnimatedView className='relative flex w-full justify-center items-center mt-12 gap-10'>
					<Image
						source={require('../../../public/web.png')}
						resizeMode='contain'
						className='w-full h-[200px] aspect-video rounded-3xl'
					/>
					<Button className='max-w-sm w-full mx-auto'>Download Resume</Button>
				</AnimatedView>
				<ContactForm />
			</View>
		</ScrollView>
	);
};

export default Contact;

function SocialLinks() {
	const links = [
		{
			icon: 'twitter',
			url: 'https://twitter.com/sathish_s_dev',
		},
		{
			icon: 'instagram',
			url: 'https://www.instagram.com/god__of__the__world/',
		},
		{
			icon: 'facebook',
			url: 'https://www.facebook.com/Sathishs007s',
		},
		{
			icon: 'github',
			url: 'https://github.com/sathish-s-dev',
		},
	];
	return (
		<View className='absolute bottom-0 pb-4 flex-row gap-2 w-full justify-center'>
			{links.map((link) => (
				<IconButton
					key={link.icon}
					icon={link.icon}
					onPress={() => {
						openURL(link.url);
					}}
					mode='outlined'
					theme={{
						colors: { primary: colors.primary },
					}}
					size={20}
				/>
			))}
		</View>
	);
}
