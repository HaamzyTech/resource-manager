"use clinet"

import React from 'react'

type Props = {}

const ContentLoadingError = (props: Props) => {
  return (
    <div className="w-full text-center bg-red-200 text-red-600 p-4 rounded-lg">
        Error while loading data
    </div>
  )
}

export default ContentLoadingError