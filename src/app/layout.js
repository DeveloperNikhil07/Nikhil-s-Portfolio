import { Red_Hat_Display } from 'next/font/google';
import "@fortawesome/fontawesome-svg-core/styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive.css";
import Header from "./Component/Header/Header";
import { WebsiteContentProvider } from "./context/WbContent";

// --- Red Hat Display Font Setup ---
const redHat = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-redhat'
});

// Meta Items
export const metadata = {
  title: "portfolio",
  description: "",
};

const NextImageUrl = process.env.NEXT_PUBLIC_IMAGE_UR;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={redHat.variable}>
      <head>
        <link
          rel="icon"
          href={`${NextImageUrl}/assets/images/fav.svg`}
          type="image/svg"
          sizes="32x32"
        />
      </head>
      <body style={{ fontFamily: 'var(--font-redhat), sans-serif' }}>
        <WebsiteContentProvider>
          <Header />
          {children}
          {/* <GetAosAnimation /> */}
        </WebsiteContentProvider>
      </body>
    </html>
  );
}
