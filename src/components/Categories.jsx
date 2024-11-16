import { NavLink } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <div role="tablist" className="tabs tabs-lifted mb-5">
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab text-2xl font-thin p-2 ${isActive ? "tab-active" : ""}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
}
