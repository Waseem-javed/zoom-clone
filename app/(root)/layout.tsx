import React from "react";
import { Metadata } from "next";
import StreamVideoProvider from "@/Providers/StreamProvider";

export const metadata: Metadata = {
  title: "Boom",
  description: "Video Calling app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
