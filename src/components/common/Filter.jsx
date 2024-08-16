import React from "react";
import { useSearchParams } from "react-router-dom";
import StyledFilter from "../../styles/components/common/StyleFilter";
import FilterButton from "../../styles/components/feature/FilterButton";

const Filter = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter =
    searchParams.get(props.filterField) || props.options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }
  return (
    <StyledFilter>
      {props.options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
};

export default Filter;
