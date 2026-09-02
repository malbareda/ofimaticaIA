---
title: "Iteració, rols i context feeding"
sidebar_label: "S07 · Iteració, rols i context feeding"
sidebar_position: 3
description: "Setmana 7 — Iteració, rols i context feeding"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 7 — Iteració, rols i context feeding

**BA2 — Comunicació professional amb IA** · 3 h

## Objectius

En acabar la sessió has de ser capaç de:

1. Diagnosticar per què un prompt ha produït un mal resultat.
2. Reescriure un prompt afegint-hi rol, audiència i context.
3. Iterar sobre una resposta sense reiniciar la conversa.

## El rol

A la sessió 4 vas veure que un system prompt pot definir un rol. Ara toca
entendre **per què funciona**.

Quan escrius «ets tècnic de suport», no estàs contractant ningú. El que fas és
**restringir el tipus de text que el model considera plausible**. Un model genera
text estadísticament versemblant; dir-li que és tècnic de suport fa que el text
propi d'un tècnic de suport passi a ser el més probable.

Per això funciona millor un rol concret que un de grandiós:

| Rol | Efecte |
|---|---|
| «Ets un expert mundial en informàtica» | Poc. És massa vague per restringir res |
| «Ets tècnic de suport de primera línia» | Molt. Hi ha un registre associat |
| «Ets el cap de manteniment que ha d'explicar una avaria a un client que ja s'ha queixat dues vegades» | Moltíssim. Hi ha to, situació i tensió |

**El rol útil no és el més prestigiós: és el més específic.**

## L'audiència

El rol diu qui parla. L'audiència diu **a qui**, i sovint canvia més la resposta
que el rol.

Prova mentalment aquestes tres:

> Explica què és una còpia de seguretat incremental a la Sílvia Cardús, que porta
> un forn de pa.

> Explica què és una còpia de seguretat incremental al Quim Roure, que porta un
> taller i no vol que li parlin com si fos tonto.

> Explica què és una còpia de seguretat incremental al Ferran Amat, que és gestor,
> desconfia de tot i vol saber què passa si falla.

El mateix contingut. Tres textos completament diferents. I el que canvia no és
només el vocabulari: canvia **què cal explicar i què es pot donar per sabut**.

:::tip Si només pots posar una cosa al prompt
Posa l'audiència. És el que més canvia el resultat per paraula escrita.
:::

## Donar context

L'error més comú no és demanar malament. És **no donar-li la informació que
necessita** i esperar que se la inventi bé.

Un model no sap res del teu client, del teu projecte ni del que vau acordar
dimarts. Si no l'hi dius, omplirà el buit amb el cas més corrent, que gairebé mai
és el teu.

Donar context vol dir enganxar-li **el material real**: el correu anterior, el
fragment del contracte, les dades de la incidència, l'exemple d'un document que
sí que va agradar.

| En comptes de | Fes |
|---|---|
| «Escriu un correu de resposta a un client enfadat» | Enganxar el correu del client i dir què li pots oferir |
| «Fes un resum de la reunió» | Enganxar les notes de la reunió |
| «Escriu-ho amb l'estil de l'empresa» | Enganxar un document que ja té l'estil de l'empresa |

:::warning Recorda la sessió 3
Donar context vol dir passar informació a un servei extern. Abans d'enganxar
res, passa-ho pel filtre: hi ha dades personals? És informació confidencial del
client? Es pot anonimitzar?

Un exemple anonimitzat sol funcionar igual de bé que el real.
:::

## Iterar

Iterar no és tornar a demanar el mateix esperant sort. És **corregir**.

La manera eficient és dir què no serveix i què vols en comptes, sense repetir tot
l'encàrrec:

> Massa llarg. Deixa'l en tres paràgrafs i treu la introducció.

> El segon punt està bé. Refes els altres dos amb el mateix to.

> Això sona a comercial. Vull que soni a tècnic que explica un fet.

Dues coses que ajuden molt:

**Demana-li que et pregunti.** «Si et falta informació per fer-ho bé, pregunta-m'ho
abans de començar.» Sovint et fa la pregunta que t'havies saltat.

**Demana-li dues versions.** «Fes-me'n dues de to diferent i digue'm quina
recomanes i per què.» Comparar és més fàcil que jutjar en abstracte.

