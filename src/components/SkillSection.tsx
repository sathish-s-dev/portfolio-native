import { Skill, skillData } from '@/constants';
import { Image } from 'expo-image';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Text } from './themed';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';

export function SkillSection() {
	return (
		<View className='px-4 mb-'>
			<View className='justify-between flex-row'>
				<Text className='text-2xl'>Skills</Text>
				<TouchableOpacity
					onPress={() => {
						router.push('/home/skills');
					}}>
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
		<TouchableOpacity className='h-32 w-36 overflow-hidden rounded-xl'>
			<BlurView intensity={15}>
				<View className='p-6 h-full gap-3 justify-center items-center'>
					<View className='justify-center items-center'>
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
				</View>
			</BlurView>
		</TouchableOpacity>
	);
}
