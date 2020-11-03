import React from 'react'
import { ScrollView, View } from 'react-native'
import AlbumList from './albumList'
import HorizontalAvatars from './horizontalAvatars'
import Header from './header'
const MainIndex = () => {
    return(
        <View>
            <Header />
            <ScrollView>
                <HorizontalAvatars />
                <AlbumList />
            </ScrollView>
        </View>
    )
}

export default MainIndex