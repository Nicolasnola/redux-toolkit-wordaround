import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  return (
    <View style={styles.Counter}>
      <Text style={styles.CounterNumber}>{count}</Text>
    </View>
  );
}
