import Typography from "@mui/material/Typography";
import { FC } from "react";
import { CompanyReviewPro } from "../../../redux/reviews/reviews.slice.types";

export const ReviewPros: FC<{ pros: CompanyReviewPro[] }> = ({ pros }) => {
  return (
    <>
      {pros.map((con) => (
        <Typography key={con.description}>{con.description}</Typography>
      ))}
    </>
  );
};
