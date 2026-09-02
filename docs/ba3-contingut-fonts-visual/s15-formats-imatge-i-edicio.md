---
title: "Formats d'imatge i edició bàsica"
sidebar_label: "S15 · Formats d'imatge i edició bàsica"
sidebar_position: 4
description: "Setmana 15 — Formats d'imatge i edició bàsica"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 15 — Formats d'imatge i edició bàsica

**BA3 — Contingut, fonts i comunicació visual** · 3 h · Part A del bloc

## Objectius

En acabar la sessió has de ser capaç de:

1. Triar el format d'imatge adequat a cada finalitat i justificar-ho.
2. Ajustar resolució, retall i color amb una eina d'edició.
3. Adquirir una imatge amb un perifèric.

## Píxels i vectors

Hi ha dues maneres de guardar una imatge, i tota la resta se'n deriva.

Una **imatge de mapa de bits** és una graella de píxels amb un color cadascun. Una
fotografia. Si l'amplies, arriba un punt on veus els píxels.

Una **imatge vectorial** és un conjunt d'instruccions de dibuix: una línia
d'aquí a aquí, un cercle d'aquest radi, aquest color a dins. Un logotip. **Es pot
ampliar tant com vulguis** perquè es torna a dibuixar cada vegada.

| | Mapa de bits | Vectorial |
|---|---|---|
| Bo per a | Fotografies | Logotips, icones, esquemes |
| En ampliar | Es pixela | Perfecte sempre |
| Mida del fitxer | Depèn de les dimensions | Depèn de la complexitat |
| Formats | JPEG, PNG, WebP, GIF | SVG |

**Un logotip hauria de ser sempre vectorial.** Si el logotip de l'empresa només
existeix en JPEG, el dia que l'hagin de posar en una furgoneta hi haurà un
problema.

## Els formats

| Format | Tipus | Comprimeix | Transparència | Animació | Per a què |
|---|---|---|---|---|---|
| **JPEG** | Bits | Amb pèrdua | No | No | Fotografies |
| **PNG** | Bits | Sense pèrdua | **Sí** | No | Captures, gràfics, res amb text |
| **WebP** | Bits | Les dues | Sí | Sí | Web modern: pesa menys |
| **GIF** | Bits | Sense pèrdua, 256 colors | Sí (dura) | **Sí** | Animacions curtes |
| **SVG** | Vector | — | Sí | Sí | Logotips i icones |

### Amb pèrdua i sense pèrdua

**Amb pèrdua** vol dir que l'algorisme llença informació que l'ull nota poc. JPEG
ho fa. El resultat pesa molt menys i, en una fotografia, no es nota.

Però la pèrdua és **acumulativa**: cada cop que obres un JPEG i el tornes a
desar, en perds una mica més. Al cap de deu edicions es veu.

I amb text i línies netes es nota de seguida: al voltant de les vores apareixen
uns artefactes bruts. Per això **una captura de pantalla mai va en JPEG**.

:::tip Les dues regles que resolen el 90 % dels casos
**Té text, línies netes o transparència?** → PNG (o SVG si és un logotip).

**És una fotografia?** → JPEG (o WebP si va al web).
:::

## Resolució

Aquí hi ha una confusió molt estesa que val la pena aclarir d'una vegada.

Una imatge té **dimensions en píxels**: 1920 × 1080, per exemple. Això és el que
té de veritat.

Els **PPP** (punts per polzada, *DPI*) **no són una propietat de la imatge**: són
una instrucció sobre a quina mida s'ha d'imprimir. La mateixa imatge de 1920 × 1080
pot sortir a 20 cm o a 60 cm segons els PPP que li diguis.

| Finalitat | Què importa |
|---|---|
| **Pantalla i web** | Només les dimensions en píxels |
| **Impressió** | Píxels **i** mida física. Cal apuntar a uns 300 PPP |
| **Gran format** | Menys PPP, perquè es mira de lluny |

El càlcul per a impressió és senzill: **píxels ÷ PPP = polzades**. Una imatge de
1200 píxels d'amplada, a 300 PPP, dona 4 polzades, poc més de 10 cm.

:::warning El que no es pot fer
**Augmentar la resolució no afegeix informació.** Si agafes una imatge de 400
píxels i li dius que ara en fa 2000, el programa s'inventa els píxels del mig
interpolant. Es veurà borrosa.

Hi ha eines d'IA que ho fan sorprenentment bé, però tampoc no recuperen res: també
s'inventen el detall. Per a una foto d'ambient pot valer; per a un document on el
detall importa, no.
:::

## Edició bàsica

Quatre operacions cobreixen gairebé tota la feina diària:

