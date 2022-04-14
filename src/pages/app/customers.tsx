import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "@/components/customer/customer-list-results";
import { CustomerListToolbar } from "@/components/customer/customer-list-toolbar";
import { DashboardLayout } from "@/layouts/Dashboard";
import { customers } from "@/mocks/customers";

const Customers = () => (
  <>
    <Head>
      <title>Customers | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);
Customers.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Customers;
