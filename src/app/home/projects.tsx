import { ProjectCard } from '@/components/ProjectsSection';
import { Text, View } from '@/components/themed';
import React from 'react';
import { FlatList } from 'react-native';

const Projects = () => {
	return (
		<View className='flex-1 px-2 pt-2'>
			<Text className='text-2xl py-4'>Projects</Text>
			<FlatList
				data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
				numColumns={2}
				columnWrapperStyle={{ columnGap: 24 }}
				contentContainerStyle={{
					marginVertical: 24,
					rowGap: 24,
					justifyContent: 'center',
					alignItems: 'center',
				}}
				renderItem={({ item }) => <ProjectCard item={item} />}
			/>
		</View>
	);
};

export default Projects;
