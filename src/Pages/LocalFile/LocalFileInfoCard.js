import React from 'react';

const LocalFileInfoCard = ({ setShowLocalFile }) => {
    return (
        <div class="w-[400px] h-[300] md:w-[500px] md:h-[400] lg:w-[550px] lg:h-[420px] xl:w-[858] xl:h-[480] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <div >
                <h5 class="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Analyze Your Local Video Files</h5>
            </div>
            <p class="mb-3 text-sm lg:text-base font-normal text-gray-700 dark:text-gray-400">Our platform allows you to analyze your local video files with our advanced object detection technology. Our intelligent algorithms can identify and track objects with speed and accuracy, providing you with valuable insights into the contents of your video files. With our easy-to-use platform, you can upload your video files and start analyzing them in minutes.

                Our system can detect a variety of objects, including people, animals, vehicles, and more. As your video file is analyzed, you'll see a bounding box around each detected object, with information such as the object's name and its location. Our system also tracks the object's movement, providing you with real-time updates on its direction and speed.</p>
            <button
                onClick={() => setShowLocalFile(false)}
                type='button' class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-teal-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Close Local File
            </button>
        </div>
    );
};

export default LocalFileInfoCard;