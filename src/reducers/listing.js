const listingsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_LISTINGS_ASYNC":
      return {
        ...state,
        listings: action.payload,
      };
    case "FILTER_CITY_ASYNC":
      return {
        ...state,
        listings: action.data.payload.city !== '' ? action.data.payload.filters.filter((filtered) => 
          filtered.property.address.city === action.data.payload.city) : action.data.payload.filters.map(objs => objs)
      };
    case "FILTER_PRICE_ASYNC":
      return {
        ...state,
        listings: action.data.payload.price !== '' ? action.data.payload.filters.filter((filtered) => 
          filtered.price == action.data.payload.price) : action.data.payload.filters.map(objs => objs)
      };
    case "FILTER_NUMBER_BEDROOMS":
      return {
        ...state,
        listings: action.payload.bedrooms !== '' ? action.payload.filters.filter((filtered) => 
          filtered.property.numberBedrooms === action.payload.bedrooms) : action.payload.filters.map(objs => objs)
      };
    default:
      return state;
  }
};

export default listingsReducer;
