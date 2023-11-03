export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/discover/recommend",
      permanent: false,
    },
  };
}
// 服务器端进行重定向
export default function DiscoverPage() {
  return null;
}
