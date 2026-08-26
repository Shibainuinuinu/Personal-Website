import Type from "@/components/Type"

export default function Home() {
  return (
    <div>
      <Type text="Hi, I'm Kelvin" time={160} wait={1500} />
      <span className="animate-pulse bold">|</span>
    </div>
  );
}
