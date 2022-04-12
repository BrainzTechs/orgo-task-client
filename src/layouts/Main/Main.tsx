import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MainNavbar from "./components/Navbar";

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const MainLayoutWrapper = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: 64,
});

const MainLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const MainLayoutContent = styled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
});

const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <MainLayoutRoot>
      <MainNavbar />
      <MainLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutContent>
            <Box
              sx={{
                display: "flex",
                flex: "1 1 auto",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {children}
            </Box>
          </MainLayoutContent>
        </MainLayoutContainer>
      </MainLayoutWrapper>
    </MainLayoutRoot>
  );
};

export default MainLayout;
