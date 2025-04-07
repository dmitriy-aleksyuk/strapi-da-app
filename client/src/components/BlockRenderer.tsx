import type { Block } from "@/types";

import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoPart } from "@/components/blocks/InfoPart";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.info-part":
      return <InfoPart {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}