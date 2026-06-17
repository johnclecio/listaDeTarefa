import type { Metadata } from "next";
import  Header  from "@/app/components/Header";
import  Footer  from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Top Destino",
  description: "Descubra destinos incríveis, roteiros exclusivos e ofertas que cabem no seu bolso.",
  
  icons: {
    icon: "/favicon/faviconn.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      
    >
      <body>
        <Header/>
        {children}
        <Footer/>
        
          


      </body>
    </html>
  );
}
