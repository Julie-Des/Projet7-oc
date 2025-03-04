import apartments from "../datas/Apartments.json"
import Card from "./Card"

function CardsContainer() {
    return (
        <div className="cards-container">
            {apartments.map((apartment) => (<Card key={apartment.id} title={apartment.title} cover={apartment.cover} />))}
        </div>
    )
}

export default CardsContainer