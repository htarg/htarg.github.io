import Link from 'next/link'

export default function HeroPost() {
  return (
    <section>
      <h2 class="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">Herramientas</h2>
      <div className="mb-8 md:mb-16">
        <Link href="/herramientas/estadio">
          <a className="bg-blue-700 font-bold py-3 px-4 hover:underline text-white">Calculadora de estadio</a>
        </Link>
      </div>
    </section>
  )
}
