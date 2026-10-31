"use client";

import { useEffect } from "react";

export default function BackToProjectsOnBack() {
  useEffect(() => {
    const handlePopState = () => {
      window.location.replace("/#projects");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return null;
}
