import PillNav from "./PillNav";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <PillNav
        items={[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Certificates", href: "#certificates" },
          { label: "Contact", href: "#contact" }
        ]}
      />
    </nav>
  );
}

export default Navbar;