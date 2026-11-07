export function Meander({ className = "" }: { className?: string }) {
  return <div className={`meander ${className}`} aria-hidden="true" />;
}

// Position (x, y) und Drehung jedes Blatts am Zweig
const leaves: [number, number, number][] = [
  [28, 44, -38],
  [46, 34, 32],
  [68, 32, -44],
  [88, 22, 26],
  [108, 22, -48],
  [128, 12, 18],
  [146, 12, -40],
];

export function OliveBranch({ className = "" }: { className?: string }) {
  return (
    <svg className={`olive-branch ${className}`} viewBox="0 0 190 70" fill="none" aria-hidden="true">
      <path d="M4 58C44 46 96 34 176 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {leaves.map(([x, y, rotation]) => (
        <path
          key={`${x}-${y}`}
          d="M0 0C6-6 18-6 26 0C18 5 6 5 0 0Z"
          transform={`translate(${x} ${y}) rotate(${rotation})`}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
      <circle cx="58" cy="48" r="3.4" stroke="currentColor" strokeWidth="1" />
      <circle cx="118" cy="33" r="3.4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
