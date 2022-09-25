import axios from 'axios'

const apiPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  //@ts-ignore
  headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_API_TOKEN }
})

const apiPrivate = axios.create({
  baseURL: process.env.API_URL,
  //@ts-ignore
  headers: { 'X-Api-Key': process.env.API_TOKEN }
})

apiPublic.defaults.validateStatus = function () {
  return true
}
apiPrivate.defaults.validateStatus = function () {
  return true
}

export { apiPublic, apiPrivate }
