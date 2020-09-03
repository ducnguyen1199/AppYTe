import { createStackNavigator } from "react-navigation-stack";
import Template from "./screens/selectTemplate";
import Ask from "./screens/askPage";
import { createAppContainer } from "react-navigation";
import Suceess from "./screens/success";
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
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitleAlign: "left",
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#1E88E5" },
  },
});

export default createAppContainer(HomeStack);
