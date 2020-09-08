import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import TemplateStack from "./TempateStack";
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Template: {
    screen: TemplateStack,
  },
});
export default createAppContainer(RootDrawerNavigator);
