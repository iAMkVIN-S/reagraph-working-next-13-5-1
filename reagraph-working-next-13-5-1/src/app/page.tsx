import dynamic from "next/dynamic";
import data from '../../data.json';

const Reagraph = dynamic(() => import("../components/Reagraph"), {
  ssr: false,
});

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center" >
      {data && <Reagraph data={data} />}
    </main>
  )
}
