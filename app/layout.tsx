// src/app/layout.tsx
import './globals.css'; // Impor file CSS global jika ada

export const metadata = {
  title: 'PWA Post',
  description: 'Ini adalah aplikasi uji coba menggunakan Progressive Website Aplication',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
