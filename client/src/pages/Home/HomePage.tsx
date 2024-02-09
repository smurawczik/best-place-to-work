import { Box, styled } from "@mui/material";

const StyledTitle = styled("h1")(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: "center",
  fontWeight: 200,
}));

export const HomePage = () => {
  return (
    <Box maxWidth={600}>
      <StyledTitle>
        Find your next job by seeing and comparing salaries all around the glove
      </StyledTitle>
    </Box>
  );
};
