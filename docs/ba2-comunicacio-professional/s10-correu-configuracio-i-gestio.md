---
title: "Correu electrònic: configuració i gestió"
sidebar_label: "S10 · Correu electrònic: configuració i gestió"
sidebar_position: 6
description: "Setmana 10 — Correu electrònic: configuració i gestió"
---

# Setmana 10 — Correu electrònic: configuració i gestió

**BA2 — Comunicació professional amb IA** · 3 h

## Objectius

En acabar la sessió has de ser capaç de:

1. Configurar un compte de correu i identificar-ne els elements.
2. Construir un sistema d'etiquetes i filtres que respongui a una necessitat
   concreta.
3. Operar amb la llibreta d'adreces.

## Què és de veritat un correu

Un correu no és el que veus. El que veus és el cos; a sota hi ha una capçalera
amb molta més informació.

| Element | Què és |
|---|---|
| **De** (*From*) | Qui diu que l'envia. **Es pot falsificar** |
| **Per a** (*To*) | Destinataris principals |
| **Còpia** (*Cc*) | Destinataris en còpia. Tothom es veu |
| **Còpia oculta** (*Cco/Bcc*) | Destinataris ocults. Ningú no sap qui hi és |
| **Assumpte** | La línia que decideix si l'obren |
| **Respon a** (*Reply-To*) | On van les respostes, si no és el remitent |
| **Data** | Quan es va enviar |
| **Received** | El recorregut real del missatge, servidor a servidor |
| **Message-ID** | Identificador únic |
| **Adjunts** | Fitxers codificats dins del missatge |

