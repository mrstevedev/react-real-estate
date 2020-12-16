import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../util/util';
import { filterCity, filterPrice, filterBedrooms } from '../actions';
import axios from 'axios';

function FilterListing() {
    const [filters, setFiltersListing] = useState([]);
    const listings = useSelector((state) => state.listingsReducer.listings);
    const [city, setCity] = useState('Filter by city');

    useEffect(() => {
        axios.get('homes.json').then(res => setFiltersListing(res.data));
    }, [])
    // console.log(listings)
    const dispatch = useDispatch();
    const handleFilterChange = (e, val) => {
        setCity(e.target.value)
        if(val === 'city') {
            dispatch(filterCity(e.target.value, filters));
        } else if(val === 'price') {
            dispatch(filterPrice(e.target.value, filters));
        } else if(val === 'bedrooms') {
            dispatch(filterBedrooms(parseInt(e.target.value), filters));
        }
    }

    return (
        <div className="filter--listing-container">
            <div className="filter--listing-select">
            <div className="select-style">
                <select className="minimal" onChange={(e) => handleFilterChange(e, 'city')}>
                <option value="" defaultValue>Filter by city</option>
                    {filters ? filters.map((listing, index) => (
                        <option key={index} value={`${listing.property.address.city}`}>
                            {listing.property.address.city}
                        </option>
                    )) : ''}
                </select>
                </div>
            </div>
            <div className="filter--listing-select">
            <div className="select-style">
                <select className="minimal" onChange={(e) => handleFilterChange(e, 'price')}>
                    <option value="" defaultValue>Filter by price</option>
                    {filters ? filters.map((listing, index) => (
                        <option key={index} value={`${listing.price}`}>
                            ${formatCurrency(listing.price)}
                        </option>
                    )) : ''}
                </select>
                </div>
            </div>
            <div className="filter--listing-select">
            <div className="select-style">
                <select className="minimal" onChange={(e) => handleFilterChange(e, 'bedrooms')}>
                    <option value="" defaultValue>Filter by # bedrooms</option>
                    {filters ? filters.map((listing, i) => (
                        <option key={i} value={`${listing.property.numberBedrooms}`}>
                            {listing.property.numberBedrooms} bedrooms
                        </option>
                    )) : ''}
                </select>
                </div>
            </div>
        </div>
    )
}

export default FilterListing
