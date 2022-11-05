import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes',
  params: { actor: 'Al Pacino' },
  headers: {
    Authorization: 'Token token=yd8WzkWNEEzGtqMSgiZBrwtt',
    'X-RapidAPI-Key': 'c78b23ab3emsh9417fe91a36eebap10fb38jsn072f5de820f4',
    'X-RapidAPI-Host': 'juanroldan1989-moviequotes-v1.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export default axios;
