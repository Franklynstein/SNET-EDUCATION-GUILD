import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import "../main.css";
import "./CCP.css";

const CCP = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  
  // Load Excel file from assets
  useEffect(() => {
    const loadExcelFile = async () => {
      try {
        // Updated path to match public folder structure
        const response = await fetch('/data.xlsx');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
        
        // Get first sheet
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        // Convert to JSON with header option
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        // Separate headers and data
        const headers = jsonData[0];
        const rows = jsonData.slice(1);
        
        // Convert rows to objects with headers as keys
        const formattedData = rows.map(row => {
          const rowData = {};
          headers.forEach((header, index) => {
            rowData[header] = row[index];
          });
          return rowData;
        });
        
        setData(formattedData);
        setColumns(headers);
        setIsLoading(false);
      } catch (err) {
        console.error('Loading error:', err);
        setError("Error loading spreadsheet: " + err.message);
        setIsLoading(false);
      }
    };
    
    loadExcelFile();
  }, []);
  
  // Sorting function
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  // Apply sort to data
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;
    
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  return (
    <div className="container">
      
      
      {error && <div className="error">{error}</div>}
      {isLoading && <div className="loading">Loading spreadsheet data...</div>}
      
      {data.length > 0 ? (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th 
                    key={column}
                    onClick={() => requestSort(column)}
                    className={sortConfig.key === column ? `sorted-${sortConfig.direction}` : ''}
                  >
                    {column}
                    {sortConfig.key === column && (
                      <span className="sort-indicator">
                        {sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even-row' : 'odd-row'}>
                  {columns.map((column) => (
                    <td key={column}>{row[column]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !isLoading && <div className="no-data">No data available in the spreadsheet.</div>
      )}
    </div>
  );
};

export default CCP;