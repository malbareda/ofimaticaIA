---
title: "Skills i tasques programades"
sidebar_label: "S28 · Skills i tasques programades"
sidebar_position: 6
description: "Setmana 28 — Skills i tasques programades: empaquetar instruccions reutilitzables i fer que s'executin soles"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 28 — Skills i tasques programades

**BA4 — Dades i professionalització** · 3 h

## Objectius

En acabar la sessió has de ser capaç de:

1. Explicar què és una skill i quan té sentit fer-ne una.
2. Redactar una skill amb una descripció que en provoqui l'activació.
3. Provar-la amb casos diferents i iterar-la fins que sigui consistent.
4. Explicar què és una tasca programada i què ha de tenir perquè funcioni sense
   ningú al davant.
5. Documentar-ne l'ús per a una altra persona.

:::info L'eina d'avui: Gemini
Tot el que s'explica en aquests apunts val per a qualsevol eina d'IA que tingui
skills o tasques programades. **A classe ho farem amb Gemini**, entrant-hi amb el
**compte del centre**.
:::

## D'on venim

A la sessió 4 vas escriure un **system prompt**: instruccions que s'apliquen a
tota una conversa. Funcionava, però tenia dos límits:

- **Val per a una conversa.** Si vols el mateix comportament en una altra, l'has
  de tornar a muntar.
- **S'aplica sempre.** Si el system prompt diu que ets tècnic de suport, ho ets
  encara que la pregunta no hi tingui res a veure.

Avui hi afegim dues peces que resolen aquests límits i, a més, en treuen un de
nou: que **sempre has de ser tu qui obre la conversa**.

| Peça | Què resol |
|---|---|
| **Skill** | *Com* es fa una tasca: s'escriu una vegada i surt sempre igual |
| **Tasca programada** | *Quan* es fa: s'executa sola, sense que tu hi siguis |

Juntes fan una cosa que s'assembla molt a un treballador: sap fer la feina i
la fa quan toca.

---

## Primera part: skills

Una **skill** és un paquet d'instruccions que:

- **Es guarda** i es reutilitza tantes vegades com vulguis.
- **S'activa sola** quan la tasca ho requereix, i queda adormida quan no.
- **Es comparteix**: la pots passar a un company i li funcionarà igual.

### Anatomia d'una skill

Totes tenen les mateixes quatre parts, es diguin com es diguin a cada eina:

| Part | Què és | Exemple |
|---|---|---|
| **Nom** | Identificador curt, en minúscules i amb guions | `resum-setmanal-vendes` |
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

### Les instruccions

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

### Quan val la pena fer-ne una

| Val la pena | No val la pena |
|---|---|
| La tasca es repeteix | És una cosa d'un sol cop |
| Hi ha un format intern que s'ha de respectar | Val qualsevol format |
| La fa més d'una persona | Només la fas tu |
| Els errors surten sempre pel mateix lloc | Cada cop és diferent |
| Explicar-la triga més que fer-la | |

L'última fila és la millor senyal: **si explicar a un company com es fa costa més
que fer-ho tu, aquesta explicació hauria de ser una skill.**

### Portabilitat

Les skills segueixen un estàndard obert: un fitxer de text que es diu
`SKILL.md`, amb el nom, la descripció i les instruccions, opcionalment dins d'una
carpeta amb fitxers de suport. Això vol dir que **la mateixa skill funciona en
eines de fabricants diferents**.

Importa per una raó pràctica: **la feina que hi inverteixes no queda atrapada**.
Si demà l'empresa canvia d'eina, les skills se'n van amb tu. La setmana vinent ho
comprovaràs: carregaràs la teva skill en un agent que no té res a veure amb
Gemini.

:::warning Compte amb el que hi poses
Una skill és un fitxer de text que es comparteix. **No hi posis mai dades de
client, contrasenyes ni claus d'API.**

Si la skill necessita dades, les ha de rebre com a entrada, no tenir-les a dins.
:::

### Les skills a Gemini

