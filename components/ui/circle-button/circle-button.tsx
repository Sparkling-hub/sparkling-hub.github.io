interface ButtonProps {
  readonly isDropdownOpen: boolean;
}

function Button({ isDropdownOpen }: ButtonProps) {
  return (
    <div className={`square-circle rounded-full p-0 pointer-events-none transform mr-3 
    ${isDropdownOpen ? 'text-black rotate-180 bg-teal-300'
        :
        'text-white rotate-90 bg-gradient-to-t from-teal-900 to-teal-300'}`}>
      <svg
        className={`rounded-full p-0 w-auto h-6 pointer-events-none transform`}
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
