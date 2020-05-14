import axios from 'axios'

export default axios.create(
    {
        baseURL : 'https://api.unsplash.com',
        headers: {Authorization: 'Client-ID A-c3T4tZE8CTC4eJ0liT89vki1JMBaUmHO2zJ9RJ-OY'}
    }
)