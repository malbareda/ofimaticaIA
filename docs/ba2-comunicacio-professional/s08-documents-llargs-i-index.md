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

**I quan li dones el manual real?** Llavors no s'inventa res, però comet un error
més subtil: **arrossega coses que són certes per a la màquina però no per al teu
client**. Si el manual del fabricant explica com posar la cinta, la IA ho posarà,
encara que la impressora del client no en porti. Destil·lar no és resumir: és
decidir què s'aplica i què no, i això ho decideix qui coneix la instal·lació.

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

## Activitat: El manual de l'obrador del Forn Cardús

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-08-documents-llargs-i-index.docx">Activitat-08-documents-llargs-i-index.docx</a>
:::

### Context

L'encàrrec ve directament de la Núria:

> «Del Forn Cardús ens truquen dues vegades per setmana per la mateixa cosa: a
> l'obrador no saben canviar el rotlle de la impressora d'etiquetes ni resoldre
> l'embús que ve després. Cada trucada són vint minuts.
>
> Tenen el manual del fabricant, però són cinquanta pàgines en castellà i ningú
> no l'ha obert mai.
>
> Vull un manual que puguin tenir penjat al costat de la màquina. Que el pugui
> seguir qualsevol persona de l'obrador, inclosa la que va entrar dilluns. I que
> sigui **curt**: si fa vuit pàgines, no el llegirà ningú.»

### El que necessites

Treballaràs amb **dues fonts**:

1. **El manual del fabricant**: TSC, *Serie MX240/MX340/MX640 — Manual del
   usuario*. El trobaràs a la web de TSC, i també en tens una còpia aquí:
   <a href="../material/s08/TSC-MX240-manual-del-usuario.pdf">TSC-MX240-manual-del-usuario.pdf</a>.
   És llarg, és genèric i parla de moltes coses que al forn no existeixen.
2. **La fitxa de client de Vallcorba**: te la donarà el professorat. Explica com
   està instal·lada la impressora del forn i què pot fer i què no pot fer el
   personal.

**Si el manual i la fitxa no coincideixen, mana la fitxa.**

La IA t'ha d'ajudar a llegir i destil·lar el manual: és exactament la feina per a
la qual és útil. Però ella no sap com és la impressora del forn. Això ho saps tu,
perquè tens la fitxa.

### Part 1 — Decidir l'estructura

**Abans de demanar res a la IA**, escriu tu l'esquema del manual: quins apartats
hi haurà i en quin ordre.

Aquest esquema el decideixes tu. Pots discutir-lo amb la IA, però l'has de poder
defensar: per què aquest ordre i no un altre. Pista: pensa en **quin moment**
algú de l'obrador obrirà aquest manual.

### Part 2 — Destil·lar i redactar

Amb l'esquema decidit, fes servir la IA per treure del manual del fabricant el
que necessites, creua-ho amb la fitxa de Vallcorba i redacta el manual.

Requisits:

- Entre **3 i 4 pàgines**, sense comptar l'annex de la part 4. Ni més ni menys.
- Estils reals, no format manual.
- **Índex de continguts automàtic**.
- Capçalera amb el nom del client i peu amb la numeració.
- Els sis elements de la taula d'aquests apunts.
- Com a mínim **una referència creuada** dins del document (per exemple, de «què
  fer si falla» al procediment corresponent). Ha de ser un camp, no text escrit a
  mà.

### Part 3 — Verificar

Aquesta part és la que compta més.

Repassa el manual frase per frase **contra les dues fonts**. Omple aquesta taula
amb tot el que la IA t'hagi posat i que:

- no surt de cap de les dues fonts, o
- surt del manual del fabricant però **no s'aplica a la impressora del forn**, o
- contradiu la fitxa de Vallcorba.

| Afirmació | D'on surt (pàgina del manual / fitxa / enlloc) | Quin problema té | Què he fet |
|---|---|---|---|
| | | | |

Si no hi ha res a la taula, torna a mirar-ho. Destil·lar cinquanta pàgines amb IA
sense que s'hi coli res que no toca és molt poc probable.

### Part 4 — Taula de referències

