---
title: "Generació d'imatges amb IA"
sidebar_label: "S16 · Generació d'imatges amb IA"
sidebar_position: 5
description: "Setmana 16 — Generació d'imatges amb IA"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 16 — Generació d'imatges amb IA

**BA3 — Contingut, fonts i comunicació visual** · 3 h · Part A del bloc

## Objectius

En acabar la sessió has de ser capaç de:

1. Escriure prompts visuals descriptius i iterar-los amb criteri.
2. Editar una imatge generada per adaptar-la a un ús concret.
3. Reconèixer les limitacions dels generadors d'imatge.

## Descriure en comptes de demanar

Un prompt de text s'assembla a un encàrrec. Un prompt visual s'assembla més a
**descriure una imatge que ja existeix**.

Compara:

> Una imatge per a la web de l'empresa.

amb:

> Un taller d'informàtica petit i endreçat, llum natural entrant per una finestra
> lateral, un tècnic vist d'esquena treballant en un ordinador obert sobre un
> banc de fusta, colors freds, fotografia realista, format horitzontal.

La segona no és més llarga per caprici: cada element treu una decisió del model.

### Els elements d'un prompt visual

| Element | Exemples |
|---|---|
| **Subjecte** | Què surt a la imatge |
| **Acció o estat** | Què està fent o com està |
| **Entorn** | On és, què hi ha al voltant |
| **Llum** | Natural, lateral, contrallum, neó, hora daurada |
| **Enquadrament** | Pla general, primer pla, vista zenital, d'esquena |
| **Estil** | Fotografia, il·lustració plana, aquarel·la, 3D |
| **Paleta** | Colors freds, monocrom blau, tons terra |
| **Format** | Horitzontal, quadrat, vertical |
| **Què no vols** | Sense text, sense persones mirant a càmera |

No cal posar-los tots. Els que no poses, els decideix el model, i el que decideix
és el més comú del seu entrenament: composició centrada, llum uniforme i un
aspecte de banc d'imatges.

:::tip Si només poses tres coses
**Subjecte, llum i estil.** Són els que més canvien el resultat.
:::

## Iterar sobre una imatge

Iterar no és tornar a prémer «generar» esperant sort. Hi ha maneres concretes:

**Canviar una variable sola.** Si canvies cinc coses i millora, no saps quina ho
ha fet. Canvia'n una.

**Partir d'una imatge.** Molts generadors deixen donar una imatge de referència i
demanar variacions.

**Editar per zones.** Seleccionar una part i regenerar només aquella part
(*inpainting*), o ampliar el llenç i que ompli el que falta (*outpainting*).

**Fixar la llavor.** Si l'eina ho permet, mantenir la mateixa llavor
(*seed*) fa que els canvis siguin comparables en comptes de sortir una imatge
completament diferent cada cop.

## El que fan malament

Val la pena saber-ho abans de perdre-hi mitja hora:

| Limitació | Detall |
|---|---|
| **El text** | Ha millorat molt però segueix fallant. Per a un cartell amb text, genera la imatge i posa-hi el text tu |
| **Mans i dits** | El cas famós. Menys freqüent que abans, però encara passa |
| **Coherència entre imatges** | Fer que el mateix personatge surti igual a cinc imatges és difícil |
| **Detalls tècnics** | Un rack de servidors sortirà amb cables que no van enlloc. A un ull expert li salta |
| **Comptar** | «Quatre ordinadors» pot sortir amb tres o cinc |
| **Negacions** | «Sense text» de vegades genera text. Els models processen malament el que no han de fer |

:::warning La comprovació que has de fer sempre
**Mira la imatge com si l'hagués feta un altre i tu l'haguessis de validar.**

Compta els elements que has demanat. Mira les mans. Llegeix el text si n'hi ha.
Mira si els objectes tècnics tenen sentit. En una imatge per a la web de Vallcorba
Informàtica, un cable que va d'enlloc a enlloc el veurà **exactament** el tipus de
client que voleu.
:::

## Drets i honestedat

Dos temes diferents que convé no barrejar.

**Els drets sobre el que generes.** Depèn del servei i està en moviment. La
majoria de condicions comercials et cedeixen l'ús de la sortida, sovint amb
condicions diferents per al pla gratuït i el de pagament. **Abans de fer servir
una imatge generada en material comercial, mira les condicions del servei
concret.**

**D'on surt el que ha après el model.** Els generadors s'han entrenat amb imatges
d'internet, incloent-hi obres amb drets, i això és objecte de litigis oberts.
No t'has de posicionar, però sí saber que existeix el debat.

