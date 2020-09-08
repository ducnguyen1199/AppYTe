import { createStackNavigator } from "react-navigation-stack";

import ThongKe from "../screens/ThongKe";

const screens = {
  Dashboard: {
    screen: ThongKe,
    navigationOptions: {
      title: "Dashboard",
    },
  },
};
const Dashboard = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitleAlign: "left",
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#1E88E5" },
  },
});

export default Dashboard;
