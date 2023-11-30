import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodoAppContainer from "./App/Containers/TodoAppContainer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      // other options
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div>
          <header>
            <h1>My Todo App</h1>
          </header>
          <Routes>
            <Route path="/" element={<TodoAppContainer />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
