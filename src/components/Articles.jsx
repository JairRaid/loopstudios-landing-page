export default function Article({ src, alt, h3Text, hWidth }) {
  return (
    <article>
      <img src={src} alt={alt} />
      <h3 style={{ width: hWidth }}>{h3Text}</h3>
    </article>
  );
}
