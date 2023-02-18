import React, { useEffect, useRef, useState } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as cocossd from '@tensorflow-models/coco-ssd'
import { drawRect } from './utilities';
import Webcam from "react-webcam";

const WebcamView = () => {
    const [showCam, setShowCam] = useState(false);
    const [showLocalFile, setShowLocalFile] = useState(false);
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    // Main function
    const runCoco = async () => {
        const net = await cocossd.load();
        setInterval(() => {
            detect(net);
        }, 10);
    };

    const detect = async (net) => {
        // Check data is available
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const obj = await net.detect(video);
            // console.log(obj)

            // Draw mesh
            const ctx = canvasRef.current.getContext("2d");
            drawRect(obj, ctx)
            tf.dispose(obj);
        }
    };

    useEffect(() => { runCoco() }, []);

    return (
        <div className="relative mt-5 lg:mt-0 h-[500px]">
            <Webcam
                ref={webcamRef}
                muted={true}
                className="mx-auto border-2 border-gray-400 rounded-lg text-center w-[400px] h-[300] md:w-[500px] md:h-[400] lg:w-[550px] lg:h-[420px] xl:w-[858] xl:h-[480] shadow-lg"
                style={{
                    zindex: 9,
                    position: 'absolute',
                    top: '210px',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <canvas
                ref={canvasRef}
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

export default WebcamView;