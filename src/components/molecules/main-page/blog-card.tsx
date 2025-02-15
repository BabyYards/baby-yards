import { ImageCard } from '../card'

export const BlogCard = () => {
  return (
    <div className="justify-self-center text-center mt-40">
      <h3 className="subtext-header text-purple font-medium">Our Blog</h3>
      <h1 className="text-header">Latest News</h1>
      <h2 className="subtext-header">
        Dashboard platform has lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maxime mollitia.
      </h2>

      <div className=" flex col-span-2 space-x-10 justify-end items-baseline">
        <ImageCard
          imageUrl={
            new URL(
              'https://ettetete.com/cdn/shop/articles/Copy_of_Untitled_Design-2.png?v=1691412766&width=533',
            )
          }
          imageAlt={'creche'}
        />
        <ImageCard
          imageUrl={
            new URL(
              'https://ettetete.com/cdn/shop/articles/4_40b5047c-08f6-4f84-85c3-010403b5a18b.webp?v=1713367744&width=533',
            )
          }
          imageAlt={'creche'}
        />
        <ImageCard
          imageUrl={
            new URL(
              'https://cdn.shopify.com/s/files/1/0055/2284/9907/files/1_123084f4-7c09-4a3a-b295-efb5e0bbdcdb_600x600.png?v=1677664592',
            )
          }
          imageAlt={'creche'}
        />
      </div>
    </div>
  )
}
