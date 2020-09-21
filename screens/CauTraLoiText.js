import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { global } from "../style/global";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
class CauTraLoiText extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  renderhtml = () => {
    return this.props.data.NoiDungCauTraLoi.map((item, index) => {
      return (
        <Text key={index}>
          <Text style={{ color: "#5f5f5f" }}>{index + 1}. </Text>
          {item}
        </Text>
      );
    });
  };

  render() {
    return (
      <View style={global.inputGroup}>
        <View style={styles.contentParent}>
          <View style={{ borderBottomColor: "#eeeeee", borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              {this.props.data.TenCauHoi}
            </Text>
          </View>
          <View
            style={{
              minHeight: 100,
              maxHeight: this.state.show ? 2000 : 205,
              marginTop: 20,
              overflow: "hidden",
            }}
          >
            <View style={styles.content}>{this.renderhtml()}</View>
          </View>
          {this.props.data.NoiDungCauTraLoi.length > 10 && !this.state.show ? (
            <TouchableOpacity
              onPress={() => {
                this.setState({ show: true });
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#59b900",
                    borderRadius: 8,
                    fontSize: 14,
                    alignItems: "center",
                    width: 100,
                    paddingVertical: 5,
                  }}
                >
                  Xem Thêm
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <></>
          )}

          <Text
            style={{
              marginTop: 10,
              paddingTop: 10,
              borderTopWidth: 1,
              borderTopColor: "#eeeeee",
            }}
          >
            Tổng số câu trả lời : {this.props.data.SoLuong}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    marginBottom: 5,
  },
});

export default CauTraLoiText;
