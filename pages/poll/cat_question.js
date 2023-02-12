import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import Sidebar from '@/components/Layout/components/Sidebar.jsx/Sidebar'
import Image from 'next/image'
import React from 'react'

export default function cat_question() {
  return (
    <>
    <Breadcrumb />
    <section className="container main-content">
  <div className="row">
    <div className="col-md-9">
      <article className="question question-type-normal">
        <h2>
          <a href="single_question.html">This is my first Question</a>
        </h2>
        <a className="question-report" href="#">
          Report
        </a>
        <div className="question-type-main">
          <i className="icon-question-sign" />
          Question
        </div>
        <div className="question-author">
          <a
            href="#"
            original-title="ahmed"
            className="question-author-img tooltip-n"
          >
            <span />
            <Image alt=""  width={60}
                  height={60} src="/images/demo/avatar.png" />
          </a>
        </div>
        <div className="question-inner">
          <div className="clearfix" />
          <p className="question-desc">
            Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at
            elit quis urna adipiscing iaculis. Curabitur vitae velit in neque
            dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Curabitur vitae velit in neque dictum blandit.
          </p>
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
          <div className="clearfix" />
        </div>
      </article>
      <article className="question question-type-poll">
        <h2>
          <a href="single_question_poll.html">
            This Is My Second Poll Question
          </a>
        </h2>
        <a className="question-report" href="#">
          Report
        </a>
        <div className="question-type-main">
          <i className="icon-signal" />
          Poll
        </div>
        <div className="question-author">
          <a
            href="#"
            original-title="ahmed"
            className="question-author-img tooltip-n"
          >
            <span />
            <Image alt=""  width={60}
                  height={60} src="/images/demo/admin.jpg" />
          </a>
        </div>
        <div className="question-inner">
          <div className="clearfix" />
          <p className="question-desc">
            Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at
            elit quis urna adipiscing iaculis. Curabitur vitae velit in neque
            dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Curabitur vitae velit in neque dictum blandit.
          </p>
          <div className="question-details">
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
          <div className="clearfix" />
        </div>
      </article>
      <article className="question question-type-normal">
        <h2>
          <a href="single_question.html">This Is My Third Question</a>
        </h2>
        <a className="question-report" href="#">
          Report
        </a>
        <div className="question-type-main">
          <i className="icon-question-sign" />
          Question
        </div>
        <div className="question-author">
          <a
            href="#"
            original-title="ahmed"
            className="question-author-img tooltip-n"
          >
            <span />
            <Image alt=""  width={60}
                  height={60} src="/images/demo/avatar.png" />
          </a>
        </div>
        <div className="question-inner">
          <div className="clearfix" />
          <p className="question-desc">
            Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at
            elit quis urna adipiscing iaculis. Curabitur vitae velit in neque
            dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Curabitur vitae velit in neque dictum blandit.
          </p>
          <div className="question-details">
            <span className="question-answered">
              <i className="icon-ok" />
              in progress
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
          <div className="clearfix" />
        </div>
      </article>
      <article className="question question-type-normal">
        <h2>
          <a href="single_question.html">This Is My Fourth Question</a>
        </h2>
        <a className="question-report" href="#">
          Report
        </a>
        <div className="question-type-main">
          <i className="icon-question-sign" />
          Question
        </div>
        <div className="question-author">
          <a
            href="#"
            original-title="ahmed"
            className="question-author-img tooltip-n"
          >
            <span />
            <Image alt=""  width={60}
                  height={60} src="/images/demo/admin.jpg" />
          </a>
        </div>
        <div className="question-inner">
          <div className="clearfix" />
          <p className="question-desc">
            Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at
            elit quis urna adipiscing iaculis. Curabitur vitae velit in neque
            dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Curabitur vitae velit in neque dictum blandit.
          </p>
          <div className="question-details">
            <span className="question-answered">
              <i className="icon-ok" />
              in progress
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
          <div className="clearfix" />
        </div>
      </article>
      <article className="question question-type-normal">
        <h2>
          <a href="single_question.html">This Is My Fifth Question</a>
        </h2>
        <a className="question-report" href="#">
          Report
        </a>
        <div className="question-type-main">
          <i className="icon-question-sign" />
          Question
        </div>
        <div className="question-author">
          <a
            href="#"
            original-title="ahmed"
            className="question-author-img tooltip-n"
          >
            <span />
            <Image alt=""  width={60}
                  height={60} src="/images/demo/avatar.png" />
          </a>
        </div>
        <div className="question-inner">
          <div className="clearfix" />
          <p className="question-desc">
            Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at
            elit quis urna adipiscing iaculis. Curabitur vitae velit in neque
            dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Curabitur vitae velit in neque dictum blandit.
          </p>
          <div className="question-details">
            <span className="question-answered">
              <i className="icon-ok" />
              in progress
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
          <div className="clearfix" />
        </div>
      </article>
      <article className="question question-type-normal">
        <h2>
          <a href="single_question.html">This Is My Sixth Question</a>
        </h2>
        <a className="question-report" href="#">
          Report
        </a>
        <div className="question-type-main">
          <i className="icon-question-sign" />
          Question
        </div>
        <div className="question-author">
          <a
            href="#"
            original-title="ahmed"
            className="question-author-img tooltip-n"
          >
            <span />
            <Image alt=""  width={60}
                  height={60} src="/images/demo/admin.jpg" />
          </a>
        </div>
        <div className="question-inner">
          <div className="clearfix" />
          <p className="question-desc">
            Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at
            elit quis urna adipiscing iaculis. Curabitur vitae velit in neque
            dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Curabitur vitae velit in neque dictum blandit.
          </p>
          <div className="question-details">
            <span className="question-answered">
              <i className="icon-ok" />
              in progress
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
          <div className="clearfix" />
        </div>
      </article>
      <article className="question question-type-normal">
        <h2>
          <a href="single_question.html">This Is My seventh Question</a>
        </h2>
        <a className="question-report" href="#">
          Report
        </a>
        <div className="question-type-main">
          <i className="icon-question-sign" />
          Question
        </div>
        <div className="question-author">
          <a
            href="#"
            original-title="ahmed"
            className="question-author-img tooltip-n"
          >
            <span />
            <Image alt=""  width={60}
                  height={60} src="/images/demo/avatar.png" />
          </a>
        </div>
        <div className="question-inner">
          <div className="clearfix" />
          <p className="question-desc">
            Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at
            elit quis urna adipiscing iaculis. Curabitur vitae velit in neque
            dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Curabitur vitae velit in neque dictum blandit.
          </p>
          <div className="question-details">
            <span className="question-answered">
              <i className="icon-ok" />
              in progress
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
          <div className="clearfix" />
        </div>
      </article>
      <article className="question question-type-normal">
        <h2>
          <a href="single_question.html">This Is My Eighth Question</a>
        </h2>
        <a className="question-report" href="#">
          Report
        </a>
        <div className="question-type-main">
          <i className="icon-question-sign" />
          Question
        </div>
        <div className="question-author">
          <a
            href="#"
            original-title="ahmed"
            className="question-author-img tooltip-n"
          >
            <span />
            <Image alt=""  width={60}
                  height={60} src="/images/demo/admin.jpg" />
          </a>
        </div>
        <div className="question-inner">
          <div className="clearfix" />
          <p className="question-desc">
            Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at
            elit quis urna adipiscing iaculis. Curabitur vitae velit in neque
            dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Curabitur vitae velit in neque dictum blandit.
          </p>
          <div className="question-details">
            <span className="question-answered">
              <i className="icon-ok" />
              in progress
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
          <div className="clearfix" />
        </div>
      </article>
      <a href="#" className="load-questions">
        <i className="icon-refresh" />
        Load More Questions
      </a>
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
