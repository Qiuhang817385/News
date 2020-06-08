import axios from 'axios';
export const login = async ({ action, userName, password, confirmPassword }) => new Promise((resolve, reject) => {
  axios.get('http://newsapi.gugujiankong.com/Handler.ashx', {
    params: {
      action,
      username: userName,
      password,
      r_userName: userName,
      r_password: password,
      r_confirmPassword: confirmPassword || '',
    }
  })
    .then((res) => {
      console.log('res', res);
      if (res.status === 200) {
        resolve(true)
      }
    })
})
