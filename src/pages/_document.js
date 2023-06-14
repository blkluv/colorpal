import Footer from "@/components/globals/Footer";
import NavBar from "@/components/globals/NavBar";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="AICOLOR : Color Palette & Design Tool" />
        <meta
          name="description"
          content="AICOLOR is the ultimate color palette generator with awesome tools. AICOLOR's AI, user-friendly interface, and customization options make it easy to find the perfect colors. Unleash your creativity and elevate your designs with AICOLOR!"
        />
        <meta name="copyright" content="VishwaGauravIn" />
        <meta
          name="keywords"
          content="AICOLOR, Color Palette, Gradient, Shade Generator, Color Shade, Tailwind"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="colpat.itsvg.in" />
        <meta
          property="og:title"
          content="AICOLOR : Color Palette & Design Tool"
        />
        <meta
          property="og:description"
          content="AICOLOR is the ultimate color palette generator with awesome tools. AICOLOR's AI, user-friendly interface, and customization options make it easy to find the perfect colors. Unleash your creativity and elevate your designs with AICOLOR!"
        />
        <meta property="og:image" content="https://colpat.itsvg.in/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="colpat.itsvg.in" />
        <meta
          property="twitter:title"
          content="AICOLOR : Color Palette & Design Tool"
        />
        <meta
          property="twitter:description"
          content="AICOLOR is the ultimate color palette generator with awesome tools. AICOLOR's AI, user-friendly interface, and customization options make it easy to find the perfect colors. Unleash your creativity and elevate your designs with AICOLOR!"
        />
        <meta
          property="twitter:image"
          content="https://colpat.itsvg.in/og.png"
        />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-NXQ5RGV`}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-NXQ5RGV', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
        <NavBar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
