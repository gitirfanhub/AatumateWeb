import React, { useState } from "react";
import styled from "styled-components";

const FilterBtnWrapper = styled.div`
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 15px;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0;
    border-radius: 50%;
    font: ${({ theme }) => theme.fontAppearance.titleMedium};
    overflow: hidden;
    cursor: pointer;
  }

  @keyframes iconAnimation {
    0%,
    5% {
      transform: translate(0, 0);
    }
    20%,
    30% {
      transform: translate(-250px, 0);
    }
    40% {
      transform: translate(200px, 0) scale(1.3);
    }
    40.1% {
      transform: translate(200px, -60px) scale(1);
    }
    40.2% {
      transform: translate(34px, -60px);
    }
    45%,
    95% {
      transform: translate(34px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  .text {
    display: block;
    white-space: nowrap;
    font: ${({ theme }) => theme.fontAppearance.contentMedium};
    text-align: center;
    padding-top: 5px;
  }
  .icon {
    font-size: 1px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  button.filtering {
    .icon {
      animation: iconAnimation 5s both;
    }
  }
`;

const FilterButton = (props) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
      props.onClick();
    }, 2000);
  };
  return (
    <FilterBtnWrapper>
      <button onClick={handleClick} className={active ? "filtering" : null}>
        <span className="icon">
          <img src={props.source} alt={props.text} />
        </span>
      </button>
      <span className="text">{props.text}</span>
    </FilterBtnWrapper>
  );
};

export default FilterButton;
