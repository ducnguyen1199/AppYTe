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

import Chude from "./Chude";
import Template from "./Template";
import Cauhoi from "./CauHoi";
import CauTraLoi from "./CauTraLoi";
import CauTraLoiText from "./CauTraLoiText";
export default class thongke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chuDe: [],
      template: [],
      chuDeSelected: -1,
      templateSelected: -1,
      loadingChuDe: true,
      loadingTemp: false,
      CauHoi: [],
      CauTraLoi: [],
      CauTraLoiText: [],
      CauTraLoiRadio: [],
      CauTraLoiCheckBox: [],
    };
  }
  componentDidMount() {
    this.getChuDe();
  }

  //  Get api

  getChuDe = () => {
    Axios({
      method: "GET",
      url: `https://76e17bf2e870.ngrok.io/api/ApiChuDe`,
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
  getTemplate = (id) => {
    Axios({
      method: "GET",
      url: `https://76e17bf2e870.ngrok.io/api/Templates/${id}`,
    })
      .then((result) => {
        console.log(result.data);
        this.setState({
          template: result.data,
          loadingTemp: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getCauHoi = (id) => {
    Axios({
      method: "GET",
      url: `https://76e17bf2e870.ngrok.io/api/CauHoi/${id}`,
    })
      .then((result) => {
        this.setState({
          CauHoi: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getCauTraLoi = (id) => {
    Axios({
      method: "GET",
      url: `https://76e17bf2e870.ngrok.io/api/ApiTemplate_4/${id}`,
    })
      .then((result) => {
        this.setState({
          CauTraLoi: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getCauTraLoiText = (id) => {
    Axios({
      method: "GET",
      url: `https://76e17bf2e870.ngrok.io/api/ApiTemplate_text/${id}`,
    })
      .then((result) => {
        this.setState({
          CauTraLoiText: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getCauTraLoiRadio = (id) => {
    Axios({
      method: "GET",
      url: `https://76e17bf2e870.ngrok.io/api/ApiTemplate_radio/${id}`,
    })
      .then((result) => {
        this.setState({
          CauTraLoiRadio: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getCauTraLoiCheckBox = (id) => {
    Axios({
      method: "GET",
      url: `https://76e17bf2e870.ngrok.io/api/ApiTemplate_checkbox/7`,
    })
      .then((result) => {
        console.log(result.data);
        this.setState({
          CauTraLoiCheckBox: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //
  renderDataChuDe = () => {
    return this.state.chuDe.map((item, index) => (
      <Picker.Item label={item.TenChuDe} value={item.IDChuDe} key={index} />
    ));
  };
  renderDataTemplate = () => {
    console.log(this.state.template);
    return this.state.template.map((item, index) => (
      <Picker.Item
        label={item.TenTemplate}
        value={item.IDTemplate}
        key={index}
      />
    ));
  };
  onChangeChuDe = (value) => {
    this.setState(
      {
        chuDeSelected: value,
        templateSelected: -1,
        template: [],
        loadingTemp: true,
      },
      () => {
        this.getTemplate(value);
      }
    );
  };
  onChangeTemplate = (value) => {
    this.setState(
      {
        templateSelected: value,
      },
      () => {
        this.getCauHoi(value);
        this.getCauTraLoi(value);
        this.getCauTraLoiText(value);
        this.getCauTraLoiRadio(value);
        this.getCauTraLoiCheckBox(value);
      }
    );
  };
  onNextPage = () => {
    this.props.navigation.navigate("Ask", {
      chuDe: this.state.chuDeSelected,
      template: this.state.template.find(
        (item) => item.IDTemplate === +this.state.templateSelected
      ),
    });
  };

  //
  renderhtmlCauTraLoiText = () => {
    return this.state.CauTraLoiText.map((item, index) => {
      return <CauTraLoiText key={index} data={item} />;
    });
  };
  render() {
    let { chuDeSelected, templateSelected } = this.state;
    return (
      <View style={global.container}>
        <Spinner
          visible={this.state.loadingTemp || this.state.loadingChuDe}
          textStyle={styles.spinnerTextStyle}
          size="large"
          overlayColor="#000000b3"
          animation="fade"
          color="#448AFF"
        />
        <ScrollView style={{ width: "100%" }}>
          <View style={global.wrapper}>
            <View style={global.inputGroup}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                Tờ khai báo tự nguyện công ty GSOFT và GOBRANDING
              </Text>
              <Text style={{ marginTop: 10, color: "#484848" }}>
                Bằng cách khai báo y tế trên ứng dụng NCOVI, mỗi chúng ta đã
                đóng góp phần công sức vào công cuộc phòng và chống đại dịch cúm
                Corona, giúp các cơ quan nhà nước, Bộ Y Tế có thể thống kê, kiểm
                soát tình hình và thực hiện các biện pháp cách ly chính xác và
                nhanh chóng, trách lây lan. Trước tình hình đại dịch cúm Corona
                hay Covid-19 đang lây lan ngày một nhanh hơn, chiều 9/3, Bộ Y Tế
                kết hợp Bộ Thông tin và Truyền thông đã tiến hành mở dịch vụ
                khai báo y tế trên ứng dụng NCOVI(hay nCoV) và Vietnam Health
                Declaration hỗ trợ khai báo y tế, nâng cao công tác phòng chống
                dịch. Các bạn có thể tải app tại 2 địa chỉ:
              </Text>
              <Text
                style={{ color: "#0000ee" }}
                onPress={() =>
                  Linking.openURL(
                    "https://play.google.com/store/apps/details?id=com.vnptit.innovation.ncovi"
                  )
                }
              >
                https://play.google.com/store/apps/details?id=com.vnptit.innovation.ncovi
              </Text>
              <Text
                style={{ color: "#0000ee" }}
                onPress={() =>
                  Linking.openURL(
                    "https://apps.apple.com/vn/app/ncovi/id1501934178"
                  )
                }
              >
                https://apps.apple.com/vn/app/ncovi/id1501934178
              </Text>
              <Text style={{ color: "#d93025", marginTop: 10 }}>*Bắt buộc</Text>
            </View>
            <View style={{ ...global.inputGroup, ...global.flex }}>
              <Picker
                selectedValue={chuDeSelected}
                style={{ width: "40%" }}
                onValueChange={(itemValue) => {
                  this.onChangeChuDe(itemValue);
                }}
              >
                <Picker.Item label="Chủ đề" value={-1} />
                {this.renderDataChuDe()}
              </Picker>
              <Picker
                selectedValue={templateSelected}
                style={{ width: "40%" }}
                onValueChange={(itemValue) => {
                  this.onChangeTemplate(itemValue);
                }}
                enabled={this.state.template.length !== 0}
              >
                <Picker.Item label="Template" value={-1} />
                {this.renderDataTemplate()}
              </Picker>
            </View>
            {this.state.templateSelected !== -1 ? (
              <View style={styles.content}>
                <Chude data={this.state.chuDe} />
                <Template data={this.state.template} />
                <Cauhoi data={this.state.CauHoi} />
                <CauTraLoi data={this.state.CauTraLoi} title="Hoten" />
                <CauTraLoi data={this.state.CauTraLoi} title="MSNV" />
                <CauTraLoi data={this.state.CauTraLoi} title="Email" />
                {this.renderhtmlCauTraLoiText()}
              </View>
            ) : (
              <Text></Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
  content: {
    margin: 10,
    marginTop: 30,
  },
});