| Què | On |
|---|---|
| Crear-ne, editar-les, activar-les o desactivar-les | **Configuració → Skills** |
| Crear-ne una de zero | Amb el formulari (nom, descripció, instruccions), o demanant-li a Gemini que te l'escrigui |
| Pujar-ne una que ja tens | Puja el fitxer `SKILL.md`, o una carpeta o un `.zip` amb el `SKILL.md` a dins |
| Cridar-la expressament | Escriu `/` o `@` en un xat i tria-la de la llista |
| Que s'activi sola | No cal fer res: si la descripció és bona, Gemini la reconeix quan la tasca hi encaixa |
| Endur-te-la | Descarrega-la com a `.zip`. **Guarda-la: la necessitaràs la sessió 29** |

:::note Si no trobes l'opció
Les pantalles de Gemini canvien sovint i el menú pot dir *Skills* o
*Habilitats*. Si no el trobes, o el compte del centre no te'l mostra, digues-ho
al professorat abans de començar l'activitat.
:::

---

## Segona part: tasques programades

Fins ara, la IA només treballa quan tu li escrius. Una **tasca programada** és
una instrucció que la IA executa **sola, en el moment que has fixat**: cada
divendres a les 14 h, el primer dia de cada mes, demà a les 8 h.

La idea no és nova. Els sistemes operatius ho fan des de fa dècades (el
*Programador de tasques* de Windows, el `cron` de Linux): còpies de seguretat a
les 3 de la matinada, actualitzacions en diumenge. El que és nou és que ara la
tasca pot ser **una instrucció en llenguatge natural** en comptes d'un programa.

### Les cinc preguntes d'una tasca programada

Totes les eines et demanaran el mateix, amb una pantalla o una altra:

| Pregunta | Exemple |
|---|---|
| **Quan?** Moment i repetició | Cada divendres a les 14:00 |
| **Què?** La instrucció | «Fes el resum setmanal de vendes...» |
| **Amb quines dades?** D'on surt la informació nova | El full *Vendes setmanals* del Drive |
| **On va el resultat?** Qui el veurà i com | Queda al xat i arriba una notificació |
| **Com s'atura?** Pausar-la o esborrar-la | Des de la llista de tasques programades |

### El prompt ha de funcionar sense tu

Aquesta és la diferència clau amb un xat normal:

> **Quan s'executa una tasca programada, no hi ha ningú per respondre preguntes.**

Si la IA dubta, no et pot preguntar res. Farà una suposició, i l'endemà
trobaràs el resultat d'aquella suposició. Per tant el prompt d'una tasca
programada ha de ser **autosuficient**:

- Diu d'on ha de treure les dades, amb el nom exacte.
- Diu què fer si les dades no hi són o no s'han actualitzat.
- Diu el format del resultat.
- No depèn de res que hagis dit abans en una altra conversa.

| Prompt | Problema |
|---|---|
| `Fes el resum de la setmana` | Quina setmana? D'on surten les dades? Què passa si no n'hi ha? |
| `Fes el resum setmanal de vendes a partir del full «Vendes setmanals» del meu Drive, només amb les files d'aquesta setmana (dilluns a divendres). Si el full no té cap fila d'aquesta setmana, no facis cap resum i escriu només: «No hi ha dades d'aquesta setmana».` | Cap |

### Una tasca programada sense dades noves no serveix de res

Si la tasca s'executa cada divendres però la IA **no té accés** a les dades
noves, cada divendres farà el mateix resum, o un d'inventat. Abans de programar
res, pregunta't:

> **Aquesta IA podrà veure la informació nova quan s'executi?**

Si la resposta és no, el que tens no és una tasca programada: és un recordatori.

### Skill i tasca programada, juntes

Les dues peces encaixen:

- La **skill** sap **com** es fa el resum.
- La **tasca programada** decideix **quan** es fa, i només ha de dir «fes el
  resum setmanal amb les dades d'aquesta setmana».

Si un dia canvia el format del resum, es corregeix la skill i la tasca
programada no s'ha de tocar.

:::warning Una tasca programada treballa amb el teu compte
S'executa en nom teu, amb accés al que tu tens accés, i **ningú no revisa el
resultat abans que existeixi**. Si el prompt té un error, l'error es repetirà cada
setmana.

