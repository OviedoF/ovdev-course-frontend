import React, { useState, useEffect } from 'react';
import styles from './MarkdownTopicReader.module.scss';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import MarkDownEditor from './MarkDownEditor';

function MarkdownTopicReader({content, setContent}) {
  const [editEnable, setEditEnable] = useState(false);

  return (
    <div className={styles.container} > 

        {editEnable ? <MarkDownEditor content={content} setStateContent={setContent} setEditEnable={setEditEnable}/> : <></>}
        
        <ul className={styles.admin_icons}>
          <li><FontAwesomeIcon icon={faPenToSquare} height={50} width={50} className={styles.edit} onClick={(e) => setEditEnable(true)}/></li>
          <li><FontAwesomeIcon icon={faTrash} height={50} width={50} className={styles.delete} onClick={(e) => setEditEnable(false)}/></li>
        </ul>

        <ReactMarkdown className='markdown_reader'>
            {content}
        </ReactMarkdown>
    </div>
  )
}

export default MarkdownTopicReader