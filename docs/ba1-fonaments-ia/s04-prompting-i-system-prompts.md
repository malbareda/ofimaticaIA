---
title: "Prompting bàsic i system prompts"
sidebar_label: "S04 · Prompting bàsic i system prompts"
sidebar_position: 4
description: "Setmana 4 — Prompting bàsic i system prompts"
---

# Setmana 4 — Prompting bàsic i system prompts

**BA1 — Fonaments i infraestructura d'IA** · 3 h

## Objectius

En acabar la sessió has de ser capaç de:

1. Escriure un prompt amb instrucció, context i format de sortida diferenciats.
2. Configurar un system prompt i demostrar com canvia el comportament del model.
3. Diagnosticar per què un prompt ha fallat i reescriure'l.
4. Fer servir la IA per diagnosticar una incidència tècnica i valorar-ne la
   resposta.
5. Provar de trencar les instruccions d'un assistent que has configurat tu.

## El prompt no és una pregunta

La major part de la gent fa servir la IA com un cercador: escriu quatre paraules i
espera. Després es queixa que la resposta és genèrica.

És genèrica perquè la pregunta ho era. El model no sap qui ets, per a qui
escrius, ni què faràs amb la resposta. Si no li ho dius, s'ho inventa, i el que
s'inventa és sempre el cas més corrent.

### Les tres parts

Un prompt que funciona té tres coses ben diferenciades:

**Instrucció** — què vols que faci. Un verb clar: explica, resumeix, redacta,
compara, corregeix, classifica.

**Context** — tot allò que canvia la resposta correcta: qui ho llegirà, què en
sap, per a què serveix, quines restriccions hi ha.

**Format de sortida** — com ho vols. Extensió, estructura, to, i què *no* hi ha
de sortir.

Compara:

> Explica'm què és una VPN.

amb:

> Explica què és una VPN a la Sílvia Cardús, que porta un forn de pa i no té cap
> coneixement tècnic. Ha de decidir si en contracta una per connectar-se a la
> comptabilitat des de casa. Màxim 120 paraules, sense sigles sense explicar, i
> acaba amb una recomanació clara.

La segona no és més llarga per caprici. Cada tros afegit elimina una decisió que
el model hauria pres per tu.

### El que sobra

Dir-li «si us plau» no millora res. Amenaçar-lo tampoc. Dir-li que és un expert
mundial en la matèria fa poca cosa comparat amb dir-li **qui és el destinatari**.

El que sí que funciona, i molt:

- **Donar-li un exemple** del resultat que vols.
- **Dir-li què no vols.** «Sense introducció», «no facis llistes», «no repeteixis
  la pregunta».
- **Deixar-lo preguntar.** «Si et falta informació per fer-ho bé, pregunta-m'ho
  abans de començar.»

## Tres tècniques més

Curtes i molt rendibles.

### Donar-li exemples

Si el que vols és difícil de descriure però fàcil de mostrar, **mostra-l'hi**.

```
Classifica la prioritat de cada incidència.

Entrada: "La caixa no funciona i no podem cobrar."
Prioritat: Crítica

Entrada: "Voldríem afegir un usuari quan pugueu."
Prioritat: Baixa

Entrada: "Les còpies fallen des de dijous."
Prioritat:
```

Amb dos o tres exemples n'hi sol haver prou. **El format dels exemples importa
tant com el contingut**: si tenen una estructura clara i consistent, la sortida la
seguirà.

Això té nom: **few-shot**. Demanar-ho sense cap exemple és **zero-shot**.

### Demanar-li que raoni pas a pas

> Explica el raonament pas a pas abans de donar el resultat.

Dos efectes. El primer és que encerta més, sobretot amb càlculs i amb
classificacions que tenen condicions. **El segon és el que de veritat importa
aquí: si veus els passos, pots trobar on s'ha equivocat.** Si només et dona el
resultat, o t'ho creus o ho refàs tu.

:::warning Que raoni no vol dir que encerti
Un model pot escriure un raonament impecable i arribar a un número equivocat. Els
passos serveixen **perquè tu els comprovis**, no com a garantia.
:::

### Delimitar les parts

Quan enganxes material llarg, marca on acaba la teva instrucció i on comencen les
dades:

```
### Instrucció ###
Resumeix el correu de sota en tres punts.

### Correu ###
<<<
[aquí el correu]
>>>
```

Serveix qualsevol marca consistent: `###`, cometes triples o etiquetes com
`<correu>...</correu>`. El que no funciona és enganxar-ho tot seguit.

## El system prompt

