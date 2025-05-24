// Fetch ou Axios
import axios from 'axios'

const URL = 'http://localhost:3001'

export const getSongs = async () => {
  const responseSongs = await axios.get(`${URL}/songs`)
  return responseSongs.data
}

export const getArtists = async () => {
  const responseArtists = await axios.get(`${URL}/artists`)
  return responseArtists.data
}
