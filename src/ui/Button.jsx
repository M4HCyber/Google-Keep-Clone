function Button({ children, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="hover:bg-bg-grey-100 cursor-pointer rounded-[5px] px-5 py-1 text-sm text-black"
    >
      {children}
    </button>
  );
}

export default Button;
