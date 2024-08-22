import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../../App.css'
import tracker from '../../../assets/images/tracker.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from "../../../utils/animation";
const Services = () => {
    return (
        <div className='bg-[#f7f8fc]' id='services'>
            <div className='pt-28 px-4 container mx-auto'>
                <motion.div
                variants={fadeIn('up',0.2)} initial='hidden'
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                 className='text-center space-y-5'>
                    <h2 className='text-4xl font-bold font secondary mb-3 text-heroBg'>What Can We Do Together</h2>
                    <p className='md: w-1/2 mx-auto'>We can help you redefine your beautiful journey</p>
                </motion.div>

                <div className='py-12 md:w-4/5 mx-auto'>
                    <Tabs>
                        <motion.TabList 
                        variants={fadeIn('up',0.2)} initial='hidden'
                        whileInView={"show"}
                        viewport={{once:false, amount:0.7}}
                        className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
                            <Tab>Period Tracking</Tab>
                            <Tab>Community Forum</Tab>
                            <Tab>Doctor's Appointment</Tab>
                        </motion.TabList>

                        <TabPanel >
                            <motion.div 
                            variants={fadeIn('up',0.2)} initial='hidden'
                            whileInView={"show"}
                            viewport={{once:false, amount:0.7}}
                            className='flex flex-col md:flex-row gap-8 mt-8'>
                                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>
                                        Period Tracking
                                    </h3>
                                    <p className='mb-8'>Our period tracking app offers users a user friendly interface of the the user's menstrual cycle, including the current phase, start and end dates, and the number of days until the next period. Users can track their symptoms, such as cramps, mood swings, and breast tenderness, to help identify patterns and potential issues
                                    </p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Features</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Period Prediction</li>
                                        <li>Mood Tracking</li>
                                        <li>Health Insights</li>
                                    </ul>
                                </div>
                                <div className='md:w-1/2'>
                                    <img src={tracker} alt="" className='w-full h-auto rounded-2xl object-cover' />
                                </div>
                            </motion.div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex flex-col md:flex-row gap-8 mt-8'>
                                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>
                                        Community Forum
                                    </h3>
                                    <p className='mb-8'>Our period tracking app offers users a community forum where users can connect with others, ask questions, and share experiences
                                    </p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Features</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Anonymous Sharing</li>
                                        <li>Personalized Content</li>
                                        <li>Accurate Information</li>
                                    </ul>
                                </div>
                                <div className='md:w-1/2'>
                                    <img src={tracker} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover' />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex flex-col md:flex-row gap-8 mt-8'>
                                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>
                                        Period Tracking
                                    </h3>
                                    <p className='mb-8'>Our period tracking app offers users a user friendly interface of the the user's menstrual cycle, including the current phase, start and end dates, and the number of days until the next period. Users can track their symptoms, such as cramps, mood swings, and breast tenderness, to help identify patterns and potential issues
                                    </p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Features</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Period Prediction</li>
                                        <li>Mood Tracking</li>
                                        <li>Health Insights</li>
                                    </ul>
                                </div>
                                <div className='md:w-1/2'>
                                    <img src={tracker} alt="" className='w-full h-auto rounded-2xl object-cover' />
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Services