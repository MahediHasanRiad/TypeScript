import axios, { type AxiosResponse } from 'axios'

interface data {
  id: number,
  name: string,
  age: number,
  mobile: number
}

const fetchData = async () => {
  try {

    const response: AxiosResponse<data> = await axios.get('/api/v1/user')
    console.log(response.data)
    
  } catch (error: any) {
    if(axios.isAxiosError(error)){
      console.log('Axios Error', error.message)

      if(error.response){
        console.log('Error', error.response.status)
      }
    }
  }
}