import Image from 'next/image'
import React from 'react'

export default function HeaderBottom() {
  return (
    <header id="header">
		<section className="container clearfix">
			<div className="logo"><a href="index.html"><Image width={110} height={110} alt="" src="/images/logo.png" /></a></div>
			<nav className="navigation navigation_mobile_main">
				<ul>
					<li className="current_page_item"><a href="index.html">Home</a>
					</li>
					<li className="ask_question"><a href="ask_question.html">Ask Question</a></li>
					<li><a href="cat_question.html">Questions</a>
						<ul>
							<li><a href="cat_question.html">Questions Category</a></li>
							<li><a href="single_question.html">Question Single</a></li>
							<li><a href="single_question_poll.html">Poll Question Single</a></li>
						</ul>
					</li>
					{/* <li><a href="user_profile.html">User</a>
						<ul>
							<li><a href="user_profile.html">User Profile</a></li>
							<li><a href="user_questions.html">User Questions</a></li>
							<li><a href="user_answers.html">User Answers</a></li>
							<li><a href="user_favorite_questions.html">User Favorite Questions</a></li>
							<li><a href="user_points.html">User Points</a></li>
							<li><a href="edit_profile.html">Edit Profile</a></li>
						</ul>
					</li> */}

				</ul>
			</nav>
		</section>
	</header>
  )
}
