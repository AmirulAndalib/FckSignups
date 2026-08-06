import { Controls } from "./components/Home/Controls";
import { Footer } from "./components/Home/Footer";
import { Header } from "./components/Home/Header";
import { Report } from "./components/Home/Report";
import { ScrollToTopButton } from "./components/Home/ScrollToTopButton";
import SkipContentLink from "./components/Home/SkipContentLink";
import { ToolGrid } from "./components/Home/ToolGrid";
import { MODAL_CONFIGS } from "./constants/ModalConfigs";
import { ModalProvider } from "./hooks/useModal";
import { ReportProvider } from "./hooks/useReport";
import { useTools } from "./hooks/useTools";

export default function App() {
  const {
    tools,
    filteredTools,
    sections,
    searchKeywords,
    isSearching,
    categories,
    loadStatus,
    errorMessage,
    searchQuery,
    activeCategory,
    setSearchQuery,
    setActiveCategory,
  } = useTools();

  const activeCat = categories.find((c) => c.id === activeCategory);

  return (
    <div className="container">
      <ModalProvider modalConfigs={MODAL_CONFIGS}>
        <SkipContentLink />
        <Header
          toolCount={tools.length}
          categoryCount={Math.max(0, categories.length - 1)}
          setSearchQuery={setSearchQuery}
        />

        <Controls
          categories={categories}
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          allTools={tools}
          filteredCount={filteredTools.length}
          onCategoryChange={setActiveCategory}
          onSearchChange={setSearchQuery}
        />
        {activeCat && activeCat.id !== "all" && (
          <div className="section-divider">
            {`${activeCat.icon} ${activeCat.name}`}
          </div>
        )}

        <ReportProvider>
          <ToolGrid
            sections={sections}
            searchKeywords={searchKeywords}
            isSearching={isSearching}
            categories={categories}
            loadStatus={loadStatus}
            errorMessage={errorMessage}
            searchQuery={searchQuery}
            activeCategory={activeCategory}
            setSearchQuery={setSearchQuery}
          />

          <Report />
        </ReportProvider>
        <ScrollToTopButton />
        <Footer />
      </ModalProvider>
    </div>
  );
}
