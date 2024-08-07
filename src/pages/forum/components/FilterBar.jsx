import React from "react";
import FilterNav from "../../../components/FilterNav";
import { SaveIcon } from "lucide-react";
import { BookmarkIcon } from "@heroicons/react/20/solid";

const FilterBar = () => {
  return (
    <div className="flex justify-center gap-8 ">
      <FilterNav
        icon={<BookmarkIcon width={20} className="inline" />}
        text="Favorites"
      />
      <FilterNav
        icon={<BookmarkIcon width={20} className="inline" />}
        text="Favorites"
      />
      <FilterNav
        icon={<BookmarkIcon width={20} className="inline" />}
        text="Favorites"
      />
      <FilterNav
        icon={<BookmarkIcon width={20} className="inline" />}
        text="Favorites"
      />
      <FilterNav
        icon={<BookmarkIcon width={20} className="inline" />}
        text="Favorites"
      />
    </div>
  );
};

export default FilterBar;
