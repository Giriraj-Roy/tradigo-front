import React from 'react'
import styles from './Search.module.css'

const Search : React.FC = () => {
  return (
    <div className={styles.search}>
      <input className={styles.input} type='text' placeholder='Search Coin' />
    </div>
  )
}

export default Search
