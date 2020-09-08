import { createStackNavigator } from "react-navigation-stack";
import Ask from "../screens/askPage";
import Suceess from "../screens/success";
import ThongKe from "../screens/ThongKe";
import SelectTemplate from "../screens/selectTemplate";
import Header from "../components/Header";
import React from "react";
const screens = {
  Template: {
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
    navigationOptions: {
      title: "Xác nhận",
    },
  },
  Dashboard: {
    screen: ThongKe,
    navigationOptions: {
      title: "Thông kê",
    },
  },
};
const TemplateStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitleAlign: "left",
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#1E88E5" },
  },
});

export default TemplateStack;
