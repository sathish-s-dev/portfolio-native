import { Skill, skillData } from '@/constants';
import { Image } from 'expo-image';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Text } from './themed';

export function SkillSection() {
	return (
		<View className='px-4 mb-12'>
			<View className='justify-between flex-row'>
				<Text className='text-3xl'>Skills</Text>
				<TouchableOpacity>
					<Text className=''>view all</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={skillData}
				contentContainerStyle={{ gap: 24, marginVertical: 24 }}
				horizontal
				renderItem={({ item }: { item: Skill }) => <SkillCard item={item} />}
			/>
		</View>
	);
}

function SkillCard({ item }: { item: Skill }) {
	return (
		<TouchableOpacity className='w-32 p-4 border overflow-hidden justify-center items-center gap-3 border-slate-400/5 rounded-xl'>
			<View className='p-2'>
				<Image
					source={{
						uri: item.image,
					}}
					contentFit='contain'
					style={{ width: 50, height: 50 }}
					className='w-12 aspect-square'
				/>
			</View>
			<Text>{item.name}</Text>
		</TouchableOpacity>
	);
}
