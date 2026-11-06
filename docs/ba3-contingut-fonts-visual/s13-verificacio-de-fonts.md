---
title: "Verificació i combinació de fonts"
sidebar_label: "S13 · Verificació i combinació de fonts"
sidebar_position: 2
description: "Setmana 13 — Verificació i combinació de fonts: comprovar el que diu la IA i sintetitzar fonts que no diuen el mateix"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 13 — Verificació i combinació de fonts

**BA3 — Contingut, fonts i comunicació visual** · 3 h · Part A del bloc

## Objectius

En acabar la sessió has de ser capaç de:

1. Detectar afirmacions no sostingudes per les fonts en un text generat per IA.
2. Justificar per què una afirmació és incorrecta citant-ne la font.
3. Aplicar un procediment de verificació repetible.
4. Identificar punts de consens i discrepància entre diverses fonts.
5. Resoldre una contradicció entre fonts deixant constància del criteri.

La sessió té dues meitats que van lligades: primer **comproves** un text contra
les fonts, i després **construeixes** un document nou a partir de fonts que no
diuen exactament el mateix.

---

## Primera part: verificar

### La feina que no pots delegar

Una IA pot resumir un document, reescriure'l, traduir-lo i extreure'n punts clau.
El que **no pot fer és validar-lo per tu**, per una raó estructural: no distingeix
entre el que sap i el que genera. Tot li surt amb el mateix to de seguretat.

Això vol dir que **la responsabilitat de comprovar no es pot delegar mai**. Si
signes un informe, el que hi diu és teu.

### Com són les al·lucinacions de veritat

L'error típic que et pintes al cap —una bestiesa evident— gairebé mai passa. Les
al·lucinacions reals són molt més traïdores:

| Tipus | Com és | Per què costa de veure |
|---|---|---|
| **Xifra plausible** | Un percentatge o una data que encaixa amb la resta | Ningú comprova un número que no sorprèn |
| **Detall afegit** | Una precisió que la font no diu | Fa el text millor, no pitjor |
| **Font inventada** | Una norma, article o document que no existeix | Té format de citació correcta |
| **Atribució creuada** | Una cosa certa atribuïda a qui no la va dir | Els dos elements són reals |
| **Generalització** | La font diu «en alguns casos», el text diu «sempre» | El matís desapareix sense deixar rastre |
| **Omissió** | La font posa una condició que el text no recull | **No hi ha res fals: hi falta alguna cosa** |

L'última és la més perillosa perquè no es pot detectar llegint el text: només es
veu comparant amb la font.

#### Senyals d'alerta

No proven que hi hagi un error, però indiquen on mirar primer:

- **Xifres exactes sense font.** «El 73 % de les empreses» sense dir d'on surt.
- **Superlatius i absoluts.** «Sempre», «mai», «tots», «l'única manera».
- **Citacions massa rodones.** Una referència amb article, apartat i any que
  encaixa perfectament és sospitosa precisament per això.
- **Coherència excessiva.** La realitat sol tenir excepcions. Un text sense cap
  matís sol ser un text que se les ha menjat.
- **Detalls que no calien.** Si una precisió no aporta res, sovint és perquè no
  venia de la font sinó del model omplint.

### Un procediment que es pot repetir

Verificar no és llegir amb atenció. És un procediment, i com a tal es pot fer
sempre igual:

**1. Trossejar.** Partir el text en afirmacions comprovables. Una afirmació és
una cosa que pot ser certa o falsa. «El sistema és eficient» no és comprovable;
«el sistema fa còpies cada 24 hores» sí.

**2. Classificar.** Cada afirmació va a una d'aquestes caselles:

| Casella | Què vol dir |
|---|---|
| **Verificada** | És a la font i diu això |
| **Contradita** | És a la font i diu una altra cosa |
| **No consta** | No apareix a cap font |
| **Matisada** | Hi és, però la font hi posa condicions que el text s'ha menjat |

**3. Anar a la font.** No a la memòria, no a una altra IA: **al document**.

**4. Deixar rastre.** Anotar què has comprovat i on. Si algú qüestiona l'informe
d'aquí a tres mesos, la teva anotació és la teva defensa.

#### Quan no hi ha font per comprovar

De vegades no tens document contra el qual contrastar. Llavors hi ha un recurs que
no és una verificació però ajuda: **fer la mateixa pregunta tres vegades en
converses separades** i comparar les respostes.

| Resultat | Què vol dir |
|---|---|
| Les tres coincideixen | Millor senyal. No és cap garantia |
| Es contradiuen | **No et refiïs de cap.** S'ho està inventant |

Funciona perquè cada resposta es genera de nou: si el model «sap» la cosa, sortirà
igual; si se l'inventa, cada cop s'inventarà una cosa diferent. **Ha de ser en
converses separades**: a la mateixa, la segona resposta ja té la primera al
davant i tendirà a repetir-la.

