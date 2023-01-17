import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input placeholder="Busque por transações" type="text" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
