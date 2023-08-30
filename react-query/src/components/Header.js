import { Link } from 'react-router-dom';

import { FaRegUser } from 'react-icons/fa';

export const Header = () => {
    return (
        <div className="header">

            <Link className="logo" to="/">
                ReactQuery
            </Link>

            <ul className="nav">
                <Link className="link" to='/clubs'>Clubs</Link>
                <Link className="link" to='/managers'>Managers</Link>
            </ul>

            <div className="auth">
                <FaRegUser />

            </div>
        </div >
    )
}