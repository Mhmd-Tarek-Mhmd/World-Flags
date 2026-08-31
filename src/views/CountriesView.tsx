import { useState } from "react";
import { useDidUpdateEffect, useTheme } from "../hooks";

import { Country } from "../utils/types";
import { fetchCountries } from "../utils/api";

import Select from "react-select";
import { CountryCard, SearchBar } from "../components";

const LIMIT = 50;
const filtersInitState = { offset: 0, query: "", region: "", country: "" };
type RegionOption = { value: string };
const REGIONS: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const regionOptions: RegionOption[] = REGIONS.map((region) => ({
  value: region,
}));

export default function CountriesView({
  onSelectCountry,
}: {
  onSelectCountry: Function;
}) {
  const { isDark: isDarkTheme } = useTheme();
  const [isMore, setIsMore] = useState<boolean>(false);
  const [filters, setFilters] = useState(filtersInitState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<Country[] | null>(null);

  // Fetch countries on initial render and when offset changes
  useDidUpdateEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const res = await fetchCountries(
          LIMIT,
          filters.offset,
          filters.query,
          filters.region,
        );
        const payload = res as any;

        setIsMore(Boolean(payload?.data?.meta?.more));
        setCountries(payload?.data?.objects || ([] as Country[]));
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        throw new Error("Error fetching countries:" + message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [filters.query, filters.region, filters.offset]);

  return (
    <>
      {/* Filters */}
      <div className="text-2xl md:text-sm flex flex-wrap gap-6 md:justify-between items-center mb-10">
        <SearchBar
          value={filters.query}
          rootClassName="flex-1 min-w-[400px]"
          placeholder="Search for a country..."
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              query: e.target?.value || "",
            }))
          }
        />
        <Select<RegionOption, false>
          placeholder='Select Region'
          className="theme-field flex-1 w-100 min-w-[200px] md:max-w-md"
          classNamePrefix="country-select"
          classNames={{
            control: () => "theme-field",
          }}
          getOptionValue={(opt: RegionOption) => opt.value}
          getOptionLabel={(opt: RegionOption) => opt.value}
          value={filters?.region ? { value: filters?.region } : null}
          options={regionOptions}
          onChange={(opt: RegionOption | null) =>
            setFilters((prev) => ({
              ...prev,
              region: opt?.value || "",
            }))
          }
          isClearable
          isSearchable={false}
          menuPlacement="auto"
          styles={{
            control: (base: any, state: any) => ({
              ...base,
              backgroundColor: isDarkTheme
                ? "hsl(209,23%,22%)"
                : "hsl(0,0%,100%)",
              borderColor: isDarkTheme ? "hsl(209,23%,22%)" : "hsl(0,0%,100%)",
              boxShadow: state.isFocused
                ? `0 0 0 1px ${isDarkTheme ? "hsl(0,0%,100%)" : "hsl(200,15%,8%)"}`
                : "none",
              borderRadius: "0.75rem",
              minHeight: "42px",
              cursor: "pointer",
              color: isDarkTheme ? "hsl(0,0%,100%)" : "hsl(200,15%,8%)",
              "&:hover": {
                borderColor: isDarkTheme ? "hsl(0,0%,100%)" : "hsl(200,15%,8%)",
              },
            }),
            valueContainer: (base: any) => ({
              ...base,
              padding: "0 12px",
            }),
            singleValue: (base: any) => ({
              ...base,
              color: isDarkTheme ? "hsl(0,0%,100%)" : "hsl(200,15%,8%)",
            }),
            input: (base: any) => ({
              ...base,
              color: isDarkTheme ? "hsl(0,0%,100%)" : "hsl(200,15%,8%)",
            }),
            menu: (base: any) => ({
              ...base,
              backgroundColor: isDarkTheme
                ? "hsl(209,23%,22%)"
                : "hsl(0,0%,100%)",
              borderRadius: "0.75rem",
              overflow: "hidden",
            }),
            option: (base: any, state: any) => ({
              ...base,
              backgroundColor: state.isSelected
                ? isDarkTheme
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(15,23,42,0.08)"
                : state.isFocused
                  ? isDarkTheme
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(15,23,42,0.04)"
                  : isDarkTheme
                    ? "hsl(209,23%,22%)"
                    : "hsl(0,0%,100%)",
              color: isDarkTheme ? "hsl(0,0%,100%)" : "hsl(200,15%,8%)",
              cursor: "pointer",
            }),
            placeholder: (base: any) => ({
              ...base,
              color: isDarkTheme ? "hsl(0,0%,100%)" : "hsl(200,15%,8%)",
              opacity: 0.7,
            }),
            indicatorsContainer: (base: any) => ({
              ...base,
              color: isDarkTheme ? "hsl(0,0%,100%)" : "hsl(200,15%,8%)",
            }),
            indicatorSeparator: (base: any) => ({
              ...base,
              backgroundColor: isDarkTheme
                ? "rgba(255,255,255,0.2)"
                : "rgba(15,23,42,0.12)",
            }),
            dropdownIndicator: (base: any) => ({
              ...base,
              color: isDarkTheme ? "hsl(0,0%,100%)" : "hsl(200,15%,8%)",
              padding: "0 8px",
            }),
          }}
        />
      </div>

      {isLoading && !countries?.length ? (
        <p role="alert" className="text-center">
          Loading countries...
        </p>
      ) : (
        <>
          {/* List */}
          {countries?.length ? (
            <>
              <div className="grid mb-10 gap-20 md:gap-10 grid-cols-[minmax(0,528px)] md:grid-cols-[repeat(auto-fill,minmax(264px,1fr))] justify-center md:justify-start">
                {countries.map((country, i) => (
                  <button
                    key={country?.uuid || i}
                    onClick={() => onSelectCountry(country)}
                    aria-label={`Show more details about ${country?.names?.official} - ${country?.names?.common}`}
                  >
                    <CountryCard country={country} />
                  </button>
                ))}
              </div>

              {isMore ? (
                <button
                  disabled={isLoading}
                  aria-label="Show more countries"
                  className="bg block w-1/3 h-12 mx-auto rounded-md shadow-md"
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      offset: prev?.offset + 1,
                    }))
                  }
                >
                  {isLoading ? "Loading..." : "Show More"}
                </button>
              ) : null}
            </>
          ) : (
            <p role="alert" className="text-center">
              No countries found
            </p>
          )}
        </>
      )}
    </>
  );
}
