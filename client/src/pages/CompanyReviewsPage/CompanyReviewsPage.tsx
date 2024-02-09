import { useParams } from "react-router-dom";
import { useGetCompanyReviews } from "../../hooks/useGetCompanyReviews";

export const CompanyReviewsPage = () => {
  const { id } = useParams();

  useGetCompanyReviews(id);

  return <div>company reviews page</div>;
};
