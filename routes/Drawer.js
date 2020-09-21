import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import TemplateStack from "./TempateStack";
import Dashboard from "./Dashboard";
import Sidebar from "../components/Sidebar";
import { Dimensions } from "react-native";

const RootDrawerNavigator = createDrawerNavigator(
  {
    chuDe: {
      screen: HomeStack,
      navigationOptions: {
        title: "Chủ đề",
      },
    },
    Template: {
      screen: TemplateStack,
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        title: "Thống kê",
      },
    },
  },
  {
    contentComponent: Sidebar,
    drawerWidth: Dimensions.get("window").width - 120,
  }
);
export default createAppContainer(RootDrawerNavigator);
