import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"

export const Testimonials = () => {
    const testimonials = [
        {
            author: "Sarah Smith",
            authorImg: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
            testimonial:
                "Quality Cravings is my go-to for premium food and beverages from top brands. The selection is impeccable, and the service is top-notch.",
            authorMetadata: "Food Critic",
        },
        {
            author: "David Johnson",
            authorImg: "https://source.unsplash.com/v2aKnjMbP_k/500x500",
            testimonial:
                "I can't get enough of the gourmet delights at Quality Cravings. It's a paradise for food enthusiasts. I recommend it to everyone!",
            authorMetadata: "Culinary Expert",
        },
        {
            author: "Linda Williams",
            authorImg: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
            testimonial:
                "Quality Cravings offers a unique range of premium snacks and beverages. I'm constantly impressed by the quality and variety they provide.",
            authorMetadata: "Food Blogger",
        },
        {
            author: "Robert Miller",
            authorImg: "https://source.unsplash.com/v2aKnjMbP_k/500x500",
            testimonial:
                "This is the place to satisfy your gourmet desires. Quality Cravings never disappoints. The service is exceptional, and the products are top-tier.",
            authorMetadata: "Food Connoisseur",
        },
        {
            author: "William Davis",
            authorImg: "https://source.unsplash.com/pUhxoSapPFA/500x500",
            testimonial:
                "As a chef, I appreciate the premium ingredients available at Quality Cravings. It's my secret to creating extraordinary dishes.",
            authorMetadata: "Chef de Cuisine",
        },
    ];


    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 24 })
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="my-32">
            <section className="">
                <div className="max-w-7xl mx-auto">
                    <h1 className="mb-16 font-bold text-5xl text-gray-800 text-center">
                        What Our Clients Say
                    </h1>

                    <div className="embla overflow-hidden flex" ref={emblaRef}>
                        <div className="embla__container flex flex-row ">
                            {testimonials.map((testimonial, index) => (
                                <div key={index}
                                    className="embla__slide flex-[0_0_33%] md:flex-[0_0_32%] mr-4 min-w-0
                        bg-white shadow-sm border-solid border-2 
                            border-gray-200 
                            rounded-2xl"
                                >
                                    <div
                                        className="w-full flex flex-col bg-white px-6 py-6
                  rounded-2xl "
                                    >
                                        <p className="pt-2 text-slate-600 leading-relaxed">
                                            {testimonial.testimonial}
                                        </p>
                                        <div className="flex flex-row pt-4 mt-2 items-center">
                                            <img
                                                className="rounded-full inline h-12 w-12 "
                                                src={testimonial.authorImg}
                                            />
                                            <div className="flex flex-col ml-4">
                                                <h2 className="font-semibold text-base">
                                                    {testimonial.author}
                                                </h2>
                                                <p className="text-gray-600">
                                                    {testimonial.authorMetadata}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <div>
                            <button
                                type="button"
                                className="mr-4 text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center 
             "
                                onClick={scrollPrev}
                            >
                                <ChevronLeft />
                                <span className="sr-only">Left arrow</span>
                            </button>

                            <button
                                type="button"
                                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center 
              inline-flex items-center"
                                onClick={scrollNext}
                            >
                                <ChevronRight />
                                <span className="sr-only">Right arrow</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials;