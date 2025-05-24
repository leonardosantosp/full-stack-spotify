// Fetch ou Axios
import axios from 'axios'

const URL = 'https://full-stack-spotify-api-production.up.railway.app'

export const getSongs = async () => {
  const responseSongs = await axios.get(`${URL}/songs`)
  return responseSongs.data
}

export const getArtists = async () => {
  const responseArtists = await axios.get(`${URL}/artists`)
  return responseArtists.data
}
