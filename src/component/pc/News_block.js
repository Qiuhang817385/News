import React, { useState, useEffect } from 'react'
import { getNewsService } from './service/newsSer';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
export default function News_block (props) {

  const { count,
    type,
    width,
    bordered, } = props

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsService({ type, count }).then((res) => {
      setNews(res);
    })
  }, [count, type])

  const newsList = news.length ?
    news.map((newsItem, index) => {
      return <li key={newsItem.uniquekey}>
        <Link to={`/details/${newsItem.uniquekey}`}>
          {newsItem.title}
        </Link>
      </li>
    }) : '没有加载到任何新闻';


  return (
    <div className="topNewsList">
      <Card style={{ width: { width } }} bordered={bordered}>
        <ul>
          {newsList}
        </ul>
      </Card>
    </div >
  )
}
