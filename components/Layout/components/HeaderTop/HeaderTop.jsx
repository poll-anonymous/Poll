import React from 'react'

export default function HeaderTop() {
  return (

    <div id="header-top">
		<section className="container clearfix">
			<nav className="header-top-nav">
				<ul>
					<li><a href="contact_us.html"><i className="icon-envelope"></i>Contact</a></li>
					<li><a href="#"><i className="icon-headphones"></i>Support</a></li>
					<li><a href="login.html" id="login-panel"><i className="icon-user"></i>Login Area</a></li>
				</ul>
			</nav>
			<div className="header-search">
				<form>
				    <input type="text" value="Search here ..." onfocus="if(this.value=='Search here ...')this.value='';" onblur="if(this.value=='')this.value='Search here ...';" />
				    <button type="submit" className="search-submit"></button>
				</form>
			</div>
		</section>
	</div>
  )
}
