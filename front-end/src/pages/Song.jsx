import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Song = () => {
  const { id } = useParams()
  const { image, name, duration, artist, audio } = songsArray.filter(
    currentSongObj => currentSongObj._id === id
  )[0]

  const artistObj = artistArray.filter(
    currentArtistObj => currentArtistObj.name === artist
  )[0]

  const songsArrayFromArtist = songsArray.filter(
    currentSongObj => currentSongObj.artist === artist
  )

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  )
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id

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
