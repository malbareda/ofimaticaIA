---
title: "Índex de continguts i documents llargs"
sidebar_label: "S08 · Índex de continguts i documents llargs"
sidebar_position: 4
description: "Setmana 8 — Índex de continguts i documents llargs"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 8 — Índex de continguts i documents llargs

**BA2 — Comunicació professional amb IA** · 3 h

## Objectius

En acabar la sessió has de ser capaç de:

1. Generar un índex de continguts automàtic i mantenir-lo coherent.
2. Estructurar un manual d'usuari amb criteri propi a partir de material generat
   per IA.
3. Verificar la coherència interna d'un document llarg.

## L'índex automàtic

Un índex de continguts escrit a mà és una bomba de rellotgeria: el dia que
afegeixis un apartat o que el document creixi una pàgina, deixa de ser correcte i
ningú no se n'adona fins que ja s'ha enviat.

L'índex automàtic **es genera a partir dels estils de títol**. Per això la sessió
5 era la sessió 5: si els títols són text en negreta, no hi ha índex possible.

El funcionament és sempre el mateix:

1. Els títols tenen aplicats els estils **Títol 1**, **Títol 2**, **Títol 3**.
2. Insereixes l'índex on el vulguis.
3. Quan canvia el document, **l'actualitzes**.

El pas 3 és el que s'oblida. L'índex no es refà sol en la majoria d'editors:
mostra el que hi havia quan es va generar. Actualitzar-lo abans d'enviar el
document ha de ser un reflex.

:::tip Comprovació de 5 segons
Abans d'enviar qualsevol document amb índex: actualitza'l i mira si els números de
pàgina han canviat. Si han canviat, portaves un índex incorrecte.
:::

## Documents llargs

Un document de quatre pàgines es controla llegint-lo. Un de quaranta, no. Fan
falta eines:

**Navegació per estructura.** El panell d'esquema et deixa veure el document com
un índex plegable, i moure un apartat sencer arrossegant-lo. És la manera de
reorganitzar sense retallar i enganxar.

**Referències creuades.** Quan escrius «vegeu l'apartat 3.2 a la pàgina 14», això
ha de ser un camp, no text. Si és text, al primer canvi menteix.

**Marcadors.** Punts amb nom als quals pots apuntar des d'altres llocs del
document.

**Numeració vinculada als estils.** Si la numeració dels apartats està lligada als
estils de títol, inserir un apartat al mig renumera tota la resta sol.

## Escriure un manual amb IA

Aquí és on cal anar amb compte, perquè la IA fa molt bé una part de la feina i
molt malament una altra.

**Ho fa bé:** generar text explicatiu correcte i llegible, mantenir un to
uniforme, redactar passos a partir d'una descripció, i proposar una estructura
raonable.

**Ho fa malament:** saber com funciona **la teva** aplicació. Si li demanes un
manual d'un programa que no coneix, se l'inventarà: botons que no existeixen,
menús amb noms plausibles i passos que no porten enlloc.

Un manual amb un pas inventat és pitjor que cap manual. Qui el segueixi es
perdrà, i confiarà en tu una vegada menys.

:::warning La divisió de la feina
**Tu** decideixes què hi ha d'anar, en quin ordre i quins passos són certs. **La
IA** ho redacta.

Mai al revés.
:::

### Què ha de tenir un manual d'usuari

| Element | Per què |
|---|---|
| **Per a qui és** | Un manual per a l'usuari final i un per al tècnic no s'assemblen |
| **Què cal tenir abans de començar** | Permisos, comptes, dades |
| **Passos numerats** | Un pas és una acció. Si un pas té tres accions, són tres passos |
| **Què s'ha de veure** | Després de cada pas important, què confirma que ha anat bé |
| **Què fer si falla** | La part que sempre falta i que sempre es necessita |
| **A qui trucar** | Quan res del que hi ha no funciona |

L'apartat de «què fer si falla» és el que distingeix un manual escrit per algú
que ha atès trucades d'un escrit per algú que no.

<Activitat num={8}>

