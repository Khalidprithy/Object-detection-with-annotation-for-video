import React from 'react';
import LiveCamInfoCard from './LiveCamInfoCard';
import WebcamView from './WebcamView';

const WebcamHome = ({ showCam, setShowCam }) => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            {
                showCam &&
                <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 h-full justify-center mx-auto">
                    <LiveCamInfoCard
                        setShowCam={setShowCam}
                    />
                    <WebcamView />
                </div>
            }
        </div>
    );
};

export default WebcamHome;