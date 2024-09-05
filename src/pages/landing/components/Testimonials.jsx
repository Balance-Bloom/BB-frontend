import React from 'react'
import { BsChatQuoteFill } from "react-icons/bs";
import review1 from '../../../assets/images/review1.jpg'
import review2 from '../../../assets/images/review2.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from "../../../utils/animation";

const testimonials = [
    {
        name: 'Tracy',
        location: 'Accra, Ghana',
        review: 'I have been using this period tracking app for a few months now, and I can confidently say that it has been a game-changer for me. As someone who is always been a bit irregular, it has been so helpful to have a tool that allows me to track my cycle and predict when my period will arrive.',
        image: review1,
    },
    {
        name: 'Margaret',
        location: 'Teshie, Accra',
        review: 'The app is so easy to use, and I love that it allows me to log my symptoms and moods, too. It has been really interesting to see how my body changes throughout the month, and it has helped me to identify patterns that I never would have noticed otherwise. Plus, the reminders are super helpful - I no longer have to worry about forgetting to take my birth control pill or scheduling a doctor appointments.',
        image: review2,
    },
]

const Testimonials = () => {
    return (
        <div className='bg-[#f7f8fc] py-12 ' id='testimonial'>
            <div className='container mx-auto'>
                <motion.div
                variants={fadeIn('left',0.2)} initial='hidden'
                whileInView={"show"}
                viewport={{once:false, amount:0.7}} 
                className='text-center mb-12'>
                    <h2 className='text-4xl font-bold font secondary mb-3'>What Our Clients Say</h2>
                    <p className='text-lg mb-12 md:w-1/2 mx-auto'>They have experienced the power of Bloom And Balance and this is what they have to say</p>
                </motion.div>
                <motion.div
                variants={fadeIn('right',0.2)} initial='hidden'
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                 className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>
                    {
                        testimonials.map((testimonial, index) => (
                            <div key={index} className='relative bg-white rounded-lg p-6 flex-1'>
                                <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                                    <BsChatQuoteFill className='size-12 text-primary' />
                                </div>
                                <div className='flex flex-col space-y-3 mb-4'>
                                    <p className='text-lg mb-2'>
                                        {testimonial.review}
                                    </p>
                                    <div className='flex gap-1'>
                                        <img src={testimonial.image} alt="reviewer image" className='size-16 rounded-full object cover mr-4'/>
                                        <div>
                                        <p className='font-semibold'>{testimonial.name}</p>
                                        <p className='text-gray-600'>{testimonial.location}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </div>

    )
}

export default Testimonials