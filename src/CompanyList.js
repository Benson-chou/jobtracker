import React from 'react'
// import Companies from './Companies'

export default function CompanyList({companies, toggleCompany}) {
  function handleCompanyClick(id) {
    toggleCompany(id)
  }

  return (
    <table style={{ borderCollapse: "collapse", width: "50%" }}>
      <thead>
        <tr style={{ borderBottom: "1px solid #000" }}>
          <th style={{ padding: "8px", textAlign: "left" }}></th>
          <th style={{ padding: "8px", textAlign: "left" }}>Name</th>
          <th style={{ padding: "8px", textAlign: "left" }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {companies.map(company => (
          <tr key={company.id} style={{ borderBottom: "1px solid #000" }}>
          <td style={{ padding: "8px" }}>
            <input
              type="checkbox"
              checked={company.complete}
              onChange={() => handleCompanyClick(company.id)}
            />
          </td>
          <td style={{ padding: "8px" }}>
            <a href={company.url} target="_blank" rel="noreferrer" >{company.name}</a>
          </td>
          <td style={{ padding: "8px" }}>
            {company.complete ? "Complete" : "Incomplete"}
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  )
}