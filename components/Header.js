import React, { Component } from "react";
import { Text, View } from "react-native";
import { global } from "../style/global";
import Icon from "react-native-vector-icons/EvilIcons";
export default class Header extends Component {
  render() {
    return (
      <View style={global.flex}>
        {this.props.title !== "Xác nhận" ? (
          <Icon
            style={{
              fontSize: 30,
              color: "white",
              fontWeight: "600",
            }}
            name="navicon"
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          />
        ) : (
          <></>
        )}

        <Text
          style={{
            fontSize: 22,
            color: "white",
            fontWeight: "600",
          }}
        >
          {this.props.title}
        </Text>
        {this.props.title !== "Xác nhận" ? (
          <Icon
            style={{
              fontSize: 30,
              color: "transparent",
              fontWeight: "600",
            }}
            name="navicon"
          />
        ) : (
          <></>
        )}
      </View>
    );
  }
}
