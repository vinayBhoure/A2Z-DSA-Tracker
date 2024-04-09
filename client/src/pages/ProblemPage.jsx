import React from 'react'
import BasicTable from '../components/BasicTable'
import Table from '../components/Table'
import data from '../components/Data.json'

export default function ProblemPage() {
  
  return (
    <div className=' flex flex-col gap-4 items-start px-8 py-6 flex-1'>
      <h1 className='text-[2rem] font-semibold ' >Problems</h1>
      <Table data={data} />
    </div>
  )
}
