import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import artists from "../data/artists.json";
const HorizontallAvatars = () => {
  const { rootContainer, avatar, textStyle ,avatarView } = styles;
  return (
    <View style={rootContainer}>
      <FlatList
        data={artists}
        renderItem={({ item }) => (
          <View style={avatarView}>
            <Image source={{ uri: item.image }} style={avatar} />
            <Text style={textStyle}>
              {item.artist.length > 13
                ? item.artist.slice(0, 13) + "..."
                : item.artist}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.artist}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    // flexDirection:'row',
    // overflow: 'scroll'
  },
  avatar: {
    height: 75,
    width: 75,
    marginRight: 10,
    borderRadius: 100 / 2,
  },
  textStyle: {
    fontSize: 10,
    marginLeft: -6,
  },
  avatarView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HorizontallAvatars;
