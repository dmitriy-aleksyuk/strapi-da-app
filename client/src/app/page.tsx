import { BlockRenderer } from "@/components/BlockRenderer";
//import { HeroSection } from "@/components/blocks/HeroSection";
//import { InfoPart } from "@/components/blocks/InfoPart";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  //console.log(data);
  return { ...data.data };
}
export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  //console.log(blocks);
  // return (
  //   <div>
  //     {/* <h1>{data.top_title}</h1>
  //     <p>{data.top_text}</p> */}
  //     <HeroSection {...blocks[0]} />
  //     <InfoPart {...blocks[1]} />
  //     <InfoPart {...blocks[2]} />
  //   </div>
  // );
  return <BlockRenderer blocks={blocks} />;
}