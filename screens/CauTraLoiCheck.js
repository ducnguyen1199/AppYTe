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

var colorArr = [
  "#ff000070",
  "#2700ff70",
  "#ff00c870",
  "#04ff0070",
  "#00ffdc70",
  "#ff520070",
  "#efff0070",
  "#b944a070",
  "#b9444470",
  "#4493b970",
  "#4b44b970",
  "#8cb94470",
  "#44b95870",
  "#b98a4470",
  "#b9ab4470",
];

class cautraloicheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get("window").width * (this.isPor() ? 0.86 : 0.86),
      data: [],
      soluongtl: 0,
    };
    Dimensions.addEventListener("change", () => {
      this.setState({
        width: Dimensions.get("window").width * (this.isPor() ? 0.86 : 0.86),
      });
    });
  }
  isPor = () => {
    const screen = Dimensions.get("screen");
    return screen.height >= screen.width;
  };
  componentDidMount() {
    let { data } = this.state;
    data = this.props.data.NoiDung.map((item, index) => {
      return {
        name: item.Option,
        population: item.SoLg,
        color: colorArr[index],
        legendFontColor: "#7F7F7F",
        legendFontSize: 10,
      };
    });
    let total = this.props.data.NoiDung.reduce((sum, item) => {
      return sum + item.SoLg;
    }, 0);

    this.setState({
      data,
      soluongtl: total,
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
            style={{
              minHeight: 100,
              maxHeight: 2000,
              marginTop: 20,
            }}
            nestedScrollEnabled={true}
          >
            <View style={styles.content}>
              <PieChart
                data={this.state.data}
                width={Dimensions.get("window").width * 0.76}
                height={220}
                chartConfig={{
                  width: 100,
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                    width: 100,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
                bezier
                style={{
                  width: 100,
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                xAxisLabel="Append"
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

export default cautraloicheck;
