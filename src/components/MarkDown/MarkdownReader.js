import Markdown from 'markdown-to-jsx';
import React, { useState, useEffect } from 'react';

export default function MarkdownReader() {
    // const file_name = 'hello.md';
    // const [post, setPost] = useState('');
  
    // useEffect(() => {
    //   import ( `../src/markdown/${file_name}` )
    //     .then(res => {
    //       fetch(res.default)
    //         .then(res => res.text())
    //         .then(res => console.log(res));
    //     })
    //     .catch(err => console.log(err));
    // });

  return (
    <main>
          <Markdown>
            {`<!--UL-->
* apple
    * apple 2
* orange
* etc


1. apple
2. orange
3. etc`}
          </Markdown>
    </main>
  )
}
