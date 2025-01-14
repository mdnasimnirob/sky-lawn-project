import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);

  const toggleEcommerceMenu = () => {
    setIsEcommerceOpen((prev) => !prev);
  };
  return (
    <>
      <aside
        id="layout-menu"
        className=" layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <NavLink to='/' className="text-primary fs-3 ">Sky Lawn</NavLink>
          <NavLink
            href="javascript:void(0);"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </NavLink>
        </div>
        <ul className="menu-inner py-1">
          

          {/* <!-- Dashboard -->  */}
           <li className="menu-item ">
            <NavLink to='/dashboard'  className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </NavLink>
          </li> 
           {/* <!-- Home -->  */}
           <li className="menu-item ">
            <NavLink to='/home' className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Home</div>
            </NavLink>
          </li>

          {/* E-Commerce */}
          <li className={`menu-item ${isEcommerceOpen ? "open" : ""}`}>
            <NavLink
              className="menu-link menu-toggle"
              onClick={toggleEcommerceMenu}
            >
              <i className="menu-icon tf-icons bx bx-layout"></i>
              <div data-i18n="Layouts">E-Commerce</div>
            </NavLink>

            {isEcommerceOpen && (
              <ul className="menu-sub">
                <li className="menu-item">
                  <NavLink to='/e-home' className="menu-link">
                    <div data-i18n="Without menu">Home</div>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to='/e-order' className="menu-link">
                    <div data-i18n="Without navbar">Orders</div>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to='e-customers' className="menu-link">
                    <div data-i18n="Container">Customers</div>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to='e-reports' className="menu-link">
                    <div data-i18n="Fluid">Reports</div>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to='e-settings' className="menu-link">
                    <div data-i18n="Blank">Settings</div>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to='e-status' className="menu-link">
                    <div data-i18n="Blank">Status</div>
                  </NavLink>
                </li>             
              </ul>
            )}
          </li>

          {/* <!-- Products --> */}
          <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-layout"></i>
              <div data-i18n="Layouts">Products</div>
            </a>

            <ul className="menu-sub">
              <li className="menu-item">
                <a href="products-all-products.html" className="menu-link">
                  <div data-i18n="Without menu">All products</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="products-add-new-products.html" className="menu-link">
                  <div data-i18n="Without navbar">Add new products</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="products-categories.html" className="menu-link">
                  <div data-i18n="Container">Categories</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="products-tags.html" className="menu-link">
                  <div data-i18n="Fluid">Tags</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="attributes.html" className="menu-link">
                  <div data-i18n="Blank">Attributes</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-blank.html" className="menu-link">
                  <div data-i18n="Blank">Reviews</div>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- Payments --> */}
          <li className="menu-item">
            <a href="cards-basic.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-collection"></i>
              <div data-i18n="Basic">Payments</div>
            </a>
          </li>
          {/* <!-- Analytics --> */}
          <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-layout"></i>
              <div data-i18n="Layouts">Analytics</div>
            </a>

            <ul className="menu-sub">
              <li className="menu-item">
                <a href="analytics-overviews.html" className="menu-link">
                  <div data-i18n="Without menu">Overviews</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="analytics-products.html" className="menu-link">
                  <div data-i18n="Without navbar">Products</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="analytics-revenue.html" className="menu-link">
                  <div data-i18n="Container">Revenue</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="analytics-oders.html" className="menu-link">
                  <div data-i18n="Fluid">Orders</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="analytics-variations.html" className="menu-link">
                  <div data-i18n="Blank">Variations</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="analytics-categories.html" className="menu-link">
                  <div data-i18n="Blank">Categories</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="analytics-coupons.html" className="menu-link">
                  <div data-i18n="Blank">Coupons</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="analytics-taxes.html" className="menu-link">
                  <div data-i18n="Blank">Taxes</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="analytics-downloads.html" className="menu-link">
                  <div data-i18n="Blank">Downloads</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="analytics-settings.html" className="menu-link">
                  <div data-i18n="Blank">Settings</div>
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Pages</span>
          </li>
          <li className="menu-item">
            {/* <!-- Account Settings --> */}
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-dock-top"></i>
              <div data-i18n="Account Settings">Account Settings</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a
                  href="pages-account-settings-account.html"
                  className="menu-link"
                >
                  <div data-i18n="Account">Account</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="pages-account-settings-notifications.html"
                  className="menu-link"
                >
                  <div data-i18n="Notifications">Notifications</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="pages-account-settings-connections.html"
                  className="menu-link"
                >
                  <div data-i18n="Connections">Connections</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="pages-account-settings-connections.html"
                  className="menu-link"
                >
                  <div data-i18n="Connections">Export personal data</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="pages-account-settings-connections.html"
                  className="menu-link"
                >
                  <div data-i18n="Connections">Erase personal data</div>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- Authentications --> */}
          <li className="menu-item">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
              <div data-i18n="Authentications">Authentications</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a
                  href="auth-login-basic.html"
                  className="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">Login</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="auth-register-basic.html"
                  className="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">Register</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="auth-forgot-password-basic.html"
                  className="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">Forgot Password</div>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- Settings --> */}
          <li className="menu-item">
            <a href="" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
              <div data-i18n="Authentications">Settings</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a
                  href="auth-login-basic.html"
                  className="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">General settings</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="auth-register-basic.html"
                  className="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">Privacy</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="auth-forgot-password-basic.html"
                  className="menu-link"
                  target="_blank"
                >
                  <div data-i18n="Basic">Policy</div>
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-item">
            <a href="" target="_blank" className="menu-link">
              <i className="menu-icon tf-icons bx bx-support"></i>
              <div data-i18n="Support">Support</div>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
