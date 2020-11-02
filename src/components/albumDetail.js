import React from "react";
import { Text } from "react-native";
import albums from "../data/albums.json";
import Card from './Cards'

const AlbumList = () => {
  return (
    <Card>
      {albums.map((album) => (
        <Text key={album.title}>{album.title}</Text>
      ))}
    </Card>
  );
};

export default AlbumList;
