import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ heading }) => {
  //styles
  const { textStyle, rootHeader } = styles;

  return (
    <View style={rootHeader}>
      <Text style={textStyle}>{heading}</Text>
    </View>
  );
};

Header.defaultProps = {
  heading: "Albums",
};

const styles = StyleSheet.create({
  rootHeader: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#3fb591",
    shadowColor: "#202021",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
  },
  textStyle: {
    fontSize: 22,
    color: "white",
  },
});

export default Header;
