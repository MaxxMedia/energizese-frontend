export default function InnerHero({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <section className="inner-hero-wrapper">
      <figure>
        <img src={src} width={1903} height={604} alt={alt} />
      </figure>
    </section>
  );
}
