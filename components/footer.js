import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-blue-100 border-t border-blue-200">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center text-blue-700">
          <h3 className="text-1xl lg:text-2xl font-bold text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Generado con ❤️ y con Next.js
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://hattrick.org/"
              className="mx-3 bg-blue-700 hover:bg-white hover:text-blue-700 border border-blue-700 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Ir a Hattrick
            </a>
            <a
              href={`https://github.com/zeit/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
