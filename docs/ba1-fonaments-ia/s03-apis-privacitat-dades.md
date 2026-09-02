---
title: "APIs, privacitat i tractament de dades"
sidebar_label: "S03 · APIs, privacitat i tractament de dades"
sidebar_position: 3
description: "Setmana 3 — APIs, privacitat i tractament de dades"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 3 — APIs, privacitat i tractament de dades

**BA1 — Fonaments i infraestructura d'IA** · 3 h

## Objectius

En acabar la sessió has de ser capaç de:

1. Distingir els tipus de llicència de les eines d'IA que farem servir.
2. Determinar quines dades es poden introduir a cada eina i quines no.
3. Redactar un informe breu de riscos amb estructura professional.

## L'error que et pot costar la feina

Un tècnic copia el llistat de nòmines d'un client i l'enganxa a una IA gratuïta
per demanar-li que en faci un resum. Triga vint segons i li estalvia mitja hora.

Acaba de cometre una infracció de protecció de dades. Ha comunicat dades
personals de tercers a una empresa que no té cap contracte amb el seu client, i
possiblement en un país sense garanties equivalents. Si el client se n'assabenta,
perd el contracte. Si l'Agència de Protecció de Dades se n'assabenta, la sanció la
paga l'empresa.

No cal mala fe. Només cal no haver pensat en què estàs enganxant.

## Què passa amb el que escrius

Quan escrius alguna cosa a una IA, el text **surt del teu ordinador** i va a un
servidor d'algú altre. A partir d'aquí depèn del servei:

| Escenari | Què vol dir |
|---|---|
| **S'usa per entrenar** | El teu text pot acabar influint en el model. En alguns serveis gratuïts és el comportament per defecte. |
| **Es guarda però no entrena** | Queda registrat un temps per motius de seguretat i abús. |
| **No es guarda** | Alguns serveis de pagament i les APIs empresarials ho garanteixen per contracte. |
| **No surt de casa** | Un model executat al servidor del centre o de l'empresa. |

:::warning La pregunta que has de fer sempre
No és «és segur?». És **«on van a parar aquestes dades i qui hi té accés?»**.

Si no ho saps, la resposta per defecte és no enganxar-hi res que no sigui teu.
:::

### Per què l'Open WebUI del centre és diferent

L'Open WebUI que fem servir corre en un servidor del centre. Les converses no
surten cap a l'empresa que ha fet el model, sempre que el model també s'executi
localment.

Això no vol dir que hi puguis escriure el que vulguis: les converses queden
registrades i el centre és responsable de les dades que hi hagi. Però és
qualitativament diferent d'enganxar-ho a un servei comercial gratuït.

## Dades personals: el mínim que has de saber

Una **dada personal** és qualsevol informació que permeti identificar una persona.
No cal el DNI: un nom i un poble ja poden ser suficients.

N'hi ha de **categories especials**, amb protecció reforçada: salut, origen
ètnic, conviccions religioses, orientació sexual, dades biomètriques i afiliació
sindical.

I hi ha les **dades de menors**, que a l'Escola Bressol El Cargol són gairebé
totes.

### La regla pràctica per a la feina

Abans d'enganxar res, passa-ho per aquest filtre:

1. **Hi ha noms, adreces, telèfons, DNI o dades de salut?** → No hi va.
2. **És informació confidencial del client encara que no sigui personal?**
   (contractes, preus, configuracions de xarxa, contrasenyes) → No hi va.
3. **Es pot anonimitzar?** Substituir noms per «Client A» i xifres reals per
   xifres inventades sovint resol el problema sense perdre utilitat.
4. **Si no es pot anonimitzar**, fes servir l'eina interna o fes-ho a mà.

## Llicències: què pots fer amb el que surt

Hi ha dues preguntes diferents i sovint es confonen.

**La primera: pots fer servir l'eina?** Això ho diu la llicència del programari o
les condicions del servei.

| Tipus | Què vol dir | Exemple |
|---|---|---|
| **Programari lliure** | El pots usar, estudiar, modificar i redistribuir | Open WebUI |
| **Gratuït però privatiu** | El pots usar segons unes condicions, però no és teu | ChatGPT gratuït |
| **Comercial de pagament** | Ús subjecte a subscripció i contracte | Plans d'empresa |
| **API** | Pagues per ús i sovint tens més garanties contractuals | OpenRouter |

Que una cosa sigui **gratuïta no vol dir que sigui lliure**, i que sigui **lliure
no vol dir que sigui gratuïta**. Són eixos independents.

**La segona: de qui és el que t'ha generat?** Depèn del servei i de la
jurisdicció, i no està tancat. La majoria de condicions comercials et cedeixen els
drets sobre la sortida, però amb matisos importants: no pots reclamar exclusivitat
sobre un text que el model podria generar igual per a una altra persona, i si la
sortida s'assembla massa a una obra protegida el problema és teu.

Per a la feina diària, dues regles:

