import axios from 'axios'
import md5 from 'md5'


const publicKey = '040f2791387a4e6c0559fa4be0156c95'
const privateKey = 'd6f0193a48303d5ee1321fe90977618f14f6a783'
const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: time,
    apikey: publicKey,
    hash: hash
  }
})

export default api