import DataTable from '../../components/DataTable';

import { columns, GitColumnTypes } from './GitHubTable.config';
import { PageWrapper } from '../../common/PageWrapper.styled';
import { useMemo } from 'react';
import {IRepository} from '../../models/repository';

type GitHubTableProps = {
  repositories: IRepository[];
}
const GitHubTable = ({repositories}: GitHubTableProps) => {

  const data: GitColumnTypes[] = useMemo(() => {
    return repositories.map((repo: IRepository) => ({repoName: repo.name, stars: repo.stargazers.totalCount, forks: repo.forkCount}))
  }, [repositories]);
  

  return (
  <PageWrapper>
    <DataTable columns={columns} data={data} />
  </PageWrapper>)};

export default GitHubTable;