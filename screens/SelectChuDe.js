import React, { Component } from "react";
import { Text, View } from "react-native";
import Axios from "axios";
import api from "../config";
import { global } from "../style/global";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";
export default class SelectChuDe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chuDe: [],
      loadingChuDe: true,
    };
  }
  componentDidMount() {
    this.getChuDe();
  }
  getChuDe = () => {
    Axios({
      method: "GET",
      url: api + `api/ApiChuDe`,
    })
      .then((result) => {
        this.setState({
          chuDe: result.data,
          loadingChuDe: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  renderListTopic = () => {
    return this.state.chuDe.map((item, index) => {
      return (
        <View style={{ width: "100%" }} key={index}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SelectTemp", {
                chuDe: item.IDChuDe,
              });
            }}
            key={index}
            style={global.box}
          >
            <Text style={global.boxTitle}>{item.TenChuDe}</Text>
            <Text style={global.boxDes} numberOfLines={2}>
              {item.MoTa}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  };
  render() {
    return (
      <View style={global.container}>
        <Spinner
          visible={this.state.loadingChuDe}
          textStyle={{ color: "#FFF" }}
          size="large"
          overlayColor="#000000b3"
          animation="fade"
          color="#448AFF"
        />
        <ScrollView style={{ width: "100%" }}>
          <View style={global.wrapper}>
            <View style={global.flex}>{this.renderListTopic()}</View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
