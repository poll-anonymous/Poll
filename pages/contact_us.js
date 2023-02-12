import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import React from 'react'

export default function contact_us() {
  return (
    <>
    <Breadcrumb />
    <section className="container main-content page-full-width">
  <div className="row">
    <div className="contact-us">
      <div className="col-md-12">
        <div className="page-content">
          
        </div>
        {/* End page-content */}
      </div>
      <div className="col-md-7">
        <div className="page-content">
          <h2>Say hello !</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            adipiscing gravida odio, sit amet suscipit risus ultrices eu. Fusce
            viverra neque at purus laoreet consequat.
          </p>
          <form
            className="form-style form-style-3 form-style-5 form-js"
            action="https://2code.info/demo/html/ask-me-html/contact_us.php"
            method="post"
          >
            <div className="form-inputs clearfix">
              <p>
                <label htmlFor="name" className="required">
                  Name<span>*</span>
                </label>
                <input
                  type="text"
                  className="required-item"
                  defaultValue=""
                  name="name"
                  id="name"
                  aria-required="true"
                />
              </p>
              <p>
                <label htmlFor="mail" className="required">
                  E-Mail<span>*</span>
                </label>
                <input
                  type="email"
                  className="required-item"
                  id="mail"
                  name="mail"
                  defaultValue=""
                  aria-required="true"
                />
              </p>
              <p>
                <label htmlFor="url" className="required">
                  Website
                </label>
                <input type="text" id="url" name="url" defaultValue="" />
              </p>
            </div>
            <div className="form-textarea">
              <p>
                <label htmlFor="message" className="required">
                  Message<span>*</span>
                </label>
                <textarea
                  id="message"
                  className="required-item"
                  name="message"
                  aria-required="true"
                  cols={58}
                  rows={7}
                  defaultValue={""}
                />
              </p>
            </div>
            <p className="form-submit">
              <input
                name="submit"
                type="submit"
                defaultValue="Send"
                className="submit button small color"
              />
            </p>
          </form>
        </div>
        {/* End page-content */}
      </div>
      {/* End col-md-6 */}
      <div className="col-md-5">
        <div className="page-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            adipiscing gravida odio, sit amet suscipit risus ultrices eu. Fusce
            viverra neque at purus laoreet consequat. Vivamus vulputate posuere
            nisl quis consequat. Donec congue commodo mi, sed commodo velit
            fringilla ac. Fusce placerat venenatis mi. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Cras ornare, dolor a aliquet rutrum, dolor turpis
            condimentum leo, a semper lacus purus in felis.
          </p>
          <div className="widget widget_contact">
            <ul>
              <li>
                <i className="icon-map-marker" />
                Address :
                <p>Ask Me Network, 33 Street, syada Zeinab, Cairo, Egypt.</p>
              </li>
              <li>
                <i className="icon-phone" />
                Phone number :<p>(+2)01111011110</p>
              </li>
              <li>
                <i className="icon-envelope-alt" />
                E-mail :<p>info@example.com</p>
              </li>
              <li>
                <i className="icon-share" />
                Social links :
                <p>
                  <a href="#" original-title="Facebook" className="tooltip-n">
                    <span className="icon_i">
                      <span
                        className="icon_square"
                        icon_size={25}
                        span_bg="#3b5997"
                        span_hover="#2f3239"
                      >
                        <i i_color="#FFF" className="social_icon-facebook" />
                      </span>
                    </span>
                  </a>
                  <a href="#" original-title="Twitter" className="tooltip-n">
                    <span className="icon_i">
                      <span
                        className="icon_square"
                        icon_size={25}
                        span_bg="#00baf0"
                        span_hover="#2f3239"
                      >
                        <i i_color="#FFF" className="social_icon-twitter" />
                      </span>
                    </span>
                  </a>
                  <a original-title="Youtube" className="tooltip-n" href="#">
                    <span className="icon_i">
                      <span
                        className="icon_square"
                        icon_size={25}
                        span_bg="#cc291f"
                        span_hover="#2f3239"
                      >
                        <i i_color="#FFF" className="social_icon-youtube" />
                      </span>
                    </span>
                  </a>
                  <a href="#" original-title="Linkedin" className="tooltip-n">
                    <span className="icon_i">
                      <span
                        className="icon_square"
                        icon_size={25}
                        span_bg="#006599"
                        span_hover="#2f3239"
                      >
                        <i i_color="#FFF" className="social_icon-linkedin" />
                      </span>
                    </span>
                  </a>
                  <a
                    href="#"
                    original-title="Google plus"
                    className="tooltip-n"
                  >
                    <span className="icon_i">
                      <span
                        className="icon_square"
                        icon_size={25}
                        span_bg="#ca2c24"
                        span_hover="#2f3239"
                      >
                        <i i_color="#FFF" className="social_icon-gplus" />
                      </span>
                    </span>
                  </a>
                  <a original-title="RSS" className="tooltip-n" href="#">
                    <span className="icon_i">
                      <span
                        className="icon_square"
                        icon_size={25}
                        span_bg="#F18425"
                        span_hover="#2f3239"
                      >
                        <i i_color="#FFF" className="icon-rss" />
                      </span>
                    </span>
                  </a>
                  <a original-title="Instagram" className="tooltip-n" href="#">
                    <span className="icon_i">
                      <span
                        className="icon_square"
                        icon_size={25}
                        span_bg="#306096"
                        span_hover="#2f3239"
                      >
                        <i i_color="#FFF" className="social_icon-instagram" />
                      </span>
                    </span>
                  </a>
                  <a original-title="Dribbble" className="tooltip-n" href="#">
                    <span className="icon_i">
                      <span
                        className="icon_square"
                        icon_size={25}
                        span_bg="#e64281"
                        span_hover="#2f3239"
                      >
                        <i i_color="#FFF" className="social_icon-dribbble" />
                      </span>
                    </span>
                  </a>
                  <a original-title="Pinterest" className="tooltip-n" href="#">
                    <span className="icon_i">
                      <span
                        className="icon_square"
                        icon_size={25}
                        span_bg="#c7151a"
                        span_hover="#2f3239"
                      >
                        <i i_color="#FFF" className="icon-pinterest" />
                      </span>
                    </span>
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* End page-content */}
      </div>
      {/* End col-md-6 */}
    </div>
    {/* End contact-us */}
  </div>
  {/* End row */}
</section>

      
    </>
  )
}
