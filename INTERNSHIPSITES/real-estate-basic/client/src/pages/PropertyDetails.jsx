
import { useParams } from "react-router-dom";
import properties from "../data/properties.json";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id == id);
  if(!property) return <h2>Property not found</h2>;
  return (
    <div>
      <h2>{property.title}</h2>
      <img src={property.image} alt="" width="300"/>
      <p>{property.description}</p>
      <p>{property.price}</p>
    </div>
  );
}
