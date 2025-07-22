import "@fortawesome/fontawesome-svg-core/styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fontsource/manrope';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/700.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive.css"
import AddBootstrap from "./BootstrapJs";
import Header from "./Component/Header/Header";
import GetAosAnimation from "./hooks/GetAosAnimation";
import { Toaster } from "react-hot-toast";
import { WebsiteContentProvider } from "./context/WbContent";

// Meta Items
export const metadata = {
  title: "portfolio",
  description: "",
};

const NextImageUrl = process.env.NEXT_PUBLIC_IMAGE_UR;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${NextImageUrl}/assets/images/fav.svg`} type="image/svg" sizes="32x32" />
      </head>
      <body>
        <WebsiteContentProvider >
          <Header />
          {children}
          <GetAosAnimation />
          <AddBootstrap />
          <Toaster position="bottom-right" reverseOrder={false} toastOptions={{ style: { borderRadius: '10px', background: '#333', color: '#fff', }, }} />
        </WebsiteContentProvider>
      </body>
    </html>
  );
}
