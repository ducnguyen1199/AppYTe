import React, { Component } from "react";
import { View, Text } from "react-native";
import { global } from "../style/global";
export default class Suceess extends Component {
  constructor(props) {
    super(props);
  }
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
            <View style={global.flex}>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  marginTop: 5,
                  padding: 10,
                  backgroundColor: "#59b900",
                  borderRadius: 6,
                }}
                onPress={() => {
                  this.props.navigation.navigate("ChuDeStack");
                }}
              >
                Trang chủ
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  marginTop: 5,
                  padding: 10,
                  backgroundColor: "#59b900",
                  borderRadius: 6,
                }}
                onPress={() => {
                  this.props.navigation.navigate("ThongKe", {
                    idChuDe: this.props.navigation.getParam("idChuDe"),
                    idTemplate: this.props.navigation.getParam("idTemplate"),
                  });
                }}
              >
                Xem kết quả
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
