import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Bookmark = () => {
  return (
    <View
      className="items-center justify-center w-full h-full text-center"
    >
      <Text>
        Bookmark
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Bookmark