import Banner from "./Banner"
import TopSelling from "./TopSelling"

const Home = () => {
  return (
    <section suppressHydrationWarning >
        <Banner />
        <TopSelling />
    </section>
  )
}

export default Home