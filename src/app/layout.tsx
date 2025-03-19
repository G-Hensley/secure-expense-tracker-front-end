'use client';

import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/apollo-client";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
        <GoogleAnalytics gaId="G-ML0ZLCJ5BS" />
      </body>
    </html>
  );
}
