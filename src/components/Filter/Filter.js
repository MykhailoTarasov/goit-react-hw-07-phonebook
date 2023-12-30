import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { selectFilter } from "../../redux/selectors";
import { FilterContainer, FilterInput, FilterTitle } from "./FIlter.Styled";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeFilter = evt => {
    dispatch(setFilter(evt.target.value.trim()));
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