const { assert } = require('chai');
const { TablesPage } = require('./pageObjects/TablesPage');

describe('Sortable Tables Test', () => {
  it('should verify table sorting', () => {
    // Navigate to the sortable tables page
    TablesPage.open();

    // Sort by first column and verify the order
    TablesPage.sortByColumn(1);
    assert.isTrue(TablesPage.isColumnSorted(1, 'asc'), 'First column is not sorted in ascending order');

    // Sort by second column and verify the order
    TablesPage.sortByColumn(2);
    assert.isTrue(TablesPage.isColumnSorted(2, 'asc'), 'Second column is not sorted in ascending order');

    // Sort by third column and verify the order
    TablesPage.sortByColumn(3);
    assert.isTrue(TablesPage.isColumnSorted(3, 'asc'), 'Third column is not sorted in ascending order');
  });
});
