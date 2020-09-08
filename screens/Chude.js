import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { global } from "../style/global";

class Chude extends Component {
  renderhtml = () => {
    return this.props.data.map((item, index) => {
      return <Text key={index}>{item.TenChuDe}</Text>;
    });
  };
  render() {
    return (
      <View style={global.inputGroup}>
        <View style={styles.contentParent}>
          <View style={{ borderBottomColor: "#eeeeee", borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Chủ đề</Text>
          </View>
          <ScrollView
            style={{ minHeight: 100, maxHeight: 300, marginTop: 20 }}
            nestedScrollEnabled={true}
          >
            <View style={styles.content}>
              {this.renderhtml()}
              <Text style={{ marginTop: 10 }}>
                Tổng số chủ để: {this.props.data.length}
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

export default Chude;
