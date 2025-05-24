import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SongList from '../components/SongList'
import { getArtists, getSongs } from '../../api/api'
import { LoadingScreen } from '../components/LoadingScreen'

const Artist = () => {
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

  if (artistArray.length === 0 || songsArray.length === 0) {
    return <LoadingScreen />
  }

  const artistObj = artistArray.find(artist => artist._id === id)

  if (!artistObj) {
    return <p>Artista não encontrado</p>
  }

  const { name, banner } = artistObj

  const songsArrayFromArtist = songsArray.filter(song => song.artist === name)

  if (songsArrayFromArtist.length === 0) {
    return (
      <div className="artist">
        <div
          className="artist__header"
          style={{
            backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`
          }}
        >
          <h2 className="artist__title">{name}</h2>
        </div>
        <p>Sem músicas disponíveis para este artista.</p>
      </div>
    )
  }

  // Gerar índice aleatório dentro do range válido
  const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length)
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id

  return (
    <>
      <div className="artist">
        <div
          className="artist__header"
          style={{
            backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`
          }}
        >
          <h2 className="artist__title">{name}</h2>
        </div>
        <div className="artist__body">
          <h2>Populares</h2>
          <SongList songsArray={songsArrayFromArtist} />
        </div>
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon
            className=" single-item__icon single-item__icon--artist"
            icon={faCirclePlay}
          />
        </Link>
      </div>
    </>
  )
}

export default Artist
