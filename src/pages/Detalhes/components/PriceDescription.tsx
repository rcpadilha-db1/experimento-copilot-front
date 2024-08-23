type TPriceDescriptionProps = {
  price: number;
  description: string;
};
export const PriceDescription = ({
  price,
  description,
}: TPriceDescriptionProps) => {
  return (
    <div style={{ display: 'grid' }}>
      <h3>${price}</h3>
      <p>{description}</p>
    </div>
  );
};
