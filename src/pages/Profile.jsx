import "../styles/sections/Profile.css";
import {
  IoPersonOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
  IoBagOutline,
} from "react-icons/io5";

import { PiSignOutLight } from "react-icons/pi";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header-card">
        <div className="profile-img-wrapper">
          <img src="/Home-img.png" alt="Profile" className="profile-img" />
          <button className="edit-img-btn">✏️</button>
        </div>
        <div className="profile-header-info">
          <h2>John Doe</h2>
          <p className="profile-email">john.doe@greenbite.com</p>
          <div className="profile-tags">
            <span className="tag tag-pro">● Pro Member</span>
            <span className="tag tag-saved">❤️ 124 Bites Saved</span>
          </div>
        </div>
      </div>

      <hr style={{ margin: "40px 0" }} />

      <div className="profile-main-layout">
        <aside className="profile-sidebar">
          <nav>
            <ul>
              <li className="active">
                <IoPersonOutline /> Personal Info
              </li>
              <li>
                <IoSettingsOutline /> Order History
              </li>
              <li>
                <IoHelpCircleOutline /> Settings
              </li>
              <li>
                <IoBagOutline />
                Help Center
              </li>
              <li className="logout-btn">
                <PiSignOutLight />
                logout
              </li>
            </ul>
          </nav>
        </aside>

        <div className="profile-content">
          <section className="content-card account-details">
            <div className="card-header">
              <h3>Account Details</h3>
              <button className="edit-link">✏️ EDIT PROFILE</button>
            </div>
            <div className="grid-2-col">
              <div>
                <label>FULL NAME</label>
                <p>John Doe</p>
              </div>
              <div>
                <label>EMAIL ADDRESS</label>
                <p>john.doe@greenbite.com</p>
              </div>
              <div>
                <label>PHONE NUMBER</label>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <label>DATE OF BIRTH</label>
                <p>May 24, 1992</p>
              </div>
            </div>
            <div className="address-section">
              <label>DEFAULT DELIVERY ADDRESS</label>
              <p>🏠 123 Green Valley Road, Suite 402, Urban Eco City, 90210</p>
            </div>
          </section>

          <div className="grid-2-col row-bottom">
            <section className="content-card">
              <h3>Dietary Preferences</h3>
              <div className="pref-tags">
                <span className="pref-tag">Vegan</span>
                <span className="pref-tag">Gluten-Free</span>
                <span className="pref-tag add-pref">+ Add Preference</span>
              </div>
            </section>

            <section className="content-card security-card">
              <h3>Security</h3>
              <div className="security-item">
                <div>
                  <h4>Password</h4>
                  <p>Last updated 3 months ago</p>
                </div>
                <button className="action-link">UPDATE</button>
              </div>
              <div className="security-item">
                <div>
                  <h4>Two-Factor Auth</h4>
                  <span className="status-badge status-enabled">ENABLED</span>
                </div>
                <button className="action-link">MANAGE</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
