export default function CoffeeCard({ coffee }) {
  const {
    category,
    description,
    id,
    image,
    name,
    origin,
    popularity,
    rating,
    type,
  } = coffee || {};

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
