export const metadata = {
  title: 'Learn Anything Fast',
  description: 'Master any skill with proven learning techniques',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
