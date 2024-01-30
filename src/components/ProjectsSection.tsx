import { View, Text } from '@/components/themed';
import { Image } from 'expo-image';
import { Link, router, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

const ProjectsSection = () => {
	return (
		<View className='px-4 mb-6'>
			<View className='justify-between flex-row'>
				<Text className='text-2xl'>Projects</Text>
				<TouchableOpacity
					onPress={() => {
						router.push('/home/projects');
					}}>
					<Text>view all</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={[1, 2, 3, 4, 5, 6]}
				contentContainerStyle={{ gap: 24, marginVertical: 24 }}
				horizontal
				renderItem={({ item }) => <ProjectCard item={item} />}
			/>
		</View>
	);
};

export default ProjectsSection;

export function ProjectCard({ item }) {
	const router = useRouter();
	return (
		<Link
			href={'/home/project-details'}
			asChild>
			<TouchableOpacity className='rounded-xl overflow-hidden gap-2'>
				<BlurView
					intensity={10}
					className=''>
					<Image
						source='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						style={{ width: 180, height: 150 }}
						contentFit='cover'
					/>
					<View className='p-4 bg-transparent dark:bg-transparent'>
						<Text>Project {item}</Text>
					</View>
				</BlurView>
			</TouchableOpacity>
		</Link>
	);
}
