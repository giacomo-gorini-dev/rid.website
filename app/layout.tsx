import "./globals.css";
import Navbar from "@/app/components/Navbar/page";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
