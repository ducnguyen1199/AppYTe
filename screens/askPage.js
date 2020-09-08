import React, { Component } from "react";
import { View, ScrollView, Button, StyleSheet } from "react-native";
import { global } from "../style/global";
import HTML from "react-native-render-html";
import User from "../components/User";
import Axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";
import AllQuestion from "../components/AllQuestion";
import api from "../config";
export default class AskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cauHoi: [],
      indexPage: 1,
      values: {
        HoTen: "",
        MSNV: "",
        Email: "",
        IDChuDe: "",
        IDTemplate: "",
        CauTraLoi_ChiTiet: [],
      },
      endPage: 1,
      isLoading: true,
      soCauHoi: 5,
    };
  }
  componentDidMount() {
    let { IDChuDe, IDTemplate } = this.state.values;
    IDChuDe = +this.props.navigation.getParam("chuDe");
    IDTemplate = this.props.navigation.getParam("template").IDTemplate;
    this.setState({ values: { ...this.state.values, IDChuDe, IDTemplate } });
    this.getCauHoi();
  }
  getCauHoi = () => {
    if (this.props.navigation.getParam("template")) {
      let temPlateLocal = this.props.navigation.getParam("template");
      Axios({
        method: "GET",
        url: api + `api/CauHoi/${temPlateLocal.IDTemplate}`,
      })
        .then((result) => {
          this.setState({
            cauHoi: result.data,
            endPage: Math.ceil(result.data.length / 5) + 1,
            isLoading: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  renderAllQuestion = () => {
    let mang = [];
    for (let i = 1; i < this.state.endPage; i++) {
      mang.push(i);
    }
    if (mang.length != 0) {
      return mang.map((item, index) => {
        return (
          <View
            style={this.state.indexPage === item + 1 ? {} : { display: "none" }}
          >
            <AllQuestion
              data={this.state.cauHoi}
              page={item}
              socauhoi={this.state.soCauHoi}
              changePage={this.changePage}
              submitData={this.submitData}
              submitQuestion={this.getDataQuestion}
              endPage={this.state.endPage}
            />
          </View>
        );
      });
    }
  };
  renderDataPage = () => {
    return (
      <View style={global.wrapper}>
        <View style={this.state.indexPage === 1 ? "" : { display: "none" }}>
          <User
            endPage={this.state.endPage}
            changePage={this.changePage}
            submitUser={this.getDataUser}
            submitData={this.submitData}
            navi={this.props.navigation}
          />
        </View>
        {this.renderAllQuestion()}
      </View>
    );
  };
  changePage = (indexPage) => {
    this.setState({
      indexPage,
    });
  };
  getDataUser = (data) => {
    let { HoTen, MSNV, Email } = this.state.values;
    data.map((item) => {
      if (item.name === "HoTen") {
        HoTen = item.CauTraLoi;
      } else if (item.name === "MSNV") {
        MSNV = item.CauTraLoi;
      } else {
        Email = item.CauTraLoi;
      }
    });
    this.setState({ values: { ...this.state.values, HoTen, MSNV, Email } });
  };
  getDataQuestion = (data) => {
    let { CauTraLoi_ChiTiet } = this.state.values;
    let CauTraLoi_ChiTietUpdate = CauTraLoi_ChiTiet.concat(data);
    this.setState({
      values: {
        ...this.state.values,
        CauTraLoi_ChiTiet: CauTraLoi_ChiTietUpdate,
      },
    });
  };
  submitData = () => {
    this.setState({ isLoading: true });
    this.props.navigation.navigate("Success");
    setTimeout(() => {
      Axios({
        method: "POST",
        url: api + "api/ApiCauTraLoi",
        data: this.state.values,
      })
        .then((result) => {
          this.setState({ isLoading: false });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 100);
  };
  renderTemplate = () => {
    return (
      <View style={global.wrapper}>
        <View style={global.inputGroup}>
          <HTML html={this.props.navigation.getParam("template").Content} />
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={global.container}>
        {this.state.isLoading ? (
          <Spinner
            visible={this.state.isLoading}
            textStyle={styles.spinnerTextStyle}
            size="large"
            overlayColor="white"
            animation="fade"
            color="#448AFF"
          />
        ) : (
          <ScrollView style={{ width: "100%" }}>
            {this.renderTemplate()}
            {this.renderDataPage()}
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
});
