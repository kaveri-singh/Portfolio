export default function SectionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mist">
      <span className="text-signal">{index}</span>
      {label}
    </p>
  );
}
