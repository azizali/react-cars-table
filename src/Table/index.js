import React from 'react'
import cars from './cars'
import './style.css'

export default function CarsList() {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>mpg</th>
          <th>cylinders</th>
          <th>displacement</th>
          <th>horsepower</th>
          <th>weight</th>
          <th>acceleration</th>
          <th>year</th>
          <th>origin</th>
        </tr>
      </thead>
      <tbody>
        {
          cars.map((item, index) => {
            const isOdd = (index % 2) ? false : true
            const classValues = isOdd ? 'bg-blue' : null
            return (
              <tr className={classValues} key={index}>
                <td>{item.name}</td>
                <td>{item.mpg}</td>
                <td>{item.cylinders}</td>
                <td>{item.displacement}</td>
                <td>{item.horsepower}</td>
                <td>{item.weight}</td>
                <td>{item.acceleration}</td>
                <td>{item.year}</td>
                <td>{item.origin}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
