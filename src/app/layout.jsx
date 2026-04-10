import '@/styles/globals.css'

export const metadata = {
  title: 'Raditya Putra — Backend Developer',
  description: 'I design and build modern web applications, APIs, and digital products.',
  openGraph: {
    title: 'Raditya Putra — Backend Developer',
    description: 'I design and build modern web applications, APIs, and digital products.',
    url: 'https://radityadev.vercel.app',
    siteName: 'Raditya Dev',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
