export const fetchListings = () => {
  return {
    type: "FETCH_LISTINGS",
  };
};

export const showNotification = () => {
  return {
    type: "SHOW_NOTIFICATION",
  };
};

export const closeNotification = () => {
  return {
    type: "CLOSE_NOTIFICATION",
  };
};

export const filterCity = (city, filters) => {
    return {
        type: 'FILTER_CITY',
        payload: {
            city,
            filters
        }
    }
};

export const filterPrice = (price, filters) => {
    return {
        type: 'FILTER_PRICE',
        payload: {
          price,
          filters
        }
    }
};

export const filterBedrooms = (bedrooms, filters) => {
    return {
        type: 'FILTER_NUMBER_BEDROOMS',
        payload: {
          bedrooms,
          filters
        }
    }
};
