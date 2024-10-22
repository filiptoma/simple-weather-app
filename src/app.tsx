import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./api/query";
import { PlaceProvider } from "./context/place";
import { Home } from "./pages/home";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PlaceProvider>
        <Home />
      </PlaceProvider>
    </QueryClientProvider>
  );
};

export default App;
