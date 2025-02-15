import '../main-page'
type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  cardDescription: string
  cardHeadline: string
  cardLink: URL
  cardLogo: LogoType
  cardType: CardType
}
type CardType = 'service' | 'feature' | 'service-plan'
type LogoType = 'puzzle' | 'staff' | 'group' | 'chat' | 'report' | 'list'

export const Card = (props: CardProps) => {
  return (
    <div className="card p-6 text-start">
      <div
        id="card-logo"
        className="logo bg-red border-none rounded-3xl shadow-md"></div>
      <h1 className="font-bold text-lg text-headerColor my-4">
        {props.cardHeadline}
      </h1>
      <h3 className="font-light my-4">{props.cardDescription}</h3>
      <a className="text-purple" href="url">
        Learn more
      </a>
    </div>
  )
}
