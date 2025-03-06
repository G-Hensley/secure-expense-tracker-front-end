'use client';

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
      </body>
    </html>
  );
}
