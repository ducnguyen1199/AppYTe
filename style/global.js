import { StyleSheet } from "react-native";
export const global = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#eceef8",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  wrapper: {
    paddingLeft: 10,
    paddingRight: 20,
    marginVertical: 15,
    flex: 1,
  },
  flex: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  inputGroup: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#dadce0",
    color: "#202124",
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 22,
    paddingVertical: 15,
    backgroundColor: "white",
  },
  titleCauHoi: {
    textAlign: "left",
    width: "100%",
    fontWeight: "500",
    fontSize: 20,
  },
  btn: {
    backgroundColor: "#1E88E5",
    color: "white",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  btnHide: {
    backgroundColor: "#EEEEEE",
    color: "white",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  btnText: {
    color: "white",
    fontSize: 14,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
