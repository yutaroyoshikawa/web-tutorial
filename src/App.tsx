import { FC, useMemo, useState } from 'react';
import { shallowEqual } from "./shallowEqual"
import './App.css';

const initialState = {
  hoge: "hoge"
}

export const App: FC = () => {
  const [a, setA] = useState(JSON.stringify(initialState));
  const [b, setB] = useState(JSON.stringify(initialState));
  const deep = useMemo(() => {
    try {
      return (JSON.parse(a) === JSON.parse(b)).toString()
    } catch {
      return "false"
    }
  }, [a, b]);
  const shallow = useMemo(() => {
    try {
      return shallowEqual(JSON.parse(a), JSON.parse(b)).toString()
    } catch {
      return "false"
    }
  }, [a, b]);

  return (
    <div className="App">
      <div className="App-header">
        <textarea value={a} onChange={(e) => setA(e.target.value)}></textarea>
        <textarea value={b} onChange={(e) => setB(e.target.value)}></textarea>
        <div>
          <div>Deep Equal</div>
          <div>{deep}</div>
        </div>
        <div>
          <div>Shallow Equal</div>
          <div>{shallow}</div>
        </div>
      </div>
    </div>
  );
}