- Comença sempre amb una tasca que **només llegeixi i resumeixi**. Res que enviï
  correus ni que modifiqui fitxers.
- Revisa els primers resultats tu mateix.
- **Sàpigues com aturar-la abans de crear-la.**
:::

### Les tasques programades a Gemini

Gemini en diu **accions programades**. Es creen demanant-ho en un xat
(«cada divendres a les 14:00, fes...») i es gestionen des de **Configuració →
Accions programades**, on les pots pausar, editar o esborrar. Pots tenir-ne fins a
10 d'actives alhora.

:::note No tots els comptes ho tenen
Les accions programades depenen del tipus de compte. És possible que el compte
del centre no les tingui. Si és així, l'activitat té una via alternativa que
treballa exactament el mateix: dissenyar la tasca i provar-la **com si** s'estigués
executant sola.
:::

<Activitat num={28}>

## Activitat: La skill de l'empresa, i que surti sola

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-28-skills.docx">Activitat-28-skills.docx</a>
:::

### Context

La Rocío Salas, a la reunió de dilluns:

> «Cada divendres faig el resum de la setmana i cada divendres el faig diferent.
> I quan em substitueixen, surt una cosa que no s'assembla gens.
>
> Vosaltres que ara enteneu d'això: es pot fer que surti sempre igual sense que
> jo hagi d'explicar-ho cada vegada? I ja posats... que estigui fet quan jo
> arribo el divendres?»

Treballaràs amb **Gemini**, amb el compte del centre.

### Part 1 — Triar la tasca

Tria **una tasca repetitiva** de Vallcorba Informàtica. Ha de complir les
condicions de la taula *Quan val la pena fer-ne una* d'aquests apunts, i a més
ha de tenir sentit que **es faci sola en un moment fix**.

Opcions que funcionen bé:

| Tasca | Per què va bé | Quan s'executaria |
|---|---|---|
| Resum setmanal de vendes | Format fix, dades variables | Cada divendres |
| Informe de tancament d'incidències de la setmana | Estructura repetida, camps obligatoris | Cada divendres |
| Recordatori de manteniments als clients del mes | To i dades definits | El dia 1 de cada mes |
| Resum de les novetats de la setmana per a l'equip | Format fix, to intern | Cada dilluns a primera hora |

**Justifica la tria en tres línies**: per què aquesta tasca mereix una skill i
per què té sentit programar-la.

### Part 2 — Escriure la skill

Escriu la skill amb les quatre parts. El nom, en minúscules i amb guions.

Presta atenció especial a la descripció. Ha de dir **què fa**, **a partir de què**
i **amb quines paraules s'ha d'activar**.

A les instruccions, no t'oblidis dels **casos especials**: què passa si falta una
dada, si un valor és zero, si el període està incomplet.

### Part 3 — Crear-la a Gemini i provar-la

Crea la skill a Gemini (**Configuració → Skills**) i prova-la amb **tres casos
diferents**, cadascun en un **xat nou**:

| Cas | Com ha de ser |
|---|---|
| **1. Normal** | Dades completes i correctes |
| **2. Amb una dada que falta** | Un camp buit o un període incomplet |
| **3. Amb una anomalia** | Un valor negatiu, un duplicat o una xifra desproporcionada |

Guarda **les tres converses senceres** (enllaç compartit o captura), i anota si
la skill s'ha activat sola o l'has hagut de cridar amb `/` o `@`.

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

Quan estigui acabada, **descarrega-la com a `.zip`** i guarda-la. La faràs servir
a la sessió 29.

### Part 5 — Programar-la

Ara fes que la tasca es faci sola. Primer, omple la **fitxa de la tasca
programada**:

| Pregunta | La teva resposta |
|---|---|
| **Quan?** Dia, hora i repetició | |
| **Què?** El prompt exacte que s'executarà | |
| **Amb quines dades?** D'on les treurà i si Gemini hi té accés | |
| **On va el resultat?** Qui el veurà | |
| **Com s'atura?** Pas a pas | |
| **Què passa si no hi ha dades noves?** | |

El prompt ha de ser **autosuficient**: ha de funcionar sense que ningú li
respongui res. I ha de fer servir la teva skill, no repetir-ne les instruccions.

