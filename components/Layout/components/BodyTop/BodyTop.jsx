import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function BodyTop() {
  return (
    <>
	
	<div className="login-panel">
		<section className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="page-content">
						<h2>Login</h2>
						<div className="form-style form-style-3">
							<form>
								<div className="form-inputs clearfix">
									<p className="login-text">
										<input type="text" defaultValue="Username" onfocus="if (this.value == 'Username') {this.value = '';}" onblur="if (this.value == '') {this.value = 'Username';}" />
										<i className="icon-user"></i>
									</p>
									<p className="login-password">
										<input type="password" defaultValue="Password" onfocus="if (this.value == 'Password') {this.value = '';}" onblur="if (this.value == '') {this.value = 'Password';}" />
										<i className="icon-lock"></i>
										<a href="#">Forget</a>
									</p>
								</div>
								<p className="form-submit login-submit">
									<input type="submit" defaultValue="Log in" className="button color small login-submit submit" />
								</p>
								<div className="rememberme">
									<label><input type="checkbox" checked="checked" /> Remember Me</label>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="page-content Register">
						<h2>Register Now</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi adipiscing gravdio, sit amet suscipit risus ultrices eu. Fusce viverra neque at purus laoreet consequa. Vivamus vulputate posuere nisl quis consequat.</p>
						<a className="button color small signup">Create an account</a>
					</div>
				</div>
			</div>
		</section>
	</div>
	
	<div className="panel-pop" id="signup">
		<h2>Register Now<i className="icon-remove"></i></h2>
		<div className="form-style form-style-3">
			<form>
				<div className="form-inputs clearfix">
					<p>
						<label className="required">Username<span>*</span></label>
						<input type="text" />
					</p>
					<p>
						<label className="required">E-Mail<span>*</span></label>
						<input type="email" />
					</p>
					<p>
						<label className="required">Password<span>*</span></label>
						<input type="password" defaultValue="" />
					</p>
					<p>
						<label className="required">Confirm Password<span>*</span></label>
						<input type="password" defaultValue="" />
					</p>
				</div>
				<p className="form-submit">
					<input type="submit" defaultValue="Signup" className="button color small submit" />
				</p>
			</form>
		</div>
	</div>
	
	<div className="panel-pop" id="lost-password">
		<h2>Lost Password<i className="icon-remove"></i></h2>
		<div className="form-style form-style-3">
			<p>Lost your password? Please enter your username and email address. You will receive a link to create a new password via email.</p>
			<form>
				<div className="form-inputs clearfix">
					<p>
						<label className="required">Username<span>*</span></label>
						<input type="text" />
					</p>
					<p>
						<label className="required">E-Mail<span>*</span></label>
						<input type="email" />
					</p>
				</div>
				<p className="form-submit">
					<input type="submit" defaultValue="Reset" className="button color small submit" />
				</p>
			</form>
			<div className="clearfix"></div>
		</div>
	</div>
    </>
  )
}
