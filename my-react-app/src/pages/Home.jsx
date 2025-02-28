import ApartmentSheet from "../components/ApartmentSheet"
import Banner from "../components/Banner"

function Home() {
    return (
        <div>
            <Banner className="banner-home" title="Chez vous, partout et ailleurs"/>
            <ApartmentSheet />
        </div>
    )
}

export default Home