import React from "react";
import { SwiperSlide } from "swiper/react";
import CustomCarousel from "../../../components/CustomCarousel";
import WorkshopCard from "../../../components/WorkshopCard";
import { useWorkshopContext } from "../../../context/workshop_context";
import { merchantBreakpoints } from "../../../store/CarouselData";
import { baseUrl } from "../../../utils/constants";
import { computeDistance } from "../../../utils/utilsfunction";
import { FeaturedWorkshopsWrapper } from "../HomePageStyles";

const FeaturedLmvWorkshops = () => {
  const { nearby_lmv_workshop, lmv_workshop, parameters } =
    useWorkshopContext();

  const myLocation = JSON.parse(localStorage.getItem("myLocation"));

  return (
    <FeaturedWorkshopsWrapper lmv>
      <h1 className="title">
        <span className="small">Standard</span> <br />
        Think about the Service, <br />
        <span className="large">not price</span>
      </h1>
      <div className="feature">
        <CustomCarousel
          slidesPerView={1}
          spaceBetween={3}
          breakpoints={merchantBreakpoints}
          pagination={{ clickable: true }}
        >
          {nearby_lmv_workshop
            .slice(0, parameters[0]?.nerestWorkshopLimit)
            .map((work) => {
              return (
                <SwiperSlide key={work._id}>
                  <WorkshopCard
                    key={work._id}
                    workshopImage={`${baseUrl}/merchantServerImage/${work.workshopImage}`}
                    workshopName={work.businessName}
                    kilometers={`${parseFloat(
                      computeDistance(
                        work.latitude,
                        work.longitude,
                        myLocation?.latitude,
                        myLocation?.longitude
                      )
                    ).toFixed(2)} km`}
                    rating="4.5"
                    address={`${work.addressLine1} ${work.addressLine2}`}
                  />
                </SwiperSlide>
              );
            })}

          {nearby_lmv_workshop?.length === 0 &&
            lmv_workshop
              .slice(0, parameters[0]?.nerestWorkshopLimit)
              .map((work) => {
                return (
                  <SwiperSlide key={work._id}>
                    <WorkshopCard
                      key={work._id}
                      workshopImage={`${baseUrl}/merchantServerImage/${work.workshopImage}`}
                      workshopName={work.businessName}
                      // kilometers={`${parseFloat(
                      //   work.distancekilometers
                      // ).toFixed(2)} km`}
                      rating="4.5"
                      address={`${work.addressLine1} ${work.addressLine2}`}
                    />
                  </SwiperSlide>
                );
              })}
        </CustomCarousel>
      </div>
    </FeaturedWorkshopsWrapper>
  );
};

export default FeaturedLmvWorkshops;
