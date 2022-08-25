import * as React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra
} from '@chakra-ui/react';
import {
  TriangleDownIcon,
  TriangleUpIcon
} from '@chakra-ui/icons';
import { useTable, useSortBy, Column } from 'react-table';

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: Column<Data>[];
};

function DataTable<Data extends object>({
  data,
  columns
}: DataTableProps<Data>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy);

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup, idx) => (
          <Tr {...headerGroup.getHeaderGroupProps()} key={`headerGroup_${idx}`}>
            {headerGroup.headers.map((column) => (
              <Th 
                {...column.getHeaderProps(
                  column.getSortByToggleProps()
                )}
                isNumeric={column.isNumeric}
                key={column.id}
              >
                {column.render('Header')}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, idx) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()} key={`row_${idx}`}>
              {row.cells.map((cell, cellIdx) => (
                <Td
                  {...cell.getCellProps()}
                  isNumeric={cell.column.isNumeric}
                  key={`row_${idx}_cell${cellIdx}`}
                >
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default DataTable;
