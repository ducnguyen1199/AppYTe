import { createStackNavigator } from "react-navigation-stack";
import Ask from "../screens/askPage";
import Suceess from "../screens/success";
import ThongKe from "../screens/ThongKe";
import SelectChuDe from "../screens/SelectChuDe";
import SelectTemplate from "../screens/selectTemplate";
import Header from "../components/Header";
import React from "react";
const screens = {
  SelectChuDe: {
    screen: SelectChuDe,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title={"Chủ đề"} navigation={navigation} />,
      };
    },
  },
  SelectTemp: {
    screen: SelectTemplate,
    navigationOptions: {
      title: "Template",
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
    navigationOptions: {
      title: "Xác nhận",
    },
  },
  Dashboard: {
    screen: ThongKe,
    navigationOptions: {
      title: "Thống kê",
    },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitleAlign: "left",
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#1E88E5" },
  },
});

export default HomeStack;
