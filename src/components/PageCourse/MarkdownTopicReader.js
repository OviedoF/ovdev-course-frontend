import React, { useState, useEffect } from 'react';
import styles from './MarkdownTopicReader.module.scss';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';
import MarkDownEditor from './MarkDownEditor';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useRouter } from 'next/router';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark as CodeHighlightStyle} from 'react-syntax-highlighter/dist/cjs/styles/prism';

function MarkdownTopicReader({content, setContent, id}) {
  const [editEnable, setEditEnable] = useState(false);
  const [heartColor, setHeartColor] = useState('inherit');
  const [favs, setFavs] = useState([]);
  const {user, roles} = useSelector(state => state.auth); 
  const router = useRouter();

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/user/${user._id}/getfavs`)
      .then(res => setFavs(res.data.favs))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if(favs.includes(id)) setHeartColor('#EF3969');

    if(!favs.includes(id)) setHeartColor('inherit');
  }, [favs, id]);
  
  const handleFavorite = () => {
    axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/user/${user._id}/handlefav/${id}`)
      .then(res => axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/user/${user._id}/getfavs`))
      .then(res => setFavs(res.data.favs))
      .catch(err => console.log(err));
  }

  const handleDelete = (e) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_HOST}/api/topics/${id}`)
      .then(res => {
        console.log(res.data);
        router.back();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className={styles.container} > 

        {editEnable ? <MarkDownEditor content={content} setStateContent={setContent} setEditEnable={setEditEnable}/> : <></>}
        
        {roles.includes('admin') 
        ? 
        <ul className={styles.admin_icons}>
          <li><FontAwesomeIcon icon={faPenToSquare} height={50} width={50} className={styles.edit} onClick={(e) => setEditEnable(true)}/></li>
          <li><FontAwesomeIcon icon={faTrash} height={50} width={50} className={styles.delete} onClick={(e) => handleDelete()}/></li>
        </ul>
        : 
        <></>}
        
        <div className={styles.fav_button_container} onClick={() => handleFavorite()}>
          <FontAwesomeIcon icon={faHeart} height={50} width={50} style={{color: heartColor}}/>
        </div>

        <ReactMarkdown className='markdown_reader' components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={CodeHighlightStyle}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
        }}>
            {content}
        </ReactMarkdown>
    </div>
  )
}

export default MarkdownTopicReader