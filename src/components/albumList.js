import React from "react";
import { View } from "react-native";
import albums from "../data/albums.json";
import Card from './Cards'

const AlbumList = () => {
  return (
    <View style={styles.rootStyle}>
      {albums.map((album) => (
        <Card key={album.title}>{album.title}</Card>
      ))}
    </View>
  );
};

const styles = {
    rootStyle: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10
    }
}

export default AlbumList;
