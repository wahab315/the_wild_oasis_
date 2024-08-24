import React, { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobelStyles from "./styles/globelStyle";
import Routess from "./Routes";
import { Toaster } from "react-hot-toast";
import ToasterMessage from "./components/ui/ToasterMessage";

const App = () => {
  const queryClient = new QueryClient({
    defualtOptions: {
      staleTime: 0,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobelStyles />
      <ToasterMessage />
      <Routess />
    </QueryClientProvider>
  );
};

export default App;
