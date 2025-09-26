function InputMenu() {
  return (
    <div className="flex justify-center py-5">
      <div
        className="flex flex-row-reverse rounded-sm p-3 shadow-md/35"
        onClick={() => setIsOpen(true)}
      ></div>
    </div>
  );
}

export default InputMenu;
