
type CardProps = {
    tittle: string;
    subtitle?: string;
    image: string;
    description?: string;
}

const Card : React.FC<CardProps> = ({tittle, subtitle, image, description} : CardProps) => {
  return (
    <div className="card">
        <h2>{tittle}</h2>
        <h3>{subtitle}</h3>
        <img src={image} alt={tittle} />
        <p>{description}</p>
    </div>
  );
};

export default Card;