import React from 'react';

const LiveCamInfoCard = ({ setShowCam }) => {
    return (
        <div class="w-[400px] h-[300] md:w-[500px] md:h-[400] lg:w-[550px] lg:h-[420px] xl:w-[858] xl:h-[480] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <div >
                <h5 class="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Real-Time Object Detection with Your Webcam</h5>
            </div>
            <p class="mb-3 text-sm lg:text-base font-normal text-gray-700 dark:text-gray-400">Our platform can detect a variety of objects, including people, animals, vehicles, and more. As the webcam captures live video, you'll see a bounding box around each detected object, with information such as the object's name and its location. Our system also tracks the object's movement, providing you with real-time updates on its direction and speed.

                With our easy-to-use platform, you can adjust the detection settings to focus on the objects that interest you the most. Whether you're a student, educator, or researcher, our real-time object detection technology can provide valuable insights for your work.</p>
            <button
                onClick={() => setShowCam(false)}
                type='button' class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-teal-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Close Webcam
            </button>
        </div>
    );
};

export default LiveCamInfoCard;