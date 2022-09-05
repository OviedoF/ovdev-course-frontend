import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './TopicsContainer.module.scss';

export default function TopicsContainer({topics, dirname, minimalize}) {
  const router = useRouter();

  const url = !minimalize ? `${dirname}/` : `/course${router.basePath}/${dirname}/`;

  return (
    <div className={styles.topicsContainer}>
        <ul>
            {topics.map(el => {
                return <li key={el._id}>
                    <Link href={url + el.filename}>{el.name}</Link>
                </li>
            })}
        </ul>
    </div>
  )
}
