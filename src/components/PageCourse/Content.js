import React, { useState, useEffect } from 'react';
import styles from './Content.module.scss';
import CoursePresentation from './CoursePresentation';
import MarkdownTopicReader from './MarkdownTopicReader';

export default function Content({course, topic}) {
 const [content, setContent] = useState(topic ? topic.content : '');

 useEffect(() => {
  setContent(topic ? topic.content : '');
 }, [topic]);

  return (
    <div className={styles.content}>
        <div className={styles.title}>
            <h1>{course ? course.name : topic.topic.name}</h1>
        </div>

        {course 
        ? <CoursePresentation course={course}/> 
        : <MarkdownTopicReader content={content} setContent={setContent} />
        }
    </div>
  )
};
