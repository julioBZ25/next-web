import {Inter} from 'next/font/google';
import {NextIntlClientProvider, useLocale} from 'next-intl';
import { notFound } from 'next/navigation'
import './globals.css';

const inter = Inter({
  subsets: ['latin']
})


export const metadata = {
  title: 'Julio | Front End Developer',
  description: 'next portafolio',
}

export default async function RootLayout({

  children, params
}: {
  children: React.ReactNode, params: { locale: string }
}) {
  const locale = useLocale();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
