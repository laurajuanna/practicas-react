import React from 'react';

const TimelineItem = ({ data }) => (
    <div className='timeline-item'>
        <div className='timeline-item-content'>
            <span className='tag' style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            { data.secondTag &&
                <ul>
                    {data.secondTag.map((n) =>
                    <li>{n}</li>)}
                </ul>}            
            {data.link && (
                <a href={data.link.url} target='_blank' rel='noopener noreferrer'>
                    {data.link.text}
                </a>
            )}
            <span className='circle'></span>
        </div>
    </div>
);

export default TimelineItem;