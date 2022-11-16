import { StyleSheet, View } from "react-native";
import Buttons from "./components/Buttons/Buttons";
import { store } from "./src/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Buttons />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
