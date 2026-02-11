import { ModeToggle } from "./ModeToggle";
import { Topbar } from "./Topbar";

const navlink = [
  { href: "#about", labal: "About" },
  { href: "#project", labal: "Project" },
  { href: "#contact", labal: "Contact" },
  { href: "#experience", labal: "Experience" },
];

export const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <Topbar />
      <div className="header relative flex items-center p-4 container mx-auto">
        {/* LOGO (left) */}
        <div className="nav font-extrabold text-2xl">PM.</div>

        {/* NAV LINKS (center) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-4 font-semibold">
            {navlink.map((link, index) => (
              <a href={link.href} key={index} className="px-4 py-2">
                {link.labal}
              </a>
            ))}
          </div>
        </div>
        {/* sun moon toggle */}
        <ModeToggle />

        {/* BUTTONS (right) */}
        <div className="ml-auto flex gap-3">
          <button className="px-4 py-2 border rounded-lg">Register</button>
          <button className="px-4 py-2 bg-black text-white rounded-lg">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

// ------------------------------------
