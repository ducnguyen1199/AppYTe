import React, { Component, PureComponent } from "react";
import {
  View,
  Picker,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { global } from "../style/global";
import Axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";
import Cauhoi from "./CauHoi";
import CauTraLoi from "./CauTraLoi";
import CauTraLoiText from "./CauTraLoiText";
import CauTraLoiRadio from "./CauTraLoiRadio";
import CauTraLoiCheck from "./CauTraLoiCheck";
import api from "../config";
import { TouchableOpacity } from "react-native-gesture-handler";

var scrollYPos = 0;
var heightWindow = Dimensions.get("window").height - 150;
var nextScreen = 1;
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
      loadingCauHoi: false,
      CauHoi: [],
      CauTraLoi: [],
      CauTraLoiText: [],
      CauTraLoiRadio: [],
      CauTraLoiCheckBox: [],
      isDetail: false,
      hideBackTop: true,
    };
  }
  componentDidMount() {
    if (
      this.props.navigation.getParam("idChuDe") &&
      this.props.navigation.getParam("idTemplate")
    ) {
      let idTemplate = this.props.navigation.getParam("idTemplate");
      this.setState({
        loadingChuDe: false,
        loadingTemp: false,
        loadingCauHoi: true,
        isDetail: true,
        templateSelected: idTemplate,
      });
      this.getCauHoi(idTemplate);
      this.getCauTraLoi(idTemplate);
      this.getCauTraLoiText(idTemplate);
      this.getCauTraLoiRadio(idTemplate);
      this.getCauTraLoiCheckBox(idTemplate);
    } else {
      this.getChuDe();
    }
  }
  scrollTop = (isBackTop) => {
    if (isBackTop) {
      nextScreen = 1;
      this.scroller.scrollTo({ x: 0, y: 1 });
      this.setState({ hideBackTop: true });
    } else {
      scrollYPos = heightWindow * nextScreen;
      this.scroller.scrollTo({ x: 0, y: scrollYPos });
    }
  };
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
  getTemplate = (id) => {
    Axios({
      method: "GET",
      url: api + `api/Templates/${id}`,
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
  getCauHoi = (id) => {
    Axios({
      method: "GET",
      url: api + `api/CauHoi/${id}`,
    })
      .then((result) => {
        this.setState(
          {
            CauHoi: result.data,
          },
          () => {
            this.checkResponse();
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getCauTraLoi = (id) => {
    Axios({
      method: "GET",
      url: api + `api/ApiTemplate_4/${id}`,
    })
      .then((result) => {
        this.setState(
          {
            CauTraLoi: result.data,
          },
          () => {
            this.checkResponse();
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getCauTraLoiText = (id) => {
    Axios({
      method: "GET",
      url: api + `api/ApiTemplate_text/${id}`,
    })
      .then((result) => {
        this.setState(
          {
            CauTraLoiText: result.data,
          },
          () => {
            this.checkResponse();
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getCauTraLoiRadio = (id) => {
    Axios({
      method: "GET",
      url: api + `api/ApiTemplate_radio/${id}`,
    })
      .then((result) => {
        this.setState(
          {
            CauTraLoiRadio: result.data,
          },
          () => {
            this.checkResponse();
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getCauTraLoiCheckBox = (id) => {
    Axios({
      method: "GET",
      url: api + `api/ApiTemplate_checkbox/${id}`,
    })
      .then((result) => {
        this.setState(
          {
            CauTraLoiCheckBox: result.data,
          },
          () => {
            this.checkResponse();
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  checkResponse = () => {
    if (
      this.state.CauHoi.length &&
      this.state.CauTraLoi.length &&
      this.state.CauTraLoiText.length &&
      this.state.CauTraLoiRadio.length &&
      this.state.CauTraLoiCheckBox.length
    )
      this.setState({
        loadingCauHoi: !(
          this.state.CauHoi.length &&
          this.state.CauTraLoi.length &&
          this.state.CauTraLoiText.length &&
          this.state.CauTraLoiRadio.length &&
          this.state.CauTraLoiCheckBox.length
        ),
      });
  };
  renderDataChuDe = () => {
    return this.state.chuDe.map((item, index) => (
      <Picker.Item label={item.TenChuDe} value={item.IDChuDe} key={index} />
    ));
  };
  renderDataTemplate = () => {
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
        loadingTemp: false,
        loadingCauHoi: true,
        CauHoi: [],
        CauTraLoi: [],
        CauTraLoiText: [],
        CauTraLoiRadio: [],
        CauTraLoiCheckBox: [],
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
  renderhtmlCauTraLoiText = () => {
    return this.state.CauTraLoiText.map((item, index) => {
      return <CauTraLoiText data={item} key={index} />;
    });
  };
  renderhtmlCauTraLoiRadio = () => {
    return this.state.CauTraLoiRadio.map((item, index) => {
      return <CauTraLoiRadio key={index} data={item} />;
    });
  };
  renderhtmlCauTraLoiCheck = () => {
    return this.state.CauTraLoiCheckBox.map((item, index) => {
      return <CauTraLoiCheck key={index} data={item} />;
    });
  };
  render() {
    let { chuDeSelected, templateSelected } = this.state;
    return (
      <View style={global.container}>
        <Spinner
          visible={
            this.state.loadingTemp ||
            this.state.loadingChuDe ||
            this.state.loadingCauHoi
          }
          textStyle={styles.spinnerTextStyle}
          size="large"
          overlayColor="#000000b3"
          animation="fade"
          color="#448AFF"
        />
        {!this.state.hideBackTop ? (
          <View
            style={{
              position: "absolute",
              bottom: 5,
              right: 5,
              alignSelf: "flex-end",
              padding: 5,
              backgroundColor: "#59b900",
              width: 50,
              height: 50,
              borderRadius: 50,
              zIndex: 999,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.scrollTop(true);
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                  lineHeight: 40,
                  textAlign: "center",
                }}
              >
                ↑
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View></View>
        )}
        <ScrollView
          style={{ width: "100%" }}
          nestedScrollEnabled={true}
          ref={(scroller) => {
            this.scroller = scroller;
          }}
          onScroll={(event) => {
            let currentY = event.nativeEvent.contentOffset.y + 1;
            nextScreen = parseInt(currentY / heightWindow) + 1;
            if (currentY >= heightWindow && this.state.hideBackTop) {
              this.setState({ hideBackTop: false });
            } else if (currentY < heightWindow && !this.state.hideBackTop) {
              this.setState({ hideBackTop: true });
            }
          }}
        >
          {!this.state.isDetail ? (
            <View style={[global.wrapper, styles.selectOption]}>
              <View style={global.inputGroup}>
                <Picker
                  selectedValue={chuDeSelected}
                  onValueChange={(itemValue) => {
                    this.onChangeChuDe(itemValue);
                  }}
                >
                  <Picker.Item
                    color={"#585858"}
                    label="Vui lòng chọn chủ đề"
                    value={-1}
                  />
                  {this.renderDataChuDe()}
                </Picker>
              </View>
              {this.state.template.length ? (
                <View style={global.inputGroup}>
                  <Picker
                    selectedValue={templateSelected}
                    onValueChange={(itemValue) => {
                      this.onChangeTemplate(itemValue);
                    }}
                  >
                    <Picker.Item
                      color={"#585858"}
                      label="Vui lòng chọn Template"
                      value={-1}
                    />
                    {this.renderDataTemplate()}
                  </Picker>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          ) : (
            <></>
          )}

          {this.state.templateSelected !== -1 ? (
            <View style={global.wrapper}>
              <Cauhoi data={this.state.CauHoi} />
              <CauTraLoi data={this.state.CauTraLoi} title="Hoten" />
              <CauTraLoi data={this.state.CauTraLoi} title="MSNV" />
              <CauTraLoi data={this.state.CauTraLoi} title="Email" />
              {this.renderhtmlCauTraLoiText()}
              {this.renderhtmlCauTraLoiRadio()}
              {this.renderhtmlCauTraLoiCheck()}
            </View>
          ) : (
            <></>
          )}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
  selectOption: {
    backgroundColor: "#e6040430",
    marginTop: 0,
    paddingTop: 10,
  },
});