- **Si és per a un client, digues-l'hi.** Que un manual s'ha redactat amb ajuda
  d'IA no és cap vergonya; amagar-ho sí que és un problema si després es descobreix.
- **Revisa-ho abans d'enviar-ho.** Signes tu, no el model.

<Activitat num={3}>

## Activitat: L'informe per al Ferran Amat

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-03-apis-privacitat-dades.docx">Activitat-03-apis-privacitat-dades.docx</a>
:::

### Context

Divendres a les cinc. La Laia Puig ha explicat a la Gestoria Amat que Vallcorba
Informàtica «ja treballa amb intel·ligència artificial». El Ferran Amat ha
respost amb un correu que l'Aleix t'ha reenviat amb tres paraules seves:
«Encarrega't tu».

> **De:** Ferran Amat \<f.amat@gestoriaamat.example\>
> **Assumpte:** Sobre això de la IA
>
> Bon dia,
>
> La vostra comercial m'ha comentat que ara feu servir intel·ligència artificial.
> Abans que això toqui res nostre, necessito saber-ho per escrit:
>
> 1. Quines eines feu servir i on van a parar les dades que hi poseu.
> 2. Si algú del vostre equip pot arribar a enganxar-hi informació nostra.
> 3. Què heu previst perquè això no passi.
>
> Us recordo que portem la comptabilitat de tres-centes empreses. Si hi ha el més
> mínim dubte, prefereixo que no toqueu res.
>
> Cordialment,
> Ferran Amat

### Part 1 — Investigar

Per a **tres** de les eines del mòdul (una de local, una de gratuïta i una de
pagament o d'API), esbrina i anota:

| Pregunta | On ho busques |
|---|---|
| Quin tipus de llicència té | Condicions del servei o llicència del programari |
| Què diu que fa amb el que escrius | Política de privadesa |
| Si es pot desactivar l'ús per a entrenament | Configuració del compte |
| On s'allotgen les dades | Política de privadesa |

Cita **d'on has tret cada resposta**. Una afirmació sense font no serveix per a un
informe que llegirà un client desconfiat.

### Part 2 — Classificar dades

Per a cadascun d'aquests casos, decideix si es pot enganxar a una IA comercial
gratuïta, si només a l'eina interna, o si no hi va enlloc. **Justifica-ho en una
línia.**

1. El missatge d'error literal que surt a la caixa registradora del Forn Cardús.
2. El llistat de treballadors d'una empresa client amb nòmines i DNI.
3. La configuració de la xarxa de Tallers Roure, amb adreces IP internes.
4. Un text que has escrit tu explicant com es canvia un tòner.
5. Les fitxes d'al·lèrgies dels infants de l'Escola Bressol El Cargol.
6. Una factura d'un proveïdor de Vallcorba Informàtica.

### Part 3 — L'informe

Redacta l'informe per al Ferran Amat. **Màxim dues pàgines**, amb aquesta
estructura:

1. **Objecte** — què s'ha analitzat i per encàrrec de qui.
2. **Eines analitzades** — la taula de la part 1.
3. **Riscos identificats** — quins són i quina gravetat tenen.
4. **Mesures previstes** — què farà Vallcorba Informàtica perquè no passi.
5. **Conclusió** — una afirmació clara que respongui la seva pregunta.

Ha d'estar escrit perquè el llegeixi un gestor, no un informàtic.

### Què has de lliurar

1. La taula de les tres eines amb les fonts citades.
2. La classificació dels sis casos amb la justificació.
3. L'informe.
4. La documentació del procés d'ús de la IA.

:::tip Ús de la IA
Permès i recomanat per redactar l'informe. Però **les dades de la part 1 les has
de verificar tu a les fonts originals**: si la IA s'inventa una clàusula de
privadesa i tu la signes, el problema és teu.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | La classificació de dades té errors greus (dades personals que es donen per acceptables) o l'informe no respon les tres preguntes |
| **Suficient** | La classificació és correcta i l'informe té l'estructura demanada |
| **Notable** | Les afirmacions sobre les eines estan citades i les mesures previstes són concretes i realitzables |
| **Excel·lent** | A més, l'informe està escrit en un registre que un client no tècnic entendria, i distingeix els riscos que es poden eliminar dels que només es poden reduir |

### Preguntes que et poden fer

- Per a quin dels sis casos has dubtat més, i com ho has resolt?
- Si el Ferran et diu que amb l'eina interna tampoc no s'hi fia, què li respons?
- Quina de les mesures que has proposat és la més fàcil d'incomplir un dia de
  molta feina?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 1.8 | Respecta les llicències de programari. | Principal |
| 1.9 | Proposa solucions de programari per a entorns d'aplicació. | Principal |
| 9.5 | Realitza informes d'incidències. | Principal |
| 9.6 | Aplica els procediments necessaris per salvaguardar la informació i la seva recuperació. | Principal |
| 1.4 | Documenta les incidències. | Reforç |
