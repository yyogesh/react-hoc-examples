import React from 'react';
import WithLoading from './HOCLoading';
const ListRepos = ({ repos }) => {

    if (!repos) return null;
    if (!repos.length) return <p>No repos, sorry</p>;
    return (
        <ul>
            {repos.map((repo) => {
                return <li key={repo.id}>{repo.full_name}</li>;
            })}
        </ul>
    );
};
export default WithLoading(ListRepos);

// withRoute, withStyle, Connect
