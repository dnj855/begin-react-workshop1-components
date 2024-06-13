import { Header } from "@/src/Header";
import { MenuFilter } from "@/src/MenuFilter";
import { REACT_CARDS } from "@/src/react-cards";

export default function Home({ searchParams }) {
  const currentFilter = searchParams.filter;
  const filters = [...new Set(REACT_CARDS.map((c) => c.category))];
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex flex-1 gap-4 py-2 overflow-auto max-lg:flex-col">
        <MenuFilter filters={filters} currentFilter={currentFilter} />
      </div>
    </main>
  );
}
