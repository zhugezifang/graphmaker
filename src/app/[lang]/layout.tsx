import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
//import { ThemeProvider } from "@/components/theme-provider";
import { locales } from '@/i18n/config'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { Toaster } from "react-hot-toast"
import { BreadcrumbWrapper } from "@/components/breadcrumb-wrapper"

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  console.log(params.lang)
  const dict = await getDictionary(params.lang)
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'
  
  return {
    title: {
      default: dict.metadata.title,
      template: `%s`
    },
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    authors: [{ name: 'yeheboo' }],
    metadataBase: new URL(url),
    alternates: {
      canonical: `${url}/${params.lang}`,
      languages: {
        'en': `${url}/en`,
        'zh': `${url}/zh`,
      },
    },
    openGraph: {
      type: 'website',
      locale: params.lang,
      url: `${url}/${params.lang}`,
      title: dict.metadata.title,
      description: dict.metadata.description,
      siteName: dict.common.brand
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  const navbar = await Navbar({ lang });
  const footer = await Footer({ lang });

  
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4158779929727637"
           crossOrigin="anonymous"></script>
      <meta name="google-site-verification" content="UuFT61A3zra1kfyVyhHqNZffLbgbBw_OdgNpWNH0TnI" />
      <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=G-0F6RE4VBFL`}
      />
      <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0F6RE4VBFL');
            `,
          }}
      />
      <script async src='https://platform-api.sharethis.com/js/sharethis.js#property=6714ad2d10ca00001277ac7d&product=sop'>
      </script> 
      </head>
      <body className={inter.className}>
        
          <Toaster position="top-center" />
          <div className="relative flex min-h-screen flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-radial-t from-primary/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-radial-b from-primary/20 to-transparent pointer-events-none" />
            {navbar}
            <main className="relative flex-1 bg-gray-100">
              <BreadcrumbWrapper lang={lang} dict={dict} />
              {children}
            </main>
            {footer}
          </div>
      </body>
    </html>
  )
}
