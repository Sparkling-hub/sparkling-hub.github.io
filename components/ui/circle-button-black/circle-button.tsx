interface ButtonProps {
  readonly isDropdownOpen: boolean;
}

function Button({ isDropdownOpen }: ButtonProps) {
  return (
    <div className={`square-circle h-4 w-4 rounded-full p-0 pointer-events-none transform items-center flex mx-[1px] ${isDropdownOpen ? 'text-black rotate-180' : 'text-black rotate-0'}`}>
      <svg
        className={`rounded-full p-0 h-5 w-full pointer-events-none transform`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9.293 5.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L10 7.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0z"
        />
      </svg>
    </div>
  );
}

export default Button;
