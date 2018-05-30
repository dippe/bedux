import moize from 'moize';
import * as React from 'react';
import * as perf from 'react-addons-perf';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { ELEMS, getRows, Table } from './tablegen';

const mainTpl =  moize.react((props: any) => (
  <div>
    <Table {...props}>
      {ELEMS.map(getRows)}
    </Table>
    <hr />
    <App />
  </div>
));

const renderApp = (props: any) => (ReactDOM.render(mainTpl(props),
  document.getElementById('root') as HTMLElement
));

registerServiceWorker();

perf.start();
renderApp({ text: 'elso' });
renderApp({ text: 'elso2' });
renderApp({ text: 'elso3' });
renderApp({ text: 'elso4' });
renderApp({ text: 'elso5' });
renderApp({ text: 'elso56' });
renderApp({ text: 'elsosa' });
renderApp({ text: 'elsod' });
renderApp({ text: 'elsof' });
renderApp({ text: 'elsog' });
renderApp({ text: 'elsoh' });
renderApp({ text: 'elsoj' });
renderApp({ text: 'elsok' });
renderApp({ text: 'elsol' });
renderApp({ text: 'elsoy' });
renderApp({ text: 'elsoc' });
renderApp({ text: 'elsov' });
renderApp({ text: 'elsob' });
renderApp({ text: 'elsonm' });
renderApp({ text: 'elsom' });
renderApp({ text: 'elso,' });
renderApp({ text: 'elso5' });
renderApp({ text: 'elso7' });
renderApp({ text: 'maso9d' });
renderApp({ text: 'elsoö' });
renderApp({ text: 'eldsaso' });
renderApp({ text: 'eldso' });
renderApp({ text: 'elfso' });
renderApp({ text: 'elgso' });
renderApp({ text: 'elghso' });
renderApp({ text: 'elsho' });
perf.stop();
perf.printWasted();
perf.printExclusive();
