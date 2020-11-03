import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Card = ({ title , artist , thumbnail_image , image }) => {
  const { containerStyle , mainImageView , titleText , mainImage , artistText , headerViewStyle , headerImageStyle , headingTexts } = styles;
  return (
    <View style={containerStyle}>
      <View style={headerViewStyle}>
        <Image source={{uri: thumbnail_image}} style={headerImageStyle} />
        <View style={headingTexts}>
        <Text style={titleText}>{title}</Text>
        <Text style={artistText}>{artist}</Text>
      </View>
      </View>
        <View style={mainImageView}>
        <Image source={{uri: image}} style={mainImage} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#202021",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    padding: 10
  },
  titleText:{
    fontSize: 20
  },
  artistText:{
    fontSize: 16
  },
  headerViewStyle:{
    flexDirection: 'row',
  },
  headerImageStyle:{
    height: 55,
    width: 55,
    borderRadius: 100 / 2,
    marginRight: 15
  },
  headingTexts:{
    justifyContent: 'space-between'
  },
  mainImageView:{
    paddingTop: 10,
    paddingRight:3,
    paddingLeft: 3,
    paddingBottom: 10
  },
  mainImage:{
    height: 300,
    width: null,
    borderRadius: 10
  }
});

export default Card;
