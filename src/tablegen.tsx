import moize from 'moize';
import * as React from 'react';
import './index.css';

const NUM = 100;

export const Table = ((props: any): JSX.Element => {
  return (<div className="s_table" {...props} />);
});

const Tr = ((props: any): JSX.Element => {
  return (<div className="s_tr" {...props} />);
});

const Td = ((props: any): JSX.Element => {
  return (<div className="s_td" {...props}>{props.children}</div>);
});

const fivetimes = (txt: string): string[] => new Array(NUM).fill(txt);

export const getRows = moize.react((txt: string): JSX.Element => {
  const rows: any = fivetimes(txt).map((e: string, i: number) => (<Td>{e} - {i}</Td>) as any);

  return (<Tr>{rows} <span><b>x</b></span></Tr>);
});

export const ELEMS = ['majom', 'zsiraf', 'tigris', 'kutya', 'kacsa',
  'ANAKONDA',
  'ANDESZI KONDA',
  'ANNA KOLIBRI',
  'ANOA',
  'ANUBIS PÁVIÁN',
  'APELLA',
  'ARAB BEJZA',
  'ARAKANGA VAGY MAKOA',
  'ARANYSAKÁL',
  'ARANYSZEMŰ FÁTYOLKA',
  'ARARAUNA',
  'ARGENTIN PUMA',
  'ATLANTI REPÜLŐ HAL',
  'ATLANTI TŐRFARKÚ RÁK',
  'BABUIN PÁVIÁN',
  'BAJKÁL FÓKA',
  'BAKCSÓ',
  'BALKÁNI GERLE',
  'BANKIVATYÚK',
  'BARÁTFÓKA',
  'BARÁT REMETE PAPAGÁJ',
  'BARÁZDABILLEGETŐ',
  'BARLANGI VAK GŐTE',
  'BARNA MEDVA',
  'BARNA PELKÁN',
  'BARNA VARANGY',
  'BARRAKUDA VAGY NYILAS CSUKA',
  'BELDING-ÜRGE',
  'BELUGA VAGY FEHÉR DELFIN',
  'BERBER MAKÁKÓ',
  'BERBER OROSZLÁN',
  'BETÜS SÜGÉR',
  'BEZOÁRKECSKE',
  'BÍBIC',
  'BÓBITÁS FÜRJ',
  'BOBITÁS KAKADU',
  'BOJTOSÚSZÓJÚ MARADVÁNY HAL',
  'BÖLÉNY',
  'BÖLÖMBIKA',
  'BONTÓ',
  'BORDÁS KROKODIL',
  'BORJÚFÓKA',
  'BORZ',
  'BONTO SÁSKA BOTOS KÜLÖNTE',
  'BÚBOS BANKA',
  'BÚBOS CINEGE',
  'BUKDOSÓ VÉSZMADÁR',
  'BULDOGDNEVÉR',
  'BUNDER VAGY RHESUS MAJOM',
  'BÜTYKÖS HATTYÚ',
  'BÚVÁR PÓK',
];
