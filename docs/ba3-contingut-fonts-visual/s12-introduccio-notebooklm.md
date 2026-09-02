---
title: "Introducció a NotebookLM"
sidebar_label: "S12 · Introducció a NotebookLM"
sidebar_position: 1
description: "Setmana 12 — Introducció a NotebookLM"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 12 — Introducció a NotebookLM

**BA3 — Contingut, fonts i comunicació visual** · 3 h · Part A del bloc

## Objectius

En acabar la sessió has de ser capaç de:

1. Crear un espai de coneixement a NotebookLM a partir de fonts pròpies.
2. Contrastar una resposta amb fonts i una resposta sense fonts.
3. Identificar què omet i què inventa cada sistema.

## El problema de fons

Una IA generalista ha llegit una quantitat enorme de text i n'ha après regularitats.
Quan li preguntes una cosa, **no consulta res**: genera la resposta més plausible
segons el que va aprendre.

Això té dues conseqüències que ja coneixes de la sessió 1:

- Pot estar desactualitzada, perquè el que va aprendre té data.
- Pot inventar, perquè el text fals sovint és plausible.

I n'hi ha una tercera que encara no havies vist: **no sap res del teu context**. El
protocol d'incidències de Vallcorba Informàtica, el contracte de la Gestoria Amat
o el manual de la impressora del Forn Cardús no formen part del que ha llegit.

## Alimentar la IA amb fonts

L'alternativa és donar-li tu els documents i demanar-li que **només** treballi amb
ells. NotebookLM funciona així: crees un espai, hi puges les fonts, i les
respostes surten d'aquí.

La diferència que això provoca:

| | IA generalista | IA amb fonts |
|---|---|---|
| D'on surt la resposta | Del que va aprendre | Dels documents que li has donat |
| Coneix el teu context | No | Sí, el que li hagis donat |
| Pot inventar | Sí | Molt menys |
| Pot dir «això no hi és» | Rarament | Sí |
| Es pot comprovar | Difícil | **Sí: et diu de quin document surt** |

L'última fila és la important. Una resposta amb citació a la font és
**verificable**: pots anar al document i mirar-ho. Una resposta sense font només
te la pots creure o no.

:::tip Per què això canvia la feina
En un entorn professional, la pregunta rarament és «què se sap d'això al món». És
«què diu **el nostre** contracte», «què diu **aquest** manual», «què vam acordar a
**aquella** reunió».

Per a aquestes preguntes, una IA sense les teves fonts no serveix de res.
:::

## Què és realment un espai de coneixement

És un conjunt de documents més una eina que hi pot buscar i raonar a sobre.

Quan preguntes alguna cosa, el sistema busca els fragments rellevants dins de les
teves fonts i els fa servir per construir la resposta. Aquesta tècnica es coneix
com a **RAG** (*Retrieval-Augmented Generation*, generació augmentada per
recuperació) i és la base de gairebé tots els assistents empresarials que et
trobaràs.

Coses que has de saber-ne:

**La qualitat de la resposta depèn de les fonts.** Si les fonts són incompletes,
la resposta serà incompleta. Si són contradictòries, la resposta serà confusa. Si
són dolentes, la resposta serà dolenta amb un aspecte fiable.

**No busca a internet.** Si la resposta no és a les teves fonts, ha de dir que no
hi és. Quan un sistema d'aquest tipus comença a respondre coses que no són a cap
document, és un senyal d'alerta.

**Les fonts s'han de poder llegir.** Un PDF que és una foto escanejada sense text
reconegut no serveix. Si el sistema no hi troba text, no en pot treure res.

:::warning Recorda la sessió 3
Pujar documents a un espai de coneixement és **enviar-los a un servei extern**.
Abans de pujar res, el filtre de sempre: hi ha dades personals? És informació
confidencial d'un client?

Per a documentació tècnica pública o material propi no confidencial, endavant.
Per a res que porti dades de client, no.
:::

<Activitat num={12}>

## Activitat: Amb fonts i sense fonts

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-12-introduccio-notebooklm.docx">Activitat-12-introduccio-notebooklm.docx</a>
:::

### Context

La Núria torna d'una reunió de la patronal amb una idea concreta:

> «M'han explicat que es pot fer una mena de cercador intern amb els nostres
> propis documents. Nosaltres tenim protocols, manuals i contractes escampats per
> tot el Drive i ningú no els troba mai.
>
> Abans de posar-nos-hi vull saber si això funciona de veritat o si és el de
> sempre: molt bonic a la demostració i inservible el dia que el necessites.»

### Part 1 — Muntar l'espai

Rebràs **tres documents tècnics** sobre un mateix tema. Crea un espai a
NotebookLM i puja-hi els tres.

Comprova que el sistema els ha llegit: fes-li una pregunta la resposta de la qual
sàpigues que hi és, i mira si te la respon i si la cita.

### Part 2 — Les cinc preguntes

Prepara **cinc preguntes** sobre el tema. Han de ser de tipus diferent:

| Tipus | Exemple de forma |
|---|---|
| **De dada concreta** | Una xifra, una data, un valor que sigui en un document |
| **De síntesi** | Alguna cosa que requereixi ajuntar dos documents |
| **De contrast** | En què difereixen els documents sobre un punt |
| **Que no hi és** | Alguna cosa relacionada però que **no** apareix a cap font |
| **Ambigua** | Una pregunta que es pugui entendre de dues maneres |

Fes les cinc preguntes **a NotebookLM amb les fonts** i **a Gemini o ChatGPT sense
les fonts**.

Guarda les deu respostes.

### Part 3 — La comparació

Per a cada pregunta, ompli:

| Pregunta | Amb fonts | Sense fonts | Qui cita | Qui inventa |
|---|---|---|---|---|
| 1 | | | | |

La pregunta **que no hi és** és la més reveladora de les cinc. Mira bé què fa
cada sistema: un hauria de dir que no ho té; l'altre probablement et donarà una
resposta.

### Part 4 — La resposta a la Núria

En **150 paraules com a màxim**, respon-li si això funciona o no, i per a quins
casos concrets de Vallcorba Informàtica ho faries servir i per a quins no.

### Què has de lliurar

1. Prova que l'espai està muntat i llegeix les fonts.
2. Les cinc preguntes amb les deu respostes.
3. La taula comparativa.
4. La resposta a la Núria.

:::tip Ús de la IA
Permès i central. El que s'avalua és **si saps distingir una resposta verificable
d'una que només ho sembla**.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | Falten preguntes de tipus diferent, o la comparació es limita a dir quina resposta és «millor» |
| **Suficient** | Les cinc preguntes cobreixen els cinc tipus i la taula està completa |
| **Notable** | S'ha comprovat de veritat si les citacions es corresponen amb el que diuen els documents |
| **Excel·lent** | A més, la resposta a la Núria distingeix casos d'ús concrets i identifica una limitació real del sistema amb fonts |

### Preguntes que et poden fer

- La pregunta que no era a cap font: què va fer cadascun dels dos sistemes?
- Has comprovat alguna citació anant al document? Deia el que el sistema deia que
  deia?
- Si pugéssim el contracte de la Gestoria Amat a NotebookLM, quin problema hi
  hauria?
- Per a quina feina de Vallcorba **no** faries servir això?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 9.3 | Utilitza manuals d'usuari per instruir en l'ús d'aplicacions. | Principal |
| 9.7 | Utilitza els recursos disponibles per solucionar incidències. | Reforç |
