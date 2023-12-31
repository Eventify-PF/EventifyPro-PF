
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "@/redux/provider";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={font.className}>
        <Navbar/>
        <div className="bg-gray-300 min-h-screen pb-20 pt-28">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
