import { FC } from "react";
import { useParams } from "react-router-dom";
import { CompanyReviewModal } from "../../components/CompanyReviewModal";
import {
  CompanyHeader,
  CompanyReviews,
  Rating,
} from "../../components/CompanyReviews";
import { useGetCompanyReviews } from "../../hooks/useGetCompanyReviews";

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
