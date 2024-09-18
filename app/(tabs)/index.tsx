import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <View style={styles.bannerContainer}>
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.bannerImage}
          />
          <View style={styles.overlay} />
          <View style={styles.textContainer}>
            <ThemedText type="title">Good Morning,</ThemedText>
            <View style={{ flexDirection: 'row', alignItems: "center", gap: 2 }}>
              <ThemedText type="default">
                We have
              </ThemedText>
              <Text style={{ color: '#FFE900', fontWeight: 'bold', textDecorationLine: "underline" }}>
                100+ Curated Packages
              </Text>
              <ThemedText type="default"> for you</ThemedText>
            </View>
          </View>
        </View>
      }
    >
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  bannerContainer: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  bannerImage: {
    height: 250,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fills the entire banner
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
  },
  textContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 16,
  },
});
