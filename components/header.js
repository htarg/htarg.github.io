import Link from 'next/link'
import Container from './container';

export default function Header() {
  return (
    <div className="bg-blue-700 border-blue-700 text-white">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter mb-8">
          <Link href="/">
            <a className="hover:underline">Hattrick Argentina</a>
          </Link>
        </h2>
      </Container>
    </div>
  );
}
