import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Linking,
} from "react-native";

const Card = ({ title, artist, thumbnail_image, image, url }) => {
  const {
    containerStyle,
    buttonStyle,
    mainImageView,
    titleText,
    mainImage,
    artistText,
    headerViewStyle,
    headerImageStyle,
    headingTexts,
  } = styles;
  return (
    <View style={containerStyle}>
      <View style={headerViewStyle}>
        <Image source={{ uri: thumbnail_image }} style={headerImageStyle} />
        <View style={headingTexts}>
          <Text style={titleText}>{title}</Text>
          <Text style={artistText}>{artist}</Text>
        </View>
      </View>
      <View style={mainImageView}>
        <Image source={{ uri: image }} style={mainImage} />
      </View>
      <View style={mainImageView}>
        <Pressable
          onPress={() => Linking.openURL(url)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#427566" : "#3fb591",
            },
            buttonStyle,
          ]}
        >
          <Text style={titleText}>Buy</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 0,
    borderRadius: 7,
    // borderColor: "#202021",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    padding: 7,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  artistText: {
    fontSize: 16,
  },
  headerViewStyle: {
    flexDirection: "row",
  },
  headerImageStyle: {
    height: 55,
    width: 55,
    borderRadius: 100 / 2,
    marginRight: 15,
  },
  headingTexts: {
    justifyContent: "space-between",
  },
  mainImageView: {
    paddingTop: 10,
    paddingRight: 0,
    paddingLeft: 0,
  },
  mainImage: {
    height: 400,
    width: null,
    borderRadius: 7,
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 7,
  },
});

export default Card;
