import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const baseDomain = 'https://opendata.resas-portal.go.jp'
const baseURL = `${baseDomain}/api/v1`

export default axios.create({
  baseURL,
  headers: {
    'X-API-KEY': API_KEY
  }
})
