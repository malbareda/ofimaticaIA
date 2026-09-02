---
title: "Muntar un agent amb una clau d'API"
sidebar_label: "S30 · Muntar un agent amb una clau d'API"
sidebar_position: 7
description: "Setmana 30 — Muntar un agent amb una clau d'API"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 30 — Muntar un agent amb una clau d'API

**BA4 — Dades i professionalització** · 3 h

## Objectius

En acabar la sessió has de ser capaç de:

1. Instal·lar un agent i configurar-hi una clau d'API seguint la documentació.
2. Resoldre les incidències d'instal·lació i deixar-ne constància escrita.
3. Explicar per què una clau d'API s'ha de custodiar i què costa una filtració.
4. Integrar la skill pròpia dins de l'agent.

## Un agent no és un xat

Fins ara, tota la IA que has fet servir era **conversacional**: tu escrius, ell
respon, i s'acaba. Tot el que passa entre mig ho fas tu.

Un **agent** és diferent: se li dona un objectiu i **executa passos per
aconseguir-lo**. Pot llegir un fitxer, decidir que li'n falta un altre,
llegir-lo, calcular una cosa i escriure el resultat, sense que tu li diguis cada
pas.

| | Xat | Agent |
|---|---|---|
| Qui decideix els passos | Tu | Ell |
| Pot llegir fitxers teus | No | Sí |
| Pot escriure fitxers | No | Sí |
| Pot executar ordres | No | Sí, segons permisos |
| Quan s'atura | Quan respon | Quan considera l'objectiu assolit |
| El risc | Que digui una cosa malament | **Que faci una cosa malament** |

L'última fila és tota la diferència. Un xat que s'equivoca escriu una bestiesa i
tu la llegeixes. Un agent que s'equivoca **ja ho ha fet**.

## L'API i per què importa

