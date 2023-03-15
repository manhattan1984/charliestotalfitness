import "./globals.css";
import MenuContext from "./(context)/MenuContext";
import Footer from "./(components)/Footer";
import Menu from "./(components)/Menu";
import Header from "./(components)/Header";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Charlies Total Fitness Center",
  description: "Official Charlies website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links: { name: string; link: string }[] = [
    { name: "Home", link: "/" },
    { name: "about", link: "/about" },
    { name: "our facilities", link: "/facilities" },
    { name: "shop ", link: "/shop" },
    { name: "my account", link: "/account" },
    { name: "Subscribe For A Plan", link: "/subscribe" },
  ];
  return (
    <html lang="en">
      <body className={`${oswald.variable} font-sans`}>
        <MenuContext>
        <Header links={links} />
        <Menu links={links} />
        </MenuContext>
          <div className="min-h-screen">{children}</div>
        <Footer links={links} />
      </body>
    </html>
  );
}
