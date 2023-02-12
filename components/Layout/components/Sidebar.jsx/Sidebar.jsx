import Image from 'next/image'
import React from 'react'

export default function Sidebar() {
  return (
    <aside className="col-md-3 sidebar">
    <div className="widget widget_stats">
      <h3 className="widget_title">Stats</h3>
      <div className="ul_list ul_list-icon-ok">
        <ul>
          <li>
            <i className="icon-question-sign" />
            Questions ( <span>20</span> )
          </li>
          <li>
            <i className="icon-comment" />
            Answers ( <span>50</span> )
          </li>
        </ul>
      </div>
    </div>
    <div className="widget widget_social">
      <h3 className="widget_title">Find Us</h3>
      <ul>
        <li className="rss-subscribers">
          <a href="#" target="_blank">
            <strong>
              <i className="icon-rss" />
              <span>Subscribe</span>
              <br />
              <small>To RSS Feed</small>
            </strong>
          </a>
        </li>
        <li className="facebook-fans">
          <a href="#" target="_blank">
            <strong>
              <i className="social_icon-facebook" />
              <span>5,000</span>
              <br />
              <small>People like it</small>
            </strong>
          </a>
        </li>
        <li className="twitter-followers">
          <a href="#" target="_blank">
            <strong>
              <i className="social_icon-twitter" />
              <span>3,000</span>
              <br />
              <small>Followers</small>
            </strong>
          </a>
        </li>
        <li className="youtube-subs">
          <a href="#" target="_blank">
            <strong>
              <i className="icon-play" />
              <span>1,000</span>
              <br />
              <small>Subscribers</small>
            </strong>
          </a>
        </li>
      </ul>
    </div>
    <div className="widget widget_login">
      <h3 className="widget_title">Login</h3>
      <div className="form-style form-style-2">
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
        <ul className="login-links login-links-r">
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
        <div className="clearfix" />
      </div>
    </div>
    <div className="widget widget_highest_points">
      <h3 className="widget_title">Highest points</h3>
      <ul>
        <li>
          <div className="author-img">
            <a href="#">
              <Image
                width={60}
                height={60}
                src="/images/demo/admin.jpg"
                alt=""
              />
            </a>
          </div>
          <h6>
            <a href="#">admin</a>
          </h6>
          <span className="comment">12 Points</span>
        </li>
        <li>
          <div className="author-img">
            <a href="#">
              <Image
                width={60}
                height={60}
                src="/images/demo/avatar.png"
                alt=""
              />
            </a>
          </div>
          <h6>
            <a href="#">vbegy</a>
          </h6>
          <span className="comment">10 Points</span>
        </li>
        <li>
          <div className="author-img">
            <a href="#">
              <Image
                width={60}
                height={60}
                src="/images/demo/avatar.png"
                alt=""
              />
            </a>
          </div>
          <h6>
            <a href="#">ahmed</a>
          </h6>
          <span className="comment">5 Points</span>
        </li>
      </ul>
    </div>
    <div className="widget widget_tag_cloud">
      <h3 className="widget_title">Tags</h3>
      <a href="#">projects</a>
      <a href="#">Portfolio</a>
      <a href="#">Wordpress</a>
      <a href="#">Html</a>
      <a href="#">Css</a>
      <a href="#">jQuery</a>
      <a href="#">2code</a>
      <a href="#">vbegy</a>
    </div>
    <div className="widget">
      <h3 className="widget_title">Recent Questions</h3>
      <ul className="related-posts">
        <li className="related-item">
          <h3>
            <a href="#">This is my first Question</a>
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="clear" />
          <span>Feb 22, 2014</span>
        </li>
        <li className="related-item">
          <h3>
            <a href="#">This Is My Second Poll Question</a>
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="clear" />
          <span>Feb 22, 2014</span>
        </li>
      </ul>
    </div>
  </aside>
  )
}