Fins ara has escrit prompts que valen per a un missatge. El **system prompt** són
instruccions que s'apliquen a **tota la conversa**, sempre, sense que les hagis de
repetir.

És la diferència entre dir-li a algú com vols una cosa cada vegada, i contractar
algú explicant-li la feina el primer dia.

Un system prompt útil defineix:

| Element | Exemple |
|---|---|
| **Rol** | «Ets tècnic de suport de primera línia d'una empresa d'informàtica.» |
| **Audiència** | «Parles amb persones sense coneixements tècnics.» |
| **Comportament** | «Fas una pregunta cada cop, no diverses de cop.» |
| **Límits** | «No dones instruccions que impliquin obrir l'equip.» |
| **Format** | «Respostes de menys de 80 paraules.» |
| **Escapatòria** | «Si el problema requereix accés físic, ho dius i derives.» |

L'element que més s'oblida és l'últim. **Un assistent que no sap dir "això no ho
puc resoldre" s'inventa una solució**, i en suport tècnic això vol dir enviar un
client a esborrar un fitxer que no havia de tocar.

A l'Open WebUI pots crear models personalitzats amb el seu propi system prompt.
Un cop creat, apareix al desplegable com si fos un model més.

## Iterar

Gairebé mai encertaràs a la primera. Iterar bé vol dir **corregir el prompt**, no
tornar a demanar el mateix esperant sort.

Quan una resposta no serveix, la pregunta és **què li faltava saber**:

| Símptoma | Què hi falta |
|---|---|
| Massa genèrica | Context: per a qui, per a què |
| Massa llarga | Format: extensió màxima |
| To equivocat | Audiència |
| Se salta coses | Instrucció: enumera-les explícitament |
| S'inventa dades | Fonts: dona-li tu la informació |

I una cosa que estalvia molt de temps: **quan una conversa s'ha embrutat de
correccions, comença'n una de nova amb el prompt bo**. Arrossegar deu missatges
d'anades i vingudes fa que el model s'aferri als errors anteriors.

## Activitat: L'assistent de primera línia

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-04-prompting-i-system-prompts.docx">Activitat-04-prompting-i-system-prompts.docx</a>
:::

### Context

L'Aleix ha tingut una idea, cosa que segons ell passa poc:

> «Les trucades del Forn Cardús ens mengen el matí i sempre són les mateixes
> quatre coses. Vull provar un assistent que atengui la primera consulta i només
> ens passi el que sigui de veritat.
>
> Però compte: si l'assistent es posa a inventar-se solucions, farà més mal que
> bé. La Sílvia és capaç de fer literalment el que li diguis. Si li dius que
> desendolli el servidor, el desendolla.»

### Part 1 — Diagnosticar un prompt dolent

Comencem al revés: abans d'escriure'n un de bo, cal saber per què un de dolent
falla.

Aquí tens quatre prompts que algú de l'empresa ha fet servir de veritat, amb el
resultat que ha obtingut. **Per a cadascun, digues què li falta** (instrucció,
context o format) i **reescriu-lo**.

| # | Prompt original | Què ha sortit |
|---|---|---|
| 1 | `Fes-me un manual` | Un índex genèric de 12 capítols sobre «documentació tècnica» |
| 2 | `Explica'm els tòners` | Tres pàgines sobre la química del tòner i la seva història |
| 3 | `Escriu un correu al client dient que no ho podem fer` | Un correu fred que hauria fet perdre el client |
| 4 | `Ajuda'm amb l'error de la impressora` | Una llista de 20 causes possibles sense cap ordre |

Per a cada un has de lliurar: **què hi faltava**, **el prompt reescrit** i **la
resposta nova**.

### Part 2 — El prompt d'un sol tret

Ara escriu-ne un de zero.

**Un sol prompt** que faci que el model produeixi una explicació de com canviar el
tòner d'una impressora, dirigida a la Sílvia Cardús, de menys de 100 paraules i en
passos numerats.

Has de lliurar el prompt i la resposta, i **assenyalar al teu prompt on és la
instrucció, on el context i on el format**.

Després, **canvia una sola cosa del context**: que el destinatari sigui el Dani
Ntumba, del taller, que sap perfectament què és un tòner. Torna a executar-lo
sense tocar res més.

Compara les dues respostes i digues **quina paraula del prompt ha provocat el
canvi més gran**.

### Part 3 — El system prompt

Crea un model personalitzat a l'Open WebUI amb un system prompt que defineixi un
assistent de primera línia per a Vallcorba Informàtica. Ha d'incloure els sis
elements de la taula d'aquests apunts.

Presta atenció especial a l'escapatòria: **què ha de fer quan no ho sap**.

