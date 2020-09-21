import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { global } from "../style/global";
import { TouchableOpacity } from "react-native-gesture-handler";

class CauTraLoi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  renderhtml = () => {
    switch (this.props.title) {
      case "Hoten":
        return this.props.data.map((item, index) => {
          return (
            <Text key={index}>
              <Text style={{ color: "#5f5f5f" }}>{index + 1}. </Text>
              {item.Hoten}
            </Text>
          );
        });
      case "MSNV":
        return this.props.data.map((item, index) => {
          return (
            <Text key={index}>
              <Text style={{ color: "#5f5f5f" }}>{index + 1}. </Text>
              {item.MSNV}
            </Text>
          );
        });
      case "Email":
        return this.props.data.map((item, index) => {
          return (
            <Text key={index}>
              <Text style={{ color: "#5f5f5f" }}>{index + 1}. </Text>
              {item.Email}
            </Text>
          );
        });
      default:
        break;
    }
  };
  render() {
    return (
      <SafeAreaView>
        <View style={global.inputGroup}>
          <View style={styles.contentParent}>
            <View
              style={{ borderBottomColor: "#eeeeee", borderBottomWidth: 1 }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                {this.props.title}
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
            {this.props.data > 10 && this.state.show ? (
              <TouchableOpacity
                onPress={() => {
                  this.setState({ show: true });
                }}
              >
                <View style={{ width: "100%", padding: 10 }}>
                  <Text style={{ textAlign: "center", color: "#5f5f5f" }}>
                    {!this.state.show ? "Xem thêm..." : "Ẩn bớt..."}
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
              Tổng số {this.props.title} : {this.props.data.length}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    marginBottom: 5,
  },
});

export default CauTraLoi;
