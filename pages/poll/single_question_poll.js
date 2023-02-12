import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import Sidebar from '@/components/Layout/components/Sidebar.jsx/Sidebar'
import React from 'react'

export default function single_question_poll() {
  return (
    <>
    <Breadcrumb />
    <section className="container main-content">
  <div className="row">
    <div className="col-md-9">
      <article className="question single-question question-type-poll">
        <h2>
          <a href="single_question.html">This is my second Poll Question</a>
        </h2>
        <a className="question-report" href="#">
          Report
        </a>
        <div className="question-type-main">
          <i className="icon-signal" />
          Poll
        </div>
        <div className="question-inner">
          <div className="clearfix" />
          <div className="question-desc">
            <div className="poll_1">
              <div className="progressbar-warp">
                <span className="progressbar-title">The first option 0%</span>
                <div className="progressbar">
                  <div
                    className="progressbar-percent poll-result"
                    attr-percent={0}
                  />
                </div>
                <span className="progressbar-title">The second option 75%</span>
                <div className="progressbar">
                  <div
                    className="progressbar-percent"
                    style={{ backgroundColor: "#3498db" }}
                    attr-percent={75}
                  />
                </div>
                <span className="progressbar-title">The third option 0%</span>
                <div className="progressbar">
                  <div
                    className="progressbar-percent poll-result"
                    attr-percent={0}
                  />
                </div>
                <span className="progressbar-title">The fourth option 25%</span>
                <div className="progressbar">
                  <div
                    className="progressbar-percent"
                    style={{ backgroundColor: "#3498db" }}
                    attr-percent={25}
                  />
                </div>
              </div>
              {/* End progressbar-warp */}
              <a href="#" className="color button small poll_polls margin_0">
                Rating
              </a>
            </div>
            <div className="clearfix" />
            <div className="poll_2">
              <form className="form-style form-style-3">
                <div className="form-inputs clearfix">
                  <p>
                    <input id="poll-1" name="poll-radio" type="radio" />
                    <label htmlFor="poll-1">The first option</label>
                  </p>
                  <p>
                    <input id="poll-2" name="poll-radio" type="radio" />
                    <label htmlFor="poll-2">The second option</label>
                  </p>
                  <p>
                    <input id="poll-3" name="poll-radio" type="radio" />
                    <label htmlFor="poll-3">The third option</label>
                  </p>
                  <p>
                    <input id="poll-4" name="poll-radio" type="radio" />
                    <label htmlFor="poll-4">The fourth option</label>
                  </p>
                </div>
              </form>
              <a href="#" className="color button small poll_results margin_0">
                Results
              </a>
            </div>
            <div className="clearfix height_20" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              adipiscing gravida odio, sit amet suscipit risus ultrices eu.
              Fusce viverra neque at purus laoreet consequat. Vivamus vulputate
              posuere nisl quis consequat. Donec congue commodo mi, sed commodo
              velit fringilla ac. Fusce placerat venenatis mi. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Cras ornare, dolor a aliquet rutrum, dolor turpis
              condimentum leo, a semper lacus purus in felis. Quisque blandit
              posuere turpis, eget auctor felis pharetra eu .
            </p>
          </div>
          <div className="question-details">
            <span className="question-answered question-answered-done">
              <i className="icon-ok" />
              solved
            </span>
            <span className="question-favorite">
              <i className="icon-star" />5
            </span>
          </div>
          <span className="question-category">
            <a href="#">
              <i className="icon-folder-close" />
              wordpress
            </a>
          </span>
          <span className="question-date">
            <i className="icon-time" />4 mins ago
          </span>
          <span className="question-comment">
            <a href="#">
              <i className="icon-comment" />5 Answer
            </a>
          </span>
          <span className="question-view">
            <i className="icon-user" />
            70 views
          </span>
          <span className="single-question-vote-result">+22</span>
          <ul className="single-question-vote">
            <li>
              <a href="#" className="single-question-vote-down" title="Dislike">
                <i className="icon-thumbs-down" />
              </a>
            </li>
            <li>
              <a href="#" className="single-question-vote-up" title="Like">
                <i className="icon-thumbs-up" />
              </a>
            </li>
          </ul>
          <div className="clearfix" />
        </div>
      </article>
      <div className="share-tags page-content">
        <div className="question-tags">
          <i className="icon-tags" />
          <a href="#">wordpress</a>, <a href="#">question</a>,{" "}
          <a href="#">developer</a>
        </div>
        <div className="share-inside-warp">
          <ul>
            <li>
              <a href="#" original-title="Facebook">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={20}
                    span_bg="#3b5997"
                    span_hover="#666"
                  >
                    <i i_color="#FFF" className="social_icon-facebook" />
                  </span>
                </span>
              </a>
              <a href="#" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={20}
                    span_bg="#00baf0"
                    span_hover="#666"
                  >
                    <i i_color="#FFF" className="social_icon-twitter" />
                  </span>
                </span>
              </a>
              <a target="_blank" href="#">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={20}
                    span_bg="#ca2c24"
                    span_hover="#666"
                  >
                    <i i_color="#FFF" className="social_icon-gplus" />
                  </span>
                </span>
              </a>
              <a href="#" target="_blank">
                Google plus
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={20}
                    span_bg="#e64281"
                    span_hover="#666"
                  >
                    <i i_color="#FFF" className="social_icon-dribbble" />
                  </span>
                </span>
              </a>
              <a href="#" target="_blank">
                Dribbble
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <span className="icon_i">
                  <span
                    className="icon_square"
                    icon_size={20}
                    span_bg="#c7151a"
                    span_hover="#666"
                  >
                    <i i_color="#FFF" className="icon-pinterest" />
                  </span>
                </span>
              </a>
              <a href="#" target="_blank">
                Pinterest
              </a>
            </li>
          </ul>
          <span className="share-inside-f-arrow" />
          <span className="share-inside-l-arrow" />
        </div>
        {/* End share-inside-warp */}
        <div className="share-inside">
          <i className="icon-share-alt" />
          Share
        </div>
        <div className="clearfix" />
      </div>
      {/* End share-tags */}
      <div className="about-author clearfix">
        <div className="author-image">
          <a href="#" original-title="admin" className="tooltip-n">
            <img alt="" src="../ask-me/images/demo/admin.jpg" />
          </a>
        </div>
        <div className="author-bio">
          <h4>About the Author</h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
          auctor neque. Nullam lobortis, sapien vitae lobortis tristique.
        </div>
      </div>
      {/* End about-author */}
      <div id="related-posts">
        <h2>Related questions</h2>
        <ul className="related-posts">
          <li className="related-item">
            <h3>
              <a href="#">
                <i className="icon-double-angle-right" />
                This Is My Second Poll Question
              </a>
            </h3>
          </li>
          <li className="related-item">
            <h3>
              <a href="#">
                <i className="icon-double-angle-right" />
                This is my third Question
              </a>
            </h3>
          </li>
          <li className="related-item">
            <h3>
              <a href="#">
                <i className="icon-double-angle-right" />
                This is my fourth Question
              </a>
            </h3>
          </li>
          <li className="related-item">
            <h3>
              <a href="#">
                <i className="icon-double-angle-right" />
                This is my fifth Question
              </a>
            </h3>
          </li>
        </ul>
      </div>
      {/* End related-posts */}
      <div id="commentlist" className="page-content">
        <div className="boxedtitle page-title">
          <h2>
            Answers ( <span className="color">5</span> )
          </h2>
        </div>
        <ol className="commentlist clearfix">
          <li className="comment">
            <div className="comment-body comment-body-answered clearfix">
              <div className="avatar">
                <img alt="" src="../ask-me/images/demo/admin.jpg" />
              </div>
              <div className="comment-text">
                <div className="author clearfix">
                  <div className="comment-author">
                    <a href="#">admin</a>
                  </div>
                  <div className="comment-vote">
                    <ul className="question-vote">
                      <li>
                        <a href="#" className="question-vote-up" title="Like" />
                      </li>
                      <li>
                        <a
                          href="#"
                          className="question-vote-down"
                          title="Dislike"
                        />
                      </li>
                    </ul>
                  </div>
                  <span className="question-vote-result">+1</span>
                  <div className="comment-meta">
                    <div className="date">
                      <i className="icon-time" />
                      January 15 , 2014 at 10:00 pm
                    </div>
                  </div>
                  <a className="comment-reply" href="#">
                    <i className="icon-reply" />
                    Reply
                  </a>
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi adipiscing gravida odio, sit amet suscipit risus
                    ultrices eu. Fusce viverra neque at purus laoreet consequat.
                    Vivamus vulputate posuere nisl quis consequat.
                  </p>
                </div>
                <div className="question-answered question-answered-done">
                  <i className="icon-ok" />
                  Best Answer
                </div>
              </div>
            </div>
            <ul className="children">
              <li className="comment">
                <div className="comment-body clearfix">
                  <div className="avatar">
                    <img alt="" src="../ask-me/images/demo/avatar.png" />
                  </div>
                  <div className="comment-text">
                    <div className="author clearfix">
                      <div className="comment-author">
                        <a href="#">vbegy</a>
                      </div>
                      <div className="comment-vote">
                        <ul className="question-vote">
                          <li>
                            <a
                              href="#"
                              className="question-vote-up"
                              title="Like"
                            />
                          </li>
                          <li>
                            <a
                              href="#"
                              className="question-vote-down"
                              title="Dislike"
                            />
                          </li>
                        </ul>
                      </div>
                      <span className="question-vote-result">+1</span>
                      <div className="comment-meta">
                        <div className="date">
                          <i className="icon-time" />
                          January 15 , 2014 at 10:00 pm
                        </div>
                      </div>
                      <a className="comment-reply" href="#">
                        <i className="icon-reply" />
                        Reply
                      </a>
                    </div>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi adipiscing gravida odio, sit amet suscipit risus
                        ultrices eu. Fusce viverra neque at purus laoreet
                        consequat. Vivamus vulputate posuere nisl quis
                        consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="children">
                  <li className="comment">
                    <div className="comment-body clearfix">
                      <div className="avatar">
                        <img alt="" src="../ask-me/images/demo/admin.jpg" />
                      </div>
                      <div className="comment-text">
                        <div className="author clearfix">
                          <div className="comment-author">
                            <a href="#">admin</a>
                          </div>
                          <div className="comment-vote">
                            <ul className="question-vote">
                              <li>
                                <a
                                  href="#"
                                  className="question-vote-up"
                                  title="Like"
                                />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="question-vote-down"
                                  title="Dislike"
                                />
                              </li>
                            </ul>
                          </div>
                          <span className="question-vote-result">+9</span>
                          <div className="comment-meta">
                            <div className="date">
                              <i className="icon-time" />
                              January 15 , 2014 at 10:00 pm
                            </div>
                          </div>
                          <a className="comment-reply" href="#">
                            <i className="icon-reply" />
                            Reply
                          </a>
                        </div>
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi adipiscing gravida odio, sit amet
                            suscipit risus ultrices eu. Fusce viverra neque at
                            purus laoreet consequat. Vivamus vulputate posuere
                            nisl quis consequat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* End children */}
              </li>
              <li className="comment">
                <div className="comment-body clearfix">
                  <div className="avatar">
                    <img alt="" src="../ask-me/images/demo/avatar.png" />
                  </div>
                  <div className="comment-text">
                    <div className="author clearfix">
                      <div className="comment-author">
                        <a href="#">ahmed</a>
                      </div>
                      <div className="comment-vote">
                        <ul className="question-vote">
                          <li>
                            <a
                              href="#"
                              className="question-vote-up"
                              title="Like"
                            />
                          </li>
                          <li>
                            <a
                              href="#"
                              className="question-vote-down"
                              title="Dislike"
                            />
                          </li>
                        </ul>
                      </div>
                      <span className="question-vote-result">-3</span>
                      <div className="comment-meta">
                        <div className="date">
                          <i className="icon-time" />
                          January 15 , 2014 at 10:00 pm
                        </div>
                      </div>
                      <a className="comment-reply" href="#">
                        <i className="icon-reply" />
                        Reply
                      </a>
                    </div>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi adipiscing gravida odio, sit amet suscipit risus
                        ultrices eu. Fusce viverra neque at purus laoreet
                        consequat. Vivamus vulputate posuere nisl quis
                        consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* End children */}
          </li>
          <li className="comment">
            <div className="comment-body clearfix">
              <div className="avatar">
                <img alt="" src="../ask-me/images/demo/avatar.png" />
              </div>
              <div className="comment-text">
                <div className="author clearfix">
                  <div className="comment-author">
                    <a href="#">2code</a>
                  </div>
                  <div className="comment-vote">
                    <ul className="question-vote">
                      <li>
                        <a href="#" className="question-vote-up" title="Like" />
                      </li>
                      <li>
                        <a
                          href="#"
                          className="question-vote-down"
                          title="Dislike"
                        />
                      </li>
                    </ul>
                  </div>
                  <span className="question-vote-result">+1</span>
                  <div className="comment-meta">
                    <div className="date">
                      <i className="icon-time" />
                      January 15 , 2014 at 10:00 pm
                    </div>
                  </div>
                  <a className="comment-reply" href="#">
                    <i className="icon-reply" />
                    Reply
                  </a>
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi adipiscing gravida odio, sit amet suscipit risus
                    ultrices eu. Fusce viverra neque at purus laoreet consequat.
                    Vivamus vulputate posuere nisl quis consequat.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ol>
        {/* End commentlist */}
      </div>
      {/* End page-content */}
      <div id="respond" className="comment-respond page-content clearfix">
        <div className="boxedtitle page-title">
          <h2>Leave a reply</h2>
        </div>
        <form
          action="#"
          method="post"
          id="commentform"
          className="comment-form"
        >
          <div id="respond-inputs" className="clearfix">
            <p>
              <label className="required" htmlFor="comment_name">
                Name<span>*</span>
              </label>
              <input
                name="author"
                type="text"
                defaultValue=""
                id="comment_name"
                aria-required="true"
              />
            </p>
            <p>
              <label className="required" htmlFor="comment_email">
                E-Mail<span>*</span>
              </label>
              <input
                name="email"
                type="text"
                defaultValue=""
                id="comment_email"
                aria-required="true"
              />
            </p>
            <p className="last">
              <label className="required" htmlFor="comment_url">
                Website<span>*</span>
              </label>
              <input name="url" type="text" defaultValue="" id="comment_url" />
            </p>
          </div>
          <div id="respond-textarea">
            <p>
              <label className="required" htmlFor="comment">
                Comment<span>*</span>
              </label>
              <textarea
                id="comment"
                name="comment"
                aria-required="true"
                cols={58}
                rows={8}
                defaultValue={""}
              />
            </p>
          </div>
          <p className="form-submit">
            <input
              name="submit"
              type="submit"
              id="submit"
              defaultValue="Post your answer"
              className="button small color"
            />
          </p>
        </form>
      </div>
      <div className="post-next-prev clearfix">
        <p className="prev-post">
          <a href="#">
            <i className="icon-double-angle-left" />
            &nbsp;Prev question
          </a>
        </p>
        <p className="next-post">
          <a href="#">
            Next question&nbsp;
            <i className="icon-double-angle-right" />
          </a>
        </p>
      </div>
      {/* End post-next-prev */}
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
