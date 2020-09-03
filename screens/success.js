import React, { Component } from "react";
import { View, Text } from "react-native";
import { global } from "../style/global";
export default class Suceess extends Component {
  render() {
    return (
      <View style={global.container}>
        <View style={global.wrapper}>
          <View style={global.inputGroup}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              Tờ khai báo y tế tự nguyện công ty GSOFT và GOBRANDING
            </Text>
            <Text style={{ marginVertical: 7 }}>
              Câu trả lời của bạn đã được ghi lại.
            </Text>
            <Text
              style={{ color: "#0000ee" }}
              onPress={() => {
                this.props.navigation.navigate("Template");
              }}
            >
              Quay về trang chủ
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
