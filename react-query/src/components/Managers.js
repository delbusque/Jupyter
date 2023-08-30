import { useQuery } from 'react-query'
import axios from 'axios'

const fetchManagers = () => {
    return axios.get('http://localhost:4000/managers')
}

export const Managers = () => {

    const { isLoading, data, isError, error } = useQuery('managers', fetchManagers);

    if (isLoading) {
        return <h3 className="page">Loading ...</h3>
    }

    if (isError) {
        return <h3 className="page">{error.message}</h3>
    }

    return (
        <div className="page">
            {data.data.map(mng => <span key={mng.id} className='line'>{mng.name}</span>)}
        </div>
    )
}