### Quan començar de nou

Si portes vuit missatges de correccions, el model arrossega tots els intents
fallits i s'hi aferra. Surt més a compte **obrir una conversa nova amb el prompt
bo**: el que has après de la conversa embrutada és precisament com hauria d'haver
començat.

<Activitat num={7}>

## Activitat: Rescatar un encàrrec

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-07-iteracio-rols-context.docx">Activitat-07-iteracio-rols-context.docx</a>
:::

### Context

La Laia Puig ha d'enviar una proposta comercial a Tallers Roure i ha intentat
que l'hi escrigués una IA. El resultat és aquest, i no es pot enviar:

> «Estimado cliente, en el dinámico panorama tecnológico actual, la
> transformación digital se ha convertido en un imperativo estratégico para las
> organizaciones que buscan mantener su ventaja competitiva. En Vallcorba
> Informática somos líderes en soluciones integrales de vanguardia…»

El prompt que va fer servir era:

> `Escriu una proposta comercial per a un client.`

La Laia t'ho ha passat amb un missatge curt:

> «Això no ho puc enviar al Quim, es pensarà que ens hem tornat bojos. Arregla-ho
> tu, que hi entens.»

### El que necessites saber

| Dada | Valor |
|---|---|
| Client | Tallers Roure, taller mecànic de 6 persones |
| Contacte | Quim Roure, propietari. No és tècnic i no vol que li ho semblin |
| Situació | Tenen 4 ordinadors de més de 8 anys i un programa de gestió sense actualitzacions |
| Problema real | Han perdut dades dues vegades. No tenen còpies de seguretat |
| Què oferim | Contracte de manteniment: còpies automàtiques, revisió trimestral, atenció d'incidències |
| Preu | 180 € al mes |
| Història | Ja els vam fer un pressupost fa dos anys i el van rebutjar per car |

### Part 1 — El diagnòstic

Escriu **què li falta** al prompt original. Fes servir tres etiquetes: rol,
audiència i context. Per a cadascuna, digues què hi hauria d'haver i **què ha
passat per no haver-hi estat**, citant el text generat.

### Part 2 — La reescriptura

Escriu el prompt bo. Ha de portar rol, audiència, context i format de sortida.

Executa'l i guarda el resultat.

### Part 3 — Tres iteracions

A partir d'aquí, **itera tres vegades** sobre la resposta, sense reiniciar la
conversa. Cada iteració ha de corregir alguna cosa concreta que has vist.

Documenta cada volta:

| # | Què no servia | Què li has dit | Què ha canviat |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

### Part 4 — La prova del destinatari

Rellegeix la versió final imaginant que ets el Quim Roure. **Marca una frase que
et faria desconfiar** si fossis ell, i digues per què.

Si no en trobes cap, torna-la a llegir. Sempre n'hi ha alguna.

### Què has de lliurar

1. El diagnòstic del prompt original, amb citacions del text dolent.
2. El prompt reescrit.
3. Les tres iteracions documentades a la taula.
4. La proposta final.
5. La frase marcada a la part 4 amb la justificació.

:::tip Ús de la IA
Permès. Aquesta activitat va precisament d'això. El que s'avalua no és el text
final, sinó **que el camí fins al text final sigui deliberat**.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | El diagnòstic és genèric («faltava context») sense dir quin, o les iteracions no corregeixen res concret |
| **Suficient** | El diagnòstic identifica els tres elements i el prompt reescrit els incorpora |
| **Notable** | Les tres iteracions responen a problemes observats i es veu què ha canviat a cada volta |
| **Excel·lent** | A més, la proposta final té en compte la història del client (el pressupost rebutjat fa dos anys) i la frase marcada a la part 4 és un problema real, no un defecte cosmètic |

### Preguntes que et poden fer

- Al text original hi ha la paraula «vanguardia». Quina part del prompt hauria
  evitat que sortís?
- Quina de les tres iteracions va canviar més el resultat? Per què creus que va
  ser aquella?
- Has esmentat el pressupost rebutjat fa dos anys? Si no, per què no?
- Si el destinatari fos el Ferran Amat en comptes del Quim, què canviaries del
  prompt?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 2.3 | Utilitza aplicacions i perifèrics per introduir textos i imatges. | Principal |
| 2.6 | Elabora manuals específics. | Reforç |
