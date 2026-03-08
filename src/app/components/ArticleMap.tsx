"use client"

import { useMemo, useRef, useState } from "react"
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  Position,
  type Edge,
  type Node,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { articleNodes } from "../data/articleMap"
import ArticleCardNode from "./ArticleCardNode"

const nodeTypes = {
  article: ArticleCardNode,
}

export default function ArticleMap() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const connectionMap = useMemo(() => {
    const map = new Map<string, Set<string>>()

    articleNodes.forEach((article) => {
      if (!map.has(article.id)) {
        map.set(article.id, new Set())
      }

      article.connections.forEach((targetId) => {
        map.get(article.id)?.add(targetId)

        if (!map.has(targetId)) {
          map.set(targetId, new Set())
        }
        map.get(targetId)?.add(article.id)
      })
    })

    return map
  }, [])

  const nodes: Node[] = useMemo(() => {
    return articleNodes.map((article) => {
      const isHovered = hoveredNode === article.id
      const isConnected =
        hoveredNode !== null && connectionMap.get(hoveredNode)?.has(article.id)

      return {
        id: article.id,
        type: "article",
        position: {
       x: 120 + (article.position.x - 120) * 1.12,
y: 120 + (article.position.y - 120) * 1.14,
      },
        data: {
          title: article.title,
          subtitle: article.subtitle ?? "",
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    className: `article-node ${
  isHovered
    ? "node-active"
    : isConnected
    ? "node-connected"
    : hoveredNode
    ? "node-dimmed"
    : ""
}`,
     
      }
    })
  }, [hoveredNode, connectionMap])

  const edges: Edge[] = useMemo(() => {
    const generatedEdges: Edge[] = []
    const seen = new Set<string>()

    articleNodes.forEach((article) => {
      article.connections.forEach((targetId) => {
        const sortedPair = [article.id, targetId].sort().join("--")

        if (seen.has(sortedPair)) return
        seen.add(sortedPair)

        const isHighlighted =
          hoveredNode !== null &&
          (hoveredNode === article.id || hoveredNode === targetId)

        generatedEdges.push({
  id: sortedPair,
  source: article.id,
  target: targetId,
  type: "default",
  style: {
    stroke: isHighlighted ? "#9f8d78" : "#b7aa98",
    strokeWidth: isHighlighted ? 2.5 : 1.5,
    opacity: hoveredNode && !isHighlighted ? 0.12 : 0.45,
    transition:
      "stroke 0.2s ease, opacity 0.2s ease, stroke-width 0.2s ease",
  },
})
      })
    })

    return generatedEdges
  }, [hoveredNode])

  const handleNodeEnter = (_: React.MouseEvent, node: Node) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current)
    }
    setHoveredNode(node.id)
  }

  const handleNodeLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredNode(null)
    }, 120)
  }

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#e7dfd1" }}
    >
      <div className="absolute inset-0 constellation pointer-events-none" />

      <div className="pointer-events-none absolute left-6 top-6 z-10">
        <h1 className="text-2xl tracking-[0.02em] text-[#3c332b]">
          Web of Thought
        </h1>
        <p className="mt-1 text-sm text-[#7f7061]">
          Essays connected by idea, question, and meaning
        </p>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
                fitViewOptions={{ padding: 0.5 }}

        fitView
        onNodeMouseEnter={handleNodeEnter}
        onNodeMouseLeave={handleNodeLeave}
        onPaneMouseEnter={() => {
          if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current)
          }
        }}
        onPaneClick={() => setHoveredNode(null)}
      >
<Background variant={BackgroundVariant.Dots} color="#c7bbab" gap={30} size={1} />      
      </ReactFlow>
    </div>
  )
}