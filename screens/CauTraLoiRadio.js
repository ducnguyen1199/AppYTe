import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { global } from "../style/global";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

class cautraloiradio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soluongtl: 0,
      mangSL: [1, 2],
      manglabels: ["yes", "no"],
      width: Dimensions.get("window").width * (this.isPor() ? 0.84 : 0.91),
    };
    Dimensions.addEventListener("change", () => {
      this.setState({
        width: Dimensions.get("window").width * (this.isPor() ? 0.84 : 0.91),
      });
    });
  }
  isPor = () => {
    const screen = Dimensions.get("screen");
    return screen.height >= screen.width;
  };
  componentDidMount() {
    let mangSL = this.props.data.NoiDung.map((item) => item.SoLuong);
    let manglabels = this.props.data.NoiDung.map((item) => item.TenSub);
    let total = this.props.data.NoiDung.reduce((sum, item) => {
      return sum + item.SoLuong;
    }, 0);
    this.setState({
      soluongtl: total,
      mangSL,
      manglabels,
    });
  }

  renderhtml = () => {};

  render() {
    return (
      <View style={global.inputGroup}>
        <View>
          <View style={{ borderBottomColor: "#eeeeee", borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              {this.props.data.TenCauHoi}
            </Text>
          </View>
          <ScrollView
            style={{ minHeight: 100, maxHeight: 2000, marginTop: 20 }}
            nestedScrollEnabled={true}
          >
            <View style={styles.content}>
              <LineChart
                data={{
                  labels: this.state.manglabels,
                  datasets: [
                    {
                      data: this.state.mangSL,
                    },
                  ],
                }}
                width={this.state.width} // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          </ScrollView>
          <Text
            style={{
              marginTop: 10,
              paddingTop: 10,
              borderTopWidth: 1,
              borderTopColor: "#eeeeee",
            }}
          >
            Tổng số câu trả lời : {this.state.soluongtl}
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

export default cautraloiradio;
