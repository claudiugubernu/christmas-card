interface Image {
  src: string;
  fallbackSrc: string;
  alt?: string;
}

const Image = ({ src, fallbackSrc, alt }: Image) => {
  return (
    <>
      <picture>
        <source srcSet={src} type="image/webp" />
        <source srcSet={fallbackSrc} type="image/jpeg" />
        <img src={fallbackSrc} alt={alt} />
      </picture>
    </>
  )
}

export default Image