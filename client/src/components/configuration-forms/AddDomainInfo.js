import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDomainInfo } from '../../actions/configuration';

const AddDomainInfo = ({ addDomainInfo, history }) => {
  const [formData, setFormData] = useState({
    sellBuyRent: '',
    propertyType: '',
    size: '',
    locationCity: '',
    locationAddress: '',
    bedRooms: '',
    kitchen: '',
    garage: '',
  });

  const {
    sellBuyRent,
    propertyType,
    size,
    locationCity,
    locationAddress,
    bedRooms,
    kitchen,
    garage,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Product Details</h1>
      <p className='lead'>
        <i className='fas fa-home'></i> Provide details of the property you
        wanna sell/buy !
      </p>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addDomainInfo(formData, history);
        }}
      >
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

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='dashboard.html'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddDomainInfo.prototype = {
  addDomainInfo: PropTypes.func.isRequired,
};
export default connect(null, { addDomainInfo })(AddDomainInfo);
