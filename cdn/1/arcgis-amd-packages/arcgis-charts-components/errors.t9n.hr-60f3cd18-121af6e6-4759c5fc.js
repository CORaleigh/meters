/*! For license information please see errors.t9n.hr-60f3cd18-121af6e6-4759c5fc.js.LICENSE.txt */
define(["exports"],(function(i){"use strict";const e="Došlo je do pogreške tijekom učitavanja grafikona.",a="Na ovom grafikonu ima ukupno ${ elementCount } traka. Stupčasti grafikoni s jednom serijom ograničeni su na ${ totalLimit } stupaca. Odaberite Polje kategorija s manje jedinstvenih vrijednosti ili primijenite filtar na svoje podatke.",t="Stupčasti grafikoni sa dvije serije ograničeni su na ${ totalLimit } stupaca ili ${ seriesLimit } stupaca po seriji. Odaberite Polje kategorija s manje jedinstvenih vrijednosti ili primijenite filtar na svoje podatke.",n="Stupčasti grafikoni s tri ili više serija ograničeni su na ${ totalLimit } stupaca ili ${ seriesLimit } stupaca po seriji. Odaberite Polje kategorija s manje jedinstvenih vrijednosti ili primijenite filtar na svoje podatke.",o="Trakasti grafikoni su ograničeni na ${ seriesLimit } serija. Odaberite polje podijeljeno prema s manje jedinstvenih vrijednosti",r="Došlo je do pogreške pri stvaranju grafikona.",s="Ne može se primijeniti transformacija dnevnika na negativne ili nulte vrijednosti.",j="Ne može se primijeniti transformacija kvadratnog korijena na negativne vrijednosti.",m="Došlo je do pogreške tijekom učitavanja sloja. URL = ${ url }. Id stavke portala = ${ portalItemId }.",d="${ dataPath } mora biti jedinstveno. Serija naziva ${ seriesName } ima ID (${ seriesID }) koji već koristi druga serija.",u="${ dataPath } ne može izvoditi nebrojeno agregiranje na ne-numeričkom polju.",l="${ dataPath } nedostaje svojstvo naziva ${ missingProperty }.",v="${ dataPath } mora biti kraće od ${ limit } znakova.",p="${ dataPath } ne smije imati manje od ${ limit } stavki.",k="${ dataPath } ne smije imati više od ${ limit } stavki.",g="${ dataPath } mora imati barem jedan znak koji nije razmak.",C="${ dataPath } ne smije imati ${ additionalProperty }.",L="${ dataPath } mora biti jednak jednoj od ovih dopuštenih vrijednosti: ${ allowedValues }.",c="${ dataPath } mora odgovarati shemi jednog od ovih: ${ schemaOptions }.",h="Raspršeni grafikoni s proporcionalnim simbolima nisu podržani. Primijenjena je zadana veličina simbola.",$="Nije uspjelo čitanje ulaznih podataka.",x="Histogrami zahtijevaju najmanje dvije numeričke vrijednosti.",f="Očekivana vrsta serije po indeksu je ${ seriesIndex } je '${ expectedType }' ali primljeno je '${ receivedType }' umjesto toga",S="Osigurajte da zbroj odabranih numeričkih polja vraća sve pozitivne ili negativne vrijednosti.",P="U ovom grafikonu ima ukupno ${ sliceCount } isječaka. Tortni grafikoni ograničeni su na ${ totalLimit } komada. Odaberite Polje kategorije s manje jedinstvenih vrijednosti, dodajte manje Numeričkih polja ili primijenite filtar na svoje podatke.",b="Mjerila temeljena na geoobjektima ograničena su na ${ totalLimit } geoobjekta. Filtrirajte svoje podatke.",E="Na ovom grafikonu ima ukupno ${ elementCount } oznaka. Trakasti grafikoni s jednom serijom ograničeni su na ${ totalLimit } oznaka. Odaberite Polje kategorija s manje jedinstvenih vrijednosti ili primijenite filtar na svoje podatke.",O="Trakasti grafikoni sa dvije serije ograničeni su na ${ totalLimit }oznaka ili ${ seriesLimit } oznaka po seriji. Odaberite Polje kategorija s manje jedinstvenih vrijednosti ili primijenite filtar na svoje podatke.",y="Trakasti grafikoni s tri ili više serija ograničeni su na ${ totalLimit } stupaca ili ${ seriesLimit } stupaca po seriji. Odaberite Polje kategorija s manje jedinstvenih vrijednosti ili primijenite filtar na svoje podatke.",I="Trakasti grafikoni su ograničeni na ${ seriesLimit } serija. Odaberite polje podijeljeno prema s manje jedinstvenih vrijednosti",z="Na ovom grafikonu ima ukupno ${ elementCount } kućica. Dijagrami pravokutnika s jednom serijom ograničeni su na ${ totalLimit } kućica. Odaberite Polje kategorija s manje jedinstvenih vrijednosti ili primijenite filtar na svoje podatke.",D="Dijagrami pravokutnika s dvije serije ograničeni su na ${ totalLimit } kućica ili ${ seriesLimit } kućica po seriji. Odaberite Polje kategorija s manje jedinstvenih vrijednosti ili primijenite filtar na svoje podatke.",T="Dijagrami pravokutnika s tri ili više serija ograničeni su na ${ totalLimit } kućica ili ${ seriesLimit } kućica po seriji. Odaberite Polje kategorija s manje jedinstvenih vrijednosti ili primijenite filtar na svoje podatke.",q="Dijagrami pravokutnika ograničeni su na ${ seriesLimit } serija. Odaberite polje podijeljeno prema s manje jedinstvenih vrijednosti",B="Dijagrami pravokutnika mogu prikazati do ${ totalLimit } netipičnih vrijednosti točaka. Filtrirajte svoje podatake.";var N={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:n,barSeriesCountCannotExceedLimit:o,defaultInvalidChart:r,negativeValueInDataForLogTransformation:s,negativeValueInDataForSqrtTransformation:j,layerLoadFailure:m,duplicateSeriesID:d,nonNumericAggregation:u,requiredProperty:l,minLength:v,minItems:p,maxItems:k,whiteSpacePattern:g,additionalProperty:C,enumValues:L,anyOfValues:c,bubbleChartValidateMsg:h,queryError:$,histogramEmptyField:x,invalidSeriesType:f,or:"ili",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:S,pieChartSlicesCannotExceedLimit:P,gaugeCannotExceedLimit:b,uniqueSeriesLineCountCannotExceedLimit:E,twoSeriesLineCountCannotExceedLimit:O,threePlusSeriesLineCountCannotExceedLimit:y,lineSeriesCountCannotExceedLimit:I,uniqueSeriesBoxCountCannotExceedLimit:z,twoSeriesBoxCountCannotExceedLimit:D,threePlusBoxLineCountCannotExceedLimit:T,boxSeriesCountCannotExceedLimit:q,boxSeriesOutlierCannotExceedLimit:B};i.additionalProperty=C,i.anyOfValues=c,i.barSeriesCountCannotExceedLimit=o,i.boxSeriesCountCannotExceedLimit=q,i.boxSeriesOutlierCannotExceedLimit=B,i.bubbleChartValidateMsg=h,i.default=N,i.defaultError=e,i.defaultInvalidChart=r,i.duplicateSeriesID=d,i.enumValues=L,i.gaugeCannotExceedLimit=b,i.histogramEmptyField=x,i.invalidSeriesType=f,i.layerLoadFailure=m,i.lineSeriesCountCannotExceedLimit=I,i.maxItems=k,i.minItems=p,i.minLength=v,i.negativeValueInDataForLogTransformation=s,i.negativeValueInDataForSqrtTransformation=j,i.nonNumericAggregation=u,i.or="ili",i.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=S,i.pieChartSlicesCannotExceedLimit=P,i.queryError=$,i.requiredProperty=l,i.threePlusBoxLineCountCannotExceedLimit=T,i.threePlusSeriesBarCountCannotExceedLimit=n,i.threePlusSeriesLineCountCannotExceedLimit=y,i.twoSeriesBarCountCannotExceedLimit=t,i.twoSeriesBoxCountCannotExceedLimit=D,i.twoSeriesLineCountCannotExceedLimit=O,i.uniqueSeriesBarCountCannotExceedLimit=a,i.uniqueSeriesBoxCountCannotExceedLimit=z,i.uniqueSeriesLineCountCannotExceedLimit=E,i.whiteSpacePattern=g}));