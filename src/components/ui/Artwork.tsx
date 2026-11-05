import Image from "next/image";
import { photoForSource } from "@/data/photography";
export function Artwork({ src, alt, className = "", priority = false, sizes = "(min-width: 900px) 50vw, 100vw" }: {
  src: string; alt?: string; className?: string; priority?: boolean; sizes?: string;
}) {
  const photo = photoForSource(src);
  return <figure className={"artwork " + className}><Image src={src} alt={alt ?? photo?.alt ?? ""} fill sizes={sizes} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} style={{ objectPosition: photo?.position }} /></figure>;
}
