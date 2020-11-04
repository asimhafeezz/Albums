import React from "react";
import { Text, View } from "react-native";
import Card from "./Cards";

const AlbumList = ({ albums }) => {
  return albums.length === 0 ? <View style={{alignItems:"center" , justifyContent:'center', flex: 1 , fontSize:25 , marginTop:200}}><Text>No Album Found!</Text></View> : (
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
