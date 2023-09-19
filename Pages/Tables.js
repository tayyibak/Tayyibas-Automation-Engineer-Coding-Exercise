class TablesPage {
    get columnHeader() {
      return $$('.table thead th');
    }
  
    get rows() {
      return $$('.table tbody tr');
    }
  
    open() {
      browser.url('http://the-internet.herokuapp.com/tables');
    }
  
    sortByColumn(columnIndex) {
      this.columnHeader[columnIndex - 1].click();
    }
  
    isColumnSorted(columnIndex, order) {
      const columnData = this.rows.map(row => row.$$('td')[columnIndex - 1].getText());
      const sortedData = [...columnData].sort();
  
      if (order === 'desc') {
        sortedData.reverse();
      }
  
      return JSON.stringify(columnData) === JSON.stringify(sortedData);
    }
  }
  
  module.exports = new TablesPage();
  