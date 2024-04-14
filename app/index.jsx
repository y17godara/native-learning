import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaView>
      <View className="items-center justify-center w-full h-full text-center">
        <Text className="text-sm text-center text-gray-900 font-pregular mt-7">
          Welcome
        </Text>

        <Link
          href="/profile"
          className="p-2 text-blue-500 border rounded-lg bg-slate-300 border-zinc-300 font-pbold"
        >
          Go to Profile
        </Link>
        
        <Link
          href="/sign-in"
          className="p-2 text-blue-500 border rounded-lg bg-slate-300 border-zinc-300 font-pbold"
        >
          Go to Sign In
        </Link>
        

        <StatusBar style="auto" />
      </View>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
