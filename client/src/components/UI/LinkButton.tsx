import { Button, ButtonProps } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface LinkButtonProps extends ButtonProps, PropsWithChildren {
  href: string;
}

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  href,
  ...buttonProps
}) => {
  const navigate = useNavigate();

  return (
    <Button
      {...buttonProps}
      onClick={(e) => {
        e.stopPropagation();

        navigate(href);
      }}
    >
      {children}
    </Button>
  );
};
