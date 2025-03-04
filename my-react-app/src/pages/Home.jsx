import CardsContainer from "../components/CardsContainer"
import Banner from "../components/Banner"

function Home() {
    return (
        <div>
            <Banner className="banner-home" title="Chez vous, partout et ailleurs"/>
            <CardsContainer />
        </div>
    )
}

export default Home