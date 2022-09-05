import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import React from "react";
import axios from "axios";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark as CodeHighlightStyle} from 'react-syntax-highlighter/dist/cjs/styles/prism';

// a11yDark !
// darcula
// materialDark

export default function MarkDownEditor({
  content,
  setStateContent,
  setEditEnable,
}) {
  const router = useRouter();
  const dirname = router.query.dirname;
  const filename = router.query.filename;

  const handlePutText = (e) => {
    console.log(content);
    axios
      .put(
        `http://localhost:4000/api/topics/${dirname}/${filename}/editContent`,
        { content: content },
        {
          headers: {
            "x-access-token": localStorage.getItem("x-access"),
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  

  return (
    <div style={{ zIndex: "99999999999999" }}>
      <textarea
        autoFocus
        className="textarea"
        value={content}
        onChange={(e) => setStateContent(e.target.value)}
      />

      <ReactMarkdown
        className="markdown_reader markdown_editor"
        components={{
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
        }}
      >
        {content}
      </ReactMarkdown>

      <ul>
        <li>
          <FontAwesomeIcon
            icon={faXmark}
            height={50}
            width={50}
            onClick={() => setEditEnable(false)}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCheck}
            height={50}
            width={50}
            onClick={() => handlePutText()}
          />
        </li>
      </ul>

      <style jsx>{`
        div {
          display: flex;
          position: fixed;
          top: 0;
          left: 0;
          background-color: var(--color-vd);
          z-index: 2;
        }

        .textarea {
          width: 40vw;
          height: 100vh;
          padding: 40px;
          box-sizing: border-box;
          font-size: 1rem;
          outline: none;
          border-right: 2px solid black;
        }

        ul {
          position: absolute;
          top: 30px;
          right: 30px;
          display: flex;
          flex-direction: row-reverse;
        }

        li {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
