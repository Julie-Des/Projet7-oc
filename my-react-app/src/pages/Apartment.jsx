import { useParams } from "react-router-dom";
import apartmentsDatas from "../datas/apartmentsDatas.json"  with { type: "json" }
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";

function Apartment() {
    const { id } = useParams()
    const apartment = apartmentsDatas.find(apartment => apartment.id === id);

    if (!apartment) {
        return <h2 className="Apartment-not-found">Logement non trouvé</h2>
    }

    return (
        <div>
            <h1 className="apartment-title">{apartment.title}</h1>
            <p className="apartment-location">{apartment.location}</p>
            <Tags tags={apartment.tags} />
            <Host name={apartment.host.name} picture={apartment.host.picture} />
            <Rating rating={apartment.rating} />
        </div>
    )
}

export default Apartment