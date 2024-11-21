import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/cabecalho";
import Footer from "@/components/rodape";

export const metadata: Metadata = {
  title: "EcoRide",
  description: "Movimente-se pelo Futuro Sustentável",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
       
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