**Retallar.** Treure el que sobra i decidir l'enquadrament. És l'edició que més
millora una imatge i la que menys es fa.

**Redimensionar.** Ajustar les dimensions a la finalitat. **Cap avall sempre va
bé**; cap amunt, no.

**Ajustar to i color.** Lluminositat, contrast, saturació. Amb mesura: una foto
d'un equip avariat ha de mostrar l'avaria, no ser bonica.

**Exportar.** Triar format i qualitat segons on anirà.

<Activitat num={15}>

## Activitat: Cada imatge al seu format

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-15-formats-imatge-i-edicio.docx">Activitat-15-formats-imatge-i-edicio.docx</a>
:::

### Context

La Laia Puig prepara la pàgina web nova i s'ha trobat amb el fons d'imatges de
l'empresa:

> «Això és un desastre. Tenim el logotip en JPEG amb un requadre blanc al voltant,
> les fotos del taller pesen 8 MB cadascuna i la web va lentíssima, i les captures
> de pantalla del manual es veuen brutes.
>
> Necessito que algú posi ordre aquí i que em digui quin format ha de tenir cada
> cosa, perquè no ho tornem a fer malament.»

### Part 1 — El diagnòstic

Rebràs **sis imatges** en formats inadequats per a la seva finalitat.

Per a cadascuna, ompli:

| # | Què és | Format actual | Problema | Format correcte | Per què |
|---|---|---|---|---|---|
| 1 | | | | | |

### Part 2 — La conversió

Converteix les sis al format correcte, ajustant la resolució a la finalitat.

Per a cadascuna anota **la mida del fitxer abans i després**. Si alguna cosa creix
molt, explica per què.

:::warning El cas del logotip
El logotip en JPEG té un fons blanc que s'ha de treure. **Convertir-lo a PNG no
treu el fons**: només permet que hi hagi transparència. Traure el fons és una
edició, no una conversió.

I convertir un JPEG a SVG no el fa vectorial. Recuperar un logotip vectorial a
partir d'un JPEG vol dir redibuixar-lo o vectoritzar-lo, i el resultat mai és
idèntic.
:::

### Part 3 — Adquirir

Adquireix **una imatge nova** amb un perifèric: càmera del mòbil, escàner o
captura de pantalla, segons t'indiqui el professorat.

Documenta: quin perifèric, quines dimensions en píxels ha sortit, i quin
tractament li has hagut de fer.

### Part 4 — El càlcul d'impressió

La Rocío vol imprimir una de les fotos del taller a **15 cm d'amplada** en un
fullet.

- Quants píxels d'amplada necessita la imatge per sortir bé?
- La que teniu, hi arriba?
- Si no hi arriba, què es pot fer i què no?

### Part 5 — La regla per a la Laia

Escriu la regla que ha de seguir l'empresa d'ara endavant. **Màxim mitja pàgina**,
en forma de taula o llista, perquè la pugui tenir a mà qualsevol.

### Què has de lliurar

1. La taula de diagnòstic de les sis imatges.
2. Les sis imatges convertides, amb les mides abans i després.
3. La imatge adquirida amb la documentació del procés.
4. El càlcul d'impressió amb la resposta.
5. La regla per a la Laia.

:::tip Ús de la IA
Permès per redactar la regla final i per resoldre dubtes. **Els càlculs de
resolució els has de saber fer tu**: entren a l'examen i, sobretot, els faràs
mentalment cada cop que algú et demani si una imatge servirà per imprimir.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | Hi ha conversions incorrectes, o el càlcul d'impressió està malament |
| **Suficient** | Les sis conversions són correctes i el càlcul també |
| **Notable** | La justificació de cada format és correcta i s'ha entès el cas del logotip |
| **Excel·lent** | A més, la regla per a la Laia és aplicable per algú sense coneixements i cobreix els casos que es trobarà de veritat |

### Preguntes que et poden fer

- Per què la captura de pantalla no pot anar en JPEG?
- Convertir el logotip a PNG li ha tret el fons blanc? Per què?
- Tens una imatge de 900 píxels d'amplada i l'has d'imprimir a 15 cm. Serveix?
- Quina de les sis pesava més després de convertir-la? Per què?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 5.1 | Analitza els diferents formats d'imatges. | Principal |
| 5.2 | Realitza l'adquisició d'imatges amb perifèrics. | Principal |
| 5.3 | Treballa amb imatges a diferents resolucions, segons la seva finalitat. | Principal |
| 5.4 | Empra eines per a l'edició d'imatge digital. | Principal |
| 5.5 | Importa i exporta imatges en diversos formats. | Principal |
