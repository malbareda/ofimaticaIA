---
title: "Plantilles, correspondència, macros i exportació"
sidebar_label: "S09 · Plantilles, correspondència, macros i exportació"
sidebar_position: 5
description: "Setmana 9 — Plantilles, correspondència, macros i exportació"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 9 — Plantilles, correspondència, macros i exportació

**BA2 — Comunicació professional amb IA** · 3 h

## Objectius

En acabar la sessió has de ser capaç de:

1. Dissenyar una plantilla reutilitzable de document.
2. Executar una combinació de correspondència amb dades de prova.
3. Gravar una macro i comparar-la amb codi generat per IA.
4. Exportar un document a un altre format conservant-ne l'estructura.

## Plantilles

Una **plantilla** és un document que serveix de motlle. Quan en crees un de nou a
partir d'ella, obtens una còpia amb l'estructura, els estils i les parts fixes ja
posades.

La pregunta no és si en saps fer una, sinó **quan val la pena**:

| Val la pena | No val la pena |
|---|---|
| El document es repeteix i sempre és igual | Cada document és diferent |
| Hi ha parts fixes (logotip, peu legal, dades de l'empresa) | Només es repeteix el format |
| El fan servir diverses persones | El fas només tu, un cop l'any |
| Importa que tots surtin iguals | No importa |

Una plantilla ben feta té **camps buits marcats visualment**. Si qui l'omple no
veu clarament què ha de canviar, acabarà enviant una carta que diu «Benvolgut
\[NOM\]».

## Combinació de correspondència

La **combinació de correspondència** (*mail merge*) genera molts documents
personalitzats a partir d'un de sol i una taula de dades.

Té tres peces:

1. **El document principal**: el text, amb camps on ha d'anar la informació
   variable.
2. **La font de dades**: una taula on cada fila és un destinatari i cada columna
   un camp.
3. **La combinació**: el procés que genera un document per fila.

L'exemple típic és una carta a 300 clients on cadascú veu el seu nom. Però
serveix per a molt més: etiquetes, certificats, factures, contractes tipus.

:::warning L'error que arruïna la feina
Els noms de les columnes han de coincidir **exactament** amb els camps. Un espai
de més, un accent diferent o una majúscula i el camp surt buit o amb un error.

I abans de generar 300 documents, **genera'n tres i mira-te'ls**. Els errors de
combinació es veuen de seguida al primer document, i molt malament quan ja has
enviat 300.
:::

## Macros

Una **macro** és una seqüència d'accions guardada per repetir-la. Hi ha dues
maneres de fer-ne:

**Gravar-la.** Poses a gravar, fas les accions, atures. El programa guarda el que
has fet. És immediat i no cal saber programar. A canvi, el codi que surt és
llarg, repetitiu i sovint fràgil: grava fins i tot els moviments del cursor.

**Escriure-la.** Escrius directament el codi. És més net i més robust, però has de
saber-ne.

I ara n'hi ha una tercera: **demanar-la a una IA**. Funciona sorprenentment bé
per a coses senzilles, i és exactament el tipus de codi on val la pena
desconfiar: una macro fa canvis al document, i si fa una cosa diferent de la que
creus, els fa igualment.

:::tip La regla de les macros generades
Prova-la sempre **en una còpia** del document. No en l'original. Mai.
:::

### Per a què serveixen de veritat

No per a coses espectaculars. Per a coses avorrides que fas cada dia: aplicar un
conjunt de formats, netejar un text enganxat de fora, inserir un bloc fix,
convertir unitats, treure espais dobles.

Una macro que t'estalvia trenta segons, deu vegades al dia, són vint hores l'any.

## Importar i exportar

Els documents no viuen sols: es converteixen, es comparteixen i s'obren en altres
programes.

| Format | Per a què | Què hi perds |
|---|---|---|
| **DOCX** | Intercanvi amb altres suites | Poc, si no hi ha res exòtic |
| **PDF** | Enviar a un client, imprimir | L'editabilitat. És el que vols |
| **ODT** | Format obert, LibreOffice | Poc |
| **TXT** | Només el text | Absolutament tot el format |
| **HTML** | Publicar en web | Estructura raonable, disseny no |

El que has de saber és que **cap conversió és perfecta**. El que sobreviu millor
és el que està fet amb estils; el que pitjor, el format manual, els quadres de
text i les taules complicades.

Regla: **si el document és definitiu i no s'ha d'editar més, envia'l en PDF.** T'estalvia
que arribi descol·locat i que algú el canviï sense dir-t'ho.

<Activitat num={9}>

## Activitat: La carta de renovació

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-09-plantilles-correspondencia-macros.docx">Activitat-09-plantilles-correspondencia-macros.docx</a>
:::

### Context

La Rocío Salas t'ha trobat al passadís:

> «Cada gener he d'enviar la carta de renovació del contracte de manteniment a
> tots els clients. Són quaranta cartes i les faig una per una, canviant el nom, la
> data i l'import. Hi perdo un matí sencer i sempre se me n'escapa alguna amb el
> nom de l'anterior.
>
> M'han dit que això es pot fer automàtic. Si és veritat, munta-ho.»

### Part 1 — La plantilla

Crea una plantilla de carta formal per a Vallcorba Informàtica amb:

- Capçalera amb les dades de l'empresa.
- Blocs per a les dades del destinatari.
- Cos amb els camps variables clarament identificats.
- Peu amb la informació legal.
- Estils reals. Cap format manual.

### Part 2 — Les dades

Necessites una taula amb **almenys 12 clients** de prova.

Fes-la generar per la IA. Ha de tenir, com a mínim: nom de l'empresa, persona de
contacte, adreça, tipus de contracte, import mensual i data de renovació.

Hi ha d'haver **quatre files problemàtiques** que has de crear expressament:

| Problema | Per què el poses |
|---|---|
| Un nom amb accents i una dièresi | Comprova la codificació |
| Un nom d'empresa molt llarg | Comprova que no trenca el disseny |
| Un camp buit | Comprova què passa quan falta una dada |
| Un import amb decimals | Comprova el format numèric |

### Part 3 — La combinació

Executa la combinació de correspondència.

**Genera primer tres cartes i mira-te-les.** Comprova què passa amb les quatre
files problemàtiques. Anota-ho.

Després genera-les totes.

### Part 4 — La macro

Grava una macro que faci una tasca repetitiva de preparació del document. Per
exemple: netejar espais dobles, aplicar l'estil del cos a tot el text enganxat, o
inserir el bloc de signatura.

Després, **demana a la IA que et generi el codi de la mateixa macro**.

Compara les dues:

| | Macro gravada | Macro generada per IA |
|---|---|---|
| Línies de codi | | |
| Funciona a la primera? | | |
| Què fa de més o de menys | | |
| Quina faries servir i per què | | |

:::danger Prova-la en una còpia
La macro generada per IA es prova **sempre** en una còpia del document. Si fa una
cosa diferent de la que creus, no vols descobrir-ho a l'original.
:::

### Part 5 — Exportar

Exporta una de les cartes combinades a PDF i a un altre format. Comprova què s'ha
mantingut i què no.

### Què has de lliurar

1. La plantilla.
2. La taula de dades amb les quatre files problemàtiques marcades.
3. Tres cartes combinades, incloent-hi almenys una de les problemàtiques.
4. Què ha passat amb cada fila problemàtica i com ho has resolt.
5. Les dues macros i la taula comparativa.
6. La carta exportada, amb una nota del que s'ha perdut en la conversió.

:::tip Ús de la IA
Permès per generar les dades de prova i el codi de la macro. **La macro
generada l'has de poder explicar línia per línia**: si no saps què fa una part,
treu-la o esbrina-ho.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | La combinació no funciona, o les dades de prova no tenen cap fila problemàtica |
| **Suficient** | La plantilla, la combinació i la macro funcionen |
| **Notable** | S'han detectat i resolt els problemes de les quatre files, i la comparació de macros és substantiva |
| **Excel·lent** | A més, la plantilla està feta perquè una altra persona la pugui fer servir sense explicacions, i s'ha identificat què es perd en cada format d'exportació i per què |

### Preguntes que et poden fer

- Què va passar amb la fila del camp buit? Com ho has resolt?
- Obre la macro generada per la IA. Què fa aquesta línia?
- Per què vas generar tres cartes abans de generar-les totes?
- Si la Rocío ha d'afegir un client nou l'any que ve, què ha de fer?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 2.2 | Dissenya plantilles. | Principal |
| 2.4 | Importa i exporta documents creats amb altres aplicacions i en altres formats. | Principal |
| 2.5 | Crea i utilitza macros en la realització de documents. | Principal |
