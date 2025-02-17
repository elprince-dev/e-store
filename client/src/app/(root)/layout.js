import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import StoreProvider from "@/redux/StoreProvider";
import 'sweetalert2/dist/sweetalert2.js'




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "YasMade",
  description: "YasMade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}> 
        {/* max-w-screen-xl mx-auto  */}
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>   
      </body>
    </html>
  );
}
