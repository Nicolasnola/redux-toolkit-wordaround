import React from "react";
import { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
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
  const [incrementBy, setIncrementBy] = useState("5");
  const incrementValue = Number(incrementBy) || 0;

  return (
    <View style={styles.containerButtons}>
      <Text style={styles.Tittle}>Contador</Text>
      <Counter />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.OperationButton}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ResetButton}
          onPress={() => dispatch(reset())}
        >
          <Text style={styles.TextButtonReset}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.OperationButton}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <TextInput
          style={styles.amountTextButton}
          keyboardType="numeric"
          value={incrementBy}
          onChange={(e) => setIncrementBy(e.target.value)}
        />
        <TouchableOpacity
          style={styles.OperationButton}
          onPress={() => dispatch(incrementAmount(incrementValue))}
        >
          <Text style={styles.textButtonAmount}>Add Amount</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
