import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    Switch_17: true,
    CheckBox_3: true,
    CheckBox_23: true,
    CheckBox_11: true,
    Switch_15: true
  }

  render = () => (
    <View>
      <View>
        <View>
          <Switch
            trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
            style={styles.Switch_17}
            value={this.state.Switch_17}
            onValueChange={nextChecked =>
              this.setState({ Switch_17: nextChecked })
            }
          />
          <CheckBox
            title="Radio button"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.CheckBox_3}
            onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
          />
          <CheckBox
            title="Checkbox"
            checked={this.state.CheckBox_23}
            onPress={nextChecked => this.setState({ CheckBox_23: nextChecked })}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/file_example_JPG_100kB_E8y4rYP.jpg"
          }}
          style={styles.ImageBackground_9}
        >
          <CheckBox
            title="Checkbox"
            checked={this.state.CheckBox_11}
            onPress={nextChecked => this.setState({ CheckBox_11: nextChecked })}
          />
          <Switch
            trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
            style={styles.Switch_15}
            value={this.state.Switch_15}
            onValueChange={nextChecked =>
              this.setState({ Switch_15: nextChecked })
            }
          />
          <Icon name="star" />
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_7: {},
  View_8: {},
  Switch_17: { alignSelf: "flex-start" },
  CheckBox_3: {},
  CheckBox_23: {},
  ImageBackground_9: { backgroundSize: "stretch" },
  CheckBox_11: {},
  Switch_15: { alignSelf: "flex-start" },
  Icon_46: {}
})
