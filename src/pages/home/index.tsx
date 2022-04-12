import { MainLayout } from "@/layouts/Main";

function Index() {
  return (
    <>
      <div>Hello!!</div>
    </>
  );
}

Index.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default Index;
