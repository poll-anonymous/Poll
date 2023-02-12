import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import Sidebar from '@/components/Layout/components/Sidebar.jsx/Sidebar'
import React from 'react'

export default function edit_profile() {
  return (
    <>
    <Breadcrumb />
    <section className="container main-content">
  <div className="row">
    <div className="col-md-9">
      <div className="page-content">
        <div className="boxedtitle page-title">
          <h2>Edit Profile</h2>
        </div>
        <div className="form-style form-style-4">
          <form>
            <div className="form-inputs clearfix">
              <p>
                <label>First Name</label>
                <input type="text" />
              </p>
              <p>
                <label>Last Name</label>
                <input type="text" />
              </p>
              <p>
                <label className="required">
                  E-Mail<span>*</span>
                </label>
                <input type="email" />
              </p>
              <p>
                <label>Website</label>
                <input type="text" />
              </p>
              <p>
                <label className="required">
                  Password<span>*</span>
                </label>
                <input type="password" defaultValue="" />
              </p>
              <p>
                <label className="required">
                  Confirm Password<span>*</span>
                </label>
                <input type="password" defaultValue="" />
              </p>
              <p>
                <label>Country</label>
                <input type="text" />
              </p>
            </div>
            <div className="form-style form-style-2">
              <div className="user-profile-img">
                <img src="../ask-me/images/demo/admin.jpg" alt="admin" />
              </div>
              <p className="user-profile-p">
                <label>Profile Picture</label>
              </p>
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
              <p />
              <div className="clearfix" />
              <p>
                <label>About Yourself</label>
                <textarea cols={58} rows={8} defaultValue={""} />
              </p>
            </div>
            <div className="form-inputs clearfix">
              <p>
                <label>Facebook</label>
                <input type="text" />
              </p>
              <p>
                <label>Twitter</label>
                <input type="text" />
              </p>
              <p>
                <label>Linkedin</label>
                <input type="email" />
              </p>
              <p>
                <label>Google plus</label>
                <input type="text" />
              </p>
            </div>
            <p className="form-submit">
              <input
                type="submit"
                defaultValue="Update"
                className="button color small login-submit submit"
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
