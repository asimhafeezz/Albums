import React from 'react'
import { View , TouchableOpacity , Image , Text , StyleSheet} from 'react-native'

const Avatar = ({ item , onAvatarPress }) => {
    const { avatar, textStyle, avatarView } = styles;
    return(
        <TouchableOpacity onPress={onAvatarPress}>
          <View style={avatarView}>
            <Image source={{ uri: item.image }} style={avatar} />
            <Text style={textStyle}>
              {item.artist.length > 13
                ? item.artist.slice(0, 13) + "..."
                : item.artist}
            </Text>
          </View>
          </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

export default Avatar