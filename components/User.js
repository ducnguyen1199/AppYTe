import React, { Component } from "react";
import { View, Button, Text, Alert } from "react-native";
import TextBox from "./TextBox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { global } from "../style/global";
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noiDungCauHoi: [],
      valid: false,
      loaiCauHoi: [
        { name: "HoTen", IDCauHoi: 0, TieuDe: "Họ và tên", BatBuoc: true },
        { name: "MSNV", IDCauHoi: 1, TieuDe: "Mã số nhân viên", BatBuoc: true },
        { name: "Email", IDCauHoi: 2, TieuDe: "Địa chỉ Email", BatBuoc: true },
      ],
    };
  }
  renderUser = () => {
    return this.state.loaiCauHoi.map((item, index) => (
      <TextBox key={index} datatext={this.text} data={item} />
    ));
  };
  text = (data) => {
    console.log(data);
    let noiDungCauHoiUpdate = this.state.noiDungCauHoi;

    let index = this.state.noiDungCauHoi.findIndex((item) => {
      return item.IDCauHoi == data.IDCauHoi;
    });
    if (index != -1) {
      noiDungCauHoiUpdate[index] = data;
    } else {
      // post
      noiDungCauHoiUpdate = [...this.state.noiDungCauHoi, data];
    }
    this.setState(
      {
        noiDungCauHoi: noiDungCauHoiUpdate,
      },
      () => {
        this.checktext();
      }
    );
  };
  checktext = () => {
    let index = this.state.noiDungCauHoi.findIndex((item) => {
      return item.CauTraLoi === "";
    });
    this.setState({
      valid:
        this.state.loaiCauHoi.length === this.state.noiDungCauHoi.length &&
        index === -1,
    });
  };

  render() {
    return (
      <View style={{ position: "relative" }}>
        <View
          style={{
            position: "absolute",
            backgroundColor: "#2196f3",
            padding: 5,
            width: "100%",
            top: -30,
            left: 0,
            zIndex: 99999,
            paddingHorizontal: 22,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        >
          <Text style={{ fontSize: 18, color: "white" }}>
            THÔNG TIN NGƯỜI DÙNG
          </Text>
        </View>
        {this.renderUser()}
        <View style={global.flex}>
          <View style={{ width: "45%" }}>
            <View style={global.btn}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navi.navigate("Template");
                }}
              >
                <Text style={global.btnText}>Quay lại</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width: "45%" }}>
            {this.props.endpage === 1 ? (
              <View style={global.btn}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.valid) {
                      this.props.submitUser(this.state.noiDungCauHoi);
                      this.props.submitData();
                    } else {
                      Alert.alert("Vui lòng kiểm tra thông tin");
                    }
                  }}
                >
                  <Text style={global.btnText}>Hoàn tất</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={global.btn}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.valid) {
                      this.props.changePage(2);
                      this.props.submitUser(this.state.noiDungCauHoi);
                    } else {
                      Alert.alert("Vui lòng kiểm tra thông tin");
                    }
                  }}
                >
                  <Text style={global.btnText}>Tiếp</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}
