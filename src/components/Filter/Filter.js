import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selectors";
import { FilterContainer, FilterInput, FilterTitle } from "./FIlter.Styled";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <FilterContainer>
      <FilterTitle>Find contact by name</FilterTitle>
      <FilterInput
        type="text"
        value={filter}
        placeholder="Find by name"
        onChange={onChangeFilter}
      />
    </FilterContainer>
  );
};

export default Filter;