import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionContext } from "../../../../contexts/TransactionContext";
import { useContextSelector } from "use-context-selector";
const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormData = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    transactionContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: { query: "" },
  });

  async function handleSearchTransactions(data: SearchFormData) {
    console.log(data.query);
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button
        type="submit"
        onClick={handleSubmit(handleSearchTransactions)}
        disabled={isSubmitting}
      >
        <MagnifyingGlass /> Buscar
      </button>
    </SearchFormContainer>
  );
}
