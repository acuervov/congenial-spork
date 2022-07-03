import React from 'react';
import './App.css';
import ArrayOfCryptoRandom from './Random/Crypto';
import ArrayOfDefaultRandom from './Random/Default';
import ArrayOfmersenneTwisteRandom from './Random/mersenneTwister';

import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter
} from 'recharts'
import quickSort from './Funciones/organizar';

const NumberOfValues = 10000;
const maxValue = 10000;

function App() {

  const [defaultRandom, setDefaultRandom] = React.useState([]);
  const [twisterRandom, setTwisterRandom] = React.useState([]);
  const [cryptoRandom, setCryptoRandom] = React.useState([]);

  const [orgainzedData, setOrgainzedData] = React.useState([])

  return (
    <div className="App">
      <button onClick={() => { setDefaultRandom(ArrayOfDefaultRandom(NumberOfValues, 0, maxValue)) }}>Random default array</button>
      <button onClick={() => { setTwisterRandom(ArrayOfmersenneTwisteRandom(NumberOfValues, 0, maxValue)) }}>Random mersenne twister array</button>
      <button onClick={() => { setCryptoRandom(ArrayOfCryptoRandom(NumberOfValues, 0, maxValue)) }}>Random crypto array</button>
      <button onClick={() => { setOrgainzedData(quickSort(defaultRandom, 0, defaultRandom.length - 1))}}>Organizar data</button>
      {/* <button onClick={() => { arrayOftrueRandom(10, 0, 200000)}}>True Random array</button> */}
      Default chart
      {defaultRandom.length &&
        <ScatterChart
          width={1000}
          height={1000}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="index" />
          <YAxis type="number" dataKey="y" name="value" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={defaultRandom} fill="#8884d8" />
        </ScatterChart>}
      twisterRandom
      {twisterRandom.length &&
        <ScatterChart
          width={800}
          height={800}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="index" />
          <YAxis type="number" dataKey="y" name="value" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={twisterRandom} fill="#8884d8" />
        </ScatterChart>}
      cryptoRandom
      {cryptoRandom.length &&
        <ScatterChart
          width={800}
          height={800}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="index" />
          <YAxis type="number" dataKey="y" name="value" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={cryptoRandom} fill="#8884d8" />
        </ScatterChart>}
        orgainzedData
        {orgainzedData.length &&
        <ScatterChart
          width={800}
          height={800}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="index" />
          <YAxis type="number" dataKey="y" name="value" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={orgainzedData} fill="#8884d8" />
        </ScatterChart>}
    </div>
  );
}

export default App;
