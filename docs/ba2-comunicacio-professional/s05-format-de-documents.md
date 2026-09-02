---
title: "Format de documents: estils, seccions i capçaleres"
sidebar_label: "S05 · Format de documents: estils, seccions i capçaleres"
sidebar_position: 1
description: "Setmana 5 — Format de documents: estils, seccions i capçaleres"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 5 — Format de documents: estils, seccions i capçaleres

**BA2 — Comunicació professional amb IA** · 3 h

:::danger Sessió sense IA
Aquesta és una de les poques sessions del curs on **no pots fer servir cap eina
d'IA**. Ni per formatar, ni per consultar, ni per «preguntar un dubte».

No és un càstig ni una desconfiança. És una mesura: cal saber què saps fer tu
sol abans de mesurar què saps fer amb ajuda. La setmana que ve repetiràs la
mateixa feina amb IA i podràs comparar.
:::

## Objectius

En acabar la sessió has de ser capaç de:

1. Aplicar estils en comptes de format manual en un document llarg.
2. Fer servir seccions, capçaleres i peus per estructurar un document.
3. Personalitzar l'entorn del processador de textos.

## El problema que resols amb estils

Obre qualsevol document fet per algú que no en sap. Trobaràs títols que són text
normal en negreta i cos 16, apartats separats amb quinze salts de línia, i una
numeració escrita a mà que va bé fins que algú insereix un apartat al mig.

Aquest document **funciona**. El problema arriba quan s'ha de canviar alguna
cosa: canviar el color dels títols vol dir repassar-los un per un, i afegir un
apartat vol dir renumerar-ho tot.

Un **estil** és un nom que agrupa un conjunt de característiques de format. En
comptes de dir «aquest text va en Arial 16, negreta, blau, amb 12 punts abans i 6
després», dius «això és un Títol 1». Si més endavant decideixes que els títols van
en un altre color, canvies l'estil una vegada i canvien tots.

| Format manual | Estils |
|---|---|
| Canviar el disseny: hores | Canviar el disseny: segons |
| L'índex automàtic no funciona | L'índex es genera sol |
| Cada document és diferent | Tots els documents de l'empresa iguals |
| Inserir un apartat trenca la numeració | La numeració es recalcula |

### Els estils que faràs servir

| Estil | Per a què |
|---|---|
| **Títol** | El títol del document. Un i prou |
| **Títol 1** | Els apartats principals |
| **Títol 2** | Els subapartats |
| **Títol 3** | El nivell de sota, si cal |
| **Normal** | El text corrent |

:::tip La regla
No decideixis mai el format directament. Decideix **què és** aquell text i
aplica-li l'estil que li correspon. El format ve després, i ve sol.
:::

## Seccions

Una **secció** és un tros de document amb la seva pròpia configuració de pàgina:
marges, orientació, capçalera, peu i numeració.

Mentre un document tingui una sola secció, tot és igual de la primera pàgina a
l'última. Si necessites que la portada no porti número de pàgina, que un annex
vagi apaïsat o que cada capítol tingui una capçalera diferent, **necessites
seccions**.

Es creen amb un **salt de secció**, que no és el mateix que un salt de pàgina:

- **Salt de pàgina**: comença una pàgina nova. Res més.
- **Salt de secció**: comença un bloc nou amb configuració independent.

:::warning D'on venen la meitat dels problemes de format
Quan un document es comporta de manera inexplicable —la capçalera canvia sola, la
numeració es reinicia, una pàgina surt apaïsada— gairebé sempre hi ha un salt de
secció mal posat.

Els salts són invisibles per defecte. **Activa la visualització de caràcters no
imprimibles** i deixa-la activada mentre treballes.
:::

## Capçaleres i peus

La capçalera i el peu són zones que es repeteixen a cada pàgina de la secció. Hi
va la informació que ha d'acompanyar el document sempre:

| On | Què hi va habitualment |
|---|---|
| **Capçalera** | Nom de l'empresa, títol del document, logotip |
| **Peu** | Número de pàgina, data, referència, avís de confidencialitat |

El número de pàgina **no s'escriu**: s'insereix com a camp. Un camp és un valor
que el programa calcula sol. Si l'escrius a mà, deixarà de ser correcte tan bon
punt afegeixis un paràgraf.

Per lligar-ho amb les seccions: quan crees una secció nova, la seva capçalera
comença **vinculada** a l'anterior. Si vols que siguin diferents, has de trencar
aquest vincle explícitament. És l'altra meitat dels problemes de format.

<Activitat num={5}>

## Activitat: Formatar sense IA

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-05-format-de-documents.docx">Activitat-05-format-de-documents.docx</a>
:::

### Context

La Rocío Salas, d'administració, t'ha enviat això a les nou del matí:

> «Bon dia. Aquest és el protocol d'atenció d'incidències que va escriure l'Aleix
> l'any passat. El text està bé, però el document és una vergonya i ara l'hem
> d'enviar a tots els clients amb contracte de manteniment.
>
> Te'l passo tal com me'l va donar. Fes-lo servir amb la guia d'estil de
> l'empresa, que te la deixo adjunta. El necessito abans de dinar.»

### Què has de fer

Rebràs **dos fitxers**:

- El protocol en brut: text correcte, format inexistent.
- La guia d'estil de Vallcorba Informàtica.

Has de deixar el document conforme a la guia. Concretament:

1. **Aplicar els estils** que indica la guia a títols, subtítols i text normal.
   Cap format manual.
2. **Crear una portada** en una secció pròpia, sense número de pàgina.
3. **Numerar les pàgines** del cos, començant per 1 a la primera pàgina després
   de la portada.
4. **Posar capçalera i peu** segons la guia, amb la capçalera diferent a la
   portada.
5. **Generar la numeració automàtica** dels apartats.

### Ús de la IA en aquesta activitat

:::danger Sense IA
En aquesta activitat **no es pot fer servir cap eina d'IA**: ni per generar
contingut, ni per consultar com es fa una cosa, ni per revisar el resultat.

Sí que pots fer servir l'ajuda del programa, la documentació oficial de Google
Docs i preguntar al professorat.

Aquesta activitat es fa a l'aula i es lliura abans de sortir.
:::

### Què has de lliurar

1. El document formatat.
2. **Una llista dels punts on t'has encallat**, encara que els hagis resolt. Què
   no sabies fer i com te n'has sortit.

El segon punt compta. La setmana vinent el faràs servir per comparar.

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | Hi ha format manual on hauria d'haver-hi estils, o la portada no està en una secció pròpia |
| **Suficient** | Els estils estan aplicats i el document compleix la guia |
| **Notable** | La numeració de pàgines i les capçaleres funcionen correctament amb les seccions, i s'ha comprovat |
| **Excel·lent** | A més, el document aguanta una prova de resistència: si s'insereix un apartat nou al mig, tot es recol·loca sol |

### Preguntes que et poden fer

- Ensenya'm un títol del document. Quin estil té aplicat?
- Si ara et demano que tots els títols siguin verds, quant trigues?
- Per què la portada no té número de pàgina però la pàgina següent sí?
- Amb què t'has encallat més?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 2.1 | Personalitza les opcions de programari i la barra d'eines. | Principal |
| 2.3 | Utilitza aplicacions i perifèrics per introduir textos i imatges. | Principal |
