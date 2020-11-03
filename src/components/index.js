import React , {useState} from 'react'
import { ScrollView, View } from 'react-native'
import AlbumList from './albumList'
import HorizontalAvatars from './horizontalAvatars'
import Header from './header'

//data
import albumsData from '../data/albums.json'
import artistsData from '../data/artists.json'
const MainIndex = () => {

    const [albums , setAlbums] = useState(albumsData)
    const [artists , setArtists] = useState(artistsData)

    return(
        <View>
            <Header />
            <ScrollView>
                <HorizontalAvatars artists={artists} setAlbums={setAlbums} albums={albums} />
                <AlbumList albums={albums} />
            </ScrollView>
        </View>
    )
}

export default MainIndex