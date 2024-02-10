import { useAppSelector } from "../../../redux/store.hooks";

export const CompanyHeader = () => {
  const company = useAppSelector((state) => state.reviews.company);

  if (!company) return null;

  return <h1>{company.name}</h1>;
};
