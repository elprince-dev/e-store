import Image from "next/image"

const Banner = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row py-16 justify-between items-center gap-12">
        <section className="md:w-1/2 w-full">
            <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This Week</h1>
            <p className="mb-10">It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
            <button className="btn-primary">Subscribe</button>
        </section>
        <section className="md:w-1/2 w-full flex items-center md:justify-end justify-center">
            <Image src="/banner.png" alt="banner" width={487} height={378} />
        </section>
    </section>
  )
}

export default Banner