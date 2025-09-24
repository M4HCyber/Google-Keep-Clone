import { Link, useLocation } from "react-router-dom";

function Logo() {
  const location = useLocation();
  const currentPage =
    location.pathname.split("/").filter(Boolean).pop() || "notes";
  let title = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  if (title.includes("-")) title = title.split("-").join(" ");
  return (
    <div className="w-[120px]">
      {currentPage === "notes" ? (
        <Link to="" className="flex items-center gap-3">
          <img src="/img/keep-logo.png" alt="logo" className="w-[40px]" />
          <h1 className="text-xl font-medium">Keep</h1>
        </Link>
      ) : (
        <h1 className="text-xl font-medium">{title}</h1>
      )}
    </div>
  );
}

export default Logo;
