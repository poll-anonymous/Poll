import React from 'react'

export default function login() {
  return (
    <section className="container main-content">
    <div className="login">
      <div className="row">
        <div className="col-md-6">
          <div className="page-content">
            <h2>Login</h2>
            <div className="form-style form-style-3">
              <form>
                <div className="form-inputs clearfix">
                  <p className="login-text">
                    <input
                      type="text"
                      defaultValue="Username"
                      onfocus="if (this.value == 'Username') {this.value = '';}"
                      onblur="if (this.value == '') {this.value = 'Username';}"
                    />
                    <i className="icon-user" />
                  </p>
                  <p className="login-password">
                    <input
                      type="password"
                      defaultValue="Password"
                      onfocus="if (this.value == 'Password') {this.value = '';}"
                      onblur="if (this.value == '') {this.value = 'Password';}"
                    />
                    <i className="icon-lock" />
                    <a href="#">Forget</a>
                  </p>
                </div>
                <p className="form-submit login-submit">
                  <input
                    type="submit"
                    defaultValue="Log in"
                    className="button color small login-submit submit"
                  />
                </p>
                <div className="rememberme">
                  <label>
                    <input type="checkbox" defaultChecked="checked" /> Remember Me
                  </label>
                </div>
              </form>
            </div>
          </div>
          {/* End page-content */}
        </div>
        {/* End col-md-6 */}
        <div className="col-md-6">
          <div className="page-content">
            <h2>Register Now</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              adipiscing gravdio, sit amet suscipit risus ultrices eu. Fusce
              viverra neque at purus laoreet consequa. Vivamus vulputate posuere
              nisl quis consequat.
            </p>
            <a className="button small color signup">Create an account</a>
          </div>
          {/* End page-content */}
        </div>
        {/* End col-md-6 */}
      </div>
      {/* End row */}
    </div>
    {/* End login */}
  </section>
  
  )
}
