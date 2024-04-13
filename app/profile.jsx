import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>profile.jsx</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})