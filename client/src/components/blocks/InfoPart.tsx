import { StrapiImage } from "../StrapiImage";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import type { InfoPartProps } from "@/types";

export function InfoPart({
  theme,
  reverse,
  image,
  headline,
  contentEditor,
  cta,
}: Readonly<InfoPartProps>) {
  return (
    <section className={`info info--${theme} ${reverse && "info--reversed"}`}>
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || "No alternative text provided"}
        height={500}
        width={600}
        className="info__image"
      />
      <div className="info__text">
        <h2 className={`info__headline info__headline--${theme}`}>
          {headline}
        </h2>
        <ReactMarkdown>{contentEditor}</ReactMarkdown>
        {cta && (
          <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
            <button className={`btn btn--medium btn--${theme}`}>
              {cta.text}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}