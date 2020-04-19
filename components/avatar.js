import Date from './date';

export default function Avatar({ name, picture, date }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-auto mr-4" alt={name} />
      <div>Escrito por <span className="font-bold">{name}</span> el <Date dateString={date} /></div>
    </div>
  )
}
