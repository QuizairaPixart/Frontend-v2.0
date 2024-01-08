import PropTypes from 'prop-types'
import styles from './Button.module.css'

export default function Btn ({ label, id, onClick, className, icon}) {
    return (
        <a
            key={label}
            id={id}
            type="button"
            onClick={onClick}
            className={`${className} ${styles.btn}`}
        >
            {icon} {label}
        </a>
    )
}

Btn.propTypes = {
    label: PropTypes.string,
    id: PropTypes.number,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}