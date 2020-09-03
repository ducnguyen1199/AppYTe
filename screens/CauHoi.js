import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { global } from "../style/global";

class CauHoi extends Component {
  renderhtml = () => {
    console.log(this.props.data);
    return this.props.data.map((item, index) => {
      return <Text key={index}>{item.TieuDe}</Text>;
    });
  };
  render() {
    return (
      <ScrollView style={{ minHeight: 100, maxHeight: 300, marginTop: 20 }}>
        <View style={global.inputGroup}>
          <View style={styles.contentParent}>
            <View style={styles.title}>
              <Text>Câu hỏi</Text>
            </View>
            <View style={styles.content}>
              {this.renderhtml()}
              <Text style={{ marginTop: 10 }}>
                Tổng số Câu hỏi: {this.props.data.length}
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

export default CauHoi;
