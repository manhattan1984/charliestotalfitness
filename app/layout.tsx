import "server-only";
import "./globals.css";
import SupabaseListener from "../components/supabase-listener";
import SupabaseProvider from "../components/supabase-provider";
import { createClient } from "../utils/supabase-server";
import MenuContext from "./(context)/MenuContext";
import CartContext from "./(context)/CartContext";
import Footer from "./(components)/Footer";
import Menu from "./(components)/Menu";
import Header from "./(components)/Header";
import Cart from "./(components)/Cart";
import { Oswald, Quicksand } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Charlie's Total Fitness Center",
  description: "Official Charlie's website",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const links: { name: string; link: string }[] = [
    { name: "Home", link: "/" },
    { name: "about", link: "/about" },
    { name: "shop ", link: "/shop" },
    { name: "my account", link: user ? `/account/${user.id}` : "/signin" },
    { name: "Subscribe For A Plan", link: "/subscribe" },
  ];
  return (
    <html lang="en">
      <body className={`${oswald.variable} font-sans ${quicksand.variable}`}>
        <SupabaseProvider accessToken={session?.access_token}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <CartContext>
            <MenuContext>
              <Header links={links} />
              <Cart />
              <Menu links={links} />
            </MenuContext>
            <div className="min-h-screen">{children}</div>
          </CartContext>
          <Footer links={links} />
        </SupabaseProvider>
      </body>
    </html>
  );
}
