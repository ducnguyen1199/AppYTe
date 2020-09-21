import { createStackNavigator } from "react-navigation-stack";
import Ask from "../screens/askPage";
import Suceess from "../screens/success";
import ThongKe from "../screens/ThongKe";
import SelectTemplate from "../screens/selectTemplate";
import Header from "../components/Header";
import React from "react";
const screens = {
  TemplateStack: {
    screen: SelectTemplate,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title={"Template"} navigation={navigation} />
        ),
      };
    },
  },
  Ask: {
    screen: Ask,
    navigationOptions: {
      title: "Câu hỏi",
    },
  },
  Success: {
    screen: Suceess,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title={"Xác nhận"} navigation={navigation} />
        ),
      };
    },
  },
  ThongKe: {
    screen: ThongKe,
    navigationOptions: {
      title: "Kết quả",
    },
  },
};
const TemplateStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitleAlign: "left",
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#2b289a" },
  },
});

export default TemplateStack;
