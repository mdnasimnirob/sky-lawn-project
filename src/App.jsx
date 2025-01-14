import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./pages/share/Navbar";
import Sidebar from "./pages/share/Sidebar";


function App() {
  
 
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
          <Dashboard></Dashboard>
          {/* <!-- Content wrapper --> */}
        </div>
        {/* <!-- / Layout page --> */}
      </div>
    </div>
    </>
  );
}

export default App;
