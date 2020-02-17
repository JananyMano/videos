import axios from 'axios';

const KEY = 'AIzaSyBEVQibI3UufiL9Tg4BzcpvLN9tbuljRqQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
});
