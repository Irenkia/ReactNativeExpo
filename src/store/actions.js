export const GET_REPOS = 'repos/LOAD';
export const GET_REPOS_SUCCESS = 'repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'repos/LOAD_FAIL';

export function ListRepos(user) {
    return {
        type: GET_REPOS,
        payload: {
            request: {
                url: `/users/${user}/repos`
            }
        }
    };
}