import { Column } from 'react-table';

export type GitColumnTypes = {
    repoName: JSX.Element;
    stars: number;
    forks: number;
  };

  export const paginationConfig = {
    itemPerPage: 10
  }

  export const columns: Column<GitColumnTypes>[] = [
    {
      Header: 'Repo name',
      accessor: 'repoName'
    },
    {
      Header: 'Stars',
      accessor: 'stars',
      isNumeric: true
    },
    {
      Header: 'Forks',
      accessor: 'forks',
      isNumeric: true
    }
  ];