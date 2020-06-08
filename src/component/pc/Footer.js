import React from 'react'
import { Row, Col } from 'antd';
export default function Footer () {
  return (
    <footer>
      <Row>
        <Col span={2}></Col>
        <Col span={20} class="footer" style={{ textAlign: 'center', paddingTop: '20px' }}>
          <span>&copy;&nbsp;2016 ReactNews. All Rights Reserved.</span>
        </Col>
        <Col span={2}></Col>
      </Row>
    </footer>
  )
}
