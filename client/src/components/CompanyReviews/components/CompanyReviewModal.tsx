import { Dialog } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const CompanyReviewModal: FC<{ reviewId: string }> = ({ reviewId }) => {
  const navigate = useNavigate();

  console.log(reviewId);

  return (
    <Dialog
      open
      onClose={() => {
        navigate(-1);
      }}
    >
      <h1>Modal {reviewId}</h1>
    </Dialog>
  );
};
