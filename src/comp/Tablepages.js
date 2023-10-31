import React from 'react'
import { Button, Table } from 'semantic-ui-react'
import './aa.css'
export default function Tablepages() {
  return (
    <div>
      <h1 style={{ color: 'blueviolet' }} >BOYS SCHOOL 10th CLASS TIME TABLE</h1>
      <Table celled color="pink" inverted >
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>6</Table.Cell>
          <Table.Cell>7</Table.Cell>
          <Table.Cell>8</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Mon</Table.Cell>
          <Table.Cell>Telugu</Table.Cell>
          <Table.Cell>Hindi</Table.Cell>
          <Table.Cell>English</Table.Cell>
          <Table.Cell>Mathes</Table.Cell>
          <Table.Cell>Social</Table.Cell>
          <Table.Cell>Science</Table.Cell>
          <Table.Cell>Computers</Table.Cell>
          <Table.Cell>PET</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Tue</Table.Cell>
          <Table.Cell>Telughu</Table.Cell>
          <Table.Cell>Engish</Table.Cell>
          <Table.Cell>Hindi</Table.Cell>
          <Table.Cell>Social</Table.Cell>
          <Table.Cell>science</Table.Cell>
          <Table.Cell>Computers</Table.Cell>
          <Table.Cell>Mathes</Table.Cell>
          <Table.Cell>PET</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Wed</Table.Cell>
          <Table.Cell>Telughu</Table.Cell>
          <Table.Cell>Mathes</Table.Cell>
          <Table.Cell>Hindi</Table.Cell>
          <Table.Cell>Engish</Table.Cell>
          <Table.Cell>science</Table.Cell>
          <Table.Cell>Social</Table.Cell>
          <Table.Cell>Computers</Table.Cell>
          <Table.Cell>PET</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Thu</Table.Cell>
          <Table.Cell>Engish</Table.Cell>
          <Table.Cell>Telughu</Table.Cell>
          <Table.Cell>Social</Table.Cell>
          <Table.Cell>Mathes</Table.Cell>
          <Table.Cell>science</Table.Cell>
          <Table.Cell>Hindi</Table.Cell>
          <Table.Cell>Computers</Table.Cell>
          <Table.Cell>PET</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Fri</Table.Cell>
          <Table.Cell>science</Table.Cell>
          <Table.Cell>Telughu</Table.Cell>
          <Table.Cell>Mathes</Table.Cell>
          <Table.Cell>Engish</Table.Cell>
          <Table.Cell>Social</Table.Cell>
          <Table.Cell>Computers</Table.Cell>
          <Table.Cell>Hindi</Table.Cell>
          <Table.Cell>PET</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sat</Table.Cell>
          <Table.Cell>Engish</Table.Cell>
          <Table.Cell>Computers</Table.Cell>
          <Table.Cell>Mathes</Table.Cell>
          <Table.Cell>science</Table.Cell>
          <Table.Cell>Telughu</Table.Cell>
          <Table.Cell>Hindi</Table.Cell>
          <Table.Cell>Social</Table.Cell>
          <Table.Cell>PET</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colspan='9' style={{ textAlign: 'center' }}>
            <Button size='large' color='blue' >Send Students </Button>
          </Table.Cell>


        </Table.Row>

      </Table>
    </div>
  )
}
