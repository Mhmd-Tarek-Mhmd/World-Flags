import { useState } from "react";

import { Country } from "./utils/types";

import { ThemeToggler } from "./components";
import { CountryView, CountriesView } from "./views";

function App() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <>
      {/* Header */}
      <header className="bg shadow-sm h-[160px] md:h-[80px] flex items-center">
        <div className="container flex justify-between items-center">
          <ThemeToggler />
          <h1 className="text-3xl md:text-2xl cursor-default">World Flags</h1>
        </div>
      </header>

      {/* Main */}
      {selectedCountry ? (
        <main className="container py-6">
          <CountryView
            country={selectedCountry}
            onBack={() => setSelectedCountry(null)}
          />
        </main>
      ) : (
        <main className="container py-10 xl:py-20">
          <CountriesView onSelectCountry={setSelectedCountry} />
        </main>
      )}
    </>
  );
}

export default App;
