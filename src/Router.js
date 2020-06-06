import React from 'react'

import PcIndex from './component/pc/Index';
import PcNewsDetails from './component/pc/News_details';
import PcUserCenter from './component/pc/User_center';

import MobileIndex from './component/mobile/Index';
import MobileNewsDetails from './component/mobile/News_details';
import MobileUserCenter from './component/mobile/User_center';


import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';

import './css/mobile.css'
import './css/pc.css';

export default function RouterAll () {

  const isPcScreen = useMediaQuery({ query: '(min-device-width: 1224px)' })
  const isMobileScreen = useMediaQuery({ query: '(max-device-width: 1224px)' })

  return (
    <>
      {isPcScreen &&
        <Router>
          <Route path="/" component={PcIndex}></Route>
          <Route path="/details/:uniquekey" component={PcNewsDetails}></Route>
          <Route path="/usercenter" component={PcUserCenter}></Route>
        </Router>
      }
      {
        isMobileScreen &&
        <Router>
          <Route path="/" component={MobileIndex}></Route>
          <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
          <Route path="/usercenter" component={MobileUserCenter}></Route>
        </Router>
      }
    </>

  )
}
