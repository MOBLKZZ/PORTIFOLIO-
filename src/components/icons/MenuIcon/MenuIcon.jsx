import "./MenuIcon.scss";

function MenuIcon({ active, color }) {
  return (
    <svg
      className="MenuIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 12 12"
      stroke={ color || "#000"}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    >
      <path
        d={active ? "M3 3 L9 9 M3 9 L9 3" : "M1 3 L11 3 M1 9 L11 9"}
        className="d-1"
      />
    </svg>
  );
}

export default MenuIcon;
