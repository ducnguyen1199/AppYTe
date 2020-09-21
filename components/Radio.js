import React, { Component } from "react";
import { View, Text } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { global } from "../style/global";

export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      value: "",
    };
  }
  componentDidMount() {
    if (this.props.data.NoiDung[0]) {
      this.setState({
        options: this.props.data.NoiDung,
        value: this.props.data.NoiDung[0].value,
      });
      this.props.dataradio({
        IDCauHoi: this.props.data.IDCauHoi,
        CauTraLoi: this.props.data.NoiDung[0].value,
        BatBuoc: this.props.data.BatBuoc,
      });
    }
  }
  onChangeValue = (value) => {
    this.setState({ value }, () => {
      this.props.dataradio({
        IDCauHoi: this.props.data.IDCauHoi,
        CauTraLoi: value,
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
          {this.state.options.length ? (
            <RadioForm
              radio_props={this.state.options}
              onPress={(value) => {
                this.onChangeValue(value);
              }}
              buttonSize={12}
              buttonOuterSize={22}
              style={{ marginTop: 15 }}
            />
          ) : (
            <View></View>
          )}
        </View>
      </View>
    );
  }
}
