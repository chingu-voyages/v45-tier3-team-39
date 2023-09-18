import React from 'react';
import { categories } from '~src/mocks/categories';

interface CategoryDropdownProps {
  onSetCategory: (category: (typeof categories)[number]) => void;
}

const CategoryDropdown = ({
  onSetCategory,
}: CategoryDropdownProps): JSX.Element => {
  const handleCloseDropDown = () => {
    const elem: any = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {categories.map((category) => {
          return (
            <li key={category}>
              <button
                onClick={() => {
                  onSetCategory(category);
                  handleCloseDropDown();
                }}
              >
                <p className="text-base">{category}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
