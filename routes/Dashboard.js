import { createStackNavigator } from "react-navigation-stack";

import ThongKe from "../screens/ThongKe";
import React from "react";
import Header from "../components/Header";
const screens = {
  DashboardStack: {
    screen: ThongKe,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title={"Thống kê"} navigation={navigation} />
        ),
      };
    },
  },
};
const Dashboard = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitleAlign: "left",
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#2b289a" },
  },
});

export default Dashboard;
