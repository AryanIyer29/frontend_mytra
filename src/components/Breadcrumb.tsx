import React from 'react'
import { Link } from 'react-router-dom'

interface BreadcrumbProps {
  items: { label: string; to?: string }[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
    {items.map((item, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span>/</span>}
        {item.to ? (
          <Link to={item.to} className="hover:text-[#F15A22] transition-colors">{item.label}</Link>
        ) : (
          <span className="text-gray-700">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </div>
)

export default Breadcrumb
