import DataTable from '../../components/DataTable';

import { data, columns } from './GitHubTable.config';
import { PageWrapper } from '../../common/PageWrapper.styled';

const GitHubTable = () => (
  <PageWrapper>
    <DataTable columns={columns} data={data} />
  </PageWrapper>);

export default GitHubTable;