"use client";
import React from "react";
import ThemeProvider from "./theme-provider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
export default Provider;
