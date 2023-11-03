export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/discover",
      permanent: false,
    },
  };
}
// 服务器端进行重定向
export default function HomePage() {
  return null;
}

// const HomePage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     router.replace('/discover');
//   }, [router]);

//   return null; // 或者展示一个加载中的提示
// };
// 客户端渲染，会有额外的渲染和延迟
