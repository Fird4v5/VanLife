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
        <h1 className={styles.title}>Income</h1>
        <p className="lastDays">Last <u>6 months</u></p>
        <h2 className={styles.totalIncome}>${totalIncome / 1000}k</h2>

        <div style={{ maxWidth: "550px", height: '200px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip formatter={(value) => `$${value}`} />
              <Bar dataKey="income" fill="#FF8C38" />
            </BarChart>
          </ResponsiveContainer>
</div>

      </div>
      <div className={styles.transactionsList}>
          <h3>Your transactions (3) <span className='lastDays'>Last <u>6 months</u></span></h3>

          <p>${data[5].income}<span>1/12/22</span></p>
          <p>${data[4].income}<span>10/11/22</span></p>
          <p>${data[3].income}<span>23/10/22</span></p>
          <p>${data[2].income}<span>14/09/22</span></p>
          <p>${data[1].income}<span>21/08/22</span></p>
          <p>${data[0].income}<span>5/07/22</span></p>
        </div>
    </main>
  )
}

export default Income