Una **API** (*interfície de programació d'aplicacions*) és la manera que té un
programa de parlar amb un altre. Quan fas servir un xat web, per sota hi ha una
API; el que canvia és que ara la faràs servir tu directament.

Què implica:

| | Xat web | API |
|---|---|---|
| Accés | Amb usuari i contrasenya | **Amb una clau** |
| Cost | Subscripció o gratuït amb límits | **Pagues pel que consumeixes** |
| Model | El que hi hagi | El que triïs a cada petició |
| Límits de conversa | Els del pla | Els que t'imposis tu |
| Qui l'usa | Una persona | Un programa |

I aquí es tanca el cercle de la sessió 2: **ara els tokens que vas aprendre a
comptar es converteixen en una factura amb el teu nom.**

### OpenRouter

Cada proveïdor de models té la seva API, amb la seva clau i el seu format.
**OpenRouter** és un intermediari: una sola clau i un sol format per accedir a
models de molts fabricants diferents.

Per què això importa a la feina:

- **No et lligues a un proveïdor.** Canviar de model és canviar una línia.
- **Pots comparar** models sobre la mateixa feina, sense obrir cinc comptes.
- **Un sol lloc on veure què gastes.**
- Alguns models hi són gratuïts o gairebé, cosa que permet provar sense por.

## La clau d'API

Aquí ve la part seriosa de la sessió.

Una clau d'API és **una credencial**. Qui la tingui pot fer peticions **en el teu
nom i amb el teu saldo**, fins que la revoquis.

No és com una contrasenya que et protegeix un compte. És com una targeta de crèdit
sense PIN: qui la troba, l'usa.

### Com es filtren de veritat

Gairebé mai per un atac. Per descuit:

| Com passa | Freqüència |
|---|---|
| Es puja a un repositori públic dins d'un fitxer de codi | **La causa número u** |
| S'enganxa a una captura de pantalla per demanar ajuda | Molt habitual |
| Es passa per un xat o un correu | Habitual |
| Es deixa en un fitxer de configuració que es comparteix | Habitual |
| S'escriu en una diapositiva d'una presentació | Passa |

Hi ha programes que **rastregen repositoris públics buscant claus** i les proven
en pocs minuts. No és una hipòtesi: és un negoci.

### Què costa

Depèn del saldo i dels límits que hagis posat. Sense límits, el cost és **el que
aguanti la targeta**. Amb un model car i un procés automatitzat, es pot arribar a
xifres serioses en hores.

Per això la primera cosa que es fa en obrir un compte d'API **no és generar la
clau: és posar un límit de despesa.**

:::danger Les cinc regles de la clau
1. **Posa un límit de despesa abans de generar-la.**
2. **No l'escriguis mai dins del codi.** Va en una variable d'entorn o en un
   fitxer de configuració que no es comparteix.
3. **No la comparteixis** per xat, correu ni captura.
4. **Si dubtes que s'hagi filtrat, revoca-la.** Generar-ne una de nova són deu
   segons; una factura, no.
5. **Una clau per persona o per projecte.** Així es pot revocar la que toca sense
   parar la resta.
:::

## Instal·lar

L'agent que faràs servir te'l dirà el professorat. Sigui quin sigui, el
procediment té sempre les mateixes fases, i són exactament les de RA1 que vas
veure a la sessió 1:

1. **Requisits previs.** Què ha d'estar instal·lat abans. Sol ser aquí on falla.
2. **Instal·lació.** L'ordre concreta.
3. **Configuració.** La clau, el model per defecte, els paràmetres.
4. **Verificació.** Una primera petició que confirmi que respon.
5. **Documentació.** Què has fet i què ha fallat.

:::tip El que et trobaràs
Les instal·lacions rarament van a la primera en un equip d'aula: versions que no
coincideixen, permisos, tallafocs, rutes.

**Això no és un contratemps de l'activitat: és l'activitat.** Documentar bé una
incidència d'instal·lació és el criteri 1.4 i el 9.5 del currículum, i és el que
faràs a l'empresa cada setmana.
:::

## Carregar-hi la skill

L'última peça. La skill que vas escriure la sessió passada és un fitxer de text
amb un format estàndard, i per tant **es pot carregar en un agent**.

Quan ho facis, tindràs una cosa que abans no tenies: un sistema que fa la teva
tasca amb les teves instruccions, amb el model que tu tries, al teu ordinador i
amb el teu control de despesa.

Això és, en petit, exactament el que munten les empreses.

<Activitat num={30}>

## Activitat: El teu agent, la teva skill

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-30-agent-amb-api.docx">Activitat-30-agent-amb-api.docx</a>
:::

### Context

La Núria, després de veure la skill de la setmana passada:

> «Això està bé, però depèn d'una eina de fora. Si demà canvien les condicions o
> apugen el preu, ens quedem penjats.
>
> Vull saber si podem tenir una cosa nostra: que corri aquí, que puguem triar el
> model i que quan em vingui la factura jo sàpiga d'on surt cada cèntim.»

### Part 1 — Preparar el terreny

**Abans de tocar res:**

1. Comprova els requisits previs de l'agent i anota **quina versió tens** de
   cadascun.
2. Al compte d'OpenRouter, **posa el límit de despesa abans de generar la clau**.
   Anota quin límit has posat.
3. Genera la clau i guarda-la on t'indiqui el professorat.

**A partir d'aquí, obre el registre d'incidències.** El mateix format de la
sessió 1. Cada cosa que falli hi va.

### Part 2 — Instal·lar i verificar

Instal·la l'agent i configura-hi la clau.

Verifica que funciona amb una petició senzilla. Anota:

- L'ordre exacta que has executat.
- La resposta.
- Quin model ha fet servir.
- **Quant ha costat**, si l'eina ho mostra.

### Part 3 — El registre d'incidències

Aquesta és la part que puntua més.

| # | Fase | Què intentava | Missatge literal | Què he provat | Com s'ha resolt | Temps |
|---|---|---|---|---|---|---|

Regles:

- **Missatge d'error literal.** Copiat, no descrit.
- **Tot el que has provat**, inclòs el que no ha funcionat.
- Si no ha fallat res, escriu-ho i digues què creus que hauria pogut fallar.

### Part 4 — Carregar la skill

Carrega la skill de la sessió 29 dins de l'agent i prova-la amb un dels casos que
ja tenies.

Compara el resultat amb el que donava a l'altra eina:

| | A l'eina de la S29 | A l'agent |
|---|---|---|
| S'activa sola? | | |
| El resultat és equivalent? | | |
| Què ha canviat | | |
| Quin model l'ha executada | | |

### Part 5 — La prova de la clau

Sense filtrar res, respon:

1. Si demà publiquessis per error la teva clau en un repositori públic, **quant
   de temps creus que trigaria algú a fer-la servir?** Busca informació i cita la
   font.
2. **Quant podria arribar a costar** amb el límit que has posat? I sense límit?
3. **Com te n'assabentaries** que està passant?
4. **Què faries** en aquell moment, pas per pas?

### Part 6 — L'informe per a la Núria

Redacta l'informe d'incidències en format professional. **Màxim dues pàgines**,
amb l'estructura que ja coneixes de la sessió 3:

1. **Objecte** — què s'ha fet i per encàrrec de qui.
2. **Procediment** — les fases, amb versions concretes.
3. **Incidències** — la taula, resumida.
4. **Custòdia de la clau** — què s'ha fet perquè no es filtri i què costaria si
   passés.
5. **Conclusió** — respon la pregunta de la Núria: es pot tenir una cosa nostra?
   Amb quins avantatges i quins inconvenients reals.

### Què has de lliurar

1. Les versions dels requisits previs i el límit de despesa configurat.
2. La verificació de la part 2 amb l'ordre, la resposta i el model.
3. El registre d'incidències complet.
4. La taula comparativa de la skill.
5. Les respostes de la prova de la clau, amb font a la primera.
6. L'informe per a la Núria.

:::danger La clau no es lliura
**No enganxis mai la clau a cap lliurament, captura ni document.** Si apareix en
alguna captura, tapa-la.

Un lliurament amb una clau visible és insuficient automàticament, encara que la
resta sigui perfecta. És exactament l'error que es comet a l'empresa.
:::

:::tip Ús de la IA
Permès, i és probable que la facis servir per resoldre errors d'instal·lació. Si
ho fas, **documenta-ho al registre**: quin error, què li vas preguntar, si la
resposta va servir.

Una IA resolent un error d'instal·lació és el cas d'ús més real de tot el mòdul.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | L'agent no arriba a respondre, no hi ha registre d'incidències, o la clau apareix en algun lliurament |
| **Suficient** | L'agent funciona, la clau està configurada amb límit i el registre existeix |
| **Notable** | El registre permetria a un company reproduir el problema i la solució, i la skill s'ha carregat i provat |
| **Excel·lent** | A més, la prova de la clau està documentada amb fonts, i la conclusió de l'informe respon la pregunta de la Núria amb avantatges **i** inconvenients reals |

### Preguntes que et poden fer

- Ensenya'm on tens guardada la clau. Per què allà?
- Quin límit de despesa has posat i per què aquell?
- Quina incidència t'ha costat més? Com la vas resoldre?
- La skill s'ha comportat igual a l'agent que a l'altra eina? Si no, per què?
- Si demà et diuen que la clau s'ha filtrat, què fas primer?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 1.1 | Identifica i estableix les fases del procés d'instal·lació. | Reforç |
| 1.2 | Respecta les especificacions tècniques del procés d'instal·lació. | Reforç |
| 1.5 | Soluciona problemes en la instal·lació o integració amb el sistema informàtic. | Reforç |
| 9.5 | Realitza informes d'incidències. | Principal |
| 9.6 | Aplica els procediments necessaris per salvaguardar la informació i la seva recuperació. | Reforç |
| 9.8 | Soluciona les incidències en el temps adequat i amb el nivell de qualitat esperat. | Principal |
