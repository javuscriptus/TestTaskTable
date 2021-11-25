import React from 'react'
import styles from './TableCell.module.scss'
import {Link} from 'react-router-dom'

export const TableCell = ({top, bottom}) => {
    return (
        <Link to="/info" className={styles.cell}>
            <div className={styles.topText}>{top}</div>
            <div className={styles.bottomText}>{bottom}</div>
        </Link>
    )
}