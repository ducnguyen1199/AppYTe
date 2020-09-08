import React, { Component } from "react";
import { Text, View } from "react-native";
import { global } from "../style/global";
import Icon from "react-native-vector-icons/EvilIcons";
export default class Header extends Component {
  render() {
    return (
      <View style={global.flex}>
        <Icon
          style={{ fontSize: 22, color: "white", fontWeight: "600" }}
          name="navicon"
          onPress={() => {
            console.log("ok");
            this.props.navigation.openDrawer();
          }}
        />
        <Text style={{ fontSize: 22, color: "white", fontWeight: "600" }}>
          {this.props.title}
        </Text>
        <Text></Text>
      </View>
    );
  }
}
