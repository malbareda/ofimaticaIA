---
title: "Skills: empaquetar instruccions reutilitzables"
sidebar_label: "S29 · Skills: empaquetar instruccions reutilitzables"
sidebar_position: 6
description: "Setmana 29 — Skills: empaquetar instruccions reutilitzables"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 29 — Skills: empaquetar instruccions reutilitzables

**BA4 — Dades i professionalització** · 3 h

## Objectius

En acabar la sessió has de ser capaç de:

1. Explicar què és una skill i quan té sentit fer-ne una.
2. Redactar una skill amb una descripció que en provoqui l'activació.
3. Provar-la amb casos diferents i iterar-la fins que sigui consistent.
4. Documentar-ne l'ús per a una altra persona.

## D'on venim

A la sessió 4 vas escriure un **system prompt**: instruccions que s'apliquen a
tota una conversa. Funcionava, però tenia dos límits:

- **Val per a una conversa.** Si vols el mateix comportament en una altra, l'has
  de tornar a muntar.
- **S'aplica sempre.** Si el system prompt diu que ets tècnic de suport, ho ets
  encara que la pregunta no hi tingui res a veure.

Una **skill** resol totes dues coses. És un paquet d'instruccions que:

- **Es guarda** i es reutilitza tantes vegades com vulguis.
- **S'activa sola** quan la tasca ho requereix, i queda adormida quan no.
- **Es comparteix**: la pots passar a un company i li funcionarà igual.

## Anatomia d'una skill

Totes tenen les mateixes quatre parts, es diguin com es diguin a cada eina:

| Part | Què és | Exemple |
|---|---|---|
| **Nom** | Identificador curt | `resum-setmanal-vendes` |
| **Descripció** | **Quan s'ha de fer servir** | «Genera el resum setmanal de vendes amb el format intern de Vallcorba a partir d'un llistat de vendes» |
| **Instruccions** | Com fer la feina | El procediment, el format de sortida, els casos especials |
| **Recursos** (opcional) | Fitxers de suport | Una plantilla, un exemple, una taula de referència |

### La descripció és la part més important

Sona estrany, perquè la feina de veritat és a les instruccions. Però:

> **Si la descripció no és bona, la skill no s'activa mai, i llavors les
> instruccions no serveixen de res.**

El sistema decideix si fa servir una skill llegint **només la descripció**. No
llegeix les instruccions fins que ja ha decidit activar-la.

Per tant la descripció ha de respondre dues coses:

1. **Què fa** la skill.
2. **Quan s'ha d'activar**: amb quines paraules, en quines situacions, sobre quins
   materials.

| Descripció | Problema |
|---|---|
| `Ajuda amb vendes` | Massa vaga. S'activarà sempre o mai |
| `Genera resums` | Quins resums? De què? |
| `Aquesta skill genera el resum setmanal de vendes de Vallcorba Informàtica amb el format intern, a partir d'un llistat de vendes en full de càlcul. Fes-la servir quan et demanin el resum setmanal, el tancament de la setmana o l'informe de vendes.` | Cap |

La tercera diu **què**, **a partir de què** i **amb quines paraules** l'ha
d'activar. És llarga a propòsit.

## Les instruccions

Aquí sí que va el procediment. El que funciona:

**Passos numerats.** Un pas és una acció.

**El format de sortida, exacte.** Si el resum ha de tenir quatre apartats amb
aquests noms, digues-ho i posa'n un exemple.

**Els casos especials.** Què fer si falta una dada, si hi ha un valor negatiu, si
la setmana té un festiu. Són els que decideixen si la skill serveix el segon cop
que la fas servir.

**El que no ha de fer.** «No inventis xifres que no siguin al full. Si en falta
alguna, digues quina.»

:::tip La diferència entre una skill i un prompt llarg
Un prompt llarg el tornes a escriure cada vegada i cadascú l'escriu diferent.

Una skill s'escriu una vegada, la fa servir tot l'equip i es corregeix en un sol
lloc quan hi ha un error.
:::

## Quan val la pena fer-ne una

| Val la pena | No val la pena |
|---|---|
| La tasca es repeteix | És una cosa d'un sol cop |
| Hi ha un format intern que s'ha de respectar | Val qualsevol format |
| La fa més d'una persona | Només la fas tu |
| Els errors surten sempre pel mateix lloc | Cada cop és diferent |
| Explicar-la triga més que fer-la | |

L'última fila és la millor senyal: **si explicar a un company com es fa costa més
que fer-ho tu, aquesta explicació hauria de ser una skill.**

## Portabilitat

Les skills segueixen un estàndard obert, cosa que vol dir que **la mateixa skill
funciona en eines de fabricants diferents**. El format habitual és un fitxer de
text amb el nom, la descripció i les instruccions, opcionalment amb fitxers de
suport dins d'una carpeta.

Això importa per una raó pràctica: **la feina que hi inverteixes no queda
atrapada**. Si demà l'empresa canvia d'eina, les skills se'n van amb tu.

:::warning Compte amb el que hi poses
Una skill és un fitxer de text que es comparteix. **No hi posis mai dades de
client, contrasenyes ni claus d'API.**

Si la skill necessita dades, les ha de rebre com a entrada, no tenir-les a dins.
:::

