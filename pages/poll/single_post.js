import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import Sidebar from '@/components/Layout/components/Sidebar.jsx/Sidebar'
import React from 'react'

export default function single_post() {
  return (
    <>
    <Breadcrumb />
    <section className="container main-content">
  <div className="row">
    <div className="col-md-9">
      <article className="post single-post clearfix">
        <div className="post-inner">
          <div className="post-img">
            <a href="single_post.html">
              <img
                src="../ask-me/images/demo/posts/loneliness-1440x900.jpg"
                alt=""
              />
            </a>
          </div>
          <h2 className="post-title">
            <span className="post-type">
              <i className="icon-film" />
            </span>
            Beautiful Gallery Post.
          </h2>
          <div className="post-meta">
            <span className="meta-author">
              <i className="icon-user" />
              <a href="#">Administrator</a>
            </span>
            <span className="meta-date">
              <i className="icon-time" />
              September 30 , 2013
            </span>
            <span className="meta-categories">
              <i className="icon-suitcase" />
              <a href="#">Wordpress</a>
            </span>
            <span className="meta-comment">
              <i className="icon-comments-alt" />
              <a href="#">15 comments</a>
            </span>
          </div>
          <div className="post-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              adipiscing gravida odio, sit amet suscipit risus ultrices eu.
              Fusce viverra neque at purus laoreet consequat. Vivamus vulputate
              posuere nisl quis consequat. Donec congue commodo mi, sed commodo
              velit fringilla ac. Fusce placerat venenatis mi. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Cras ornare, dolor a aliquet rutrum, dolor turpis
              condimentum leo, a semper lacus purus in felis. Quisque blandit
              posuere turpis, eget auctor felis pharetra eu.
            </p>
            <blockquote>
              <p>
                Quisque ligulas ipsum, euismod atras vulputate iltricies etri
                elit. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Nulla nunc dui,
                tristique in semper vel, congue sed ligula.
              </p>
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              adipiscing gravida odio, sit amet suscipit risus ultrices eu.
              Fusce viverra neque at purus laoreet consequat. Vivamus vulputate
              posuere nisl quis consequat. Donec congue commodo mi, sed commodo
              velit fringilla ac. Fusce placerat venenatis mi. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas.
            </p>
          </div>
          {/* End post-content */}
          <div className="clearfix" />
        </div>
        {/* End post-inner */}
      </article>
      {/* End article.post */}
      <div className="share-tags page-content">
        <div className="post-tags">
          <i className="icon-tags" />
          <a href="#">projects</a>,<a href="#">Portfolio</a>,
          <a href="#">Wordpress</a>,<a href="#">Html</a>,<a href="#">Css</a>,
          <a href="#">jQuery</a>,<a href="#">2code</a>,<a href="#">vbegy</a>
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
        <h2>Related Posts</h2>
        <ul className="related-posts">
          <li className="related-item">
            <h3>
              <a href="#">
                <i className="icon-double-angle-right" />
                This is a Standard Post .
              </a>
            </h3>
          </li>
          <li className="related-item">
            <h3>
              <a href="#">
                <i className="icon-double-angle-right" />
                Post Without Image .
              </a>
            </h3>
          </li>
          <li className="related-item">
            <h3>
              <a href="#">
                <i className="icon-double-angle-right" />
                Beautiful Gallery Post .
              </a>
            </h3>
          </li>
          <li className="related-item">
            <h3>
              <a href="#">
                <i className="icon-double-angle-right" />
                This Is A Video Post .
              </a>
            </h3>
          </li>
        </ul>
      </div>
      {/* End related-posts */}
      <div id="commentlist" className="page-content">
        <div className="boxedtitle page-title">
          <h2>
            Comments ( <span className="color">5</span> )
          </h2>
        </div>
        <ol className="commentlist clearfix">
          <li className="comment">
            <div className="comment-body clearfix">
              <div className="avatar">
                <img alt="" src="../ask-me/images/demo/admin.jpg" />
              </div>
              <div className="comment-text">
                <div className="author clearfix">
                  <div className="comment-meta">
                    <span>admin</span>
                    <div className="date">January 15 , 2014 at 10:00 pm</div>
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
            <ul className="children">
              <li className="comment">
                <div className="comment-body clearfix">
                  <div className="avatar">
                    <img alt="" src="../ask-me/images/demo/avatar.png" />
                  </div>
                  <div className="comment-text">
                    <div className="author clearfix">
                      <div className="comment-meta">
                        <span>admin</span>
                        <div className="date">
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
                          <div className="comment-meta">
                            <span>admin</span>
                            <div className="date">
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
                      <div className="comment-meta">
                        <span>admin</span>
                        <div className="date">
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
                  <div className="comment-meta">
                    <span>admin</span>
                    <div className="date">January 15 , 2014 at 10:00 pm</div>
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
                rows={10}
                defaultValue={""}
              />
            </p>
          </div>
          <p className="form-submit">
            <input
              name="submit"
              type="submit"
              id="submit"
              defaultValue="Post Comment"
              className="button small color"
            />
          </p>
        </form>
      </div>
      <div className="post-next-prev clearfix">
        <p className="prev-post">
          <a href="#">
            <i className="icon-double-angle-left" />
            &nbsp;Prev post
          </a>
        </p>
        <p className="next-post">
          <a href="#">
            Next post&nbsp;
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
