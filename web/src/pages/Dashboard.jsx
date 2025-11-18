import React, { useEffect, useState } from 'react'

const API=(path,opts={})=>fetch(`http://localhost:8080${path}`,{headers:{'Content-Type':'application/json'},...opts,body:opts.body?JSON.stringify(opts.body):undefined}).then(r=>r.json());

export default function Dashboard(){
  const [status,setStatus]=useState(null)
  const [result,setResult]=useState(null)
  useEffect(()=>{API('/api/status').then(setStatus)},[])
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500">System status and quick tools</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border bg-white p-4">
          <h3 className="font-semibold mb-2">Backend Status</h3>
          <pre className="text-xs bg-gray-50 p-3 rounded-lg overflow-auto min-h-[120px]">{status?JSON.stringify(status,null,2):'Loading...'}</pre>
        </div>
        <div className="rounded-2xl border bg-white p-4">
          <h3 className="font-semibold mb-2">Run Core Engine Smoke Test</h3>
          <button className="px-3 py-2 rounded-xl bg-black text-white" onClick={async()=>setResult(await API('/api/smoke/core',{method:'POST',body:{}}))}>Run</button>
          <pre className="text-xs bg-gray-50 p-3 rounded-lg overflow-auto mt-2 min-h-[120px]">{result?JSON.stringify(result,null,2):'No result yet'}</pre>
        </div>
        <div className="rounded-2xl border bg-white p-4">
          <h3 className="font-semibold mb-2">Simulate Signal Event</h3>
          <button className="px-3 py-2 rounded-xl border" onClick={async()=>setResult(await API('/api/signal/simulate',{method:'POST',body:{keyword:'demo'}}))}>Simulate</button>
          <p className="text-xs text-gray-500 mt-2">Requires FEATURE_SIGNAL_NETWORK=true</p>
        </div>
      </div>
    </div>
  )
}
