import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { global } from "../style/global";

class CauTraLoi extends Component {
  renderhtml = () => {
    switch (this.props.title) {
      case "Hoten":
        return this.props.data.map((item, index) => {
          return <Text key={index}> {item.Hoten}</Text>;
        });
      case "MSNV":
        return this.props.data.map((item, index) => {
          return <Text key={index}> {item.MSNV}</Text>;
        });
      case "Email":
        return this.props.data.map((item, index) => {
          return <Text key={index}> {item.Email}</Text>;
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
            <ScrollView
              style={{ minHeight: 100, maxHeight: 300, marginTop: 20 }}
              nestedScrollEnabled={true}
            >
              <View style={styles.content}>
                {this.renderhtml()}
                <Text style={{ marginTop: 10 }}>
                  Tổng số {this.props.title} : {this.props.data.length}
                </Text>
              </View>
            </ScrollView>
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
