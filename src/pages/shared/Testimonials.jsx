import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

export const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://quality-cravings.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTestimonials(data);
            })
    }, []);


    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 24 })
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className="my-32 max-w-7xl mx-4 md:mx-8 lg:mx-auto">
            <h1 className="mb-16 font-bold text-5xl text-center">
                What Our Clients Say
            </h1>

            <div className="embla overflow-hidden flex" ref={emblaRef}>
                <div className="embla__container flex flex-row  mx-4 md:mx-0">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="embla__slide flex-[0_0_33%] md:flex-[0_0_32%] mr-4 min-w-0
                        bg-base-100  shadow-sm border-solid border rounded-2xl flex overflow-hidden">
                            <div className="w-full flex flex-col flex-grow px-6 py-6">
                                <div className="flex-grow">
                                    <p className=" leading-relaxed">
                                        {testimonial.testimonial}
                                    </p>
                                </div>
                                <div className="flex flex-row pt-4 mt-2 items-center">
                                    <img className="rounded-full inline h-12 w-12 " src={testimonial.authorImg} />
                                    <div className="flex flex-col ml-4">
                                        <h2 className="font-semibold text-base">
                                            {testimonial.author}
                                        </h2>
                                        <p className="">
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
                        className="mr-4 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center 
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
        </section>
    )
}

export default Testimonials;