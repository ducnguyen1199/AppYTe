import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { global } from "../style/global";
import SelectMultiple from "react-native-select-multiple";
export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      err: "",
    };
  }
  onSelectionsChange = (selected) => {
    this.setState({ selected }, () => {
      let reduce = this.state.selected.reduce((sum, item, index) => {
        return sum + (index !== 0 ? "," : "") + item.value;
      }, "");
      this.props.datacheck({
        IDCauHoi: this.props.data.IDCauHoi,
        CauTraLoi: reduce,
      });
    });
  };
  render() {
    return (
      <View style={{ ...global.inputGroup, ...global.flex }}>
        <View style={{ width: "100%" }}>
          <Text style={global.titleCauHoi}>
            {this.props.data.TieuDe}{" "}
            <Text style={{ color: "rgb(217, 48, 37)" }}>
              {this.props.data.BatBuoc ? "*" : ""}
            </Text>
          </Text>

          <SelectMultiple
            items={this.props.data.NoiDung}
            selectedItems={this.state.selected}
            onSelectionsChange={this.onSelectionsChange}
          />
          <Text>{this.state.err}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    marginTop: 20,
    borderBottomWidth: 1,
    width: "100%",
  },
});
