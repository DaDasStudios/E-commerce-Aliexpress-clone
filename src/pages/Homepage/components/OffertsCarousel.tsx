import { Carousel } from '../../../components/ui/carousel/'

const IMAGES_LINKS = [
  "https://ae01.alicdn.com/kf/S0168425e2f244870a593221b557ab941q.jpg_Q90.jpg_.webp",
  "https://ae01.alicdn.com/kf/H99948d81ab0f496292325b1f6046f11fJ.jpg_Q90.jpg_.webp",
  "https://ae01.alicdn.com/kf/S28b3df9054274e12a9d36cf0800017b50.png_.webp"
]

const OffertsCarousel = () => {
  return (
    <article className='mt-4 ml-4 mr-4' >
      <Carousel images={IMAGES_LINKS}></Carousel>
    </article>
  )
}

export default OffertsCarousel