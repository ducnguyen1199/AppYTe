import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { global } from "../style/global";

class CauTraLoiText extends Component {
  renderhtml = () => {
    return this.props.data.NoiDungCauTraLoi.map((item, index) => {
      return <Text key={index}>{item}</Text>;
    });
  };
  render() {
    return (
      <ScrollView style={{ minHeight: 100, maxHeight: 300, marginTop: 20 }}>
        <View style={global.inputGroup}>
          <View style={styles.contentParent}>
            <View style={styles.title}>
              <Text>{this.props.data.TenCauHoi}</Text>
            </View>
            <View style={styles.content}>
              {this.renderhtml()}
              <Text style={{ marginTop: 10 }}>
                Tổng số câu trả lời : {this.props.data.SoLuong}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
