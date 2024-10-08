import { Poppins } from "next/font/google";
import "./globals.css";
import '../sass/style.scss';
import NavBar from "../components/NavBar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: './favicon.ico', 
  },
  title: "Saul Lopez",
  description: "A portfolio generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}

