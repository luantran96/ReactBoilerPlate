import React from 'react';


export default function ProjectItem ({project}) {
  return (
    <div class="card">
      <div className="card-image">
        <a href={project.demo_url}><img src="https://picsum.photos/200" /> </a>
      </div>
      <div className="card-content">
        <span className="card-title">{ project.name }</span>
        <p>
          { project.desc }
        </p>
      </div>
    </div>
  )
}