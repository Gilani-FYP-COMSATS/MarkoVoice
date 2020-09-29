import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createConfiguration } from '../../actions/configuration';

const CreateConfiguration = ({ createConfiguration, history }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessDescription: '',
    areaOfOperatingBusiness: '',
    businessEmail: '',
    phone: '',

    domain: '',

    sellBuyRent: '',
    propertyType: '',
    size: '',
    locationCity: '',
    locationAddress: '',
    bedRooms: '',
    kitchen: '',
    garage: '',

    botVoice: '',
    scriptSequence: '',
  });

  const {
    businessName,
    businessDescription,
    areaOfOperatingBusiness,
    businessEmail,
    phone,

    domain,

    sellBuyRent,
    propertyType,
    size,
    locationCity,
    locationAddress,
    bedRooms,
    kitchen,
    garage,

    botVoice,
    scriptSequence,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createConfiguration(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>
        <i className='fas fa-cogs'></i>Configure Your Bot
      </h1>
      <p className='lead'>
        <i className='fas fa-briefcase'></i> First, Let's get some necessary
        information.
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='your Company'
            name='businessName'
            value={businessName}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Give us an idea what type of buisness you own.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Description'
            name='businessDescription'
            value={businessDescription}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            if you provide your business description, we can serve you better.
          </small>
        </div>
        <div className='form-group'>
          <select
            name='areaOfOperatingBusiness'
            value={areaOfOperatingBusiness}
            onChange={(e) => onChange(e)}
          >
            <option value='0'> Location</option>
            <option value='Rawalpindi'>Rawalpindi</option>
            <option value='Islamabad'>Islamabad</option>
          </select>
          <small className='form-text'>location of your business.</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='business Email'
            name='businessEmail'
            value={businessEmail}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            we share business updates on business mailing accounts only.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='phone'
            name='phone'
            value={phone}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            let us contact on your phone for immediate responses.
          </small>
        </div>

        <p className='lead'>
          <i className='fas fa-wrench'></i> Please choose domain for bot
          configuration
        </p>
        <div className='form-group'>
          <select name='domain' value={domain} onChange={(e) => onChange(e)}>
            <option value='0'> Bot Domain</option>
            <option value='Real Estate'>Real Estate</option>
          </select>
          <small className='form-text'>
            For now we offer bot services in Real Estate, we promise to have
            other domains soon
          </small>
        </div>
        <p className='lead'>
          <i className='fas fa-microphone-alt'></i> Bot operating voice
        </p>
        <div className='form-group'>
          <select
            name='botVoice'
            value={botVoice}
            onChange={(e) => onChange(e)}
          >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
          <small className='form-text'>
            bot will communicate with audience in your assigned voice.
          </small>
        </div>
        <p className='lead'>
          <i className='fas fa-scroll'></i> script execution sequence
        </p>
        <div className='form-group'>
          <select
            name='scriptSequence'
            value={scriptSequence}
            onChange={(e) => onChange(e)}
          >
            <option value='script1'>script 1</option>
            <option value='script2'>script 2</option>
          </select>
          <small className='form-text'>
            once communication starts, what script would like to execute.
          </small>
        </div>
        <p className='lead'>
          <i className='fas fa-home'></i> Time to get information of property
          you actually want to sell/buy.
        </p>
        <div className='form-group'>
          <select
            name='sellBuyRent'
            value={sellBuyRent}
            onChange={(e) => onChange(e)}
          >
            <option value='0'>Selling or Buying</option>
            <option value='Sell'>Sell</option>
            <option value='Buy'>Buy</option>
          </select>
          <small className='form-text'>
            you can use bot to either sell or buy any property.
          </small>
        </div>
        <div className='form-group'>
          <select
            name='propertyType'
            value={propertyType}
            onChange={(e) => onChange(e)}
          >
            <option value='0'>Property Type</option>
            <option value='House'>House</option>
            <option value='Flat'>Flat</option>
            <option value='FarmHouse'>FarmHouse</option>
            <option value='UpperPortion'>Upper Portion</option>
            <option value='LowerPortion'>Lower Portion</option>
          </select>
          <small className='form-text'>what type of property ?</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='size'
            name='size'
            value={size}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            you can specify size in 'kanal' OR 'Marla'
          </small>
        </div>
        <div className='form-group'>
          <select
            name='locationCity'
            value={locationCity}
            onChange={(e) => onChange(e)}
          >
            <option value='0'>location</option>
            <option value='Islamabad'>Islamabad</option>
            <option value='Rawalpindi'>Rawalpindi</option>
          </select>
          <small className='form-text'>
            in which city your property is located?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Address'
            name='locationAddress'
            value={locationAddress}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            town, society where property is located.
          </small>
        </div>
        <div className='form-group'>
          <select
            name='bedRooms'
            value={bedRooms}
            onChange={(e) => onChange(e)}
          >
            <option value='0'>No. of bed Rooms</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='more'>more</option>
          </select>
          <small className='form-text'>
            if it's a House or Flat, then provide no. of bed rooms.
          </small>
        </div>
        <div className='form-group'>
          <select name='kitchen' value={kitchen} onChange={(e) => onChange(e)}>
            <option value='0'>No. of Kitchens</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='more'>more</option>
          </select>
          <small className='form-text'>
            if it's a House or Flat, then how many kitchens it has?
          </small>
        </div>
        <div className='form-group'>
          <select name='garage' value={garage} onChange={(e) => onChange(e)}>
            <option value='0'>Garage Availability</option>
            <option value='yes'>yes</option>
            <option value='no'>no</option>
          </select>
          <small className='form-text'>garage available ?</small>
        </div>

        <input
          type='submit'
          className='btn btn-primary my-1'
          onSubmit={(e) => onSubmit(e)}
        />
        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

CreateConfiguration.propTypes = {
  createConfiguration: PropTypes.func.isRequired,
};
// const mapStateToProps = state => ({

// })
export default connect(null, { createConfiguration })(
  withRouter(CreateConfiguration)
);
