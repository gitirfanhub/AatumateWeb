import { Formik } from "formik";
import React from "react";
import styled from "styled-components";
import { getData } from "../../utils/fetchData";
import { MSG_TYPE, useToaster } from "../../components/Toastbar";
import { totalActualPrice, totalSalePrice } from "../../utils/utilsfunction";
import TextFieldInput from "../../components/TextFieldInput";

const CheckoutDetailsStyles = styled.section`
  .promo-flex {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1rem;
    & :nth-child(1) {
      width: 100%;
      .MuiInputBase-root {
        flex: auto;
      }
    }

    button {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      border: none;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
      padding: 0 2rem;
    }
  }
  .checkout-details {
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.backgroundGrey};

    .checkout-bill,
    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .checkout-bill {
      font: ${({ theme }) => theme.fontAppearance.commonSize};
    }
    .checkout-total {
      border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
      padding-top: 20px;
    }
  }
`;

const initialValues = {
  promoCode: ""
};

const CheckoutDetails = ({
  product,
  promoAmount,
  setPromoAmount,
  salePrice,
  merchantDiscount
}) => {
  const toaster = useToaster();
  const onsubmit = async (values, submitProps) => {
    if (product.vehicleType === "Bike") {
      try {
        const response = await getData(
          `new-bike-user?code=${values.promoCode}`
        );
        if (response.message === "Success") {
          if (
            product.productMerchantBike.currentSalePrice >=
            response.data[0].minimumOrderValue
          ) {
            setPromoAmount(response.data[0].discountAmount);
            submitProps.resetForm();
            toaster(MSG_TYPE.SUCCESS, "Promocode Applied Successfully");
          } else {
            toaster(
              MSG_TYPE.ERROR,
              `Please Order more than or equal to ${response.data[0].minimumOrderValue} rupees to get promo discount`
            );
          }
        } else {
          toaster(MSG_TYPE.ERROR, response.data);
        }
      } catch (error) {
        toaster(MSG_TYPE.ERROR, error);
      }
    } else {
      try {
        const response = await getData(
          `new-lmv-user?lmvCode=${values.promoCode}`
        );
        if (response.message === "Success") {
          if (
            product.productMerchantLmv.currentSalePrice >=
            response.data[0].lmvMinimumOrderValue
          ) {
            setPromoAmount(response.data[0].lmvDiscount);
            submitProps.resetForm();
            toaster(MSG_TYPE.SUCCESS, "Promocode Applied Successfully");
          } else {
            toaster(
              MSG_TYPE.ERROR,
              `Please Order more than or equal to ${response.data[0].lmvMinimumOrderValue} rupees to get promo discount`
            );
          }
        } else {
          toaster(MSG_TYPE.ERROR, response.data);
        }
      } catch (error) {
        toaster(MSG_TYPE.ERROR, error);
      }
    }
  };
  return (
    <CheckoutDetailsStyles>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={onsubmit}
      >
        {(props) => {
          const { values, handleChange, handleBlur, handleSubmit } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div className="promo-flex">
                <TextFieldInput
                  type="text"
                  id="promoCode"
                  name="promoCode"
                  placeholder="Enter Your Promocode"
                  label="Promocode"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.promoCode}
                />
                <button type="submit">Apply</button>
              </div>
            </form>
          );
        }}
      </Formik>
      <div className="checkout-details">
        <h6 className="checkout-bill">
          Actual Price: <span>INR {totalActualPrice(product)?.toFixed(2)}</span>
        </h6>
        <h6 className="checkout-bill">
          Sale Price: <span>INR {totalSalePrice(product)?.toFixed(2)}</span>
        </h6>
        <h6 className="checkout-bill">
          Discount:{" "}
          <span>
            INR{" "}
            {(totalActualPrice(product) - totalSalePrice(product)).toFixed(2)}
          </span>
        </h6>
        {Number(merchantDiscount) === 0 ? (
          <h6 className="checkout-bill">
            Aatumate Discount: <span>INR {parseFloat(salePrice).toFixed(2)}</span>
          </h6>
        ) : null}
        <h6 className="checkout-bill">
          Merchant Discount:{" "}
          <span>INR {parseFloat(merchantDiscount).toFixed(2)}</span>
        </h6>
        {promoAmount ? (
          <h6 className="checkout-bill">
            Promocode Discount:{" "}
            <span>INR {parseFloat(promoAmount).toFixed(2)}</span>
          </h6>
        ) : null}
        <div className="checkout-total">
          <h5 className="total">
            Total:{" "}
            <span>
              INR{" "}
              {(
                totalSalePrice(product) -
                (Number(merchantDiscount) === 0
                  ? salePrice
                  : merchantDiscount) -
                promoAmount
              ).toFixed(2)}
            </span>
          </h5>
        </div>
      </div>
    </CheckoutDetailsStyles>
  );
};

export default CheckoutDetails;
