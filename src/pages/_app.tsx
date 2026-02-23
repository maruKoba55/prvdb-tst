"use client";
import { Auth } from "@supabase/auth-ui-react";
import type { AppProps } from "next/app";
import { AuthLayout } from "@/layout/AuthLayout";
import { client } from "@/lib/supabaseClient";
//import "tailwindcss/tailwind.css";
import "@/styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Auth.UserContextProvider supabaseClient={client}>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </Auth.UserContextProvider>
    </div>
  );
};
export default MyApp;
