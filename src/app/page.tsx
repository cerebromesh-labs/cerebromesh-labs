import Header from "@/components/layout/Header";
import GetStarted from "@/components/home/GetStarted";

export default function Home() {
  return (
    <main className="min-h-[100vh] bg-main-bg text-white">
      <Header />
      <GetStarted/>
    </main>
  );
}
