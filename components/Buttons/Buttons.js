import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementAmount,
  reset,
} from "../../src/features/counter/counter-slice";

import styles from "./styles";
import Counter from "../Counter";

export default function Buttons() {
  const dispatch = useDispatch();

  return (
    <View style={styles.containerButtons}>
      <Text style={styles.Tittle}>Contador</Text>
      <Counter />

      <TouchableOpacity
        style={styles.ResetButton}
        onPress={() => dispatch(reset())}
      >
        <Text style={styles.TextButtonReset}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.OperationButton}
        onPress={() => dispatch(increment())}
      >
        <Text style={styles.TextButton}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.OperationButton}
        onPress={() => dispatch(decrement())}
      >
        <Text style={styles.TextButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