I una regla pràctica: **si demanes explícitament l'estil d'un artista viu i
identificable, estàs en un terreny que no és clar**. Descriure un estil («aquarel·la
amb traç solt») no és el mateix que dir un nom.

<Activitat num={16}>

## Activitat: Del brief a la imatge

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-16-generacio-imatges-amb-ia.docx">Activitat-16-generacio-imatges-amb-ia.docx</a>
:::

### Context

La Laia Puig té la web nova a mig fer i li falten les imatges:

> «Necessito tres imatges per a la web. No vull fotos de banc d'imatges d'aquestes
> de gent amb dents blanques assenyalant una pantalla, que es veuen de lluny i fan
> pena.
>
> Han de transmetre que som una empresa petita, que ens hi posem, i que la gent
> que hi treballa sap el que fa. I que semblin d'aquí, no de Califòrnia.»

### El brief

| Imatge | On va | Què ha de transmetre |
|---|---|---|
| **1. Capçalera** | Dalt de la portada, horitzontal i ampla | Ofici i proximitat |
| **2. Servei tècnic** | Secció de manteniment a empreses | Fiabilitat, feina ben feta |
| **3. Botiga** | Secció de venda i reparació | Que és un lloc on pots entrar i et tractaran bé |

### Part 1 — El primer intent

Per a cada imatge, escriu un prompt fent servir els elements de la taula
d'aquests apunts.

Genera-la i guarda-la, **encara que no t'agradi**.

### Part 2 — Tres iteracions

Per a **una** de les tres imatges, fes tres iteracions canviant **una sola cosa
cada vegada**.

| # | Què he canviat | Què ha canviat a la imatge | Millor o pitjor |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

### Part 3 — La revisió crítica

Per a cada imatge final, ompli la fitxa de comprovació:

| Comprovació | Imatge 1 | Imatge 2 | Imatge 3 |
|---|---|---|---|
| Els elements demanats hi són i en la quantitat correcta | | | |
| Mans i cossos correctes | | | |
| Els objectes tècnics tenen sentit | | | |
| Hi ha text no demanat | | | |
| Sembla d'aquí o sembla de banc d'imatges | | | |

**Marca almenys un defecte real per imatge.** N'hi ha; el que passa és que la
imatge et sembla bé perquè l'has feta tu.

### Part 4 — Preparar-les per a la web

Agafa les tres imatges finals i deixa-les llestes per publicar:

- Retallades a la proporció que toca segons on van.
- Redimensionades a una mida raonable per a web.
- Exportades al format correcte, amb la justificació.
- Amb el nom de fitxer descriptiu, no `imatge1.png`.

Anota la mida abans i després.

### Part 5 — La nota per a la Laia

Escriu-li **una nota curta** amb:

- Quines condicions d'ús té el servei que has utilitzat i què implica per a un ús
  comercial.
- Un defecte que hagis hagut de corregir o que no hagis pogut corregir.
- Si recomanaries generar les imatges o contractar un fotògraf, i per què.

### Què has de lliurar

1. Els tres prompts inicials amb les imatges generades.
2. La taula de les tres iteracions.
3. La fitxa de revisió crítica amb almenys un defecte per imatge.
4. Les tres imatges finals preparades per a web, amb les mides.
5. La nota per a la Laia.

:::tip Ús de la IA
Permès i central. **La revisió crítica de la part 3 la fas tu**, i és el que
s'avalua de veritat: qualsevol pot generar una imatge, i molt poca gent la mira
amb ulls de qui l'ha de validar.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | Els prompts són genèrics, o la fitxa de revisió no detecta cap defecte |
| **Suficient** | Els prompts fan servir els elements, les iteracions estan documentades i les imatges estan preparades per a web |
| **Notable** | Les iteracions canvien una variable cada cop i es veu la relació causa-efecte |
| **Excel·lent** | A més, la revisió crítica detecta defectes reals i no cosmètics, i la nota a la Laia mostra criteri sobre quan generar i quan no |

### Preguntes que et poden fer

- Quina de les tres iteracions va canviar més la imatge? Per què creus que
  aquella?
- Ensenya'm un defecte de la imatge 2. Per què no l'has pogut corregir?
- Aquestes imatges les podríeu fer servir en un fullet imprès? Comprova-ho.
- Recomanaries generar o contractar un fotògraf? Què t'hauria de fer canviar
  d'opinió?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 5.4 | Empra eines per a l'edició d'imatge digital. | Principal |
| 5.3 | Treballa amb imatges a diferents resolucions, segons la seva finalitat. | Reforç |
| 5.5 | Importa i exporta imatges en diversos formats. | Reforç |
