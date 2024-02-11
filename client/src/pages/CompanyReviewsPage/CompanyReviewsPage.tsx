import { useParams } from "react-router-dom";
import { useGetCompanyReviews } from "../../hooks/useGetCompanyReviews";
import {
  CompanyHeader,
  CompanyReviewModal,
  CompanyReviews,
  Rating,
} from "../../components/CompanyReviews";
import { FC } from "react";

export const CompanyReviewsPage: FC<{ withModal?: boolean }> = ({
  withModal,
}) => {
  const { id, reviewId } = useParams();

  useGetCompanyReviews(id);

  if (withModal && reviewId) {
    return (
      <>
        <CompanyReviewModal reviewId={reviewId} />
        <CompanyHeader />
        <Rating />
        <CompanyReviews />
      </>
    );
  }

  return (
    <>
      <CompanyHeader />
      <Rating />
      <CompanyReviews />
    </>
  );
};
