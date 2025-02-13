import Banner from "./Banner"
import Recommended from "./Recommended"
import TopSelling from "./TopSelling"

const Home = () => {
  return (
    <section suppressHydrationWarning >
        <Banner />
        <TopSelling />
        <Recommended />
    </section>
  )
}

export default Home