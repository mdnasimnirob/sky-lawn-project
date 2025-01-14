import Navbar from "../share/Navbar";
import Sidebar from "../share/Sidebar";

const Home = () => {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}

          <Sidebar></Sidebar>

          {/* <!-- / Menu --> */}

          {/* <!-- Layout container --> */}
          <div className="layout-page">
            {/* <!-- Navbar --> */}

            <Navbar></Navbar>

            {/* <!-- / Navbar --> */}

            {/* <!-- Content wrapper --> */}
            <div className="bg-white shadow-lg mx-4 my-2">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  Congratulations Home! 🎉
                </h5>
                <p className="mb-4">
                  You have done <span className="fw-bold">72%</span> more sales
                  today. Check your new badge in your profile.
                </p>

                <a
                  href="javascript:;"
                  className="btn btn-sm btn-outline-primary"
                >
                  View Badges
                </a>
              </div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>
      </div>
    </>
  );
};

export default Home;
