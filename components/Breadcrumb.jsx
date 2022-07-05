import React from 'react'

const Breadcrumb = (props) => {
    const isLast = (index) => {
        return index === props.crumbs.length - 1
    }
  return (
    <div>
        <nav className="flex justify-center mt-4">
            <ol className="breadcrumb">
                {
                    props.crumbs.map((crumb, ci) => {
                        const disabled = isLast(ci) ? 'disabled' : ''
                        return (
                            <li key={ci} className="breadcrumb-item align-center">
                                <button className={disabled} onClick={() => props.selected(crumb)}>
                                    {crumb}
                                </button>
                            </li>
                        )
                    })
                }
            </ol>
        </nav>
    </div>
  )
}

export default Breadcrumb