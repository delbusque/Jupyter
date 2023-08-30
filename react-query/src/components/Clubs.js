import { useQuery } from "react-query"
import axios from 'axios'

const fetchClubs = () => {
    return axios.get('http://localhost:4000/clubs')
}

export const Clubs = () => {

    const { isLoading, data, isError, error } = useQuery('clubs', fetchClubs)

    if (isLoading) {
        return <h3 className="page">Loading ... </h3>
    }

    if (isError) {
        return <h3 className="page">{error.message}</h3>
    }

    return (
        <div className="page">
            {data.data.map(club => <div key={club.id} className="line">{club.name}</div>)}
        </div>
    )
}