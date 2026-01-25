
import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";

export default function Listings() {
  return (
    <div>
      <h2>All Properties</h2>
      {properties.map(p => <PropertyCard key={p.id} property={p} />)}
    </div>
  );
}
