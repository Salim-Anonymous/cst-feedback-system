import Link from 'next/link'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div
      className='flex flex-col p-4 justify-center items-center'
    >
      <a
        href='/feed'
        >
          feed
        </a>
        <a
        href='/setting'
        >
          setting
        </a>
    </div>
  )
}

export default Sidebar