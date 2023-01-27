import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SeachFormInputs = z.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  const { register, handleSubmit } = useForm<SeachFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchTransactions(data: SeachFormInputs) {
    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        placeholder="Busque por transações"
        type="text"
        {...register("query")}
      />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