Això es diu **autoconsistència**, i és l'últim recurs: quan hi ha font, mana la
font.

:::warning No verifiquis amb una altra IA
Demanar a una IA que comprovi el que ha dit una altra IA no és verificar. És
duplicar el problema, amb la novetat que ara tens dues fonts que et donen la raó
i cap document.

Verificar vol dir **obrir el document original**.
:::

---

## Segona part: combinar fonts

### Sintetitzar no és resumir

Un **resum** redueix un document. Una **síntesi** construeix un document nou a
partir de diversos.

La diferència no és de mida: és que la síntesi ha de prendre decisions que cap de
les fonts pren per tu.

| | Resum | Síntesi |
|---|---|---|
| Entrada | Un document | Diversos |
| Estructura | La de l'original | **La que decideixes tu** |
| Contradiccions | No n'hi ha | S'han de resoldre |
| Valor afegit | Estalviar temps | **Un document que abans no existia** |

La IA fa resums molt bé. Les síntesis les fa **regular**, i sempre pel mateix
motiu: quan dues fonts diuen coses diferents, tendeix a posar-les totes dues sense
dir que es contradiuen, o a triar-ne una en silenci.

Cap de les dues sortides serveix. La primera trasllada el problema al lector; la
segona l'amaga.

### Fonts que no diuen el mateix

És el cas normal, no l'excepció. Diagnosticar bé el tipus de desacord és el que
et diu què fer:

| Tipus | Exemple | Què fer |
|---|---|---|
| **Complementàries** | Una explica el «com», l'altra el «per què» | Ajuntar-les. No hi ha conflicte |
| **Diferent abast** | Una parla de PIME, l'altra de gran empresa | Segmentar: dir per a qui val cadascuna |
| **Diferent època** | Una és del 2019, l'altra del 2025 | Prioritzar la recent i **dir-ho** |
| **Diferent autoritat** | Una és una norma, l'altra un blog | Prioritzar la norma i **dir-ho** |
| **Contradicció real** | Diuen coses incompatibles amb la mateixa autoritat | **Exposar les dues i el criteri de tria** |

Les tres primeres no són conflictes de veritat: són falta de precisió al llegir.
Les dues últimes sí.

:::tip La regla de la contradicció
Quan dues fonts es contradiuen de veritat, **no ho amaguis triant-ne una en
silenci**. Digues que hi ha discrepància, quina és, i per què has triat el que has
triat.

Un document que reconeix una discrepància és més fiable, no menys.
:::

### L'estructura la decideixes tu

Si li demanes a una IA una guia sobre un tema, te la donarà amb l'estructura d'un
article divulgatiu: definició, història, tipus, avantatges, conclusió. Per a una
guia que algú consultarà amb una pregunta concreta, **és una estructura pèssima**.

| Estructura | Bona per a |
|---|---|
| Per tema | Estudiar-ho de cap a peus |
| Per pregunta freqüent | Consultar amb un dubte concret |
| Per procediment | Executar una tasca pas a pas |
| Per situació | «Si et passa X, fes Y» |
| Per rol | Documents que llegeixen perfils diferents |

**Tria abans de generar.** Si generes primer, després només maquilles.

<Activitat num={13}>

## Activitat: L'informe de l'Aleix i la guia que hauria d'haver existit

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-13-verificacio-de-fonts.docx">Activitat-13-verificacio-de-fonts.docx</a>
:::

### Context

L'Aleix ha demanat a una IA que li prepari un informe sobre les obligacions de
còpia de seguretat i conservació de dades que afecten els clients de Vallcorba.
Ha de servir de base per parlar amb la Gestoria Amat.

Se l'ha llegit per sobre, li ha semblat bé i te l'ha passat:

> «Aquest informe l'he generat jo. Fes-hi un cop d'ull abans que l'enviï, que tu
> ara vas d'expert en aquestes coses.
>
> I ja que hi ets: cada cop que entra algú nou li expliquem això mateix tres
> vegades, i la informació està repartida en documents que no diuen exactament
> el mateix. Si es contradiuen, vull saber-ho jo abans que ho descobreixi un
> client.»

**L'informe no està bé.** Conté errors barrejats amb informació correcta.

Rebràs l'informe i **cinc documents**:

| Doc | Què és |
|---|---|
| **A** | Política interna de còpies de seguretat |
| **B** | Clàusules del contracte de manteniment |
| **C** | Una altra versió de la política de còpies |
| **D** | Un article sobre bones pràctiques de còpia |
| **E** | Un correu intern de l'Aleix a l'equip |

### Part 1 — Verificar l'informe

Verifica l'informe **contra els documents A i B**, que són els oficials.

1. Parteix l'informe en afirmacions comprovables i numera-les.
2. Per a cada afirmació, omple la fila:

| # | Afirmació | Casella | Font (document i apartat) | Què diu de veritat |
|---|---|---|---|---|
| 1 | | | | |

