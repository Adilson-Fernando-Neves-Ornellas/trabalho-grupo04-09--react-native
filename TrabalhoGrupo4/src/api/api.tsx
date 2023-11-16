import axios from "axios"

export const api = axios.create({
    baseURL: 'https://deploy-api-db-json-react-native-vercel-serra-tec2023-3.vercel.app/'
})

