import { FC } from "react";
import { CompanyReviewCon } from "../../../redux/reviews/reviews.slice.types";
import Typography from "@mui/material/Typography";

export const ReviewCons: FC<{ cons: CompanyReviewCon[] }> = ({ cons }) => {
  return (
    <>
      {cons.map((con) => (
        <Typography key={con.description}>{con.description}</Typography>
      ))}
    </>
  );
};
