import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import React from 'react'

export default function anon_messages() {
  return (
    <>
    <Breadcrumb />
    <div className="col-md-12" style={{width:"1000px", margin:"40px" }}>
  <div className="page-content page-shortcode">
    <div className="boxedtitle page-title">
      <h2>Messages</h2>
    </div>
    <div className="tabs-warp">
      <ul className="tabs">
        <li className="tab">
          <a href="#" className="current">
            one
          </a>
        </li>
        <li className="tab">
          <a href="#">two</a>
        </li>
        <li className="tab">
          <a href="#">three</a>
        </li>
        <li className="tab">
          <a href="#">More messages</a>
        </li>
      </ul>
      <div className="tab-inner-warp" style={{ display: "block" }}>
        <div className="tab-inner">
          <p>
            1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            adipiscing gravida odio, sit amet suscipit risus ultrices eu. Fusce
            viverra neque at purus laoreet consequat.
          </p>
        </div>
      </div>
      <div className="tab-inner-warp" style={{ display: "none" }}>
        <div className="tab-inner">
          <p>
            2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            adipiscing gravida odio, sit amet suscipit risus ultrices eu. Fusce
            viverra neque at purus laoreet consequat.
          </p>
        </div>
      </div>
      <div className="tab-inner-warp" style={{ display: "none" }}>
        <div className="tab-inner">
          <p>
            3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            adipiscing gravida odio, sit amet suscipit risus ultrices eu. Fusce
            viverra neque at purus laoreet consequat.
          </p>
        </div>
      </div>
    
    </div>
  </div>
  {/* End page-content */}
</div>

      
    </>
  )
}
