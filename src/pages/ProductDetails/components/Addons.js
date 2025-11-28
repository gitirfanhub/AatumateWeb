import React from "react";
import { AddonsStyleWrapper } from "../ProductDetailsStyles";
import { baseUrl } from "../../../utils/constants";
import { Checkbox, FormControlLabel } from "@mui/material";
import { FiCircle } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi";

const Addons = (props) => {
  const { addons, selectedAddons, setSelectedAddons } = props;

  const handleChange = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  return (
    <AddonsStyleWrapper>
      {addons?.length >= 1 ? (
        <div className="free-service">
          <h3 className="free-service__title">Add-on Services</h3>
          <div className="addons-items">
            <div className="addons-flex">
              {addons?.map((item, index) => (
                <div className="items-box" key={item._id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FiCircle />}
                        checkedIcon={<HiCheckCircle />}
                        checked={selectedAddons.includes(item._id)}
                        onChange={() => handleChange(item._id)}
                        value={item._id}
                      />
                    }
                    label={
                      <img
                        src={`${baseUrl}/productServerImage/${item.productImage[0]}`}
                        alt={`${item.product.productName}`}
                        key={index}
                        className="addon-image"
                        width="120px"
                        height="120px"
                      />
                    }
                  />
                  <div className="items-details">
                    <p className="product-name">{item.product.productName}</p>
                    <div className="price">
                      INR {parseFloat(item.currentSalePrice).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </AddonsStyleWrapper>
  );
};

export default Addons;
