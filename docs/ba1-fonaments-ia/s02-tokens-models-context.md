---
title: "Tokens, models i finestra de context"
sidebar_label: "S02 · Tokens, models i finestra de context"
sidebar_position: 2
description: "Setmana 2 — Tokens, models i finestra de context"
---

# Setmana 2 — Tokens, models i finestra de context

**BA1 — Fonaments i infraestructura d'IA** · 3 h

## Objectius

En acabar la sessió has de ser capaç de:

1. Explicar amb paraules pròpies què és un token i per què en limita l'ús.
2. Estimar el cost d'una conversa a partir de preus reals d'API.
3. Predir què passa quan una conversa desborda la finestra de context.

## Per què això importa

La IA sembla gratuïta. No ho és. Cada resposta té un cost en electricitat, en
maquinari i en diners, i algú el paga: tu amb un límit d'ús, l'empresa amb una
factura, o el centre amb el seu servidor.

Entendre com es compta aquest cost et servirà per a tres coses molt concretes:

- **Saber per què l'eina et talla** quan portes estona treballant.
- **Poder dir a un client quant li costaria** fer servir una IA per a la seva
  feina.
- **Escriure de manera més eficient**, que sovint vol dir escriure millor.

## El token

Els models no llegeixen paraules. Llegeixen **tokens**: trossos de text d'una
mida entre la lletra i la paraula.

Una regla pràctica per a textos en català o castellà:

> **1 token ≈ 3 o 4 caràcters.** Una paraula corrent són 1 o 2 tokens.

Alguns exemples aproximats:

| Text | Tokens aproximats |
|---|---|
| `Hola` | 1 |
| `ordinador` | 2 o 3 |
| `Bon dia, com estàs?` | 6 |
| Un correu curt (100 paraules) | 130-150 |
| Una pàgina de text (500 paraules) | 650-750 |
| Aquests apunts sencers | Uns quants milers |

Les paraules poc habituals i els noms propis es parteixen en més tokens que les
paraules corrents. Per això `Vallcorba` costa més tokens que `casa`.

### Es paguen dues vegades

Cada interacció té dos comptadors:

- **Tokens d'entrada** (*input*): tot el que li envies. El teu missatge, les
  instruccions del sistema i **tota la conversa anterior**.
- **Tokens de sortida** (*output*): el que et respon.

Els de sortida acostumen a ser **més cars** que els d'entrada, sovint entre tres i
cinc vegades més.

:::warning El detall que sorprèn tothom
Cada cop que escrius un missatge nou, s'envia **tota la conversa des del principi
un altre cop**. El model no recorda res: se li torna a explicar tot cada vegada.

Per això una conversa llarga és cara i es va encarint a mesura que creix.
:::

## La finestra de context

La **finestra de context** és la quantitat màxima de tokens que un model pot
tenir en compte de cop: instruccions, conversa i resposta, tot junt.

Els models actuals van de desenes de milers a diversos milions de tokens de
finestra. Sembla molt. Deixa de semblar-ho quan hi enganxes tres documents.

Què passa quan una conversa la desborda depèn de l'eina:

- **Talla el principi.** El model «oblida» els primers missatges. És el més
  habitual, i el més traïdor: no t'avisa, simplement comença a contradir coses que
  havies acordat abans.
- **Resumeix.** Alguns sistemes comprimeixen la conversa antiga. Es perden
  detalls.
- **Es bloqueja.** Et diu que la conversa és massa llarga i no pots continuar.

:::tip Conseqüència pràctica
Si portes una hora de conversa i comença a ignorar instruccions que li havies
donat al principi, no s'ha espatllat: **han caigut de la finestra**. La solució és
obrir una conversa nova i tornar-hi a posar el que calgui.
:::

## Què costa de veritat

Els preus es donen per **milió de tokens** i canvien sovint. L'ordre de magnitud,
però, es manté:

| Tipus de model | Entrada (per milió) | Sortida (per milió) |
|---|---|---|
| Model petit i ràpid | Cèntims | Cèntims |
| Model mitjà | Uns quants dècims d'euro | Uns quants euros |
| Model gran | Uns quants euros | Deu o més |

