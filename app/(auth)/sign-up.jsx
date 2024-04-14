import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View className="items-center justify-center w-full h-full text-center">
      <Text>SignUp</Text>
      <Link
        href="/sign-in"
        className="p-2 text-blue-500 border rounded-lg bg-slate-300 border-zinc-300 font-pbold">
        Go to Sign In
      </Link>
      <StatusBar style="auto" />
    </View>
  )
}

export default SignUp
