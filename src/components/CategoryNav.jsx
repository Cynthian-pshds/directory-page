import "./CategoryNav.css";
import data from "../data/tools.yml";

import CategoryNavItem from "./CategoryNavItem";

export default function CategoryNav({ filter, setFilter }) {
  const navItems = [
    {title: "通览", category: "all"}, 
    ...data.tools
  ];

  return <nav className="category-nav" tabIndex="-1">
    {navItems.map((c, i) => {
      return <CategoryNavItem 
        key={i}
        title={c.title} 
        category={c.category} 
        filter={filter}
        setFilter={setFilter}
      />
    })}
  </nav>
}