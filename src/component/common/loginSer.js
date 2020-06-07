import axios from 'axios';
export const login = ({ userName, password }) => new Promise((resolve, reject) => {
  axios.get('', {})
    .then((res) => {
      console.log('res', res);
    })
})
