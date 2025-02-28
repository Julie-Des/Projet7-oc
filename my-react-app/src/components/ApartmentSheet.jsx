import apartments from "../datas/Apartments.json"
import Card from "./Card"

function ApartmentSheet() {
    return (
        <div className="apartment-sheet">
            {apartments.map((apartment) => (<Card key={apartment.id} title={apartment.title} cover={apartment.cover} />))}
        </div>
    )
}

export default ApartmentSheet