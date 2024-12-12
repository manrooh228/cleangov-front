import React from "react";
import { useEffect } from "react";
import "../css/VideoPage.css";
import Header from "./Header";

const VideoPage = () => {
    useEffect(() => {
        const loadYouTubeAPI = () => {
            const script = document.createElement("script");
            script.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(script);
        };

        loadYouTubeAPI();
    }, []);

    const onYouTubeIframeAPIReady = () => {
        new window.YT.Player("video-player", {
            height: "315",
            width: "560",
            videoId: "N7kuQKwzz2I", // ID видео
            playerVars: { autoplay: 1 },
        });
    };

    return (
        <>
        <Header/>
        <div className="video-container">
            <div className="video-box">
            <div id="video-player"  ></div>
            </div>
        </div>
        </>
    );
};

export default VideoPage;
