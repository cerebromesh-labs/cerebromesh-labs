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
import StarBackground from '../../public/star-background.png'
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Header />
      <GetStarted/>
      <div className={'relative'}>
          <div className={'absolute top-0 left-0 right-0 bottom-0 w-[100vw] -z-10 star-image opacity-60'}/>
          <GoodDataComp/>
          <FinewebRecipe/>
          <TextExtAlgo/>
          <BaseFilteringAlgorithm/>
          <DeduplicationAlgo/>
          <QualityFilteringAlgo/>
          <EvaluationMethodology/>
          <Datasets/>
          <Leaderboard/>
          <Footer/>
      </div>
    </main>
  );
}
