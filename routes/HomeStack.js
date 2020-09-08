import { createStackNavigator } from "react-navigation-stack";
import Ask from "../screens/askPage";
import Suceess from "../screens/success";
import ThongKe from "../screens/ThongKe";
import SelectChuDe from "../screens/SelectChuDe";
import SelectTemplate from "../screens/selectTemplate";
const screens = {
  SelectChuDe: {
    screen: SelectChuDe,
    navigationOptions: {
      title: "SelectChuDe",
    },
  },
  SelectTemp: {
    screen: SelectTemplate,
    navigationOptions: {
      title: "SelectTemp",
    },
  },
  Ask: {
    screen: Ask,
    navigationOptions: {
      title: "Questions",
    },
  },
  Success: {
    screen: Suceess,
    navigationOptions: {
      title: "Confirm",
    },
  },
  Dashboard: {
    screen: ThongKe,
    navigationOptions: {
      title: "Dashboard",
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
