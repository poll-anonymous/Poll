import React from 'react'

export default function Breadcrumb() {
  return (
    <div className="breadcrumbs">
  <section className="container">
    <div className="row">
      <div className="col-md-12">
        <h1>Login</h1>
      </div>
      <div className="col-md-12">
        <div className="crumbs">
          <a href="#">Home</a>
          <span className="crumbs-span">/</span>
          <a href="#">Pages</a>
          <span className="crumbs-span">/</span>
          <span className="current">Login</span>
        </div>
      </div>
    </div>
    {/* End row */}
  </section>
  {/* End container */}
</div>

  )
}
