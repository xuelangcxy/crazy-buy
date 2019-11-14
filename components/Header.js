import Link from 'next/link';

const Header = () => (
  <div style={{width: 200, margin: '0 auto', display: 'flex', justifyContent: 'space-around',}}>
    <Link href="/index">
      <a>index</a>
    </Link>
    <Link href="/about">
      <a>about</a>
    </Link>
  </div>
);

export default Header;
