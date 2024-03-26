import { Inter } from "next/font/google";

import "./globals.css";
import '@/theme/jquery-ui.min.css';
import '@/theme/bootstrap.min.css';
import '@/theme/fontawesome.min.css';


// import '@/theme/slick.css';
// import '@/theme/swiper.min.css';
// import '@/theme/animate.css';
// import '@/theme/lightgallery.min.css';

import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import Script from 'next/script'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEX-ROBOTICS",
  description: "Nex-ROBOTICS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Script src='assets/js/plugins/jquery-3.6.0.min.js' />
        {/* <Script src='assets/js/plugins/jquery-ui.min.js' /> */}
         <Script src='assets/js/main.js' />
         <Script src='assets/js/plugins/jquery.slick.min.js' />
        {/*<Script src='assets/js/plugins/gsap.min.js' />
        <Script src='assets/js/plugins/isotope.pkg.min.js' /> */} 
        {/* <Script src='assets/js/plugins/jquery.counter.min.js' /> */}     
        {/* <Script src='assets/js/plugins/lightgallery.min.js' />
        <Script src='assets/js/plugins/ripples.min.js' /> */}
        {/* <Script src='assets/js/plugins/swiper.min.js' /> */}
        <Script src='assets/js/plugins/wow.min.js' />
      </body>
    </html>
  );
}
