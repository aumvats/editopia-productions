import React from 'react';
import './ProjectCard.css';

const videos = [
  { title: "Ranveer Allahbadia", description: "Ranveer Allahbadia better known as BeerBiceps, is an Indian YouTuber. Known for his podcasts on Spotify, he is also recognised for his YouTube videos covering topics such as fashion, finance, fitness, motivation, and self-development.", url: "https://www.youtube.com/embed/fepaY9p511I"},
  { title: "WillPower Start", description: "WillPower Star is a community of people who want to be unstoppable and this community dedicated to those who hear you can not do it.", url: "https://www.youtube.com/embed/Dc0OBp8WFzM" },
  { title: "ClickYad", description: "ClickyAd is a team of SEO specialists and creatives dedicated to delivering results. If you’re serious about skyrocketing your organic search traffic and scaling your e-commerce", url: "https://www.youtube.com/embed/DUeQbgpyMXM"} 
 
];

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      {videos.map((video, index) => (
        <div key={index} className="project-card">
          <div className="project-info">
            <h2 className="title">{video.title}</h2>
            <p className="description">{video.description}</p>
            <button className="view-case-button" onClick={() => window.open(video.url, "_blank")}>View video</button>
          </div>
          <div className="project-video">
            <iframe 
              src={video.url} 
              title={video.title} 
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
