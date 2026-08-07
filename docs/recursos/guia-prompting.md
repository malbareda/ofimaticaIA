---
title: Guia de prompting
sidebar_position: 3
description: Referència ràpida de les tècniques de prompting del mòdul.
---

# Guia de prompting

Pàgina de consulta. El desenvolupament és a les sessions
[4](/ba1-fonaments-ia/s04-prompting-i-system-prompts),
[7](/ba2-comunicacio-professional/s07-iteracio-rols-context) i
[16](/ba3-contingut-fonts-visual/s16-generacio-imatges-amb-ia).

## Anatomia d'un prompt

Tres parts diferenciades:

| Part | Què és | Exemple |
|---|---|---|
| **Instrucció** | Què vols que faci. Un verb clar | «Redacta», «compara», «classifica» |
| **Context** | Tot el que canvia la resposta correcta | Qui ho llegirà, per a què, quines restriccions |
| **Format** | Com ho vols, i què **no** hi ha de sortir | Extensió, estructura, to, prohibicions |

Compara:

> Explica'm què és una VPN.

> Explica què és una VPN a la Sílvia Cardús, que porta un forn de pa i no té cap
> coneixement tècnic. Ha de decidir si en contracta una per connectar-se a la
> comptabilitat des de casa. Màxim 120 paraules, sense sigles sense explicar, i
> acaba amb una recomanació clara.

Cada tros afegit **elimina una decisió que el model hauria pres per tu**.

## Assignar un rol

Un rol no contracta ningú: **restringeix el tipus de text que el model considera
plausible**.

| Rol | Efecte |
|---|---|
| «Ets un expert mundial en informàtica» | Poc. Massa vague per restringir res |
| «Ets tècnic de suport de primera línia» | Molt. Hi ha un registre associat |
| «Ets el cap de manteniment que ha d'explicar una avaria a un client que ja s'ha queixat dues vegades» | Moltíssim. Hi ha to, situació i tensió |

**El rol útil no és el més prestigiós: és el més específic.**

## L'audiència

Sovint canvia més la resposta que el rol. Si només pots posar una cosa al prompt,
posa l'audiència.

El mateix contingut per a tres destinataris dona tres textos completament
diferents, i el que canvia no és només el vocabulari: canvia **què cal explicar i
què es pot donar per sabut**.

## Donar context

L'error més comú no és demanar malament: és **no donar la informació necessària**
i esperar que se la inventi bé.

| En comptes de | Fes |
|---|---|
| «Escriu un correu a un client enfadat» | Enganxa el correu del client i digues què li pots oferir |
| «Fes un resum de la reunió» | Enganxa les notes |
| «Escriu-ho amb l'estil de l'empresa» | Enganxa un document que ja el tingui |

:::warning Abans d'enganxar res
Passa-ho pel filtre: hi ha dades personals? És informació confidencial d'un
client? Es pot anonimitzar?

Un exemple anonimitzat sol funcionar igual de bé que el real.
:::

## Iterar

Iterar no és tornar a demanar el mateix esperant sort. És **corregir el prompt**.

| Símptoma | Què hi falta |
|---|---|
| Massa genèrica | Context: per a qui, per a què |
| Massa llarga | Format: extensió màxima |
| To equivocat | Audiència |
| Se salta coses | Instrucció: enumera-les explícitament |
| S'inventa dades | Fonts: dona-li tu la informació |
| Sona a fullet publicitari | Prohibicions: «sense cap superlatiu sobre nosaltres» |

### Com es corregeix

Digues què no serveix i què vols en comptes, **sense repetir tot l'encàrrec**:

> Massa llarg. Deixa'l en tres paràgrafs i treu la introducció.

> El segon punt està bé. Refes els altres dos amb el mateix to.

### Quan començar de nou

Si portes vuit missatges de correccions, el model arrossega tots els intents
fallits i s'hi aferra. Surt més a compte **obrir una conversa nova amb el prompt
bo**.

El que has après de la conversa embrutada és precisament com hauria d'haver
començat.

## System prompts

Instruccions que s'apliquen a **tota** la conversa. Sis elements:

| Element | Exemple |
|---|---|
| **Rol** | «Ets tècnic de suport de primera línia.» |
| **Audiència** | «Parles amb persones sense coneixements tècnics.» |
| **Comportament** | «Fas una pregunta cada cop, no diverses.» |
| **Límits** | «No dones instruccions que impliquin obrir l'equip.» |
| **Format** | «Respostes de menys de 80 paraules.» |
| **Escapatòria** | «Si no ho saps, digues-ho i deriva.» |

:::danger El que més s'oblida
**L'escapatòria.** Un assistent que no sap dir «això no ho puc resoldre»
s'inventa una solució.

I ha de ser una acció concreta, no una recomanació vaga. «Si no ho saps, digues-ho»
és massa dèbil; «digues que ho ha de mirar un tècnic, recull què ha passat i
indica que s'obrirà una incidència» funciona.
:::

Cada instrucció d'un system prompt ha de descriure **un comportament
observable**. «Sigues professional» no ho és. «Menys de 80 paraules» sí.

## Prompts visuals

Descriure, no demanar. Els elements:

| Element | Exemples |
|---|---|
| **Subjecte** | Què surt |
| **Acció o estat** | Què fa |
| **Entorn** | On és |
| **Llum** | Natural, lateral, contrallum, hora daurada |
| **Enquadrament** | Pla general, primer pla, zenital |
| **Estil** | Fotografia, il·lustració plana, aquarel·la |
| **Paleta** | Colors freds, monocrom, tons terra |
| **Format** | Horitzontal, quadrat, vertical |
| **Què no vols** | Sense text, sense mirades a càmera |

Si només en poses tres: **subjecte, llum i estil**.

I en iterar, **canvia una sola variable cada vegada**. Si en canvies cinc i
millora, no saps quina ho ha fet.

## Skills

Quan un prompt es repeteix, es converteix en una skill: un paquet d'instruccions
que es guarda, s'activa sol i es comparteix.

La part que decideix si funciona **no són les instruccions: és la descripció**,
perquè és l'únic que el sistema llegeix per decidir si l'activa.

Desenvolupament a la [sessió 29](/ba4-dades-professionalitzacio/s29-skills).

## El que no funciona

| Això | Per què no |
|---|---|
| «Si us plau» | No millora res |
| Amenaçar-lo | Tampoc |
| «Ets el millor expert del món» | Molt menys que dir qui és el destinatari |
| Prompts d'una paraula | El model omple els buits amb el cas més corrent |
| Repetir el mateix esperant sort | La resposta canvia, el problema no |

## El que sí que funciona i s'oblida

- **Donar-li un exemple** del resultat que vols.
- **Dir-li què no vols.** «Sense introducció», «no facis llistes».
- **Deixar-lo preguntar**: «Si et falta informació per fer-ho bé, pregunta-m'ho
  abans de començar.» Sovint fa la pregunta que t'havies saltat.
- **Demanar-li dues versions** i que et digui quina recomana. Comparar és més
  fàcil que jutjar en abstracte.
- **Fer-lo fer de destinatari**: «ets el client i reps aquest correu. Què penses?»
