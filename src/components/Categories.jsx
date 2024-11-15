import { Link } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category) => (
        <Link
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className="tab"
        >
          {category.category}
        </Link>
      ))}
    </div>
  );
}
