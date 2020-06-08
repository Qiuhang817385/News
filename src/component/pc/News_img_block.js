import React, { useState, useEffect } from 'react'
import { getNewsService } from './service/newsSer';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
export default function News_img_block (props) {
  const { count,
    type,
    width,
    cartTitle,
    imageWidth, } = props;


  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsService({ type, count }).then((res) => {
      setNews(res);
    })
  }, [count, type])

  const styleImage = {
    display: "block",
    width: imageWidth,
    height: "90px"
  };

  const styeH3 = {
    width: imageWidth,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  };

  const newsList = news.length ?
    news.map((newsItem, index) => {
      return <div className="imageblock" key={newsItem.uniquekey}>
        <Link to={`/details/${newsItem.uniquekey}`}>
          <div className="custom-image">
            <img alt="newsItem" style={styleImage} src={newsItem.thumbnail_pic_s} />
          </div>
          <div className="custom-card">
            <h3 style={styeH3}>{newsItem.title}</h3>
            <p>作者:{newsItem.author_name}</p>
          </div>
        </Link>
      </div>
    }) : '没有加载到任何新闻';

  return (
    <div className="topNewsList">
      <Card title={cartTitle} bordered={true} style={{
        width: width
      }}>
        {newsList}
      </Card>
    </div>
  )
}
