import React, { Component } from "react";
import {
  View,
  Picker,
  Button,
  ScrollView,
  Text,
  Linking,
  StyleSheet,
} from "react-native";
import { global } from "../style/global";
import Axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";
import api from "../config";
import HTML from "react-native-render-html";
export default class SelectTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: [],
      loadingTemp: true,
    };
  }
  componentDidMount() {
    this.getTemplate(+this.props.navigation.getParam("chuDe"));
  }
  getTemplate = (id) => {
    let uri = id ? `api/Templates/${id}` : ``;
    console.log(api + uri);
    Axios({
      method: "GET",
      url: api + uri,
    })
      .then((result) => {
        this.setState(
          {
            template: result.data,
            loadingTemp: false,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  renderListTemp = () => {
    return this.state.template.map((item, index) => {
      return (
        <View style={{ width: "100%" }} key={index}>
          <TouchableOpacity
            onPress={() => {
              console.log("ok");
              console.log({
                chuDe: +this.props.navigation.getParam("chuDe"),
                template: item,
              });
              // this.props.navigation.navigate("Ask", {
              //   chuDe: +this.props.navigation.getParam("chuDe"),
              //   template: item,
              // });
            }}
            key={index}
            style={global.box}
          >
            <HTML html={item.Content} />
          </TouchableOpacity>
        </View>
      );
    });
  };
  render() {
    return (
      <View style={global.container}>
        <Spinner
          visible={this.state.loadingTemp}
          textStyle={styles.spinnerTextStyle}
          size="large"
          overlayColor="#000000b3"
          animation="fade"
          color="#448AFF"
        />
        <ScrollView style={{ width: "100%" }}>
          <View style={global.wrapper}>{this.renderListTemp()}</View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
});
