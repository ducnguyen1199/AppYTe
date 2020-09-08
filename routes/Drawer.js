import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import TemplateStack from "./TempateStack";
import Dashboard from "./Dashboard";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Template: {
    screen: TemplateStack,
  },
  Dashboard: {
    screen: Dashboard,
  },
});
export default createAppContainer(RootDrawerNavigator);
