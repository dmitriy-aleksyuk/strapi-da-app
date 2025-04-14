import type { Block } from "@/types";

import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoPart } from "@/components/blocks/InfoPart";
import { FeaturedArticle } from "./blocks/FeaturedArticle";
import { Subscribe } from "./blocks/Subscribe";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.info-part":
      return <InfoPart {...block} key={index} />;
    case "blocks.featured-article":
      return <FeaturedArticle {...block} key={index} />;
    case "blocks.subscribe":
      return <Subscribe {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}