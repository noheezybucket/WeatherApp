import React from "react";
import { StyleSheet, View, Text } from "react-native";

const RowText = ({
  messageOne,
  messageTwo,
  messageOneStyles,
  messageTwoStyles,
  containerStyles,
}) => {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default RowText;
