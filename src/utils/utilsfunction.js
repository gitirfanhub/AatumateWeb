//* string convert into camel-case
const toTitleCase = (string) => {
  return string?.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const avgRatings = (rating) => {
  let ratings = [];
  let sum = 0;
  for (const rate of rating) {
    ratings.push(rate?.rating);
  }
  for (const item of ratings) {
    sum += item;
  }
  return parseFloat(sum / rating.length).toFixed(1);
};

const calcOffer = (actualPrice, salePrice) => {
  const discount = actualPrice - salePrice;
  return parseFloat((discount / actualPrice) * 100).toFixed(1);
};

const stringSliceHandler = (fileName = "") => {
  const file = fileName.split("/");
  return file[file.length - 1];
};

const nameTrimHandler = (fileName) => {
  return fileName.length > 20 ? `${fileName.substring(0, 15)}...` : fileName;
};

const reviewTrimHandler = (fileName) => {
  return fileName.length > 80 ? `${fileName.substring(0, 50)}...` : fileName;
};
function formatDate(date) {
  let year = new Date(date).getFullYear();
  let month = (1 + new Date(date).getMonth()).toString().padStart(2, "0");
  let day = new Date(date).getDate().toString().padStart(2, "0");

  return day + "/" + month + "/" + year;
}
function formatDateTime(datetime) {
  let year = new Date(datetime).getFullYear();
  let month = (1 + new Date(datetime).getMonth()).toString().padStart(2, "0");
  let day = new Date(datetime).getDate().toString().padStart(2, "0");

  let hours = new Date(datetime).getHours().toString().padStart(2, "0");
  let minutes = new Date(datetime).getMinutes().toString().padStart(2, "0");

  return day + "/" + month + "/" + year + "" + hours + ":" + minutes;
}

function toISOString(date) {
  var tzo = -date.getTimezoneOffset(),
    dif = tzo >= 0 ? "+" : "-",
    pad = function (num) {
      return (num < 10 ? "0" : "") + num;
    };

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    dif +
    pad(Math.floor(Math.abs(tzo) / 60)) +
    ":" +
    pad(Math.abs(tzo) % 60)
  );
}

function formatDateOrderNumber(date) {
  let year = new Date(date).getFullYear();
  let month = (1 + new Date(date).getMonth()).toString().padStart(2, "0");
  let day = new Date(date).getDate().toString().padStart(2, "0");

  return `${day}${month}${year}`;
}

const totalActualPrice = (item) => {
  let totalAmount = 0;
  if (item?.productMerchantBike) {
    for (const price of item.addOnsbike) {
      totalAmount += price.currentActualPrice;
    }
    return totalAmount + item.productMerchantBike.currentActualPrice;
  } else if (item?.productMerchantLmv) {
    for (const price of item?.addOns) {
      totalAmount += price.currentActualPrice;
    }
    return totalAmount + item.productMerchantLmv.currentActualPrice;
  }
};

const totalSalePrice = (item) => {
  let totalSaleAmount = 0;
  if (item?.productMerchantBike) {
    for (const price of item?.addOnsbike) {
      totalSaleAmount += price.currentSalePrice;
    }
    return totalSaleAmount + item.productMerchantBike.currentSalePrice;
  } else if (item?.productMerchantLmv) {
    for (const price of item?.addOns) {
      totalSaleAmount += price.currentSalePrice;
    }
    return totalSaleAmount + item.productMerchantLmv.currentSalePrice;
  }
};

const computeDistance = (prevLat, prevLong, lat, long) => {
  const prevLatInRad = toRad(prevLat);
  const prevLongInRad = toRad(prevLong);
  const latInRad = toRad(lat);
  const longInRad = toRad(long);

  return (
    // In kilometers
    6377.830272 *
    Math.acos(
      Math.sin(prevLatInRad) * Math.sin(latInRad) +
        Math.cos(prevLatInRad) *
          Math.cos(latInRad) *
          Math.cos(longInRad - prevLongInRad)
    )
  );
};

const toRad = (angle) => {
  return (angle * Math.PI) / 180;
};

export {
  toTitleCase,
  avgRatings,
  calcOffer,
  stringSliceHandler,
  nameTrimHandler,
  reviewTrimHandler,
  formatDate,
  toISOString,
  formatDateOrderNumber,
  formatDateTime,
  totalSalePrice,
  totalActualPrice,
  computeDistance
};
