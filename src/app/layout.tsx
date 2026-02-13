import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll";
import Preloader from "@/components/common/Preloader";
import AppointmentModal from "@/components/common/AppointmentModal";

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
        <Preloader />
        <SmoothScroll />
        {children}
        <AppointmentModal />

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
