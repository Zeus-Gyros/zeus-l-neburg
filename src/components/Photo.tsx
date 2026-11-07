import type { SiteImage } from "../data/images";

type PhotoProps = {
  image: SiteImage;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function Photo({ image, sizes, priority = false, className }: PhotoProps) {
  const url = (width: number) => `${import.meta.env.BASE_URL}images/${image.base}-${width}.webp`;
  const fallback = image.widths[Math.floor(image.widths.length / 2)];

  return (
    <img
      className={className}
      src={url(fallback)}
      srcSet={image.widths.map((width) => `${url(width)} ${width}w`).join(", ")}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
