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
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props && nextProps.valid == false && nextProps) {
      this.setState(
        {
          err: nextProps.valid ? "" : "Vui lòng chọn ít nhất 1 lựa chọn",
        },
        () => {
          console.log(this.state, this.props.valid);
        }
      );
    }
  }
  onSelectionsChange = (selected) => {
    this.setState({ selected }, () => {
      this.setState({
        err: this.state.selected.length
          ? ""
          : "Vui lòng chọn ít nhất 1 lựa chọn",
      });

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
      <View
        style={
          this.state.err
            ? [global.inputGroup, global.flex, global.err]
            : [global.inputGroup, global.flex]
        }
      >
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
          <Text style={{ color: "red", height: 18 }}>{this.state.err}</Text>
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
