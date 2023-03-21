import axios from "axios"

export async function getManu(){
  return axios.get('/api/list_factory')
}