import React from "react";
import { ScrollView, View } from "react-native";
import albums from "../data/albums.json";
import Card from './Cards'

const AlbumList = () => {
  return (
    <ScrollView>
    <View style={styles.rootStyle}>
      {albums.map((album) => (
        <Card key={album.title} artist={album.artist} title={album.title} thumbnail_image={album.thumbnail_image} image={album.image} />
      ))}
    </View>
    </ScrollView>
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
