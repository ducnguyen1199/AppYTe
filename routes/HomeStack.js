import { createStackNavigator } from "react-navigation-stack";
import Ask from "../screens/askPage";
import Suceess from "../screens/success";
import ThongKe from "../screens/ThongKe";
import SelectChuDe from "../screens/SelectChuDe";
import SelectTemplate from "../screens/selectTemplate";
import Header from "../components/Header";
import React from "react";
const screens = {
  ChuDeStack: {
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
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitleAlign: "left",
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#2b289a" },
  },
});

export default HomeStack;
