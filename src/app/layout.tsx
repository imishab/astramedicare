import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll";

export const metadata: Metadata = {
  title: "Astra Medicare - Calicut",
  description: "Dorbesh - Creative Portfolio Showcase Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* FAV ICON */}
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
        {/* ALL GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* BOOTSTRAP CSS */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        {/* FONT AWESOME CSS */}
        <link rel="stylesheet" href="/fonts/remixicon.css" />
        {/* MAGNIFIC CSS */}
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        {/* NICE SELECT CSS */}
        <link rel="stylesheet" href="/css/nice-select.min.css" />
        {/* ANIMATE CSS */}
        <link rel="stylesheet" href="/css/animate.min.css" />
        {/* SLICK CSS */}
        <link rel="stylesheet" href="/css/slick.min.css" />
        {/* SPACING CSS */}
        <link rel="stylesheet" href="/css/spacing.css" />
        {/* MAIN STYLE CSS */}
        <link rel="stylesheet" href="/css/style.css" />
        {/* RESPONSIVE CSS */}
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body>
        <SmoothScroll />
        {children}

        <div className="progress-wrap cursor-pointer">
          <i className="ri-arrow-up-double-line" />
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </body>
    </html>
  );
}
