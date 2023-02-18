import React from 'react';
import LocalFileDetection from './LocalFileDetection';
import LocalFileInfoCard from './LocalFileInfoCard';

const LocalFileHome = ({ showLocalFile, setShowLocalFile }) => {
    return (
        <div>
            {
                showLocalFile &&
                <div className='bg-white dark:bg-gray-900'>

                    <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 h-full justify-center mx-auto">
                        <LocalFileInfoCard
                            setShowLocalFile={setShowLocalFile}
                        />
                        <LocalFileDetection />
                    </div>
                </div>
            }

        </div>
    );
};

export default LocalFileHome;