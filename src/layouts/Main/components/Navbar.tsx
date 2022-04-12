import { AppBar, Toolbar } from "@mui/material";
import NextLink from "next/link";

import { Logo } from "@/components/logo";

const MainNavbar = (props: any) => (
  <AppBar elevation={0} {...props}>
    <Toolbar sx={{ height: 64 }}>
      <NextLink href="/" passHref>
        <a>
          <Logo
            sx={{
              height: 42,
              width: 42,
            }}
          />
        </a>
      </NextLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
