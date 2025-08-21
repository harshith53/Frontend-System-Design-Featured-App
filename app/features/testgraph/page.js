"use client"
import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

const elements = [
  // nodes
  { data: { id: 'acct', label: 'Account: prod', kind: 'Account' }},
  { data: { id: 's3', label: 'S3: prod-logs (public)', kind: 'Storage' }},
  { data: { id: 'ec2', label: 'EC2: i-abc123', kind: 'Compute' }},
  { data: { id: 'sg', label: 'SG: 0.0.0.0/0:22', kind: 'Network' }},
  { data: { id: 'inet', label: 'Internet', kind: 'NetExposure' }},
  { data: { id: 'f1', label: 'Finding: S3 public (High)', kind: 'Finding' }},
  { data: { id: 'f2', label: 'Finding: SSH open (Medium)', kind: 'Finding' }},
  { data: { id: 'cis1', label: 'CIS-1.1', kind: 'Control' }},
  { data: { id: 'cis2', label: 'CIS-4.1', kind: 'Control' }},
  { data: { id: 'role', label: 'Role: AdminRole', kind: 'Identity' }},

  // edges
  { data: { id:'e1', source:'acct', target:'s3', label:'OWNS' }},
  { data: { id:'e2', source:'acct', target:'ec2', label:'OWNS' }},
  { data: { id:'e3', source:'acct', target:'sg', label:'OWNS' }},
  { data: { id:'e4', source:'s3', target:'f1', label:'HAS_FINDING' }},
  { data: { id:'e5', source:'f1', target:'cis1', label:'VIOLATES_CONTROL' }},
  { data: { id:'e6', source:'sg', target:'f2', label:'HAS_FINDING' }},
  { data: { id:'e7', source:'f2', target:'cis2', label:'VIOLATES_CONTROL' }},
  { data: { id:'e8', source:'ec2', target:'s3', label:'CONNECTS_TO' }},
  { data: { id:'e9', source:'sg', target:'inet', label:'EXPOSED_AS' }},
  { data: { id:'e10', source:'role', target:'s3', label:'CAN_ACCESS(read)' }},
  { data: { id:'e11', source:'role', target:'ec2', label:'CAN_ACCESS(admin)' }},
];

export default function App() {
	const ref = useRef(null);


//   useEffect(() => {
//     if (!ref.current) return;
//     const cy = cytoscape({
//       container: ref.current,
//       elements,
//       layout: { name: 'cose', animate: true },
//       style: [
//         { selector: 'node[kind = "Finding"]', style: { 'shape':'diamond' } },
//         { selector: 'node[kind = "Control"]', style: { 'shape':'round-rectangle' } },
//         { selector: 'node[kind = "NetExposure"]', style: { 'shape':'hexagon' } },
//         { selector: 'node', style: { 'label': 'data(label)', 'text-wrap':'wrap', 'text-valign':'center', 'width': 'label', 'padding':'8px' } },
//         { selector: 'edge', style: { 'curve-style':'bezier', 'target-arrow-shape':'triangle', 'label': 'data(label)' } },
//       ],
//     });
//     return () => cy.destroy();
//   }, []);
useEffect(() => {
    if (!ref.current) return;

    const cy = cytoscape({
      container: ref.current,
      elements,
      layout: { name: "cose", animate: true, padding: 50 },
      style: [
        {
          selector: "node",
          style: {
            "label": "data(label)",
            "text-wrap": "wrap",
            "text-valign": "center",
            "text-halign": "center",
            "font-size": "10px",
            "width": "80px",
            "height": "40px",
            "background-color": "#89CFF0",
            "border-color": "#555",
            "border-width": 1,
            "color": "#222",
            "padding": "8px",
          },
        },
        { selector: 'node[kind = "Finding"]', style: { "shape": "diamond", "background-color": "#ff6b6b" } },
        { selector: 'node[kind = "Control"]', style: { "shape": "round-rectangle", "background-color": "#ffe66d" } },
        { selector: 'node[kind = "NetExposure"]', style: { "shape": "hexagon", "background-color": "#6bff9c" } },
        { selector: 'node[kind = "Identity"]', style: { "background-color": "#6ba8ff" } },
        { selector: 'node[kind = "Account"]', style: { "background-color": "#ffb86b" } },
        { selector: 'node[kind = "Storage"]', style: { "background-color": "#c56bff" } },
        { selector: 'node[kind = "Compute"]', style: { "background-color": "#6bffd1" } },
        { selector: 'node[kind = "Network"]', style: { "background-color": "#f96bff" } },

        {
          selector: "edge",
          style: {
            "curve-style": "bezier",
            "target-arrow-shape": "triangle",
            "arrow-scale": 1.2,
            "line-color": "#888",
            "target-arrow-color": "#888",
            "label": "data(label)",
            "font-size": "8px",
            "text-background-color": "#fff",
            "text-background-opacity": 1,
            "text-background-shape": "roundrectangle",
            "text-background-padding": "2px",
          },
        },
        {
          selector: "node:hover",
          style: {
            "background-color": "#ffd166",
            "border-width": 2,
            "border-color": "#333",
          },
        },
      ],
    });

    cy.fit(); // 👈 ensure graph fits the container
    return () => cy.destroy();
  }, []);

  return <div style={{ height: '80vh', width: '100%' }} ref={ref} />;
}
