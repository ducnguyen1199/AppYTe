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
import Spinner from "react-native-loading-spinner-overlay";
import { TouchableOpacity } from "react-native-gesture-handler";
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
    this.getTemplate(this.props.navigation.getParam("chuDe"));
  }
  getTemplate = (chuDe) => {
    let uri = chuDe ? `api/Templates/${chuDe.IDChuDe}` : `api/ApiTemplate/`;
    Axios({
      method: "GET",
      url: api + uri,
    })
      .then((result) => {
        this.setState({
          template: result.data,
          loadingTemp: false,
        });
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
              this.props.navigation.navigate("Ask", {
                chuDe: this.props.navigation.getParam("chuDe")
                  ? +this.props.navigation.getParam("chuDe").IDChuDe
                  : 1,
                template: item,
              });
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
