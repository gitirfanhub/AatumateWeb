import React, { useEffect, useState } from "react";
import { CategoryWrapper } from "../HomePageStyles";
import CategoryCard from "../../../components/CategoryCard";
import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../../../context/category_context";
import { baseUrl } from "../../../utils/constants";
import FilterButton from "../../../components/FilterButton";
import Car from "../../../images/Car_Outlined.svg";
import Bike from "../../../images/Scooter_Outlined.svg";
import Backdrop from "../../../components/Backdrop";
import UnknownIssues from "./UnknownIssues";
import UnknownIssuesDrawer from "../../../components/UnknownIssuesDrawer";

const CategorySection = () => {
  const { bike_category, lmv_category } = useCategoryContext();
  const navigate = useNavigate();
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [unknownDrawerOpen, setUnknownDrawerOpen] = useState(false);

  const openUnknownDrawer = () => {
    setUnknownDrawerOpen(true);
  };

  const closeUnknownDrawer = () => {
    setUnknownDrawerOpen(false);
  };

  const knownBikeCategories = bike_category.filter(
    (cate) => cate.serviceType === "Known"
  );

  const knownLMVCategories = lmv_category.filter(
    (cate) => cate.serviceType === "Known"
  );

  const fetchCategories = () => {
    setFilteredCategory(knownLMVCategories);
  };

  useEffect(() => {
    fetchCategories();
  }, [bike_category, lmv_category]);

  const filteredResult = (bike) => {
    setFilteredCategory(bike);
  };

  return (
    <CategoryWrapper>
      <h1 className="section-title">Category</h1>
      <div className="category-buttons">
        <FilterButton
          text="Car"
          source={Car}
          onClick={() => setFilteredCategory(knownLMVCategories)}
        />
        <FilterButton
          text="Bike"
          source={Bike}
          onClick={() => filteredResult(knownBikeCategories)}
        />
      </div>
      <div className="category-list">
        {filteredCategory.map((item) => {
          return (
            <CategoryCard
              image={`${baseUrl}/productServerImage/${item.categoryImage}`}
              name={item.categoryName}
              key={item._id}
              onClick={() =>
                navigate(`/products`, {
                  state: {
                    id: item._id,
                    name: item.categoryName,
                    vehicleType: item.vehicleType
                  }
                })
              }
            />
          );
        })}
        {unknownDrawerOpen && <Backdrop onClick={closeUnknownDrawer} />}
        <UnknownIssuesDrawer show={unknownDrawerOpen}>
          <UnknownIssues closeUnknownDrawer={closeUnknownDrawer} />
        </UnknownIssuesDrawer>
        <CategoryCard
          bgBlack
          image={Bike}
          name="Unknown Issues"
          onClick={openUnknownDrawer}
        />
      </div>
    </CategoryWrapper>
  );
};

export default CategorySection;
