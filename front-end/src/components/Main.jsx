import ItemList from './ItemList'
import { getArtists, getSongs } from '../../api/api'
import { useEffect, useState } from 'react'

const Main = ({ type }) => {
  const [artistArray, setArtistArray] = useState([])
  const [songsArray, setSongsArray] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const artistData = await getArtists()
      const songsData = await getSongs()
      setArtistArray(artistData)
      setSongsArray(songsData)
    }

    fetchData()
  }, [])

  return (
    <div className="main">
      {type === 'artists' || type === undefined ? (
        <ItemList
          title="Artistas"
          items={8}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {type === 'songs' || type === undefined ? (
        <ItemList
          title="Músicas"
          items={16}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Main
