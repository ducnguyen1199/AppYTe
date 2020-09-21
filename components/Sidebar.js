import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationActions } from "react-navigation";

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        {
          title: "Chủ đề",
          navigationPath: "ChuDeStack",
          nameIcon: "tagso",
        },
        {
          title: "Template",
          navigationPath: "TemplateStack",
          nameIcon: "filetext1",
        },
        {
          title: "Thống kê",
          navigationPath: "DashboardStack",
          nameIcon: "linechart",
        },
      ],
      currentScreenIndex: 0,
    };
  }
  navigateToScreen = (route, key) => () => {
    this.setState({
      currentScreenIndex: key,
    });
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                "https://gsoft.com.vn/wp-content/uploads/2016/11/logo_new_1.png",
            }}
          />
        </View>
        <ScrollView>
          {this.state.options.map((option, key) => (
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={
                this.state.currentScreenIndex === key ? "#13dafe" : "#13dafe17"
              }
              key={key}
              style={[
                styles.option,
                {
                  backgroundColor:
                    this.state.currentScreenIndex === key ? "#13dafe" : "white",
                },
              ]}
              onPress={this.navigateToScreen(option.navigationPath, key)}
            >
              <Text
                style={[
                  styles.optionText,
                  {
                    color:
                      this.state.currentScreenIndex === key ? "white" : "black",
                  },
                ]}
              >
                <Icon
                  style={{
                    fontSize: 30,
                    color:
                      this.state.currentScreenIndex === key ? "white" : "black",
                    fontWeight: "600",
                  }}
                  name={option.nameIcon}
                  onPress={() => {
                    this.props.navigation.openDrawer();
                  }}
                />
                {"   "}
                {option.title}
              </Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Copyright © 2020 GSOFT</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  option: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  optionText: {
    alignItems: "center",
    fontSize: 18,
  },
  footerContainer: {
    padding: 10,
    backgroundColor: "#1f1a4b",
  },
  footerText: {
    fontSize: 10,
    textAlign: "center",
    color: "white",
  },
  tinyLogo: {
    width: 150,
    height: 60,
  },
});
