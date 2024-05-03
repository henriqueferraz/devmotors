import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMotors",
  description: "Criado em NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={inter.className}
      >
        <Header />
        {children}
        <p style={{ textAlign: 'center', marginTop: 54, marginBottom: 24 }}>
          Todos os direitos reservados <a target="_blank" className="text-decoration: none" href="https://www.hferraz.com.br">HFerraz</a>  @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
