import Link from 'next/link';

const Header = () => (
  <div className="header-wrapper">
    <div className="logo">
      <Link href="/">
        <a>Next.js &amp; Framer Motion</a>
      </Link>
    </div>

    <div className="tutorial">
      <a target="_blank" href="https://reacttricks.com/animating-next-page-transitions-with-framer-motion">
        Tutorial
      </a>
    </div>
  </div>
);

export default Header;
