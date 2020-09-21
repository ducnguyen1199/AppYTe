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
      cauhoi: [
        {
          name: "HoTen",
          IDCauHoi: 0,
          TieuDe: "Họ và tên",
          BatBuoc: true,
          valid: true,
        },
        {
          name: "MSNV",
          IDCauHoi: 1,
          TieuDe: "Mã số nhân viên",
          BatBuoc: true,
          valid: true,
        },
        {
          name: "Email",
          IDCauHoi: 2,
          TieuDe: "Địa chỉ Email",
          BatBuoc: true,
          valid: true,
        },
      ],
    };
  }
  renderUser = () => {
    return this.state.cauhoi.map((item, index) => (
      <TextBox
        key={index}
        datatext={this.text}
        data={item}
        valid={item.valid}
      />
    ));
  };
  text = (data) => {
    let noiDungCauHoiUpdate = this.state.noiDungCauHoi;

    let { cauhoi } = this.state;
    let i = cauhoi.findIndex((item) => {
      return item.IDCauHoi == data.IDCauHoi;
    });
    if (i !== -1) {
      cauhoi[i] = data.CauTraLoi
        ? { ...cauhoi[i], valid: true }
        : { ...cauhoi[i], valid: false };
      this.setState({ cauhoi });
    }
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
        this.state.cauhoi.length === this.state.noiDungCauHoi.length &&
        index === -1,
    });
  };
  checkData = () => {
    let { cauhoi, noiDungCauHoi } = this.state;
    cauhoi = cauhoi.map((item) => {
      let index = noiDungCauHoi.findIndex(
        (i) => item.IDCauHoi == i.IDCauHoi && i.CauTraLoi
      );
      return index !== -1
        ? { ...item, valid: true }
        : { ...item, valid: false };
    });
    this.setState({
      cauhoi,
    });
  };
  render() {
    return (
      <View>
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
                      this.checkData();
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
