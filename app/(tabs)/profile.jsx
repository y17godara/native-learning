import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const Profile = () => {
  return (
    <View      
      className="items-center justify-center w-full h-full text-center"
    >
      <Text>
        Profile
      </Text>
      <Link
          href="/sign-up"
          className="p-2 text-blue-500 border rounded-lg bg-slate-300 border-zinc-300 font-pbold"
        >
          Go to Sign Up
        </Link>
      <StatusBar style="auto" />
    </View>
  )
}

export default Profile