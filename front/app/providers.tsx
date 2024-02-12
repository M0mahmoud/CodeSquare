"use client";

import { ChakraProvider } from "@chakra-ui/react";
type Props = { children: React.ReactNode };

export function Providers({ children }: Props) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
