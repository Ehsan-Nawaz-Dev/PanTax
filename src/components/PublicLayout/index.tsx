import type { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "@components/Header";
import { rootSx, mainSx } from "@styles/components/publicLayout.styles";

type PublicLayoutProps = {
  children: ReactNode;
};

/**
 * Shared layout for public pages (Login, Register, ForgotPassword).
 * - Header on top (responsive padding)
 * - Main content below with consistent responsive padding
 * - Use for every public page so layout stays responsive.
 */
const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  return (
    <Box sx={rootSx}>
      <Header />
      <Box component="main" sx={mainSx}>
        {children}
      </Box>
    </Box>
  );
};

export default PublicLayout;
