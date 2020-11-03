import React from "react";
import { View } from "react-native";
import Card from "./Cards";

const AlbumList = ({ albums }) => {
  return (
    <View style={styles.rootStyle}>
      {albums.map((album) => (
        <Card
          key={album.title}
          artist={album.artist}
          title={album.title}
          thumbnail_image={album.thumbnail_image}
          image={album.image}
          url={album.url}
        />
      ))}
    </View>
  );
};

const styles = {
  rootStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 50,
  },
};

export default AlbumList;
