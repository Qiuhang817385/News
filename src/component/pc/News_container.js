import React, { useState } from 'react'
import { Row, Col, Tabs, Carousel } from 'antd';
import NewsImgBlock from './News_img_block'
import NewsBlock from './News_block';
import Products from './Products';

import carousel_2 from './../../assets/images/carousel_2.jpg';
import carousel_3 from './../../assets/images/carousel_3.jpg';
import carousel_4 from './../../assets/images/carousel_4.jpg';

const TabPane = Tabs.TabPane;
export default function News_container () {
  const [dots, setDots] = useState(true)
  const [infinite, setInfinite] = useState(true)
  const [speed, setSpeed] = useState(500)
  const [slidesToShow, setSlidesToShow] = useState(1)
  const [autoplay, setAutoplay] = useState(true)

  const settings = {
    dots: true,/* 面板指示点 */
    autoplay: true
  };
  return (
    <div>
      <Row>
        <Col span={2}></Col>
        <Col span={20} className="container">
          <div className="leftContainer">
            <div className="carousel">
              <Carousel {...settings}>
                <div><img src={require('../../assets/images/carousel_1.jpg')} alt="Carousel" /></div>
                <div><img src={carousel_2} alt="Carousel" /></div>
                <div><img src={carousel_3} alt="Carousel" /></div>
                <div><img src={carousel_4} alt="Carousel" /></div>
              </Carousel>
            </div>
            <NewsImgBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px" />
          </div>
          <Tabs className="tabs_news">
            <TabPane tab="头条新闻" key="1">
              <NewsBlock count={22} type="top" width="100%" bordered="false" />
            </TabPane>
            <TabPane tab="国际" key="2">
              <NewsBlock count={22} type="guoji" width="100%" bordered="false" />
            </TabPane>
          </Tabs>
          <Tabs className="tabs_product">
            <TabPane tab="ReactNews 产品" key="1">
              <Products />
            </TabPane>
          </Tabs>

          <div>
            <NewsImgBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px" />
            <NewsImgBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px" />
          </div>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  )
}
