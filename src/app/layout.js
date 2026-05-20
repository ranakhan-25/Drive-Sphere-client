import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/features/Navbar";
import { Providers } from "./ThemeProviders";
import Footer from "@/components/features/Footer";
import { ToastContainer } from 'react-toastify';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "DriveSphere - Car Rental Platform",
  description:
    "Explore, rent, and manage cars with DriveSphere. Secure authentication, booking management, and modern responsive UI.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} font-sans h-full`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer/>
        </Providers>
      </body>
    </html>
  );
}