import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    //console.log(video)

    return (
        <Card sx={{ width: { md: '320px', xs: '68%' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? ` /video/${videoId}` : `/vidoe/${demoVideoUrl}`}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 350, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
                <Link to={videoId ? `/video/${videoId}` : `/vidoe/${demoVideoUrl}`}>
                    <Typography variant='subtitle1' fontWeight="bold" color='#fff'>
                        {snippet.title.slice(0, 60) || snippet.title.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : `/channel/${demoChannelUrl}`}>
                    <Typography variant='subtitle2' fontWeight="bold" color='gray'>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircleIcon sx={{ fontize: 10, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard
