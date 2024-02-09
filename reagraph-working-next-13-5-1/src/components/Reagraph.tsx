'use client'

import { useRef } from "react";
import { GraphCanvas, GraphCanvasRef, useSelection } from "reagraph";

const Reagraph = ({ data }: any) => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    selections,
    actives,
    onNodeClick,
    onCanvasClick
  } = useSelection({
    ref: graphRef,
    nodes: data.nodes,
    edges: data.edges,
    pathSelectionType: 'all'
  });

  return (
    <GraphCanvas
      ref={graphRef}
      selections={selections}
      actives={actives}
      onCanvasClick={onCanvasClick}
      onNodeClick={onNodeClick}

      minNodeSize={0.5}
      maxNodeSize={30}


      nodes={data.nodes}
      edges={data.edges}

      layoutType="forceDirected2d"
      layoutOverrides={{
        nodeStrength: -100,
        linkDistance: 500,
      }}
      sizingType="centrality"
      edgeInterpolation="curved"

      glOptions={{
        preserveDrawingBuffer: true
      }}
      animated={false}
    />
  )
}

export default Reagraph;