import React from 'react';

interface CatDropdownProps {
  onSetCategory: (category: string) => void;
}

const CatDropdown = ({ onSetCategory }: CatDropdownProps): JSX.Element => {
  const tempCategories: string[] = [
    'all',
    'starters',
    'mains',
    'pizzas',
    'drinks',
    'desserts',
    'extras',
  ];
  //logic for loading categories from API will be here instead of temp array above

  return (
    <div className="dropdown dropdown-hover">
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
        {tempCategories.map((cat) => {
          return (
            <li key={cat}>
              <button onClick={() => onSetCategory(cat)}>
                <p className="text-base">{cat}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CatDropdown;
