import React, { Component } from "react";
import TextBox from "./TextBox";
import { View, Text } from "react-native";
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
        mang.push({ ...data[i], valid: true });
      }
    }
    this.setState({
      cauhoi: mang,
    });
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
    let { noiDungCauHoi, cauhoi } = this.state;
    let i = cauhoi.findIndex((item) => {
      return item.IDCauHoi == data.IDCauHoi;
    });
    if (i !== -1) {
      cauhoi[i] = data.CauTraLoi
        ? { ...cauhoi[i], valid: true }
        : { ...cauhoi[i], valid: false };
      this.setState({ cauhoi });
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

    let mangTrue = this.state.cauhoi.filter((item) => {
      return item.BatBuoc === true;
    });

    let mangNoiDungCauHoi = this.state.noiDungCauHoi.filter((item) => {
      return item.BatBuoc === true;
    });
    if (mangTrue.length === mangNoiDungCauHoi.length && index === -1) {
      valid = true;
    } else {
      valid = false;
    }
    this.setState({
      valid,
    });
  };
  checkData = () => {
    let { cauhoi, noiDungCauHoi } = this.state;
    cauhoi = cauhoi.map((item) => {
      if (!item.BatBuoc) {
        return { ...item, valid: true };
      } else {
        let index = noiDungCauHoi.findIndex(
          (i) => item.IDCauHoi == i.IDCauHoi && i.CauTraLoi
        );
        return index !== -1
          ? { ...item, valid: true }
          : { ...item, valid: false };
      }
    });
    this.setState({
      cauhoi,
    });
  };
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
                <Text style={global.btnText}>Quay lại</Text>
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
                      this.checkData();
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