Les caselles són les quatre de la taula d'aquests apunts: verificada, contradita,
no consta, matisada.

**Cada fila ha de portar la referència exacta**: no val «ho diu el document A»,
ha de dir quin apartat.

### Part 2 — El mapa de fonts

Ara obre els cinc documents. Construeix el **mapa de fonts**: els punts on els
documents no diuen el mateix.

| Punt | A | B | C | D | E | Tipus de desacord |
|---|---|---|---|---|---|---|
| | | | | | | |

A la darrera columna, classifica cada desacord segons la taula d'aquests apunts:
complementari, diferent abast, diferent època, diferent autoritat o contradicció
real.

**Aquesta taula la fas tu.** És la feina de la segona meitat de la sessió.

### Part 3 — La guia de referència

Amb NotebookLM i els cinc documents pujats, redacta una **guia de referència
breu** per a la gent nova de l'equip.

Abans de generar res, **tria l'estructura** i justifica-la en tres línies tenint
en compte com es farà servir la guia.

Requisits:

- **Una o dues pàgines.**
- L'estructura, la que has triat tu, no la que proposi l'eina.
- **Cada afirmació important, amb la font indicada.**
- Un apartat propi amb **les discrepàncies trobades i el criteri de resolució**.
- Res del que hagis marcat com a error a la part 1 no pot aparèixer a la guia.

### Part 4 — La prova de consulta

Escriu **tres preguntes** que algú faria de veritat amb la guia a la mà («puc fer
X?», «què passa si Y?»). Dona la guia a un company amb les preguntes i
cronometra quant triga a trobar cada resposta.

| Pregunta | Segons | La troba? |
|---|---|---|
| | | |

Si alguna passa d'un minut, l'estructura no serveix per a l'ús previst. Arregla-la.

### Part 5 — La resposta a l'Aleix

Escriu-li. Ha de saber:

- Quants errors hi havia a l'informe, de quin tipus, i quin era el més perillós.
- Quina contradicció real has trobat entre els documents i com l'has resolt.
- Que té la guia adjunta, i què hauria de fer diferent la propera vegada.

Màxim **150 paraules**, i sense fer-lo sentir idiota: continua sent el teu cap.

### Què has de lliurar

1. La taula de verificació de l'informe, amb les afirmacions numerades i les
   referències exactes.
2. El mapa de fonts amb el tipus de desacord de cada punt.
3. La justificació de l'estructura i la guia de referència.
4. La taula de la prova de consulta i què has canviat arran d'ella.
5. La resposta a l'Aleix.

:::danger Ús de la IA restringit
Pots fer servir la IA per **trossejar** l'informe, per **redactar** la guia amb
NotebookLM i per redactar la resposta a l'Aleix.

**No pots fer servir la IA per verificar ni per fer el mapa de fonts.** Les
caselles de la part 1 i el tipus de desacord de la part 2 els has d'omplir tu,
amb el document original obert. Si detectem que estan generats, l'activitat és
insuficient.

Si li demanes a la IA el mapa de contradiccions, a més, tendirà a no veure'n
cap: el seu instint és harmonitzar.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | Es detecten menys de la meitat dels errors, o les referències són genèriques, o la guia harmonitza les fonts sense esmentar cap discrepància |
| **Suficient** | Es detecten la majoria d'errors amb la referència correcta, i el mapa detecta les discrepàncies i la guia les esmenta |
| **Notable** | Es detecten també les afirmacions **matisades**, i els desacords estan ben classificats per tipus amb un criteri de resolució explícit |
| **Excel·lent** | A més, s'identifica quin error era el més perillós i per què, l'estructura de la guia està justificada per l'ús i la prova de consulta ha provocat un canvi real |

:::tip La pista que et donem
Els errors evidents els trobarà tothom. **Els que separen són les omissions i els
matisos**: llocs on l'informe no diu cap mentida però s'ha menjat una condició que
la font sí que posa.

I al mapa de fonts: **no tot el que sembla una contradicció ho és**. Abans de
dir que dos documents es contradiuen, comprova si parlen del mateix, per a la
mateixa gent i amb la mateixa autoritat.
:::

### Preguntes que et poden fer

- Quina afirmació de l'informe t'ha costat més de classificar i per què?
- Quin error consideres el més perillós? Què hauria passat si l'Aleix envia
  l'informe tal com estava?
- Has trobat alguna afirmació que no fos falsa però que fos incompleta?
- Quina contradicció era real i quina només era diferència d'abast?
- On diu la guia que les fonts discrepen? Ensenya-m'ho.
- Per què has triat aquesta estructura i no una per temes?

</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 9.7 | Utilitza els recursos disponibles per solucionar incidències. | Principal |
| 2.6 | Elabora manuals específics. | Principal |
| 9.5 | Realitza informes d'incidències. | Reforç |
| 9.3 | Utilitza manuals d'usuari per instruir en l'ús d'aplicacions. | Reforç |
