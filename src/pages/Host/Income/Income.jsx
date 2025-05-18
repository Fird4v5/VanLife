import React from 'react'
import styles from './Income.module.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Ju', income: 4000 },
  { name: 'Au', income: 1500 },
  { name: 'Se', income: 3000 },
  { name: 'Oc', income: 2600 },
  { name: 'No', income: 1800 },
  { name: 'De', income: 700 }
];

const Income = () => {

const totalIncome = data.reduce((sum, entry) => sum + entry.income, 0); 

  return (
    <main className={styles.incomePage}>
      <div className={styles.barChart}>
        <h1>Income</h1>
        <p>Last <span>6 months</span></p>
        <h2>${totalIncome / 1000}k</h2>
        <ResponsiveContainer>
            <BarChart data={data}>
                <XAxis dataKey="name"/>
                <YAxis tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip formatter={(value) => `$${value}`} />
                <Bar dataKey="income" fill='#FF8C38'/>
            </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  )
}

export default Income