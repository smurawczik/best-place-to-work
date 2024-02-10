import { useParams } from "react-router-dom";
import { useGetCompanyReviews } from "../../hooks/useGetCompanyReviews";
import {
  CompanyHeader,
  CompanyReviews,
  Rating,
} from "../../components/CompanyReviews";

export const CompanyReviewsPage = () => {
  const { id } = useParams();

  useGetCompanyReviews(id);

  return (
    <>
      <CompanyHeader />
      <Rating />
      <CompanyReviews />
    </>
  );
};
