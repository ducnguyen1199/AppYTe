import { createStackNavigator } from "react-navigation-stack";
import Template from "../screens/selectTemplate";
import Ask from "../screens/askPage";
import Suceess from "../screens/success";
import ThongKe from "../screens/ThongKe";
const screens = {
  Template: {
    screen: Template,
    navigationOptions: {
      title: "Template",
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
const TemplateStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitleAlign: "left",
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#1E88E5" },
  },
});

export default TemplateStack;
