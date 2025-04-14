import type { FeaturedArticleProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "@/components/StrapiImage";
import ReactMarkdown from "react-markdown";

export function FeaturedArticle({
    featureTitle,
    featureLink,
    featureContent,
    featureImage,
}: Readonly<FeaturedArticleProps>) {
  return (
    <article className="featured-article container">
      <div className="featured-article__info">
        <h3>{featureTitle}</h3>
        <ReactMarkdown>{featureContent}</ReactMarkdown>
        <Link
          href={featureLink.href}
          className="btn btn--green btn--medium"
        >
          {featureLink.text}
        </Link>
      </div>
      <StrapiImage
        src={featureImage.url}
        alt={featureImage.alternativeText || "No alternative text provided"}
        height={200}
        width={300}
      />
    </article>
  );
}