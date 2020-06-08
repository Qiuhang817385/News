import axios from 'axios';

export const getNewsService = async ({ type, count }) => {
  let result = await axios.get('http://www.qiuhang.club:7300/mock/5edd9a97cd2bd50579f71d78/news/handGetnews', {
    params: {
      action: 'getnews',
      type,
      count
    }
  })
  if (result.status === 200) {
    return result.data.data;
  }
}