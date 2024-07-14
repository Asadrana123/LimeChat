import React from 'react';
import './DropDown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, faComments, faUserFriends, 
  faAd, faRobot, faChartBar, faHandsHelping, 
  faMagic 
} from '@fortawesome/free-solid-svg-icons';

const marketingItems = [
  { icon: faChartLine, label: 'Conversion Flows' },
  { icon: faComments, label: 'Post-Purchase Flows' },
  { icon: faUserFriends, label: 'Campaigns and Broadcasts' },
  { icon: faAd, label: 'Customer Segments' },
  { icon: faRobot, label: 'Click-to-WhatsApp Ads' },
];

const supportItems = [
  { icon: faChartBar, label: 'Support Chatbot' },
  { icon: faHandsHelping, label: 'OmniChannel CRM' },
  { icon: faMagic, label: 'Level-3 AI' },
  { icon: faComments, label: 'Intelligent CSAT' },
  { icon: faRobot, label: 'AI Copilot' },
];

const DropdownMenu = () => {
  return (
    <div className="navbar-first-dropdown-dropdown-menu">
      <div className="navbar-first-dropdown-section">
        <p>MARKETING</p>
        <div className="navbar-first-dropdown-item navbar-first-dropdown-highlighted">
          <div>
          <img src="https://cdn.prod.website-files.com/65a7d71f66faf59e3ec83095/6603659617df5204f1aa808f_Marketing.webp" alt="Marketing Overview" />
          </div>
          <span>Marketing Overview</span>
        </div>
        {marketingItems.map((item, index) => (
          <div className="navbar-first-dropdown-item" key={index}>
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="navbar-first-dropdown-section">
        <p>SUPPORT</p>
        <div className="navbar-first-dropdown-item navbar-first-dropdown-highlighted">
          <div>
          <img src="https://cdn.prod.website-files.com/65a7d71f66faf59e3ec83095/6603659b7fba946c6ed3e388_Support.webp" alt="Support Overview" />
          </div>
          <span>Support Overview</span>
        </div>
        {supportItems.map((item, index) => (
          <div className="navbar-first-dropdown-item" key={index}>
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
