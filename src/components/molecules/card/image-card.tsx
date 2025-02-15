import '../main-page'
type ImageCardProps = React.HTMLAttributes<HTMLDivElement> & {
  imageUrl: URL
  imageAlt: string
}
export const ImageCard = (props: ImageCardProps) => {
  return (
    <div className="card p-0 shadow-2xl">
      <img
        src={String(props.imageUrl)}
        alt="image-tag"
        className="w-auto h-full rounded-md"
      />
    </div>
  )
}
