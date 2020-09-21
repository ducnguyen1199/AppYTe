import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { global } from "../style/global";
export default class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      err: "",
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props && nextProps.valid == false && nextProps) {
      this.setState({
        err: nextProps.valid ? "" : this.checkErr(this.state.value, nextProps),
      });
    }
  }
  Onchange = (value) => {
    this.setState(
      {
        value,
        err: this.checkErr(value, this.props),
      },
      () => {
        this.props.datatext({
          CauTraLoi: this.props.data.name && this.state.err ? "" : value,
          IDCauHoi: this.props.data.IDCauHoi,
          name: this.props.data.name ? this.props.data.name : null,
          BatBuoc: this.props.data.BatBuoc,
        });
      }
    );
  };
  checkErr = (value, props) => {
    let err = "";
    if (!this.props.data.name) {
      err = props.valid || value ? "" : "Vui lòng nhập thông tin";
    } else {
      if (value !== "") {
        switch (this.props.data.name) {
          case "Email":
            if (
              !value.match(
                "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
                  "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
              )
            ) {
              err = "email không hợp lệ";
            }
            break;
          case "HoTen":
            if (
              !value.match(
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                  "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆẾỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                  "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
              )
            ) {
              err = "Họ tên của bạn không hợp lệ";
            }
            break;
          case "MSNV":
          default:
            break;
        }
      } else {
        err = "Vui lòng nhập thông tin";
      }
    }
    return err;
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
          <TextInput
            placeholder="Vui lòng nhập thông tin"
            style={styles.input}
            onChangeText={this.Onchange}
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
