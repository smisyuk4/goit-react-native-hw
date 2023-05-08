import { View, Text } from 'react-native';
import { CreatePosts } from '../../CreatePosts';
import { styles } from './CreatePostsScreen.styles';

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen component</Text>
      <CreatePosts/>
    </View>
  );
};
