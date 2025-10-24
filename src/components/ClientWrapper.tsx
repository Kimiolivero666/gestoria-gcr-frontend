"use client";

import React, { useRef } from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: Props) {
  const footerRef = useRef<HTMLElement | null>(null);

  return (
    <>
      {children}
      <ScrollToTopButton footerRef={footerRef} />
      <Footer ref={footerRef} />
    </>
  );
}
