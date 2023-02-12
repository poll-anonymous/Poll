import React from 'react'
import Breadcrumb from '../components/Layout/components/Breadcrumb/Breadcrumb'
import Sidebar from '../components/Layout/components/Sidebar.jsx/Sidebar'

export default function UserProfile() {
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
        <div className="page-content">
          <div className="user-stats">
            <div className="user-stats-head">
              <div className="block-stats-1 stats-head">#</div>
              <div className="block-stats-2 stats-head">Today</div>
              <div className="block-stats-3 stats-head">Month</div>
              <div className="block-stats-4 stats-head">Total</div>
            </div>
            <div className="user-stats-item">
              <div className="block-stats-1">Questions</div>
              <div className="block-stats-2">5</div>
              <div className="block-stats-3">20</div>
              <div className="block-stats-4">100</div>
            </div>
            <div className="user-stats-item">
              <div className="block-stats-1">Answers</div>
              <div className="block-stats-2">30</div>
              <div className="block-stats-3">150</div>
              <div className="block-stats-4">1000</div>
            </div>
            <div className="user-stats-item user-stats-item-last">
              <div className="block-stats-1">Visitors</div>
              <div className="block-stats-2">100</div>
              <div className="block-stats-3">3000</div>
              <div className="block-stats-4">5000</div>
            </div>
          </div>
          {/* End user-stats */}
        </div>
        {/* End page-content */}
      </div>
      {/* End main */}
     <Sidebar />
      {/* End sidebar */}
    </div>
    {/* End row */}
  </section>
  </>
  )
}
