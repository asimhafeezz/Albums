import React from "react";
import { View, Text, StyleSheet , Image } from "react-native";

const Card = () => {
  const { text1, text2 , cardRoot , imgStyle } = style;

  return (
    <View style={cardRoot}>
      <Text style={text1}>Card</Text>
      <Image style={imgStyle} source={{uri: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"}} alt="img" />
      <Text style={text2}>Component</Text>
    </View>
  );
};
export default Card;

const style = StyleSheet.create({
    cardRoot:{
        
    },
    imgStyle:{
        width: 300,
        height:300
    },
  text1: {
    fontSize: 45,
    backgroundColor:'green'
  },
  text2: {
    fontSize: 30,
  },
});
