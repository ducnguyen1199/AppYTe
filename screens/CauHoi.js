import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { global } from "../style/global";

class CauHoi extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps != this.props;
  }
  renderhtml = () => {
    return this.props.data.map((item, index) => {
      return (
        <Text key={index}>
          <Text style={{ color: "#5f5f5f" }}>{index + 1}. </Text>
          {item.TieuDe}
        </Text>
      );
    });
  };
  render() {
    return (
      <View style={global.inputGroup}>
        <View>
          <View style={{ borderBottomColor: "#eeeeee", borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Câu hỏi</Text>
          </View>
          <ScrollView
            style={{ minHeight: 100, maxHeight: 300, marginTop: 20 }}
            nestedScrollEnabled={true}
          >
            <View style={styles.content}>
              {this.renderhtml()}
              <Text style={{ marginTop: 10 }}>
                Tổng số Câu hỏi: {this.props.data.length}
              </Text>
            </View>
          </ScrollView>
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

export default CauHoi;
