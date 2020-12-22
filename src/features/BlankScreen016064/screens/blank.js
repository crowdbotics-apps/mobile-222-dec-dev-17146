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

  state = { CheckBox_3: true, CheckBox_11: true }

  render = () => (
    <View>
      <View>
        <View>
          <CheckBox
            title="Radio button"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.CheckBox_3}
            onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
          />
        </View>
        <View>
          <CheckBox
            title="Checkbox"
            checked={this.state.CheckBox_11}
            onPress={nextChecked => this.setState({ CheckBox_11: nextChecked })}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_7: {},
  View_8: {},
  CheckBox_3: {},
  View_9: {},
  CheckBox_11: {}
})
