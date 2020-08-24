import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentConfiguration } from '../../actions/configuration';

const Dashboard = ({
  getCurrentConfiguration,
  auth,
  configuration: { configuration, loading },
}) => {
  useEffect(() => {
    getCurrentConfiguration();
  }, []);
  //if profile is null and its still loading then show a spinner gif
  return loading && configuration === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead '>
        <i className='fas fa-user '></i> Welcome {auth.user && auth.user.name}
      </p>
      {configuration !== null ? (
        <Fragment>has Configuration</Fragment>
      ) : (
        <Fragment>
          <p>
            No Bot Configurations yet, Configure a bot and start making calls
          </p>
          <Link to='create-configuration' className='btn btn-primary my-1'>
            Configure Bot
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentConfiguration: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  configuration: state.configuration,
});

export default connect(mapStateToProps, { getCurrentConfiguration })(Dashboard);
