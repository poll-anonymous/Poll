import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import Sidebar from '@/components/Layout/components/Sidebar.jsx/Sidebar'
import React from 'react'

export default function ask_question() {
  return (
    <>
    <Breadcrumb />
    <section className="container main-content">
  <div className="row">
    <div className="col-md-9">
      <div className="page-content ask-question">
        <div className="boxedtitle page-title">
          <h2>Ask Question</h2>
        </div>
        <p>
          Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at
          elit quis urna adipiscing iaculis. Curabitur vitae velit in neque
          dictum blandit. Proin in iaculis neque.
        </p>
        <div className="form-style form-style-3" id="question-submit">
          <form>
            <div className="form-inputs clearfix">
              <p>
                <label className="required">
                  Question Title<span>*</span>
                </label>
                <input type="text" id="question-title" />
                <span className="form-description">
                  Please choose an appropriate title for the question to answer
                  it even easier .
                </span>
              </p>
              <p>
                <label>Tags</label>
                <input
                  type="text"
                  className="input"
                  name="question_tags"
                  id="question_tags"
                  data-seperator=","
                />
                <span className="form-description">
                  Please choose suitable Keywords Ex :{" "}
                  <span className="color">question , poll</span> .
                </span>
              </p>
              <p>
                <label className="required">
                  Category<span>*</span>
                </label>
                <span className="styled-select">
                  <select>
                    <option value="">Select a Category</option>
                    <option value={1}>Category 1</option>
                    <option value={2}>Category 2</option>
                  </select>
                </span>
                <span className="form-description">
                  Please choose the appropriate section so easily search for
                  your question .
                </span>
              </p>
              <p className="question_poll_p">
                <label htmlFor="question_poll">Poll</label>
                <input
                  type="checkbox"
                  id="question_poll"
                  defaultValue={1}
                  name="question_poll"
                />
                <span className="question_poll">This question is a poll ?</span>
                <span className="poll-description">
                  If you want to be doing a poll click here .
                </span>
              </p>
              <div className="clearfix" />
              <div className="poll_options">
                <p className="form-submit add_poll">
                  <button
                    id="add_poll"
                    type="button"
                    className="button color small submit"
                  >
                    <i className="icon-plus" />
                    Add Field
                  </button>
                </p>
                <ul id="question_poll_item">
                  <li id="poll_li_1">
                    <div className="poll-li">
                      <p>
                        <input
                          id="ask[1][title]"
                          className="ask"
                          name="ask[1][title]"
                          defaultValue=""
                          type="text"
                        />
                      </p>
                      <input
                        id="ask[1][value]"
                        name="ask[1][value]"
                        defaultValue=""
                        type="hidden"
                      />
                      <input
                        id="ask[1][id]"
                        name="ask[1][id]"
                        defaultValue={1}
                        type="hidden"
                      />
                      <div className="del-poll-li">
                        <i className="icon-remove" />
                      </div>
                      <div className="move-poll-li">
                        <i className="icon-fullscreen" />
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
              <label>Attachment</label>
              <div className="fileinputs">
                <input type="file" className="file" />
                <div className="fakefile">
                  <button type="button" className="button small margin_0">
                    Select file
                  </button>
                  <span>
                    <i className="icon-arrow-up" />
                    Browse
                  </span>
                </div>
              </div>
            </div>
            <div id="form-textarea">
              <p>
                <label className="required">
                  Details<span>*</span>
                </label>
                <textarea
                  id="question-details"
                  aria-required="true"
                  cols={58}
                  rows={8}
                  defaultValue={""}
                />
                <span className="form-description">
                  Type the description thoroughly and in detail .
                </span>
              </p>
            </div>
            <p className="form-submit">
              <input
                type="submit"
                id="publish-question"
                defaultValue="Publish Your Question"
                className="button color small submit"
              />
            </p>
          </form>
        </div>
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