<Activitat num={29}>

## Activitat: La skill de l'empresa

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-29-skills.docx">Activitat-29-skills.docx</a>
:::

### Context

La Rocío Salas, a la reunió de dilluns:

> «Cada divendres faig el resum de la setmana i cada divendres el faig diferent.
> I quan em substitueixen, surt una cosa que no s'assembla gens.
>
> Vosaltres que ara enteneu d'això: es pot fer que surti sempre igual sense que
> jo hagi d'explicar-ho cada vegada?»

### Part 1 — Triar la tasca

Tria **una tasca repetitiva** de Vallcorba Informàtica. Ha de complir les quatre
condicions de la taula d'aquests apunts.

Opcions que funcionen bé:

| Tasca | Per què va bé |
|---|---|
| Resum setmanal de vendes | Format fix, dades variables |
| Informe de tancament d'una incidència | Estructura repetida, camps obligatoris |
| Resposta tipus a una consulta freqüent | To i límits definits |
| Preparar un pressupost de manteniment | Càlcul més format |

**Justifica la tria en tres línies**: per què aquesta tasca compleix les
condicions.

### Part 2 — Escriure la skill

Escriu la skill amb les quatre parts.

Presta atenció especial a la descripció. Ha de dir **què fa**, **a partir de què**
i **amb quines paraules s'ha d'activar**.

A les instruccions, no t'oblidis dels **casos especials**: què passa si falta una
dada, si un valor és zero, si el període està incomplet.

### Part 3 — Importar-la i provar-la

Importa la skill a l'eina que t'indiqui el professorat i prova-la amb **tres
casos diferents**:

| Cas | Com ha de ser |
|---|---|
| **1. Normal** | Dades completes i correctes |
| **2. Amb una dada que falta** | Un camp buit o un període incomplet |
| **3. Amb una anomalia** | Un valor negatiu, un duplicat o una xifra desproporcionada |

Guarda **les tres converses senceres**, incloent-hi si la skill s'ha activat sola
o l'has hagut de cridar.

:::warning Comprova que s'activa sola
La prova de foc no és que funcioni quan la crides pel nom. És que **s'activi quan
demanes la tasca amb les teves paraules**, sense mencionar-la.

Si no s'activa sola, el problema és la descripció, no les instruccions.
:::

### Part 4 — Iterar

A partir del que hagis vist, corregeix la skill i torna a passar els tres casos.

| # | Cas | Què fallava | Què he canviat | Descripció o instruccions? |
|---|---|---|---|---|
| 1 | | | | |

L'última columna importa: **els problemes d'activació es corregeixen a la
descripció; els de resultat, a les instruccions.** Confondre-ho és l'error més
comú.

### Part 5 — La prova del company

Passa la teva skill a un company **sense explicar-li res**. Que la importi i la
faci servir amb un cas seu.

Anota:

- Si li ha funcionat.
- Si ha entès què feia sense preguntar-te.
- Què li ha faltat.

I fes **un últim canvi** a partir del que et digui.

### Part 6 — La documentació per a la Rocío

Escriu **mitja pàgina** perquè la Rocío pugui fer servir la skill:

- Què fa i quan la ha de fer servir.
- Què li ha de donar (quines dades, en quin format).
- Què n'obtindrà.
- Què fer si el resultat no és el que esperava.

Escrit per a ella, que no és tècnica.

### Què has de lliurar

1. La tasca triada amb la justificació.
2. La skill, versió inicial.
3. Les tres converses de prova amb la versió inicial.
4. La taula d'iteracions.
5. La skill final.
6. Les tres converses amb la versió final.
7. El resultat de la prova del company.
8. La documentació per a la Rocío.

:::tip Ús de la IA
Permès, també per escriure la skill. Però hauràs d'explicar a l'entrevista **per
què cada instrucció hi és**, i sobretot per què la descripció està redactada així.

Una skill generada sense entendre-la es detecta a la primera pregunta.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | La skill no s'activa, o no s'ha provat amb els tres casos, o no gestiona cap cas especial |
| **Suficient** | La skill funciona amb els tres casos i les quatre parts hi són |
| **Notable** | La skill **s'activa sola** amb paraules naturals, i les iteracions distingeixen problemes de descripció dels d'instruccions |
| **Excel·lent** | A més, la prova del company funciona sense explicacions, i la documentació permetria a la Rocío fer-la servir sense preguntar res |

### Preguntes que et poden fer

- Ensenya'm la descripció de la teva skill. Per què has posat aquestes paraules?
- Al cas 2 faltava una dada. Què va fer la skill? Era el que volies?
- Un problema d'activació, es corregeix a la descripció o a les instruccions?
- Al teu company li va funcionar a la primera? Què li faltava?
- Si la Rocío et demana el resum d'un mes en comptes d'una setmana, què passa?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 9.1 | Elabora guies visuals amb els conceptes bàsics d'ús d'una aplicació. | Principal |
| 9.3 | Utilitza manuals d'usuari per instruir en l'ús d'aplicacions. | Principal |
| 2.6 | Elabora manuals específics. | Reforç |
| 9.4 | Aplica tècniques d'assessorament en l'ús d'aplicacions. | Reforç |
