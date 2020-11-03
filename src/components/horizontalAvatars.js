import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import albums from '../data/albums.json'
const HorizontallAvatars = ({ artists , setAlbums }) => {
  const { rootContainer, avatar, textStyle, avatarView } = styles;

  const onAvatarPress = (item) => {
    const newData = albums.filter(album => album.artist === item.artist)
    setAlbums(newData)
  }

  return (
    <View style={rootContainer}>
      <FlatList
        data={artists}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> onAvatarPress(item)}>
          <View style={avatarView}>
            <Image source={{ uri: item.image }} style={avatar} />
            <Text style={textStyle}>
              {item.artist.length > 13
                ? item.artist.slice(0, 13) + "..."
                : item.artist}
            </Text>
          </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.artist}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16
  },
  avatar: {
    height: 75,
    width: 75,
    marginRight: 10,
    borderRadius: 100 / 2,
  },
  textStyle: {
    fontSize: 10,
    marginLeft: -10,
  },
  avatarView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HorizontallAvatars;
