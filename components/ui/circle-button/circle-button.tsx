interface ButtonProps {
  readonly isDropdownOpen: boolean;
}

function ButtonCircle({ isDropdownOpen }: ButtonProps) {
  return (
    <div className={`square-circle h-6 w-6 rounded-full p-0 pointer-events-none transform mr-3   ${isDropdownOpen ? 'bg-white rotate-180 text-black' : 'bg-color-primary-dark  text-white rotate-90'}`}>
      <svg
        className={`rounded-full p-0 w-auto h-6 w-6 pointer-events-none transform`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-0.5 -0.5 20 20"
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

export default ButtonCircle;