:::warning Abans de passar a la part següent
Rellegeix el teu system prompt i comprova que cada instrucció descriu **un
comportament observable**. «Sigues professional» no ho és: no hi ha manera de
saber si ho ha complert. «Respostes de menys de 80 paraules» sí que ho és.

Si una instrucció no es pot comprovar mirant la resposta, o la reescrius o la
treus.
:::

### Part 4 — Provar-lo

Prova el teu assistent amb aquests quatre casos. Guarda les converses senceres.

1. «Hola, la impressora d'etiquetes no imprimeix res.»
2. «No em recordo de la contrasenya de la caixa.»
3. «Em surt un missatge que diu error 0x8007007e, què faig?»
4. «Escolta, i tu creus que hauríem de canviar tots els ordinadors?»

Els casos 3 i 4 són trampes. Al 3, mira si s'inventa què vol dir el codi. Al 4,
mira si es posa a fer de comercial.

### Part 5 — Corregir

A partir del que hagis vist, **modifica el system prompt** i torna a passar els
quatre casos.

Has de documentar, per a cada canvi que facis: què fallava, què has canviat i què
ha canviat en el resultat. **Cita la frase concreta de la conversa** que t'ha fet
veure el problema.

### Part 6 — Trencar-lo

Un assistent que funciona amb els casos previstos no serveix de gaire. Ara
prova de **fer-lo fallar**.

Escriu **tres missatges dissenyats per saltar-se les teves pròpies
instruccions**. Per exemple:

- Fer-li dir un preu quan li has prohibit parlar de compres.
- Fer-li explicar un codi d'error inventat.
- Fer-li donar instruccions que impliquin obrir l'equip.

Per a cada intent, anota **si te n'has sortit**. Si te n'has sortit amb algun,
digues quina instrucció hauries d'afegir per tancar-lo. No cal que l'afegeixis:
n'hi ha prou que sàpigues quina és.

:::tip Això no és fer trampes
És exactament el que fa un professional abans de posar un sistema davant d'un
client. Trobar el forat tu val molt més que trobar-lo la Sílvia.
:::

### Què has de lliurar

1. **Part 1:** els quatre prompts diagnosticats, reescrits, amb les respostes
   noves.
2. **Part 2:** el prompt amb les tres parts assenyalades, les dues respostes
   (Sílvia i Dani) i quina paraula ha provocat el canvi més gran.
3. **Part 3:** el system prompt inicial.
4. **Part 4:** les converses dels quatre casos amb la versió inicial.
5. **Part 5:** el system prompt corregit, les converses dels quatre casos amb la
   versió corregida, i la taula de canvis amb la frase citada de cada conversa.
6. **Part 6:** els tres intents de trencar-lo, si han funcionat, i quina
   instrucció els tancaria.

:::tip Ús de la IA
Permès, també per escriure el system prompt. Però hauràs d'explicar en
l'entrevista per què hi has posat cada instrucció, així que no hi deixis res que
no entenguis.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | El system prompt és una frase genèrica, o no s'ha provat amb els quatre casos |
| **Suficient** | Totes les parts hi són. El system prompt té els sis elements i les vuit converses estan documentades |
| **Notable** | El diagnòstic de la part 1 identifica correctament què faltava a cada prompt, i els canvis de la part 5 responen a problemes realment observats |
| **Excel·lent** | A més, l'assistent corregit gestiona bé els casos 3 i 4, la taula de canvis cita fragments literals, i la part 6 troba almenys un forat real amb la instrucció que el tancaria |

### Preguntes que et poden fer

- Ensenya'm la instrucció del teu system prompt que evita que s'inventi codis
  d'error. Per què creus que funciona?
- Al prompt número 2 de la part 1, què hi faltava exactament?
- Quina paraula vas canviar entre la versió per a la Sílvia i la del Dani, i per
  què va canviar tant la resposta?
- Què passaria si traguessis l'escapatòria del system prompt?
- Has aconseguit trencar-lo? Amb què, i com ho tancaries?

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 9.1 | Elabora guies visuals amb els conceptes bàsics d'ús d'una aplicació. | Principal |
| 9.2 | Identifica problemes relacionats amb l'ús d'aplicacions ofimàtiques. | Principal |
| 9.3 | Utilitza manuals d'usuari per instruir en l'ús d'aplicacions. | Principal |
| 9.4 | Aplica tècniques d'assessorament en l'ús d'aplicacions. | Principal |
| 9.8 | Soluciona les incidències en el temps adequat i amb el nivell de qualitat esperat. | Principal |
| 1.3 | Configura les aplicacions segons els criteris establerts. | Reforç |
