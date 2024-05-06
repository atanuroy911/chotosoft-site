
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./Header";
import { ParallaxProviders } from "@/components/parallax-provider";

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {


  return (
    <html lang={locale}>
      <body>
        <ParallaxProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />

            {children}

            {/* <Starfield /> */}
          </ThemeProvider>
        </ParallaxProviders>

      </body>
    </html>
  );
}