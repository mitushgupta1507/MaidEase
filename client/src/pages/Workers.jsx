import { useState } from "react";

import WorkersHero from "../components/Workers/WorkersHero";
import SearchBar from "../components/Workers/SearchBar";
import FilterSidebar from "../components/Workers/FilterSidebar";
import WorkerGrid from "../components/Workers/WorkerGrid";

const Workers = () => {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    serviceType: "",
    verified: false,
    availability: false,
    minExperience: "",
    minPrice: "",
    maxPrice: "",
    sort: "",
  });

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">
      <WorkersHero />

      <SearchBar
        filters={filters}
        setFilters={setFilters}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
              />
            </div>

            <div className="lg:col-span-9">
              <WorkerGrid
                filters={filters}
                setFilters={setFilters}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Workers;