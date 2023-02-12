import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import Sidebar from '@/components/Layout/components/Sidebar.jsx/Sidebar'
import React from 'react'

export default function user_answers() {
  return (
    <>
      <Breadcrumb />
      <section className="container main-content">
  <div className="row">
    <div className="col-md-9">
      <div className="row">
        <div className="user-profile">
          <div className="col-md-12">
            <div className="page-content">
              <h2>About admin</h2>
              <div className="user-profile-img">
                <img
                  width={60}
                  height={60}
                  src="../ask-me/images/demo/admin.jpg"
                  alt="admin"
                />
              </div>
              <div className="ul_list ul_list-icon-ok about-user">
                <ul>
                  <li>
                    <i className="icon-plus" />
                    Registerd : <span>Jan 10, 2014</span>
                  </li>
                  <li>
                    <i className="icon-map-marker" />
                    Country : <span>Egypt</span>
                  </li>
                  <li>
                    <i className="icon-globe" />
                    Website :{" "}
                    <a target="" href="https://2code.info/">
                      view
                    </a>
                  </li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                adipiscing gravida odio, sit amet suscipit risus ultrices eu.
                Fusce viverra neque at purus laoreet consequat. Vivamus
                vulputate posuere nisl quis consequat. Donec congue commodo mi,
                sed commodo velit fringilla ac. Fusce placerat venenatis mi.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada .
              </p>
              <div className="clearfix" />
              <span className="user-follow-me">Follow Me</span>
              <a href="#" original-title="Facebook" className="tooltip-n">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={30}
                    span_bg="#3b5997"
                    span_hover="#2f3239"
                  >
                    <i className="social_icon-facebook" />
                  </span>
                </span>
              </a>
              <a href="#" original-title="Twitter" className="tooltip-n">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={30}
                    span_bg="#00baf0"
                    span_hover="#2f3239"
                  >
                    <i className="social_icon-twitter" />
                  </span>
                </span>
              </a>
              <a href="#" original-title="Linkedin" className="tooltip-n">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={30}
                    span_bg="#006599"
                    span_hover="#2f3239"
                  >
                    <i className="social_icon-linkedin" />
                  </span>
                </span>
              </a>
              <a href="#" original-title="Google plus" className="tooltip-n">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={30}
                    span_bg="#c43c2c"
                    span_hover="#2f3239"
                  >
                    <i className="social_icon-gplus" />
                  </span>
                </span>
              </a>
              <a href="#" original-title="Email" className="tooltip-n">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={30}
                    span_bg="#000"
                    span_hover="#2f3239"
                  >
                    <i className="social_icon-email" />
                  </span>
                </span>
              </a>
            </div>
            {/* End page-content */}
          </div>
          {/* End col-md-12 */}
          <div className="col-md-12">
            <div className="page-content page-content-user-profile">
              <div className="user-profile-widget">
                <h2>User Stats</h2>
                <div className="ul_list ul_list-icon-ok">
                  <ul>
                    <li>
                      <i className="icon-question-sign" />
                      <a href="user_questions.html">
                        Questions
                        <span>
                          {" "}
                          ( <span>30</span> ){" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="icon-comment" />
                      <a href="user_answers.html">
                        Answers
                        <span>
                          {" "}
                          ( <span>10</span> ){" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="icon-star" />
                      <a href="user_favorite_questions.html">
                        Favorite Questions
                        <span>
                          {" "}
                          ( <span>3</span> ){" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="icon-heart" />
                      <a href="user_points.html">
                        Points
                        <span>
                          {" "}
                          ( <span>20</span> ){" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="icon-asterisk" />
                      Best Answers
                      <span>
                        {" "}
                        ( <span>2</span> ){" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End user-profile-widget */}
            </div>
            {/* End page-content */}
          </div>
          {/* End col-md-12 */}
        </div>
        {/* End user-profile */}
      </div>
      {/* End row */}
      <div className="clearfix" />
      <div className="page-content page-content-user">
        <div className="user-questions">
          <article className="question user-question">
            <h3>
              <a href="single_question.html">This is my first Question</a>
            </h3>
            <div className="question-type-main">
              <i className="icon-question-sign" />
              Question
            </div>
            <div className="question-content">
              <div className="question-bottom">
                <div className="question-answered">
                  <i className="icon-ok" />
                  in progress
                </div>
                <span className="question-favorite">
                  <i className="icon-star" />5
                </span>
                <span className="question-category">
                  <a href="#">
                    <i className="icon-folder-close" />
                    wordpress
                  </a>
                </span>
                <span className="question-date">
                  <i className="icon-time" />
                  15 secs ago
                </span>
                <span className="question-comment">
                  <a href="#">
                    <i className="icon-comment" />5 Answers
                  </a>
                </span>
                <a className="question-reply" href="#">
                  <i className="icon-reply" />
                  Reply
                </a>
                <span className="question-view">
                  <i className="icon-user" />
                  70 views
                </span>
              </div>
            </div>
          </article>
          <article className="question user-question">
            <h3>
              <a href="single_question.html">This is my third Question</a>
            </h3>
            <div className="question-type-main">
              <i className="icon-question-sign" />
              Question
            </div>
            <div className="question-content">
              <div className="question-bottom">
                <div className="question-answered question-answered-done">
                  <i className="icon-ok" />
                  solved
                </div>
                <span className="question-favorite">
                  <i className="icon-star-empty" />0
                </span>
                <span className="question-category">
                  <a href="#">
                    <i className="icon-folder-close" />
                    HTML
                  </a>
                </span>
                <span className="question-date">
                  <i className="icon-time" />
                  15 secs ago
                </span>
                <span className="question-comment">
                  <a href="#">
                    <i className="icon-comment" />5 Answers
                  </a>
                </span>
                <a className="question-reply" href="#">
                  <i className="icon-reply" />
                  Reply
                </a>
                <span className="question-view">
                  <i className="icon-user" />
                  70 views
                </span>
              </div>
            </div>
          </article>
          <article className="question user-question">
            <h3>
              <a href="single_question.html">This is my fifth Question</a>
            </h3>
            <div className="question-type-main">
              <i className="icon-question-sign" />
              Question
            </div>
            <div className="question-content">
              <div className="question-bottom">
                <div className="question-answered">
                  <i className="icon-ok" />
                  in progress
                </div>
                <span className="question-favorite">
                  <i className="icon-star-empty" />0
                </span>
                <span className="question-category">
                  <a href="#">
                    <i className="icon-folder-close" />
                    jQuery
                  </a>
                </span>
                <span className="question-date">
                  <i className="icon-time" />
                  15 secs ago
                </span>
                <span className="question-comment">
                  <a href="#">
                    <i className="icon-comment" />5 Answers
                  </a>
                </span>
                <a className="question-reply" href="#">
                  <i className="icon-reply" />
                  Reply
                </a>
                <span className="question-view">
                  <i className="icon-user" />
                  70 views
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="height_20" />
      <div className="pagination">
        <a href="#" className="prev-button">
          <i className="icon-angle-left" />
        </a>
        <span className="current">1</span>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <span>...</span>
        <a href="#">11</a>
        <a href="#">12</a>
        <a href="#">13</a>
        <a href="#" className="next-button">
          <i className="icon-angle-right" />
        </a>
      </div>
      {/* End pagination */}
      {/* if no questions
				<p>No questions yet</p>
				*/}
    </div>
    {/* End main */}
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
                <img
                  width={60}
                  height={60}
                  src="../ask-me/images/demo/admin.jpg"
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
                <img
                  width={60}
                  height={60}
                  src="../ask-me/images/demo/avatar.png"
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
                <img
                  width={60}
                  height={60}
                  src="../ask-me/images/demo/avatar.png"
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
    {/* End sidebar */}
  </div>
  {/* End row */}
</section>

    </>
  )<Breadcrumb /
  <section className="container main-content">
  <div className="row">
    <div className="col-md-9">
      <div className="row">
        <div className="user-profile">
          <div className="col-md-12">
            <div className="page-content">
              <h2>About admin</h2>
              <div className="user-profile-img">
                <img
                  width={60}
                  height={60}
                  src="../ask-me/images/demo/admin.jpg"
                  alt="admin"
                />
              </div>
              <div className="ul_list ul_list-icon-ok about-user">
                <ul>
                  <li>
                    <i className="icon-plus" />
                    Registerd : <span>Jan 10, 2014</span>
                  </li>
                  <li>
                    <i className="icon-map-marker" />
                    Country : <span>Egypt</span>
                  </li>
                  <li>
                    <i className="icon-globe" />
                    Website :{" "}
                    <a target="" href="https://2code.info/">
                      view
                    </a>
                  </li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                adipiscing gravida odio, sit amet suscipit risus ultrices eu.
                Fusce viverra neque at purus laoreet consequat. Vivamus
                vulputate posuere nisl quis consequat. Donec congue commodo mi,
                sed commodo velit fringilla ac. Fusce placerat venenatis mi.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada .
              </p>
              <div className="clearfix" />
              <span className="user-follow-me">Follow Me</span>
              <a href="#" original-title="Facebook" className="tooltip-n">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={30}
                    span_bg="#3b5997"
                    span_hover="#2f3239"
                  >
                    <i className="social_icon-facebook" />
                  </span>
                </span>
              </a>
              <a href="#" original-title="Twitter" className="tooltip-n">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={30}
                    span_bg="#00baf0"
                    span_hover="#2f3239"
                  >
                    <i className="social_icon-twitter" />
                  </span>
                </span>
              </a>
              <a href="#" original-title="Linkedin" className="tooltip-n">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={30}
                    span_bg="#006599"
                    span_hover="#2f3239"
                  >
                    <i className="social_icon-linkedin" />
                  </span>
                </span>
              </a>
              <a href="#" original-title="Google plus" className="tooltip-n">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={30}
                    span_bg="#c43c2c"
                    span_hover="#2f3239"
                  >
                    <i className="social_icon-gplus" />
                  </span>
                </span>
              </a>
              <a href="#" original-title="Email" className="tooltip-n">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={30}
                    span_bg="#000"
                    span_hover="#2f3239"
                  >
                    <i className="social_icon-email" />
                  </span>
                </span>
              </a>
            </div>
            {/* End page-content */}
          </div>
          {/* End col-md-12 */}
          <div className="col-md-12">
            <div className="page-content page-content-user-profile">
              <div className="user-profile-widget">
                <h2>User Stats</h2>
                <div className="ul_list ul_list-icon-ok">
                  <ul>
                    <li>
                      <i className="icon-question-sign" />
                      <a href="user_questions.html">
                        Questions
                        <span>
                          {" "}
                          ( <span>30</span> ){" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="icon-comment" />
                      <a href="user_answers.html">
                        Answers
                        <span>
                          {" "}
                          ( <span>10</span> ){" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="icon-star" />
                      <a href="user_favorite_questions.html">
                        Favorite Questions
                        <span>
                          {" "}
                          ( <span>3</span> ){" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="icon-heart" />
                      <a href="user_points.html">
                        Points
                        <span>
                          {" "}
                          ( <span>20</span> ){" "}
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="icon-asterisk" />
                      Best Answers
                      <span>
                        {" "}
                        ( <span>2</span> ){" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End user-profile-widget */}
            </div>
            {/* End page-content */}
          </div>
          {/* End col-md-12 */}
        </div>
        {/* End user-profile */}
      </div>
      {/* End row */}
      <div className="clearfix" />
      <div className="page-content page-content-user">
        <div className="user-questions">
          <article className="question user-question">
            <h3>
              <a href="single_question.html">This is my first Question</a>
            </h3>
            <div className="question-type-main">
              <i className="icon-question-sign" />
              Question
            </div>
            <div className="question-content">
              <div className="question-bottom">
                <div className="question-answered">
                  <i className="icon-ok" />
                  in progress
                </div>
                <span className="question-favorite">
                  <i className="icon-star" />5
                </span>
                <span className="question-category">
                  <a href="#">
                    <i className="icon-folder-close" />
                    wordpress
                  </a>
                </span>
                <span className="question-date">
                  <i className="icon-time" />
                  15 secs ago
                </span>
                <span className="question-comment">
                  <a href="#">
                    <i className="icon-comment" />5 Answers
                  </a>
                </span>
                <a className="question-reply" href="#">
                  <i className="icon-reply" />
                  Reply
                </a>
                <span className="question-view">
                  <i className="icon-user" />
                  70 views
                </span>
              </div>
            </div>
          </article>
          <article className="question user-question">
            <h3>
              <a href="single_question.html">This is my third Question</a>
            </h3>
            <div className="question-type-main">
              <i className="icon-question-sign" />
              Question
            </div>
            <div className="question-content">
              <div className="question-bottom">
                <div className="question-answered question-answered-done">
                  <i className="icon-ok" />
                  solved
                </div>
                <span className="question-favorite">
                  <i className="icon-star-empty" />0
                </span>
                <span className="question-category">
                  <a href="#">
                    <i className="icon-folder-close" />
                    HTML
                  </a>
                </span>
                <span className="question-date">
                  <i className="icon-time" />
                  15 secs ago
                </span>
                <span className="question-comment">
                  <a href="#">
                    <i className="icon-comment" />5 Answers
                  </a>
                </span>
                <a className="question-reply" href="#">
                  <i className="icon-reply" />
                  Reply
                </a>
                <span className="question-view">
                  <i className="icon-user" />
                  70 views
                </span>
              </div>
            </div>
          </article>
          <article className="question user-question">
            <h3>
              <a href="single_question.html">This is my fifth Question</a>
            </h3>
            <div className="question-type-main">
              <i className="icon-question-sign" />
              Question
            </div>
            <div className="question-content">
              <div className="question-bottom">
                <div className="question-answered">
                  <i className="icon-ok" />
                  in progress
                </div>
                <span className="question-favorite">
                  <i className="icon-star-empty" />0
                </span>
                <span className="question-category">
                  <a href="#">
                    <i className="icon-folder-close" />
                    jQuery
                  </a>
                </span>
                <span className="question-date">
                  <i className="icon-time" />
                  15 secs ago
                </span>
                <span className="question-comment">
                  <a href="#">
                    <i className="icon-comment" />5 Answers
                  </a>
                </span>
                <a className="question-reply" href="#">
                  <i className="icon-reply" />
                  Reply
                </a>
                <span className="question-view">
                  <i className="icon-user" />
                  70 views
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="height_20" />
      <div className="pagination">
        <a href="#" className="prev-button">
          <i className="icon-angle-left" />
        </a>
        <span className="current">1</span>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <span>...</span>
        <a href="#">11</a>
        <a href="#">12</a>
        <a href="#">13</a>
        <a href="#" className="next-button">
          <i className="icon-angle-right" />
        </a>
      </div>
      {/* End pagination */}
      {/* if no questions
				<p>No questions yet</p>
				*/}
    </div>
    {/* End main */}
   <Sidebar />
    {/* End sidebar */}
  </div>
  {/* End row */}
</section>

}
