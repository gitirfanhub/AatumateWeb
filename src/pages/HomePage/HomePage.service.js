import { getData } from "../../utils/fetchData";

const CATEGORY = "category";
const PRODUCT = "product-admin";

const getCategory = () => {
  return getData(CATEGORY);
};

const getProduct = () => {
  return getData(PRODUCT);
};

export { getCategory, getProduct };