Les capçaleres completes es poden veure sempre (a Gmail, «Mostra l'original»). Són
el primer lloc on es mira quan se sospita d'un correu fraudulent: el camp *De*
pot dir el que vulgui, però el recorregut dels servidors és molt més difícil de
falsificar.

:::tip Cco no és una cortesia, és protecció de dades
Si envies un correu a quaranta clients posant-los tots a *Per a*, acabes de
comunicar l'adreça de cadascun a tots els altres. Això és una cessió de dades
personals sense base jurídica.

Per a enviaments múltiples: **Cco sempre**, o combinació de correspondència.
:::

## Els protocols

Quan envies un correu, no viatja directament de tu al destinatari.

| Protocol | Per a què | Port habitual |
|---|---|---|
| **SMTP** | **Enviar** | 587 amb xifratge |
| **IMAP** | **Llegir** deixant els missatges al servidor | 993 |
| **POP3** | **Descarregar** i (normalment) esborrar del servidor | 995 |

La diferència entre IMAP i POP3 és la que fa tenir sentit tota la resta:

- **IMAP**: els missatges viuen al servidor. Els veus igual des del mòbil, el
  portàtil i el web. Si esborres al mòbil, s'esborra a tot arreu.
- **POP3**: els missatges es descarreguen a un dispositiu. Si els descarrega el
  portàtil, al mòbil ja no hi són.

**Per a un ús professional, IMAP sempre.** POP3 només té sentit en casos molt
concrets, com un servidor amb molt poc espai.

### Configurar un compte

Per configurar un compte en un client com Thunderbird necessites:

- Adreça i contrasenya.
- Servidor d'entrada (IMAP), port i tipus de xifratge.
- Servidor de sortida (SMTP), port i tipus de xifratge.
- Si cal autenticació per enviar (gairebé sempre sí).

La majoria de clients ho detecten sols per als proveïdors coneguts. Quan no ho
fan, és quan cal saber què hi va, i és exactament la situació que et trobaràs en
un client amb un domini propi.

:::warning Contrasenyes d'aplicació
Molts proveïdors ja no accepten la contrasenya normal des d'un client de correu.
Cal generar una **contrasenya d'aplicació** específica, o configurar OAuth.

Si un compte «no deixa entrar» des de Thunderbird però funciona al web, és
gairebé sempre això.
:::

## Organitzar la bústia

Una bústia amb 4.000 missatges sense llegir no és un problema de volum: és un
problema de sistema.

**Etiquetes o carpetes.** Una carpeta és un lloc: un missatge hi és o no hi és.
Una etiqueta és una marca: un missatge en pot tenir diverses. Gmail treballa amb
etiquetes encara que sembli que són carpetes.

**Filtres.** Regles que s'apliquen soles quan arriba un missatge: etiquetar,
arxivar, marcar com a important, reenviar, esborrar. Un bon joc de filtres fa que
la bústia s'ordeni sense tu.

**Cerca.** Amb operadors (`from:`, `subject:`, `has:attachment`, `before:`), la
cerca sol ser més ràpida que qualsevol estructura de carpetes.

### Com dissenyar el sistema

L'error habitual és fer una carpeta per cada cosa. Al cap de dos mesos hi ha
seixanta carpetes i ningú no sap on desar res.

Un sistema que funciona respon a **què has de fer amb el missatge**, no a de què
tracta:

| Etiqueta | Significat |
|---|---|
| **Acció** | He de fer alguna cosa jo |
| **Esperant** | He respost i espero resposta |
| **Referència** | No he de fer res, però ho voldré trobar |
| Per client | Transversal a les anteriors |

Tres o quatre etiquetes d'estat, més una per client, cobreixen gairebé tot.

## L'agenda

L'agenda electrònica no és una llista de cites: és una eina compartida.

- **Calendaris múltiples**: un de personal, un d'equip, un de guàrdies. Es
  poden mostrar i amagar per separat.
- **Compartició**: qui pot veure què. Compte amb els detalls dels esdeveniments
  quan es comparteix amb tot un domini.
- **Esdeveniments recurrents**: la revisió trimestral d'un client s'introdueix un
  cop.
- **Convidats i disponibilitat**: veure els forats lliures de diverses persones
  abans de proposar una hora.
- **Recordatoris**: perquè un avís de dos dies abans val més que un de cinc
  minuts abans.

## Activitat: Muntar la bústia de l'empresa

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-10-correu-configuracio-i-gestio.docx">Activitat-10-correu-configuracio-i-gestio.docx</a>
:::

### Context

L'Aleix, en una reunió d'equip, ha ensenyat la seva bústia projectada. Hi havia
6.284 missatges sense llegir. La Núria ha decidit que això s'acaba:

> «Vull que munteu la bústia de suport com Déu mana. Etiquetes, filtres i
> l'agenda de revisions trimestrals dels clients de manteniment. I ho vull
> documentat, perquè quan entri algú nou no li hàgim d'explicar tot un altre cop.»

### Part 1 — Els elements d'un correu

Agafa un correu que hagis rebut i **obre'n les capçaleres completes**.

Identifica i explica, amb el que veus:

1. El camp *De* i el camp *Reply-To*. Coincideixen?
2. Per quants servidors ha passat el missatge.
3. Quant ha trigat des que es va enviar fins que t'ha arribat.
4. Si porta adjunts, com hi apareixen.

### Part 2 — Configurar

Configura el compte del centre en un client de correu (Thunderbird o el que
t'indiqui el professorat).

Anota **la configuració exacta** que has fet servir: servidors, ports, xifratge i
tipus d'autenticació.

Després respon: si el mateix compte l'haguessis configurat amb POP3 en comptes
d'IMAP, què passaria quan el consultessis des del mòbil?

### Part 3 — El sistema d'etiquetes

Dissenya el sistema d'etiquetes i filtres per a la bústia de suport de Vallcorba
Informàtica.

Ha de resoldre aquestes situacions reals:

| Situació | Què hauria de passar |
|---|---|
| Arriba un correu de la Gestoria Amat | S'etiqueta amb el client i queda visible: és client prioritari |
| Arriba una factura d'un proveïdor | Va a administració, no a suport |
| Arriba una alerta automàtica del sistema de còpies | S'arxiva, tret que digui que ha fallat |
| Arriba un correu de la Sílvia Cardús a les 8 del matí | Es marca com a pendent d'acció |
| Arriba publicitat de fabricants | Fora de la vista |

**Implementa'ls de veritat** i comprova que funcionen enviant-te missatges de
prova.

### Part 4 — La llibreta d'adreces

Crea un grup de contactes amb les persones de contacte dels quatre clients.
Afegeix-hi les dades que caldrien per a una carta de correspondència.

Envia un correu de prova al grup **amb Cco**, i explica en una frase per què amb
Cco i no amb Per a.

### Part 5 — L'agenda

Crea un calendari per a les revisions trimestrals dels clients de manteniment.

- Un esdeveniment recurrent per client, cada tres mesos.
- Recordatori amb prou antelació per poder-lo preparar.
- Compartit amb l'equip de suport.

### Part 6 — Documentar-ho

Escriu **una pàgina** explicant el sistema a algú que entri nou. Ha de poder
entendre, sense preguntar-te res, què vol dir cada etiqueta i què fa cada filtre.

### Què has de lliurar

1. L'anàlisi de les capçaleres de la part 1.
2. La configuració del compte i la resposta sobre POP3.
3. Captures dels filtres implementats i de les proves que funcionen.
4. El grup de contactes i la justificació del Cco.
5. El calendari de revisions.
6. La pàgina de documentació.

:::tip Ús de la IA
Permès. És especialment útil per a la part 6: dona-li el teu sistema d'etiquetes i
demana-li que el documenti per a algú que entra nou.

Vigila una cosa: **la IA no sap com és la teva bústia**. Si li demanes un sistema
d'etiquetes sense donar-li les cinc situacions de la part 3, te'n donarà un de
genèric que no resol res.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | Els filtres no estan implementats de veritat, o no cobreixen les cinc situacions |
| **Suficient** | Tot està configurat i funciona |
| **Notable** | Les proves demostren que els filtres actuen, i l'anàlisi de capçaleres identifica correctament el recorregut |
| **Excel·lent** | A més, el sistema d'etiquetes està dissenyat per estat (què cal fer) i no només per tema, i la documentació permetria a algú nou fer-lo servir sense preguntar res |

### Preguntes que et poden fer

- Al correu que has analitzat, el camp *De* i el *Reply-To* eren iguals? Quan no
  ho són, què vol dir?
- Ensenya'm el filtre de les alertes de còpies. Què passa si l'alerta diu que ha
  fallat?
- Per què has enviat el correu al grup amb Cco?
- Si demà entra un client nou, quants canvis has de fer al teu sistema?

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 8.1 | Descriu els elements que componen un correu electrònic. | Principal |
| 8.2 | Analitza les necessitats bàsiques de gestió de correu i agenda electrònica. | Principal |
| 8.3 | Configura diferents tipus de comptes de correu electrònic. | Principal |
| 8.5 | Opera amb la llibreta d'adreces. | Principal |
| 8.6 | Treballa amb totes les opcions de gestió de correu electrònic (etiquetes, filtres, carpetes, entre d'altres). | Principal |
