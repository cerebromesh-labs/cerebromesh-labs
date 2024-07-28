// File: src/app/page.tsx

import Header from "@/components/layout/Header";
import GetStarted from "@/components/home/GetStarted";
import GoodDataComp from "@/components/home/GoodData";
import TextExtAlgo from "@/components/home/TextExtAlgo";
import BaseFilteringAlgorithm from "@/components/home/BaseFilteringAlogrithm";
import DeduplicationAlgo from "@/components/home/DeduplicationAlgo";
import QualityFilteringAlgo from "@/components/home/QualityFilteringAlgo";
import EvaluationMethodology from "@/components/home/EvaluationMethodology";
import Datasets from "@/components/home/Datasets";
import Leaderboard from "@/components/home/Leaderboard";
import Footer from "@/components/Footer";
import FinewebRecipe from "@/components/home/FinewebRecipe";

/**
 * Home component representing the main page of the application.
 */
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <GetStarted />
      <div className="relative">
        {/* Background image */}
        <div className="absolute inset-0 w-full -z-10 star-image opacity-60" />
        
        {/* Main content sections */}
        <GoodDataComp />
        <FinewebRecipe />
        <TextExtAlgo />
        <BaseFilteringAlgorithm />
        <DeduplicationAlgo />
        <QualityFilteringAlgo />
        <EvaluationMethodology />
        <Datasets />
        <Leaderboard />
        <Footer />
      </div>
    </main>
  );
}