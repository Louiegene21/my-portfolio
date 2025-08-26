export default function SectionDivider() {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: 80 }}
    >
      <path
        d="M0,32L1440,96L1440,0L0,0Z"
        fill="#f0f4ff" // Match next section's background
      />
    </svg>
  );
}