El manual de la Sílvia no porta cites: ella no les necessita. Però Vallcorba sí.
El dia que TSC tregui una versió nova del manual, o que canviem la configuració de
la impressora, algú haurà de saber quins apartats del teu manual cal revisar i on
mirar.

Afegeix al final del document un **annex** (en una pàgina nova, amb el seu títol a
l'índex) amb:

**1. La taula de referències.** Una fila per a cada apartat del teu manual:

| Apartat del meu manual | Secció del manual del fabricant | Pàgines | Com l'he fet servir |
|---|---|---|---|
| Botons del panell | 2.3.1 Indicadores LED y botones | 12–13 | Resumit |

A la columna «Com l'he fet servir» hi va una d'aquestes opcions:

- **Resumit**: diu el mateix que el manual, més curt i més clar.
- **Adaptat per la fitxa**: el manual diu una cosa, però la fitxa de Vallcorba la
  canvia. Indica quina.
- **Afegit propi**: no surt de cap font. Has de poder explicar per què l'has
  afegit.

Normes:

- Les pàgines són les **impreses al peu** del manual (- 17 -), no les que marca el
  visor de PDF.
- Les seccions s'anomenen tal com surten al manual original, amb el seu número i
  en castellà.
- Si un apartat ve només de la fitxa, a la columna de secció hi posa «Fitxa de
  client Vallcorba».

**2. La referència bibliogràfica** de les dues fonts, en format APA. La del manual
ha d'incloure l'autor (l'empresa), l'any, el títol en cursiva i l'adreça web d'on
l'has descarregat.

### Part 5 — La prova del dilluns

Dona el manual a un company que no hagi vist ni el manual del fabricant ni la
fitxa. Que el llegeixi i et digui:

- En quin pas s'ha perdut, si s'ha perdut.
- Què faria si el pas 3 no li funcionés.

Anota què t'ha dit i **què has canviat a partir d'això**.

### Què has de lliurar

1. L'esquema de la part 1, amb la justificació de l'ordre.
2. El manual acabat, amb índex automàtic, la referència creuada i l'annex de
   referències.
3. La taula de verificació de la part 3.
4. El resultat de la prova del dilluns i els canvis que n'han sortit.
5. La documentació del procés: prompts i decisions.

:::tip Ús de la IA
Permès per llegir, resumir i redactar. **No permès per decidir l'estructura sense
que la revisis, ni per decidir què s'aplica al forn.**

L'entrevista se centrarà en si saps distingir el que has verificat del que t'has
cregut.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | El manual conté passos que no s'apliquen al forn o que contradiuen la fitxa, o no té índex automàtic |
| **Suficient** | El manual és correcte, té els sis elements, l'índex funciona i hi ha la taula de referències |
| **Notable** | La taula de verificació és real: detecta coses que la IA va treure del manual i que no s'apliquen. Les referències són correctes i es poden comprovar |
| **Excel·lent** | A més, l'apartat de «què fer si falla» resol les trucades de la fitxa amb llenguatge que la Sílvia entendria, els conflictes entre manual i fitxa estan ben resolts i la prova del dilluns ha provocat un canvi de veritat |

### Preguntes que et poden fer

- Obre l'índex i afegeix un apartat nou. Què has de fer perquè l'índex sigui
  correcte?
- Què et va posar la IA que era cert per a la impressora però no servia per al
  forn?
- Aquest pas, de quina pàgina del manual surt? Ensenya-m'ho.
- El manual diu una cosa i la fitxa una altra. Quin cas has trobat i què has fet?
- Per què has posat aquest apartat abans que aquell altre?
- El teu company s'ha perdut en algun pas. Què has canviat?

</Activitat>

## Per saber-ne més

- TSC Auto ID Technology. *Serie MX240/MX340/MX640 — Manual del usuario*. Còpia
  arxivada per a l'activitat: <a href="../material/s08/TSC-MX240-manual-del-usuario.pdf">PDF</a>.
  El document és propietat de TSC; la versió vigent és la de la web del fabricant.

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 2.6 | Elabora manuals específics. | Principal |
| 2.3 | Utilitza aplicacions i perifèrics per introduir textos i imatges. | Principal |
| 9.3 | Utilitza manuals d'usuari per instruir en l'ús d'aplicacions. | Reforç |
