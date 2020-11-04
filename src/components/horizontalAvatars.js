import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import albums from '../data/albums.json'
import Avatar from './avatar'
const HorizontallAvatars = ({ artists , setAlbums }) => {
  const { rootContainer } = styles;

  const onAvatarPress = (item) => {
    if(item.artist === ''){
      setAlbums(albums)
    }
    else{
      const newData = albums.filter(album => album.artist === item.artist)
      setAlbums(newData)
    }
    
  }


  return (
    <View style={rootContainer}>
      <FlatList
        data={artists}
        renderItem={({ item }) => (
          <Avatar item={item} onAvatarPress={() => onAvatarPress(item)} />
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
  }
});

export default HorizontallAvatars;
