import React, { useRef, useState } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as cocossd from '@tensorflow-models/coco-ssd'

const LocalFileDetection = () => {
    const [videoUrl, setVideoUrl] = useState(null);
    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        setVideoUrl(URL.createObjectURL(file));
    }

    // Tensorflow function

    const localRefVideo = useRef(null);
    const canvasRefVideo = useRef(null);
    const [annotations, setAnnotations] = useState([]);

    // Detect video 
    const detectObjects = async () => {
        const model = await cocossd.load();
        const video = localRefVideo.current;

        while (video && !video.paused && !video.ended) {
            const predictions = await model.detect(video);
            setAnnotations(predictions);
            drawAnnotations(predictions);
            await new Promise((resolve) => requestAnimationFrame(resolve));
        }
    };

    // Draw annotation on detected object
    const drawAnnotations = (predictions) => {
        const canvas = canvasRefVideo.current;
        const ctx = canvas?.getContext("2d");

        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            predictions.forEach((prediction) => {
                const [x, y, width, height] = prediction.bbox;
                ctx.beginPath();
                ctx.rect(x, y, width, height);
                ctx.strokeStyle = "#00FF00";
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.fillStyle = "#00FF00";
                ctx.fillText(prediction.class, x, y - 5);
            });
        }

    };

    const handleVideoLoad = () => {
        detectObjects();
    };
    return (
        <div className="relative mt-5 lg:mt-0 h-[500px]">
            <div
            >
                <input className='absolute bottom-2 left-5 lg:left-16 mb-4 text-gray-800 dark:text-gray-100' type="file" accept="video/*" onChange={handleVideoChange} />
                <h6
                    className='text-xl font-semibold text-orange-500'
                    style={{
                        zindex: 5,
                        position: 'absolute',
                        top: '210px',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >No video selected <br />
                    Please choose a file less then 50mb and 16:9 ratio for best results
                </h6>
                {videoUrl && (
                    <video
                        className='mx-auto w-[400px] h-[250] md:w-[500px] md:h-[350] lg:w-[550px] lg:h-[380px] xl:w-[858] xl:h-[420] shadow-lg'
                        style={{
                            zindex: 7,
                            position: 'absolute',
                            top: '210px',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                        onLoadedData={handleVideoLoad}
                        ref={localRefVideo}
                        controls
                        autoPlay={true}
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            <canvas
                ref={canvasRefVideo}
                className="mx-auto border-2 border-gray-400 rounded-lg text-center w-[400px] h-[300] md:w-[500px] md:h-[400] lg:w-[550px] lg:h-[420px] xl:w-[858] xl:h-[480] shadow-lg"
                style={{
                    zindex: 8,
                    position: 'absolute',
                    top: '210px',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </div>
    );
};

export default LocalFileDetection;