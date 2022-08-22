import { Column } from 'react-table';

type GitColumnTypes = {
    repoName: string;
    stars: number;
    forks: number;
  };
  
  export const data: GitColumnTypes[] = [
    {
      repoName: 'repo 1',
      stars: 4,
      forks: 2
    },
    {
      repoName: 'repo 2 ',
      stars: 3,
      forks: 4
    },
    {
      repoName: 'repo 3',
      stars: 6,
      forks: 9
    }
  ];

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