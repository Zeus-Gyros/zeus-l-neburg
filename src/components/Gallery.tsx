import { useEffect, useRef, useState } from "react";
import { gallery, type GalleryPhoto } from "../data/gallery";

const COPIES = 3;
const PIXELS_PER_SECOND = 45;

function Photo({ photo, hidden }: { photo: GalleryPhoto; hidden: boolean }) {
  return (
    <li className="gallery__item" aria-hidden={hidden || undefined}>
      <img
        src={`${import.meta.env.BASE_URL}images/${photo.src}`}
        width={photo.width}
        height={photo.height}
        alt={hidden ? "" : photo.alt}
        loading="lazy"
        decoding="async"
      />
    </li>
  );
}

export function Gallery() {
  const [playing, setPlaying] = useState(true);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const playingRef = useRef(playing);
  // Tastaturfokus und Finger halten die Bewegung jeweils unabhängig voneinander an
  const holdRef = useRef({ focus: false, touch: false });

  playingRef.current = playing;

  const setWidth = () => {
    const items = listRef.current?.children;
    if (!items || items.length <= gallery.length) return 0;
    return (items[gallery.length] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft;
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let frame = 0;
    let last = performance.now();
    let position = -1;

    const tick = (now: number) => {
      const elapsed = Math.min(now - last, 100);
      last = now;
      const loop = setWidth();

      if (loop > 0 && !Object.values(holdRef.current).some(Boolean)) {
        if (position < 0) position = loop;
        // Die Position bleibt eine Kommazahl, weil scrollLeft auf manchen Displays rundet
        if (Math.abs(scroller.scrollLeft - position) > 2) position = scroller.scrollLeft;
        if (playingRef.current) position += (PIXELS_PER_SECOND * elapsed) / 1000;
        if (position >= loop * 2) position -= loop;
        if (position < loop * 0.5) position += loop;
        scroller.scrollLeft = position;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="gallery section" aria-labelledby="impressionen-titel">
      <div className="container">
        <h2 id="impressionen-titel">Impressionen</h2>

        <div
          className="gallery__stage"
          role="group"
          aria-roledescription="Karussell"
          aria-labelledby="impressionen-titel"
          onFocus={(event) => (holdRef.current.focus = event.target.matches(":focus-visible"))}
          onBlur={() => (holdRef.current.focus = false)}
          onTouchStart={() => (holdRef.current.touch = true)}
          onTouchEnd={() => (holdRef.current.touch = false)}
          onTouchCancel={() => (holdRef.current.touch = false)}
        >
          <div ref={scrollerRef} className="gallery__scroller" tabIndex={0} aria-label="Fotos, waagerecht scrollbar">
            <ul ref={listRef} className="gallery__list">
              {Array.from({ length: COPIES }, (_, copy) =>
                gallery.map((photo) => <Photo key={`${copy}-${photo.src}`} photo={photo} hidden={copy > 0} />),
              )}
            </ul>
          </div>
        </div>

        <div className="gallery__controls">
          <button type="button" className="text-link" onClick={() => setPlaying((value) => !value)}>
            {playing ? "Slideshow anhalten" : "Slideshow abspielen"}
          </button>
        </div>
      </div>
    </section>
  );
}
