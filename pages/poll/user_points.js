import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import Sidebar from '@/components/Layout/components/Sidebar.jsx/Sidebar'
import React from 'react'

export default function user_points() {
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
          <article className="question user-question user-points">
            <div className="question-content">
              <div className="question-bottom">
                <h3>
                  <a href="#">Rating your answer</a>
                </h3>
                <div className="question-user-vote">
                  <i className="icon-thumbs-up" />
                </div>
                <div className="question-vote-result">+1</div>
                <span className="question-date">
                  <i className="icon-time" />
                  15 secs ago
                </span>
              </div>
            </div>
          </article>
          <article className="question user-question user-points">
            <div className="question-content">
              <div className="question-bottom">
                <h3>
                  <a href="#">You answer the question</a>
                </h3>
                <div className="question-user-vote">
                  <i className="icon-thumbs-up" />
                </div>
                <div className="question-vote-result">+2</div>
                <span className="question-date">
                  <i className="icon-time" />4 mins ago
                </span>
              </div>
            </div>
          </article>
          <article className="question user-question user-points">
            <div className="question-content">
              <div className="question-bottom">
                <h3>
                  <a href="#">Cancel your answer Best Answer</a>
                </h3>
                <div className="question-user-vote">
                  <i className="icon-thumbs-up" />
                </div>
                <div className="question-vote-result">-5</div>
                <span className="question-date">
                  <i className="icon-time" />1 hour ago
                </span>
              </div>
            </div>
          </article>
          <article className="question user-question user-points">
            <div className="question-content">
              <div className="question-bottom">
                <h3>
                  <a href="#">Choose your answer Best Answer</a>
                </h3>
                <div className="question-user-vote">
                  <i className="icon-thumbs-up" />
                </div>
                <div className="question-vote-result">+5</div>
                <span className="question-date">
                  <i className="icon-time" />2 hour ago
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
  </div>
  {/* End row */}
</section>

      
    </>
  )
}
