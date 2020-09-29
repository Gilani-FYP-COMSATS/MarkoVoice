import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-configuration' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> Edit Configuration
      </Link>
      <Link to='/add-domainInfo' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary'></i> Add Product
      </Link>
      {/* <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary'></i> Add Education
      </Link> */}
    </div>
  );
};

export default DashboardActions;
