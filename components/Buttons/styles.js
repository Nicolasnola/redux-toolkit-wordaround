import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  OperationButton: {
    backgroundColor: "#804DCC",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 40,
    borderRadius: 15,
    minHeight: 54,
    width: "30%",
    marginHorizontal: 10,
  },
  ResetButton: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 40,
    borderRadius: 15,
    minHeight: 54,
    width: "25%",
  },
  amountTextButton: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 40,
    borderRadius: 15,
    minHeight: 54,
    width: "25%",
    fontSize: 16,
    color: "#804DCC",
    lineHeight: 20,
    textAlign: "center",
  },

  buttonView: {
    flexDirection: "row",
  },
  textButton: {
    fontSize: 30,
    color: "white",
    lineHeight: 30,
  },
  textButtonAmount: {
    fontSize: 15,
    color: "white",
    lineHeight: 20,
  },

  TextButtonReset: {
    fontSize: 16,
    color: "#804DCC",
    lineHeight: 20,
  },

  containerButtons: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  Tittle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#804DCC",
    marginBottom: 25,
  },
});

export default styles;
