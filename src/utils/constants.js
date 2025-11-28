export const baseUrl = process.env.REACT_APP_BASE_URL;
// const location = JSON.parse(localStorage.getItem("currentLocation"));

// const currentLocation = navigator.geolocation.getCurrentPosition((position) => {
//   const myObj = {
//     latitude: position.coords.latitude,
//     longitude: position.coords.longitude
//   };
//   return myObj;
// });

// console.log(currentLocation);

export const bike_category_url = `category?vehicleType=Bike`;
export const lmv_category_url = `category?vehicleType=LMV`;
export const bike_products_url = `product-bike`;
export const lmv_products_url = `product-car`;
export const bike_product_merchant_url = `bike-product-merchant`;
export const lmv_product_merchant_url = `lmv-product-merchant`;
export const bike_feature_product_url = `featured-product-bike`;
export const lmv_feature_product_url = `featured-product-lmv`;
export const bike_workshop_url = `allmerchants?vehicleType=Bike`;
export const lmv_workshop_url = `allmerchants?vehicleType=LMV`;

export const nearby_bike_workshop_url = `findnerestWorkshop?latitude=12.6825&longitude=78.6167&limit=5&vehicleType=Bike
    `;
export const nearby_lmv_workshop_url = `findnerestWorkshop?latitude=12.6825&longitude=78.6167&limit=5&vehicleType=LMV
     `;

export const brand_url = `brand`;
export const vehicletype_url = `vehicletype`;
export const bike_review_url = `bike-order-review?reviewStatus=Approved`;
export const lmv_review_url = `lmv-order-review?reviewStatus=Approved`;
export const params_url = `preference`;

// export { nearby_bike_workshop_url, nearby_lmv_workshop_url };
