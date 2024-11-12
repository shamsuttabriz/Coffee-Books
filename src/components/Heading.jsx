export default function Heading({ title, subtitle }) {
  return (
    <div className="text-center py-12 space-y-5">
      <h1 className="text-4xl font-normal">{title}</h1>
      <p className="text-xl font-thin">{subtitle}</p>
    </div>
  );
}
