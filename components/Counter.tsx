interface CounterProps {
  count: number;
  label: string;
}

export default function Counter({count, label}: CounterProps) {
  return (
    <div>
      <h1>{label}</h1>
      <h2>{count}</h2>
    </div>
  );
}
