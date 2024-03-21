import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>hello</Text>
      </View>
      <View style={styles.list}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
  search: {
    backgroundColor: "green",
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: "orange",
    padding: 16,
  },
});
