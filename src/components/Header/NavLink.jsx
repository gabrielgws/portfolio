import { Link, animateScroll as scroll } from "react-scroll";

export default function NavLink({ children, ...props }) {
  return (
    <Link
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      {...props}
    >{children}</Link>
  );
}