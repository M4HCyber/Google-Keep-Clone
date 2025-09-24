import { useState } from "react";

function useToggleNav() {
  const [isOpen, setIsOpen] = useState(false);

  return [isOpen, setIsOpen];
}

export default useToggleNav;
