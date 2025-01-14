import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./pages/share/Navbar";
import Sidebar from "./pages/share/Sidebar";


function App() {


  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">

          {/* <!-- Menu --> */}
          <div
            className="layout-menu bg-menu-theme h-100 overflow-auto"
            style={{ width: "250px", minWidth: "250px", maxWidth: "250px" }}
          >
            <Sidebar></Sidebar>
          </div>
          {/* <!-- / Menu --> */}

          {/* <!-- Layout container --> */}
          <div
            className="layout-page"
            style={{ marginLeft: "2px" }}>

            {/* <!-- Navbar --> */}
            <Navbar></Navbar>
            {/* <!-- / Navbar --> */}

            {/* <!-- Content wrapper --> */}
            <Dashboard></Dashboard>
            {/* <!-- Content wrapper --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
