import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
  return (
    <View 
      className="items-center justify-center w-full h-full text-center"
    >
      <Text>
        Home
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Home