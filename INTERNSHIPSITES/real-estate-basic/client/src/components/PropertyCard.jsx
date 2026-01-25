
export default function PropertyCard({ property }) {
  return (
    <div style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>
      <img src={property.image} alt="" width="200"/>
      <h3>{property.title}</h3>
      <p>{property.price}</p>
      <p>{property.location}</p>
    </div>
  );
}
