import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "@/pages/api";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="bg-white/40  border-neutral-800  text-neutral-800 shadow-lg rounded-lg px-6 py-6 mb-6 pb-4">
      <h3 className="text-xl mb-8 font-semibold border-b border-neutral-900 pb-4">Categories </h3>
      <div className="grid grid-cols-2 gap-x-3 gap-y-4 font-semibold text-neutral-700 ">
        {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <p className="cursor-pointer  px-4 py-2  ">
            {category.name}
          </p>
        </Link>
      ))}</div>
    </div>
  );
};

export default Categories;