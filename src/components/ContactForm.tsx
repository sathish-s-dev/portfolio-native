import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { AnimatedView } from './AnimatedView';
import { Button } from './themed';

export const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	return (
		<KeyboardAvoidingView className='w-full'>
			<AnimatedView className=' gap-6 pt-6 max-w-sm w-full mx-auto my-12'>
				<Text className='text-3xl font-bold dark:text-slate-100'>
					Contact Me
				</Text>
				<TextInput
					placeholder='Name'
					value={name}
					onChangeText={setName}
					className='dark:text-slate-200 p-2 border-b border-slate-300 dark:border-slate-400 placeholder:text-slate-400'
				/>
				<TextInput
					placeholder='Email'
					value={email}
					onChangeText={setEmail}
					className='dark:text-slate-200 p-2 border-b border-slate-300 dark:border-slate-400 placeholder:text-slate-400'
				/>
				<TextInput
					placeholder='Message'
					onChangeText={setMessage}
					value={message}
					numberOfLines={5}
					className='dark:text-slate-200 p-2 border-b border-slate-300 dark:border-slate-400 align-top placeholder:text-slate-400'
				/>
				<Button
					loading={loading}
					disabled={loading}
					onPress={(e) => {
						e.preventDefault();
						setLoading(true);
						setTimeout(() => {
							setLoading(false);
							console.log({
								name,
								email,
								message,
							});
							alert('submitted');
							setEmail('');
							setMessage('');
							setName('');
							router.push('/home/');
						}, 5000);
					}}
					icon={'send'}>
					submit
				</Button>
			</AnimatedView>
		</KeyboardAvoidingView>
	);
};
