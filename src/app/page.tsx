import Header from "@/components/layout/Header";
import GetStarted from "@/components/home/GetStarted";
import GoodDataComp from "@/components/home/GoodData";
import TextExtAlgo from "@/components/home/TextExtAlgo";
import BaseFilteringAlgorithm from "@/components/home/BaseFilteringAlogrithm";

export default function Home() {
  return (
    <main>
      <Header />
      <GetStarted/>
      <GoodDataComp/>
      <TextExtAlgo/>
      <BaseFilteringAlgorithm/>
    </main>
  );
}
