import React, { Component } from "react";
import TextBox from "./TextBox";
import { View, Button, Text, Alert } from "react-native";
import Radio from "./Radio";
import CheckBox from "./CheckBox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { global } from "../style/global";
export default class AllQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cauhoi: [],
      noiDungCauHoi: [],
      valid: false,
    };
  }
  componentDidMount() {
    this.cauhoi();
  }
  cauhoi = () => {
    let { page, socauhoi, data } = this.props;
    let max = data.length;
    let mang = [];
    for (let i = (page - 1) * socauhoi; i < socauhoi * page; i++) {
      if (i == max) {
        break;
      } else {
        mang.push({ ...data[i], valid: false });
      }
    }
    this.setState(
      {
        cauhoi: mang,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  renderQuestion = () => {
    return this.state.cauhoi.map((item, index) => {
      switch (item.DangCauHoi) {
        case "TextBox":
          return (
            <TextBox
              key={index}
              datatext={this.dataPost}
              data={item}
              valid={item.valid}
            />
          );

        case "CheckBox":
          return (
            <CheckBox
              key={index}
              datacheck={this.dataPost}
              data={item}
              valid={item.valid}
            />
          );

        case "RadioButton":
          return (
            <Radio
              key={index}
              dataradio={this.dataPost}
              data={item}
              valid={item.valid}
            />
          );

        default:
          break;
      }
    });
  };

  dataPost = (data) => {
    console.log(data);
    let { noiDungCauHoi, cauhoi } = this.state;
    let i = cauhoi.findIndex((item) => {
      return item.IDCauHoi == data.IDCauHoi;
    });
    if (i !== -1) {
      cauhoi[i] = data
        ? { ...cauhoi[i], valid: true }
        : { ...cauhoi[i], valid: false };
    }

    let index = noiDungCauHoi.findIndex((item) => {
      return item.IDCauHoi == data.IDCauHoi;
    });
    if (index != -1) {
      noiDungCauHoi[index] = data;
    } else {
      noiDungCauHoi.push(data);
    }
    this.setState({ noiDungCauHoi }, () => {
      this.check();
    });
  };

  check = () => {
    let valid;
    let index = this.state.noiDungCauHoi.findIndex((item) => {
      return item.CauTraLoi === "";
    });
    if (
      this.state.cauhoi.length === this.state.noiDungCauHoi.length &&
      index === -1
    ) {
      valid = true;
    } else {
      valid = false;
    }
    this.setState({
      valid,
    });
  };
  checkData = () => {};
  render() {
    return (
      <View style={{ position: "relative" }}>
        {this.renderQuestion()}
        <View style={global.flex}>
          <View style={{ width: "45%" }}>
            <View style={global.btn}>
              <TouchableOpacity
                onPress={() => {
                  this.props.changePage(this.props.page);
                }}
              >
                <Text style={global.btnText}>Quay lai</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width: "45%" }}>
            <View style={global.btn}>
              {this.props.endPage === this.props.page + 1 ? (
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.valid) {
                      this.props.submitQuestion(this.state.noiDungCauHoi);
                      this.props.submitData();
                    } else {
                      Alert.alert("Vui lòng kiểm tra thông tin");
                    }
                  }}
                >
                  <Text style={global.btnText}>Hoàn tất</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.valid) {
                      this.props.changePage(this.props.page + 2);
                      this.props.submitQuestion(this.state.noiDungCauHoi);
                    } else {
                      this.checkData();
                      Alert.alert("Vui lòng kiểm tra thông tin");
                    }
                  }}
                >
                  <Text style={global.btnText}>Tiếp</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
