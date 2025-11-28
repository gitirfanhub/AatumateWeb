import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CustomStepper from "../../components/Stepper";
import { baseUrl } from "../../utils/constants";
import { getData } from "../../utils/fetchData";
import OrderDetailStyles from "./OrderDetailStyles";

const OrderDetails = () => {
  const location = useLocation();
  const { id } = useParams();

  const [orderData, setOrderData] = useState({});
  const [stepperData, setStepperData] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [prevState, setPrevState] = useState([]);

  const fetchData = async () => {
    if (location.state.vehicleType === "Bike") {
      const { data } = await getData(`bike-order/${id}`);
      const { updatedAt } = data;
      setOrderData(data);
      if (data?.issueType === "Known") {
        const { data: domainName } = await getData(
          "domain?domainName=Order Mangement"
        );
        const { data: domainMapping } = await getData(
          `domainmapping?domainName=${domainName[0]?._id}`
        );
        const { data: states } = await getData(
          `state?domainName=${domainName[0]?._id}`
        );
        const domainMappingData = new Map();
        domainMapping.map((domain) =>
          domainMappingData.set(domain._id, domain.stateName)
        );
        const domainMap = Object.fromEntries(domainMappingData);

        let result = states.reduce((r, a) => {
          r[a.currentState?.stateName] = r[a.currentState?.stateName] || [];
          r[a.currentState?.stateName].push(a.nextState?.stateName);
          return r;
        }, Object.create(null));
        const stepperList = [];
        const previousStatusDetails = data.previousStatusDetails || [];
        setPrevState(previousStatusDetails);
        previousStatusDetails?.sort((a, b) =>
          a.sortingOrder > b.sortingOrder
            ? 1
            : a.sortingOrder < b.sortingOrder
            ? -1
            : 0
        );

        for (const ps of previousStatusDetails) {
          stepperList.push({
            title: domainMap[ps.previousStatus],
            subtitle: ps.updatedDate
          });
        }

        let initial = domainMap[data.currentStatus];
        let currentState = initial;
        let flag = true;
        if (initial === "FAILED") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }
        if (initial === "Delivered") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }

        if (flag) {
          stepperList.push({ title: initial, subtitle: "" });
          if (result?.length !== 0 && result[initial]?.length !== 0) {
            let next = result[initial]?.join("/");
            if (next !== "") {
              stepperList.push({ title: next, subtitle: "" });
            }
            for (let i = 0; i < result[initial]?.length; i++) {
              if (
                result[result[initial][i]] !== null &&
                result[result[initial][i]]?.length !== undefined &&
                result[result[initial][i]][0] !== "" &&
                result[result[initial][i]][0] !== undefined
              ) {
                initial = result[result[initial][i]][0];
              } else {
                flag = false;
              }
            }
          } else {
            flag = false;
          }
        }

        const activeStep = stepperList.findIndex((step) =>
          step.title?.includes(currentState)
        );
        setStepperData([...stepperList]);
        setActiveStep(activeStep);
      } else if (data?.issueType === "Spares") {
        const { data: domainName } = await getData(
          "domain?domainName=Spares Mangement"
        );
        const { data: domainMapping } = await getData(
          `domainmapping?domainName=${domainName[0]?._id}`
        );
        const { data: states } = await getData(
          `state?domainName=${domainName[0]?._id}`
        );
        const domainMappingData = new Map();
        domainMapping.map((domain) =>
          domainMappingData.set(domain._id, domain.stateName)
        );
        const domainMap = Object.fromEntries(domainMappingData);

        let result = states.reduce((r, a) => {
          r[a.currentState?.stateName] = r[a.currentState?.stateName] || [];
          r[a.currentState?.stateName].push(a.nextState?.stateName);
          return r;
        }, Object.create(null));

        const stepperList = [];

        const previousStatusDetails = data.previousStatusDetails;
        setPrevState(previousStatusDetails);

        previousStatusDetails.sort((a, b) =>
          a.sortingOrder > b.sortingOrder
            ? 1
            : a.sortingOrder < b.sortingOrder
            ? -1
            : 0
        );

        for (const ps of previousStatusDetails) {
          stepperList.push({
            title: domainMap[ps.previousStatus],
            subtitle: ps.updatedDate
          });
        }

        let initial = domainMap[data.currentStatus];
        let currentState = initial;
        let flag = true;
        if (initial === "FAILED") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }
        if (initial === "Delivered") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }

        if (flag) {
          stepperList.push({ title: initial, subtitle: "" });
          if (result?.length !== 0 && result[initial]?.length !== 0) {
            let next = result[initial]?.join("/");
            if (next !== "") {
              stepperList.push({ title: next, subtitle: "" });
            }
            for (let i = 0; i < result[initial]?.length; i++) {
              if (
                result[result[initial][i]] !== null &&
                result[result[initial][i]]?.length !== undefined &&
                result[result[initial][i]][0] !== "" &&
                result[result[initial][i]][0] !== undefined
              ) {
                initial = result[result[initial][i]][0];
              } else {
                flag = false;
              }
            }
          } else {
            flag = false;
          }
        }

        const activeStep = stepperList.findIndex((step) =>
          step.title?.includes(currentState)
        );
        setStepperData([...stepperList]);
        setActiveStep(activeStep);
      } else {
        const { data: domainName } = await getData(
          "domain?domainName=Unknow Issue"
        );
        const { data: domainMapping } = await getData(
          `domainmapping?domainName=${domainName[0]?._id}`
        );
        const { data: states } = await getData(
          `state?domainName=${domainName[0]?._id}`
        );
        const domainMappingData = new Map();
        domainMapping.map((domain) =>
          domainMappingData.set(domain._id, domain.stateName)
        );
        const domainMap = Object.fromEntries(domainMappingData);

        let result = states.reduce((r, a) => {
          r[a.currentState?.stateName] = r[a.currentState?.stateName] || [];
          r[a.currentState?.stateName].push(a.nextState?.stateName);
          return r;
        }, Object.create(null));

        const stepperList = [];

        const previousStatusDetails =
          data?.vehicleConsultation?.unknownIssue?.previousStatusDetails;
        setPrevState(previousStatusDetails);

        previousStatusDetails.sort((a, b) =>
          a.sortingOrder > b.sortingOrder
            ? 1
            : a.sortingOrder < b.sortingOrder
            ? -1
            : 0
        );

        for (const ps of previousStatusDetails) {
          stepperList.push({
            title: domainMap[ps.previousStatus],
            subtitle: ps.updatedDate
          });
        }

        let initial =
          domainMap[data?.vehicleConsultation?.unknownIssue?.currentStatus];
        let currentState = initial;
        let flag = true;
        if (initial === "Failed") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }
        if (initial === "Order Completed") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }

        if (flag) {
          stepperList.push({ title: initial, subtitle: "" });
          if (result?.length !== 0 && result[initial]?.length !== 0) {
            let next = result[initial]?.join("/");
            if (next !== "") {
              stepperList.push({ title: next, subtitle: "" });
            }
            for (let i = 0; i < result[initial]?.length; i++) {
              if (
                result[result[initial][i]] !== null &&
                result[result[initial][i]]?.length !== undefined &&
                result[result[initial][i]][0] !== "" &&
                result[result[initial][i]][0] !== undefined
              ) {
                initial = result[result[initial][i]][0];
              } else {
                flag = false;
              }
            }
          } else {
            flag = false;
          }
        }

        const activeStep = stepperList.findIndex(
          (step) => step.title === currentState
        );
        setStepperData([...stepperList]);
        setActiveStep(activeStep);
      }
    } else {
      const { data } = await getData(`lmv-order/${id}`);
      const { updatedAt } = data;
      setOrderData(data);
      if (data?.issueType === "Known") {
        const { data: domainName } = await getData(
          "domain?domainName=Order Mangement"
        );
        const { data: domainMapping } = await getData(
          `domainmapping?domainName=${domainName[0]?._id}`
        );
        const { data: states } = await getData(
          `state?domainName=${domainName[0]?._id}`
        );
        const domainMappingData = new Map();
        domainMapping.map((domain) =>
          domainMappingData.set(domain._id, domain.stateName)
        );
        const domainMap = Object.fromEntries(domainMappingData);

        let result = states.reduce((r, a) => {
          r[a.currentState?.stateName] = r[a.currentState?.stateName] || [];
          r[a.currentState?.stateName].push(a.nextState?.stateName);
          return r;
        }, Object.create(null));
        const stepperList = [];
        const previousStatusDetails = data.previousStatusDetails || [];
        setPrevState(previousStatusDetails);
        previousStatusDetails?.sort((a, b) =>
          a.sortingOrder > b.sortingOrder
            ? 1
            : a.sortingOrder < b.sortingOrder
            ? -1
            : 0
        );

        for (const ps of previousStatusDetails) {
          stepperList.push({
            title: domainMap[ps.previousStatus],
            subtitle: ps.updatedDate
          });
        }

        let initial = domainMap[data.currentStatus];
        let currentState = initial;
        let flag = true;
        if (initial === "FAILED") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }
        if (initial === "Delivered") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }

        if (flag) {
          stepperList.push({ title: initial, subtitle: "" });
          if (result?.length !== 0 && result[initial]?.length !== 0) {
            let next = result[initial]?.join("/");
            if (next !== "") {
              stepperList.push({ title: next, subtitle: "" });
            }
            for (let i = 0; i < result[initial]?.length; i++) {
              if (
                result[result[initial][i]] !== null &&
                result[result[initial][i]]?.length !== undefined &&
                result[result[initial][i]][0] !== "" &&
                result[result[initial][i]][0] !== undefined
              ) {
                initial = result[result[initial][i]][0];
              } else {
                flag = false;
              }
            }
          } else {
            flag = false;
          }
        }

        const activeStep = stepperList.findIndex((step) =>
          step.title?.includes(currentState)
        );
        setStepperData([...stepperList]);
        setActiveStep(activeStep);
      } else if (data?.issueType === "Spares") {
        const { data: domainName } = await getData(
          "domain?domainName=Spares Mangement"
        );
        const { data: domainMapping } = await getData(
          `domainmapping?domainName=${domainName[0]?._id}`
        );
        const { data: states } = await getData(
          `state?domainName=${domainName[0]?._id}`
        );
        const domainMappingData = new Map();
        domainMapping.map((domain) =>
          domainMappingData.set(domain._id, domain.stateName)
        );
        const domainMap = Object.fromEntries(domainMappingData);

        let result = states.reduce((r, a) => {
          r[a.currentState?.stateName] = r[a.currentState?.stateName] || [];
          r[a.currentState?.stateName].push(a.nextState?.stateName);
          return r;
        }, Object.create(null));

        const stepperList = [];

        const previousStatusDetails = data.previousStatusDetails;
        setPrevState(previousStatusDetails);

        previousStatusDetails.sort((a, b) =>
          a.sortingOrder > b.sortingOrder
            ? 1
            : a.sortingOrder < b.sortingOrder
            ? -1
            : 0
        );

        for (const ps of previousStatusDetails) {
          stepperList.push({
            title: domainMap[ps.previousStatus],
            subtitle: ps.updatedDate
          });
        }

        let initial = domainMap[data.currentStatus];
        let currentState = initial;
        let flag = true;
        if (initial === "FAILED") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }
        if (initial === "Delivered") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }

        if (flag) {
          stepperList.push({ title: initial, subtitle: "" });
          if (result?.length !== 0 && result[initial]?.length !== 0) {
            let next = result[initial]?.join("/");
            if (next !== "") {
              stepperList.push({ title: next, subtitle: "" });
            }
            for (let i = 0; i < result[initial]?.length; i++) {
              if (
                result[result[initial][i]] !== null &&
                result[result[initial][i]]?.length !== undefined &&
                result[result[initial][i]][0] !== "" &&
                result[result[initial][i]][0] !== undefined
              ) {
                initial = result[result[initial][i]][0];
              } else {
                flag = false;
              }
            }
          } else {
            flag = false;
          }
        }

        const activeStep = stepperList.findIndex((step) =>
          step.title?.includes(currentState)
        );
        setStepperData([...stepperList]);
        setActiveStep(activeStep);
      } else {
        const { data: domainName } = await getData(
          "domain?domainName=Unknow Issue"
        );
        console.log(domainName);
        const { data: domainMapping } = await getData(
          `domainmapping?domainName=${domainName[0]?._id}`
        );
        const { data: states } = await getData(
          `state?domainName=${domainName[0]?._id}`
        );
        const domainMappingData = new Map();
        domainMapping.map((domain) =>
          domainMappingData.set(domain._id, domain.stateName)
        );
        const domainMap = Object.fromEntries(domainMappingData);

        let result = states.reduce((r, a) => {
          r[a.currentState?.stateName] = r[a.currentState?.stateName] || [];
          r[a.currentState?.stateName].push(a.nextState?.stateName);
          return r;
        }, Object.create(null));

        const stepperList = [];

        const previousStatusDetails =
          data?.vehicleConsultation?.unknownIssue?.previousStatusDetails;
        setPrevState(previousStatusDetails);

        previousStatusDetails.sort((a, b) =>
          a.sortingOrder > b.sortingOrder
            ? 1
            : a.sortingOrder < b.sortingOrder
            ? -1
            : 0
        );

        for (const ps of previousStatusDetails) {
          stepperList.push({
            title: domainMap[ps.previousStatus],
            subtitle: ps.updatedDate
          });
        }
        console.log(data?.vehicleConsultation?.unknownIssue?.currentStatus);

        let initial =
          domainMap[data?.vehicleConsultation?.unknownIssue?.currentStatus];
        let currentState = initial;
        let flag = true;
        if (initial === "Failed") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }
        if (initial === "Order Completed") {
          stepperList.push({ title: initial, subtitle: updatedAt });
          flag = false;
        }

        if (flag) {
          stepperList.push({ title: initial, subtitle: "" });
          if (result?.length !== 0 && result[initial]?.length !== 0) {
            let next = result[initial]?.join("/");
            if (next !== "") {
              stepperList.push({ title: next, subtitle: "" });
            }
            for (let i = 0; i < result[initial]?.length; i++) {
              if (
                result[result[initial][i]] !== null &&
                result[result[initial][i]]?.length !== undefined &&
                result[result[initial][i]][0] !== "" &&
                result[result[initial][i]][0] !== undefined
              ) {
                initial = result[result[initial][i]][0];
              } else {
                flag = false;
              }
            }
          } else {
            flag = false;
          }
        }

        const activeStep = stepperList.findIndex(
          (step) => step.title === currentState
        );
        setStepperData([...stepperList]);
        setActiveStep(activeStep);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(orderData);

  return (
    <OrderDetailStyles>
      <div className="order-details">
        <div className="details">
          <div className="address-details">
            <h4>Delivery Address</h4>
            <p className="name">
              {orderData.issueType === "Spares"
                ? orderData.merchant.businessName
                : `${orderData.customer?.firstName} ${orderData.customer?.lastName}`}
            </p>
            <p className="address">
              Address:{" "}
              <span>
                {orderData.issueType === "Spares"
                  ? `${orderData.merchant.addressLine1} ${orderData.merchant.addressLine2}`
                  : `${orderData.customer?.addressLine1}
                ${orderData.customer?.addressLine2}`}
              </span>
            </p>
            <p className="phone">
              Phone Number:{" "}
              <span>
                {orderData.issueType === "Spares"
                  ? orderData.merchant.phoneNumber
                  : orderData.customer?.phoneNumber}
              </span>
            </p>
            <p className="phone">
              Order Number: <span>{orderData.orderNumber}</span>
            </p>
          </div>
          <div className="product-details">
            <h4>Product Details</h4>
            <div className="product-flex">
              <div className="image">
                {orderData.vehicleType === "Bike" && (
                  <img
                    src={
                      orderData.issueType === "UnKnown"
                        ? `${baseUrl}/productServerImage/${orderData.vehicleConsultation?.vehicleDiagnosisReport[0]?.issuePart.product.productImage[0]}`
                        : `${baseUrl}/productServerImage/${orderData.bikeProductMerchant?.product.productImage[0]}`
                    }
                    alt={`${
                      orderData.issueType === "UnKnown"
                        ? orderData.vehicleConsultation
                            ?.vehicleDiagnosisReport[0]?.issuePart.product
                            .productName
                        : orderData.bikeProductMerchant?.product.productName
                    } `}
                  />
                )}
                {orderData.vehicleType === "LMV" && (
                  <img
                    src={
                      orderData.issueType === "UnKnown"
                        ? `${baseUrl}/productServerImage/${orderData.vehicleConsultation?.vehicleDiagnosisReport[0]?.issuePart.product.productImage[0]}`
                        : `${baseUrl}/productServerImage/${orderData.lmvProductMerchant?.product.productImage[0]}`
                    }
                    alt={`${
                      orderData.issueType === "UnKnown"
                        ? orderData.vehicleConsultation
                            ?.vehicleDiagnosisReport[0]?.issuePart.product
                            .productName
                        : orderData.lmvProductMerchant?.product.productName
                    } `}
                  />
                )}
              </div>
              <div className="product-info">
                <p className="product">
                  {orderData.vehicleType === "Bike" &&
                    (orderData.issueType === "UnKnown"
                      ? orderData.vehicleConsultation?.vehicleDiagnosisReport[0]
                          ?.issuePart.product.productName
                      : orderData.bikeProductMerchant?.product.productName)}

                  {orderData.vehicleType === "LMV" &&
                    (orderData.issueType === "UnKnown"
                      ? orderData.vehicleConsultation?.vehicleDiagnosisReport[0]
                          ?.issuePart.product.productName
                      : orderData.lmvProductMerchant?.product.productName)}
                </p>
                <p className="category">
                  Category:&nbsp;&nbsp;
                  <span>
                    {orderData.vehicleType === "Bike" &&
                      (orderData.issueType === "UnKnown"
                        ? orderData.vehicleConsultation
                            ?.vehicleDiagnosisReport[0]?.issuePart.product
                            .subcategory.category?.categoryName
                        : orderData.bikeProductMerchant?.product.subcategory
                            .category?.categoryName)}
                    {orderData.vehicleType === "LMV" &&
                      (orderData.issueType === "UnKnown"
                        ? orderData.vehicleConsultation
                            ?.vehicleDiagnosisReport[0]?.issuePart.product
                            .subcategory.category?.categoryName
                        : orderData.lmvProductMerchant?.product.subcategory
                            .category?.categoryName)}
                  </span>
                </p>
                <p className="subcategory">
                  Subcategory: &nbsp;&nbsp;
                  <span>
                    {orderData.vehicleType === "Bike" &&
                      (orderData.issueType === "UnKnown"
                        ? orderData.vehicleConsultation
                            ?.vehicleDiagnosisReport[0]?.issuePart.product
                            .subcategory.subcategoryName
                        : orderData.bikeProductMerchant?.product.subcategory
                            .subcategoryName)}
                    {orderData.vehicleType === "LMV" &&
                      (orderData.issueType === "UnKnown"
                        ? orderData.vehicleConsultation
                            ?.vehicleDiagnosisReport[0]?.issuePart.product
                            .subcategory.subcategoryName
                        : orderData.lmvProductMerchant?.product.subcategory
                            .subcategoryName)}
                  </span>
                </p>
                <p className="price">
                  INR {parseFloat(orderData.adminAmount).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="product-details">
            <h4>Merchant Details</h4>
            <div className="product-flex">
              <div className="image">
                {orderData.vehicleType === "Bike" && (
                  <img
                    src={
                      orderData.issueType === "UnKnown"
                        ? `${baseUrl}/merchantServerImage/${orderData.vehicleConsultation?.merchant.workshopImage}`
                        : `${baseUrl}/merchantServerImage/${orderData.bikeProductMerchant?.merchantId.workshopImage}`
                    }
                    alt={
                      orderData.issueType === "UnKnown"
                        ? orderData.vehicleConsultation?.merchant.businessName
                        : orderData.bikeProductMerchant?.merchantId.businessName
                    }
                  />
                )}
                {orderData.vehicleType === "LMV" && (
                  <img
                    src={
                      orderData.issueType === "UnKnown"
                        ? `${baseUrl}/merchantServerImage/${orderData.vehicleConsultation?.merchant.workshopImage}`
                        : `${baseUrl}/merchantServerImage/${orderData.lmvProductMerchant?.merchantId.workshopImage}`
                    }
                    alt={
                      orderData.issueType === "UnKnown"
                        ? orderData.vehicleConsultation?.merchant.businessName
                        : orderData.lmvProductMerchant?.merchantId.businessName
                    }
                  />
                )}
              </div>
              <div className="product-info">
                <p className="product">
                  {orderData.vehicleType === "Bike" &&
                    (orderData.issueType === "UnKnown"
                      ? orderData.vehicleConsultation?.merchant.businessName
                      : orderData.bikeProductMerchant?.merchantId.businessName)}
                  {orderData.vehicleType === "LMV" &&
                    (orderData.issueType === "UnKnown"
                      ? orderData.vehicleConsultation?.merchant.businessName
                      : orderData.lmvProductMerchant?.merchantId.businessName)}
                </p>
                <p className="category">
                  Address:&nbsp;&nbsp;
                  <span>
                    {orderData.vehicleType === "Bike" &&
                      (orderData.issueType === "UnKnown"
                        ? `${orderData.vehicleConsultation?.merchant.addressLine1} ${orderData.vehicleConsultation?.merchant.addressLine2}`
                        : `${orderData.bikeProductMerchant?.merchantId.addressLine1} ${orderData.bikeProductMerchant?.merchantId.addressLine2}`)}
                    {orderData.vehicleType === "LMV" &&
                      (orderData.issueType === "UnKnown"
                        ? `${orderData.vehicleConsultation?.merchant.addressLine1} ${orderData.vehicleConsultation?.merchant.addressLine2}`
                        : `${orderData.lmvProductMerchant?.merchantId.addressLine1} ${orderData.lmvProductMerchant?.merchantId.addressLine2}`)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="stepper-section">
          <h4>Order Status</h4>
          <CustomStepper
            stepperData={stepperData}
            activeStep={activeStep}
            prevState={prevState}
          />
        </div>
      </div>
    </OrderDetailStyles>
  );
};

export default OrderDetails;
