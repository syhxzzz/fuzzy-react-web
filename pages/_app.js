import "@/assets/css/base.css";
import { Provider } from "react-redux";
import store from "@/store";
import AppLayout from "@/components/app-layout";
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}
