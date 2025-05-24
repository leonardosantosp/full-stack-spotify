import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArtists, getSongs } from '../../api/api'

const Song = () => {
  const { id } = useParams()
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

  if (songsArray.length === 0 || artistArray.length === 0) {
    return <p>Carregando...</p>
  }

  const currentSong = songsArray.find(song => song._id === id)

  if (!currentSong) {
    return <p>Música não encontrada</p>
  }

  const { image, name, duration, artist, audio } = currentSong

  const artistObj = artistArray.find(artistItem => artistItem.name === artist)

  if (!artistObj) {
    return <p>Artista não encontrado</p>
  }

  const songsArrayFromArtist = songsArray.filter(song => song.artist === artist)
  let randomIdFromArtist = null
  if (songsArrayFromArtist.length > 1) {
    const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length)
    randomIdFromArtist = songsArrayFromArtist[randomIndex]._id
  }

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt="Capa do Álbum" />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className=" song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`"Imagem do artista ${artist}`}
          />
        </Link>
        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          audio={audio}
        />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
        <div className="song__name"></div>
      </div>
    </div>
  )
}

export default Song
