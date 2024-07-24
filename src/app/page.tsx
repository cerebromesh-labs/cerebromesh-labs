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

export default function Home() {
  return (
    <main>
      <Header />
      <GetStarted/>
      <GoodDataComp/>
      <TextExtAlgo/>
      <BaseFilteringAlgorithm/>
        <DeduplicationAlgo/>
        <QualityFilteringAlgo/>
        <EvaluationMethodology/>
        <Datasets/>
        <Leaderboard/>
        <Footer/>
    </main>
  );
}
