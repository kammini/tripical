import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <section>
                <h1>Your Adventure Awatis</h1>
                <p>Discover breathtaking destinations and create unforgettable memories. Let's plan your next journey.</p>
                <Link to="/details">
                    Explore Tours
                </Link>
            </section>

            <section>
                <h2>Popular Destinations</h2>
            </section>
        </>
    )
}