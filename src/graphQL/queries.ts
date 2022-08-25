import { gql } from '@apollo/client';
import client from './client';

export const getRepos = async (quantity: number) => await client.query({
    query: reposQuery(quantity)
  });

const reposQuery = (quantity: number) => gql`
{
    user(login: "${process.env.REACT_APP_GITHUB_LOGIN}") {
        repositories(first: ${quantity}) {
            nodes {
              name
              description
              url
              forkCount
              stargazers {
                totalCount
              }
            }
          }
    }

}
`;