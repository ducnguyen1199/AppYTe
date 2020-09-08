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

class cautraloicheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soluongtl: 0,
      mangSL: [1, 2],
      manglabels: ["yes", "no"],
    };
  }

  componentDidMount() {
    console.log(this.props);
    let mangSL = this.props.data.NoiDung.map((item) => item.SoLg);
    let manglabels = this.props.data.NoiDung.map((item) => item.Option);
    let total = mangSL.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
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
            style={{ minHeight: 100, maxHeight: 300, marginTop: 20 }}
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
                // from react-native

                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 2, // optional, defaults to 2dp
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
              <Text style={{ marginTop: 10 }}>
                Tổng số câu trả lời : {this.state.soluongtl}
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

export default cautraloicheck;
