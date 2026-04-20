import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'USDT Gas Faucet',
  description: 'Free USDT Gas Faucet',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
