import * as React from 'react';
import * as perf from 'react-addons-perf';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { ELEMS, getRows, Table } from './tablegen';

const renderApp = (props: any) => (ReactDOM.render(
  <div>
    <Table {...props}>
      {ELEMS.map(getRows)}
    </Table>
    <hr />
    <App />
  </div>,
  document.getElementById('root') as HTMLElement
));

registerServiceWorker();

perf.start();
renderApp({ text: 'elso' });
renderApp({ text: 'elso' });
renderApp({ text: 'elso' });
perf.stop();
perf.printWasted();
perf.printExclusive();