## Activitat: El manual del Forn Cardús

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-08-documents-llargs-i-index.docx">Activitat-08-documents-llargs-i-index.docx</a>
:::

### Context

L'encàrrec ve directament de la Núria:

> «El Forn Cardús ens truca dues vegades per setmana per la mateixa cosa: no saben
> canviar el rotlle de la impressora d'etiquetes ni resoldre l'embús que ve
> després. Cada trucada són vint minuts.
>
> Vull un manual que puguin tenir penjat al costat de la màquina. Que el pugui
> seguir qualsevol persona del forn, inclosa la que va entrar dilluns. I que sigui
> **curt**: si fa vuit pàgines, no el llegirà ningú.»

### El que necessites saber

El material tècnic real te'l donarà el professorat: el model de la impressora, el
procediment de canvi de rotlle i els errors habituals amb el seu significat.

**Aquest material és la teva font de veritat.** Tot el que digui el manual ha de
sortir d'aquí. Si la IA afegeix un pas que no hi és, sobra.

### Part 1 — Decidir l'estructura

**Abans de generar res**, escriu tu l'esquema del manual: quins apartats hi haurà
i en quin ordre.

Aquest esquema el decideixes tu. Pots discutir-lo amb la IA, però l'has de poder
defensar: per què aquest ordre i no un altre.

### Part 2 — Redactar

Amb l'esquema decidit i el material tècnic com a font, redacta el manual amb
ajuda de la IA.

Requisits:

- Entre **3 i 4 pàgines**. Ni més ni menys.
- Estils reals, no format manual.
- **Índex de continguts automàtic**.
- Capçalera amb el nom del client i peu amb la numeració.
- Els sis elements de la taula d'aquests apunts.

### Part 3 — Verificar

Aquesta part és la que compta més.

Repassa el manual **contra el material tècnic** i comprova cada afirmació. Ompli
aquesta taula amb tot el que la IA hagi generat que no surti de la font:

| Afirmació del manual | Surt del material tècnic? | Què he fet |
|---|---|---|
| | | |

Si no hi ha res a la taula, torna a mirar-ho. Amb un document de tres pàgines
generat amb IA, que no hi hagi ni una sola afirmació afegida és molt poc
probable.

### Part 4 — La prova del dilluns

Dona el manual a un company que no hagi vist el material tècnic. Que el llegeixi i
et digui:

- En quin pas s'ha perdut, si s'ha perdut.
- Què faria si el pas 3 no li funcionés.

Anota què t'ha dit i **què has canviat a partir d'això**.

### Què has de lliurar

1. L'esquema de la part 1, amb la justificació de l'ordre.
2. El manual acabat, amb índex automàtic.
3. La taula de verificació de la part 3.
4. El resultat de la prova del dilluns i els canvis que n'han sortit.
5. La documentació del procés: prompts i decisions.

:::tip Ús de la IA
Permès per redactar. **No permès per decidir l'estructura sense que la revisis**,
i sobretot no permès per inventar contingut tècnic.

L'entrevista se centrarà en si saps distingir el que has verificat del que t'has
cregut.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | El manual conté passos que no surten del material tècnic, o no té índex automàtic |
| **Suficient** | El manual és correcte, té els sis elements i l'índex funciona |
| **Notable** | La taula de verificació és real i mostra que s'ha contrastat cada afirmació |
| **Excel·lent** | A més, l'apartat de «què fer si falla» cobreix els errors del material tècnic amb llenguatge que la Sílvia entendria, i la prova del dilluns ha provocat un canvi de veritat |

### Preguntes que et poden fer

- Obre l'índex i afegeix un apartat nou. Què has de fer perquè l'índex sigui
  correcte?
- La IA et va afegir alguna cosa que no era al material tècnic? Quina?
- Per què has posat aquest apartat abans que aquell altre?
- El teu company s'ha perdut en algun pas. Què has canviat?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 2.6 | Elabora manuals específics. | Principal |
| 2.3 | Utilitza aplicacions i perifèrics per introduir textos i imatges. | Principal |
| 9.3 | Utilitza manuals d'usuari per instruir en l'ús d'aplicacions. | Reforç |
