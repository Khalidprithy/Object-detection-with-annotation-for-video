import React from 'react';

const Banner = ({ showCam, setShowCam, showLocalFile, setShowLocalFile }) => {
    return (
        <div className='transition ease-in duration-300 delay-150'>
            <section class="bg-white dark:bg-gray-900">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Discover the World Around You</h1>

                        <h4 class="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white">Object Detection Made Easy</h4>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to our website, where you can experience the cutting-edge technology of object detection in both recorded and live video. Our intelligent algorithms can identify and track objects with accuracy and speed, providing you with valuable insights into the world around you.</p>

                        <div className='flex gap-4'>
                            {
                                !showCam &&
                                <button
                                    onClick={() => setShowCam(true)}
                                    type='button' class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-teal-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    Use Webcam
                                </button>
                            }
                            {
                                !showLocalFile &&
                                <button
                                    onClick={() => setShowLocalFile(true)}
                                    type='button' class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-teal-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    Upload a File
                                </button>
                            }

                        </div>

                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://www.pngkey.com/png/full/4-42708_ai-brain-artificial-intelligence-brain-png.png" alt="mockup" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;