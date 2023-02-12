import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import React from 'react'

export default function anon_home() {
  return (
    <>
      <Breadcrumb />
      <div className="widget widget_stats" style={{width:"400px"}}>
  <div className="ul_list ul_list-icon-ok">
    <ul>
      <li>
        <i className="icon-question-sign" /><a href="">
       View Messages</a>
      </li>
      <li>
        <i className="icon-comment" />
        <a href=""> Copy Profile link</a>
      </li>
      <li>
        <i className="icon-comment" />
        <a href="">Share profile link </a>
      </li>
    </ul>
  </div>
</div>

    </>
  )
}