Després, segons el que tingui el teu compte:

**Via A — El teu compte té accions programades.**

1. Crea l'acció programada amb el prompt de la fitxa. Per provar-la, programa-la
   **d'aquí a 5 minuts**, una sola vegada.
2. Quan s'executi, guarda'n el resultat i comprova si s'ha activat la skill.
3. Canvia-la a la repetició real (per exemple, cada divendres) i fes una captura
   de la configuració.
4. **Pausa-la o esborra-la** abans de marxar i fes-ne una captura. No volem
   tasques de pràctiques funcionant tot el curs.

**Via B — El teu compte no en té.**

Fes la **prova sense ningú**:

1. Obre un **xat nou**.
2. Enganxa-hi el prompt de la fitxa **exactament com està**.
3. **No responguis res més.** Si Gemini et fa una pregunta, la prova ha fallat:
   en una tasca programada, ningú no l'hauria contestat.
4. Repeteix la prova **sense dades noves** (per exemple, amb un llistat buit o
   d'una altra setmana) i comprova que fa el que diu la fitxa.

En totes dues vies, si alguna cosa no ha sortit bé, corregeix el prompt i torna-ho
a provar. Anota què has canviat.

### Part 6 — La prova del company i la documentació per a la Rocío

Escriu **mitja pàgina** perquè la Rocío pugui fer servir la skill i la tasca
programada:

- Què fa i quan la ha de fer servir.
- Què li ha de donar (quines dades, en quin format).
- Què n'obtindrà, i quan, si està programada.
- Què fer si el resultat no és el que esperava, i **com aturar la tasca
  programada**.

Escrit per a ella, que no és tècnica.

Després, passa a un company **el teu `SKILL.md` i aquesta documentació, sense
explicar-li res més**. Que la carregui al seu Gemini i la faci servir amb un cas
seu. Anota si li ha funcionat, si ha entès què feia sense preguntar-te, i què li
ha faltat. Fes **un últim canvi** a partir del que et digui.

### Què has de lliurar

1. La tasca triada amb la justificació.
2. La skill, versió inicial.
3. Les tres converses de prova amb la versió inicial.
4. La taula d'iteracions.
5. La skill final (el `.zip` o el `SKILL.md`).
6. Les tres converses amb la versió final.
7. La fitxa de la tasca programada.
8. La prova de la tasca programada: via A (resultat i captures de la
   configuració i de l'aturada) o via B (les dues converses de la prova sense
   ningú).
9. El resultat de la prova del company.
10. La documentació per a la Rocío.

:::tip Ús de la IA
Permès, també per escriure la skill i el prompt de la tasca programada. Gemini
mateix t'ho pot redactar. Però hauràs d'explicar a l'entrevista **per què cada
instrucció hi és**, per què la descripció està redactada així, i què passaria si
la tasca s'executés una setmana sense dades.

Una skill generada sense entendre-la es detecta a la primera pregunta.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | La skill no s'activa, o no s'ha provat amb els tres casos, o no gestiona cap cas especial, o no hi ha fitxa de tasca programada |
| **Suficient** | La skill funciona amb els tres casos, les quatre parts hi són i la fitxa de la tasca programada respon les sis preguntes |
| **Notable** | La skill **s'activa sola** amb paraules naturals, les iteracions distingeixen problemes de descripció dels d'instruccions, i el prompt programat **funciona sense ningú** i preveu que no hi hagi dades noves |
| **Excel·lent** | A més, la prova del company funciona sense explicacions, i la documentació permetria a la Rocío fer servir la skill i aturar la tasca sense preguntar res |

### Preguntes que et poden fer

- Ensenya'm la descripció de la teva skill. Per què has posat aquestes paraules?
- Al cas 2 faltava una dada. Què va fer la skill? Era el que volies?
- Un problema d'activació, es corregeix a la descripció o a les instruccions?
- Què passa si la tasca s'executa un divendres i el full no s'ha actualitzat?
- Per què el prompt d'una tasca programada no pot fer preguntes?
- Com s'atura la teva tasca programada?
- Al teu company li va funcionar a la primera? Què li faltava?

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
