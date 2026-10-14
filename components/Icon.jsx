const paths = {
  book: (
    <>
      <path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z" />
      <path d="M8 7h8" />
    </>
  ),
  board: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </>
  ),
  cards: (
    <>
      <rect x="3" y="6" width="13" height="14" rx="2" />
      <path d="M8 3h11a2 2 0 0 1 2 2v11" />
    </>
  ),
  headphones: (
    <>
      <path d="M3 12a9 9 0 0 1 18 0" />
      <rect x="3" y="12" width="4" height="7" rx="1.5" />
      <rect x="17" y="12" width="4" height="7" rx="1.5" />
    </>
  ),
  telegram: (
    <>
      <path d="M21 4 3 11l6 2.5L11.5 20l3-4.5L19 19z" />
      <path d="m9 13.5 6-4.5" />
    </>
  ),
};

export default function Icon({ name, size = 26, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
