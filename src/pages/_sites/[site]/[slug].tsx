import { MainLayout } from "@/layouts/Main";

function Post() {
  return <></>;
}

Post.getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default Post;
