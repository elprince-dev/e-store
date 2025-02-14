import Banner from "./Banner"
import InstaPost from "./InstaPost"
import InstaPostsSwiper from "./News"
import Recommended from "./Recommended"
import TopSelling from "./TopSelling"

const Home = () => {

  return (
    <section suppressHydrationWarning >
        <Banner />
        <TopSelling />
        <Recommended />
        <InstaPostsSwiper />
    </section>
  )
}

export default Home