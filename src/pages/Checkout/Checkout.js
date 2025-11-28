import React, { useEffect, useState } from "react";
import CheckoutStyleWrapper from "./CheckoutStyles";
import TextFieldInput from "../../components/TextFieldInput";
import Button from "../../components/Button";
import DatePickers from "../../components/DatePickers";
import DateTimePickerWrapper from "../../components/DatePickerStyles";
import AutocompleteInput from "../../components/AutocompleteInput";
import {
  formatDate,
  formatDateOrderNumber,
  toISOString,
  totalSalePrice
} from "../../utils/utilsfunction";
import CheckoutDetails from "./CheckoutDetails";
import { getData, postData } from "../../utils/fetchData";
import { MSG_TYPE, useToaster } from "../../components/Toastbar";
import { useBrandsContext } from "../../context/brands_context";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { MdLocationOn } from "react-icons/md";
import { useCartContext } from "../../context/cart_context";
import { useWorkshopContext } from "../../context/workshop_context";

const initialValues = {
  preferredDate: "",
  pickTimeSlot: "",
  personalNote: ""
};

const validationSchema = Yup.object().shape({
  preferredDate: Yup.string().required("Required"),
  pickTimeSlot: Yup.string().required("Required")
});

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toaster = useToaster();
  const { product, salePrice, merchantDiscount } = location.state;
  const { customer_vehicle } = useBrandsContext();
  const { deleteFromCart } = useCartContext();
  const { parameters } = useWorkshopContext();
  const [state, setState] = useState(initialValues);
  const [createdDate, setCreatedDate] = useState("");
  const [promoAmount, setPromoAmount] = useState(0);
  const [domainMappingData, setDomainMappingData] = useState([]);

  const customerDetails = JSON.parse(localStorage.getItem("user_detail"));

  const selectedVehicle = customer_vehicle?.find((item) => item.isSelected);

  let parseTime = (s) => {
    let c = s.split(":");
    return parseInt(c[0]) * 60 + parseInt(c[1]);
  };

  let convertHours = (mins) => {
    let hour = Math.floor(mins / 60);
    mins = mins % 60;
    let converted = pad(hour, 2) + ":" + pad(mins, 2);
    return converted;
  };

  let pad = (str, max) => {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
  };

  let calculate_time_slot = (start_time, end_time, interval) => {
    let time_slots = new Array();
    // Round start and end times to next 30 min interval
    start_time = Math.ceil(start_time / 30) * 30;
    end_time = Math.ceil(end_time / 30) * 30;

    // Start and end of interval in the loop
    while (start_time < end_time) {
      let t =
        convertHours(start_time) +
        " - " +
        convertHours((start_time += interval));
      time_slots.push(t);
    }
    return time_slots;
  };

  let startTime = parameters[0]?.workshopOpen;
  let endtime = parameters[0]?.workshopClose;
  let interval = parameters[0]?.frequency; // in minutes
  let end_time = parseTime(endtime);
  let start_time = parseTime(startTime);

  let timeSlots = calculate_time_slot(start_time, end_time, interval);

  const getFirstStateByDomainName = async () => {
    const { data } = await getData(`domain?domainName=Order Mangement`);
    const { data: domainMapping } = await getData(
      `domainmapping?domainName=${data[0]._id}`
    );
    setDomainMappingData(domainMapping);
  };

  useEffect(() => {
    getFirstStateByDomainName();
  }, []);

  const onsubmit = async (values, submitProps) => {
    values.preferredDate = toISOString(createdDate);
    if (product.vehicleType === "Bike") {
      const data = {
        customer: customerDetails._id,
        customerVehicle: selectedVehicle._id,
        merchantType: product.merchantType,
        vehicleType: product.vehicleType,
        promoAmount: promoAmount,
        adminAmount:
          promoAmount === 0
            ? totalSalePrice(product) - salePrice
            : totalSalePrice(product) - salePrice - promoAmount,
        bikeProductMerchant: product.productMerchantBike._id,
        issueType: "Known",
        orderNumber: `${product.customer.customerSeqId}${formatDateOrderNumber(
          new Date().toISOString()
        )}`,
        addOns: product.addOnsbike.map((item) => item._id),
        totalAmount: totalSalePrice(product),
        preferredDate: values.preferredDate,
        pickTimeSlot: values.pickTimeSlot,
        merchantId: product.productMerchantBike.merchantId._id,
        productId: product.productMerchantBike.product._id,
        currentStatus: domainMappingData[0]._id,
        personalNote: values.personalNote
      };
      try {
        await postData("bike-order", data);
        submitProps.resetForm();
        setState(initialValues);
        toaster(MSG_TYPE.SUCCESS, "Order Placed Successfully");
        deleteFromCart("add-to-cart", product._id);
        navigate("/ordersuccess");
      } catch (error) {
        toaster(MSG_TYPE.ERROR, error);
      }
    } else {
      const data = {
        customer: customerDetails._id,
        customerVehicle: selectedVehicle._id,
        merchantType: product.merchantType,
        vehicleType: product.vehicleType,
        promoAmount: promoAmount,
        adminAmount:
          promoAmount === 0
            ? totalSalePrice(product) -
              (merchantDiscount === 0 ? salePrice : merchantDiscount)
            : totalSalePrice(product) -
              (merchantDiscount === 0 ? salePrice : merchantDiscount) -
              promoAmount,
        lmvProductMerchant: product.productMerchantLmv._id,
        issueType: "Known",
        orderNumber: `${product.customer.customerSeqId}${formatDateOrderNumber(
          new Date().toISOString()
        )}`,
        addOns: product.addOns.map((item) => item._id),
        totalAmount: totalSalePrice(product),
        preferredDate: values.preferredDate,
        pickTimeSlot: values.pickTimeSlot,
        merchantId: product.productMerchantLmv.merchantId._id,
        productId: product.productMerchantLmv.product._id,
        currentStatus: domainMappingData[0]._id,
        personalNote: values.personalNote
      };
      try {
        await postData("lmv-order", data);
        submitProps.resetForm();
        setState(initialValues);
        toaster(MSG_TYPE.SUCCESS, "Order Placed Successfully");
        deleteFromCart("add-to-cart", product._id);
        navigate("/ordersuccess");
      } catch (error) {
        toaster(MSG_TYPE.ERROR, error);
      }
    }
  };

  return (
    <CheckoutStyleWrapper>
      <div className="checkout-container">
        <div className="checkout-address">
          <h3 className="heading">Confirmation</h3>
          <div className="checkout-card">
            <h2>Vehicle Detais</h2>
            <p>
              {product.customerCar.vehicle.carBrand.brandName},{" "}
              {product.customerCar.vehicle.carModel.carmodelName},{" "}
              {product.customerCar.vehicle.carModel.variant},
              {product.customerCar.vehicle.vehicleType.vehicletypeName}
              {product.carNumber}
            </p>
            <h2>Vehicle Services</h2>
            <p>
              {product.productMerchantBike
                ? product.productMerchantBike.product.productName
                : product.productMerchantLmv.product.productName}
            </p>
            <h2>Selected Garage</h2>
            <p>
              <span>
                <MdLocationOn />
              </span>
              {product.productMerchantBike
                ? (product.productMerchantBike.merchantId.addressLine1,
                  product.productMerchantBike.merchantId.addressLine1)
                : (product.productMerchantLmv.merchantId.addressLine1,
                  product.productMerchantLmv.merchantId.addressLine1)}
            </p>
          </div>
          <Formik
            initialValues={state}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={onsubmit}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <h3 className="heading">Select Your Preferred Date & Time</h3>
                  <div className="input">
                    <div className="field">
                      <DateTimePickerWrapper>
                        <DatePickers
                          placeholder="From Date"
                          value={createdDate}
                          label="From Date"
                          onChange={(d) => {
                            setCreatedDate(d);
                            setFieldValue("preferredDate", formatDate(d));
                          }}
                          variant="outlined"
                          inputFormat="dd/MM/yyyy"
                          helperText={
                            errors.preferredDate &&
                            touched.preferredDate &&
                            errors.preferredDate
                          }
                          error={errors.preferredDate && touched.preferredDate}
                        />
                      </DateTimePickerWrapper>
                    </div>
                    <div className="field">
                      <AutocompleteInput
                        options={timeSlots}
                        noOptionsText="No Records Found"
                        variant="outlined"
                        id="pickTimeSlot"
                        name="pickTimeSlot"
                        label="Pick Time Slot"
                        onChange={(e, value) =>
                          setFieldValue(
                            "pickTimeSlot",
                            value !== null ? value : initialValues.pickTimeSlot
                          )
                        }
                        onBlur={handleBlur}
                        value={values.pickTimeSlot}
                        fullWidth
                        helperText={
                          errors.pickTimeSlot &&
                          touched.pickTimeSlot &&
                          errors.pickTimeSlot
                        }
                        error={errors.pickTimeSlot && touched.pickTimeSlot}
                      />
                    </div>
                  </div>
                  <h3 className="heading">Personal Note</h3>
                  <TextFieldInput
                    variant="outlined"
                    name="personalNote"
                    id="personalNote"
                    label="Comments"
                    value={values.personalNote}
                    multiline
                    maxRows={6}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="submit">
                    <Button
                      type="submit"
                      size
                      // onClick={() => navigate("/ordersuccess")}
                    >
                      Place Order
                    </Button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
        <CheckoutDetails
          product={product}
          promoAmount={promoAmount}
          setPromoAmount={setPromoAmount}
          salePrice={salePrice}
          merchantDiscount={merchantDiscount}
        />
      </div>
    </CheckoutStyleWrapper>
  );
};

export default Checkout;
