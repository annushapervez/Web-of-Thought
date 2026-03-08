"use client"

import { Handle, Position } from "@xyflow/react"

type ArticleCardNodeProps = {
  data: {
    title: string
    subtitle?: string
  }
}

export default function ArticleCardNode({ data }: ArticleCardNodeProps) {
  return (
    <div className="card-node">
      <Handle type="target" position={Position.Left} className="card-handle" />

      <div className="card-title">{data.title}</div>

      <div className="card-divider">
        <span />
        <div className="dot" />
        <span />
      </div>

      {data.subtitle && <div className="card-subtitle">{data.subtitle}</div>}

      <Handle type="source" position={Position.Right} className="card-handle" />
    </div>
  )
}