La diferència entre el petit i el gran pot ser de **cent vegades**. Per això la
pregunta professional no és «quin és el millor model», sinó **«quin és el model
més barat que resol aquesta feina prou bé»**.

### Fer el càlcul

El càlcul té tres passos:

1. Comptar els tokens d'entrada i multiplicar-los pel preu d'entrada.
2. Comptar els de sortida i multiplicar-los pel preu de sortida.
3. Sumar.

I si és una conversa de diversos torns, recorda que **l'entrada creix a cada
torn** perquè arrossega tot l'històric.

## Activitat: Quant costa parlar amb una IA

### Context

La Núria ha llegit el teu informe de la setmana passada i n'ha tret una pregunta
molt seva:

> «Molt bé, però això quant costa? Si posem l'IA a atendre les consultes fàcils
> del Forn Cardús, quina factura em ve cada mes? Vull un número, no una
> explicació.»

L'Aleix t'ho ha passat a tu amb un afegit:

> «Dona-li un número i digue-li de què depèn. Si no li dius de què depèn, es
> pensarà que és exacte i després m'ho reclamarà a mi.»

### Part 1 — Comptar tokens

1. Agafa un text d'unes 200 paraules. Pot ser un correu, un fragment
   d'aquests apunts o el que vulguis.
2. **Estima** quants tokens creus que té, aplicant la regla dels 3-4 caràcters.
3. **Comprova-ho** amb el comptador de tokens que t'indiqui el professorat.
4. Anota la diferència entre la teva estimació i el resultat real, en percentatge.

### Part 2 — El cas del Forn Cardús

La Sílvia Cardús truca amb consultes com aquestes:

- «La impressora d'etiquetes no imprimeix.»
- «M'he deixat la contrasenya de la caixa.»
- «Surt un missatge que no entenc, te'l llegeixo.»

Dades per treballar:

| Dada | Valor |
|---|---|
| Consultes al mes | 40 |
| Torns de conversa per consulta | 4 de mitjana |
| Missatge de l'usuari | Unes 60 paraules |
| Resposta de l'assistent | Unes 150 paraules |
| Instruccions del sistema | 300 paraules, s'envien a cada torn |

Calcula:

1. Els tokens d'entrada i de sortida **d'una consulta sencera**, tenint en compte
   que cada torn arrossega tota la conversa anterior.
2. El total mensual de les 40 consultes.
3. El **cost mensual amb un model barat** i el **cost mensual amb un model car**,
   amb els preus que et donarà el professorat.

Fes-ho amb un full de càlcul. És més ràpid i, sobretot, es pot revisar.

### Part 3 — La resposta a la Núria

Escriu la resposta. **Un màxim de 150 paraules**, i ha de contenir:

- Un número concret de cost mensual.
- De què depèn aquest número (què el podria multiplicar per deu).
- Una recomanació teva d'una línia.

### Què has de lliurar

1. El full de càlcul amb els càlculs, on es vegin les fórmules.
2. La comparació entre la teva estimació de tokens i el recompte real.
3. La resposta a la Núria, de 150 paraules com a màxim.
4. La documentació del procés d'ús de la IA, si l'has feta servir.

:::tip Ús de la IA
Permès, però amb un avís: **la IA calcula malament**. Si li demanes els números,
comprova'ls tu. Un error de càlcul en un pressupost que arriba a gerència no té
excusa.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | Els càlculs no tenen en compte que la conversa arrossega l'històric, o el cost surt d'un ordre de magnitud equivocat |
| **Suficient** | Els càlculs són correctes i la resposta dona un número |
| **Notable** | La resposta explica de què depèn el número amb un exemple concret |
| **Excel·lent** | A més, la recomanació és defensable i el full de càlcul està construït perquè es puguin canviar els supòsits sense refer-lo |

### Preguntes que et poden fer

- Per què el cost d'entrada creix a cada torn de la conversa?
- Si la Sílvia comença a enviar fotos de la pantalla, què li passa al teu càlcul?
- Quin dels dos models recomanaries i què hauria de passar perquè canviessis
  d'opinió?

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 1.9 | Proposa solucions de programari per a entorns d'aplicació. | Principal |
| 9.7 | Utilitza els recursos disponibles per solucionar incidències. | Principal |
