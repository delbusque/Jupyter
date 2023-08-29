import { FaRegUser } from 'react-icons/fa';

export const Header = () => {
    return (
        <div className="header">

            <div className="logo">
                ReactQuery
            </div>

            <ul className="nav">
                <li>Dummy</li>
                <li>Super</li>
            </ul>

            <div className="auth">
                <FaRegUser />
            </div>

        </div>
    )
}