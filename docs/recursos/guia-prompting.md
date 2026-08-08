---
title: Guia de prompting
sidebar_position: 3
description: Referència ràpida de les tècniques de prompting del mòdul.
---

# Guia de prompting

Pàgina de consulta. Cada tècnica diu a quina sessió es treballa.

Les que estan marcades amb **⭑** no surten a cap sessió concreta: són aquí perquè
et serveixin quan et trobis un cas que ho demani.

## Anatomia d'un prompt

Un prompt pot tenir fins a quatre elements. No calen sempre tots.

| Element | Què és | Exemple |
|---|---|---|
| **Instrucció** | Què vols que faci. Un verb clar | «Redacta», «compara», «classifica» |
| **Context** | Tot el que canvia la resposta correcta | Qui ho llegirà, per a què, quines restriccions |
| **Dades d'entrada** | El material concret sobre el qual ha de treballar | El correu, la taula, el fragment del contracte |
| **Format de sortida** | Com ho vols, i què **no** hi ha de sortir | Extensió, estructura, to, prohibicions |

Compara:

> Explica'm què és una VPN.

> Explica què és una VPN a la Sílvia Cardús, que porta un forn de pa i no té cap
> coneixement tècnic. Ha de decidir si en contracta una per connectar-se a la
> comptabilitat des de casa. Màxim 120 paraules, sense sigles sense explicar, i
> acaba amb una recomanació clara.

Cada tros afegit **elimina una decisió que el model hauria pres per tu**.

:::tip Context i dades d'entrada no són el mateix
El **context** és el marc: qui ets, a qui escrius, què s'ha de tenir en compte.
Les **dades d'entrada** són el material: el correu que has rebut, les xifres, el
document.

Separar-los ajuda molt quan el prompt es fa llarg.
:::

*Sessió 4.*

## Delimitar les parts ⭑

Quan un prompt té diverses parts, **marca-les**. Si no, el model no sap on
s'acaben les teves instruccions i on comencen les dades.

Tres maneres, totes equivalents:

```
### Instrucció ###
Resumeix el correu de sota en tres punts.

### Correu ###
"""
[aquí el correu]
"""
```

```
<instruccions>
Resumeix el correu en tres punts.
</instruccions>

<correu>
[aquí el correu]
</correu>
```

```
INSTRUCCIÓ: Resumeix el correu en tres punts.
---
CORREU:
[aquí el correu]
```

Fes servir la que vulguis, però **fes-ne servir una** quan enganxis material
llarg. Els resultats milloren de manera immediata i és de les coses que menys
costen.

## Zero-shot i few-shot ⭑

**Zero-shot** és el que fas normalment: demanar una cosa sense donar cap exemple.
Per a tasques corrents funciona bé.

**Few-shot** és donar-li **un parell d'exemples fets** abans de demanar-li el teu
cas. Serveix quan el que vols és difícil de descriure però fàcil de mostrar.

```
Classifica l'estat de cada incidència.

Entrada: "La impressora no imprimeix i el forn no pot obrir."
Estat: Crítica

Entrada: "Voldríem afegir un usuari nou quan pugueu."
Estat: Baixa

Entrada: "Les còpies fallen des de dijous."
Estat:
```

Dues coses que has de saber-ne:

**El format dels exemples importa més del que sembla.** Si els teus exemples
tenen una estructura clara i consistent, la sortida la seguirà.

**Amb dos o tres n'hi sol haver prou.** Si en necessites deu, el problema
probablement no és la falta d'exemples: és que la tasca no està ben definida.

:::tip Quan val la pena
Quan has de fer la mateixa cosa moltes vegades i vols que **surti sempre igual**:
classificar, extreure dades amb un format fix, reescriure amb un estil concret.

Si això et passa sovint, ja no vols un prompt amb exemples: vols una
[skill](/ba4-dades-professionalitzacio/s29-skills).
:::

## Assignar un rol

Un rol no contracta ningú: **restringeix el tipus de text que el model considera
plausible**.

| Rol | Efecte |
|---|---|
| «Ets un expert mundial en informàtica» | Poc. Massa vague per restringir res |
| «Ets tècnic de suport de primera línia» | Molt. Hi ha un registre associat |
| «Ets el cap de manteniment que ha d'explicar una avaria a un client que ja s'ha queixat dues vegades» | Moltíssim. Hi ha to, situació i tensió |

**El rol útil no és el més prestigiós: és el més específic.**

*Sessions 4 i 7.*

## L'audiència

Sovint canvia més la resposta que el rol. Si només pots posar una cosa al prompt,
posa l'audiència.

El mateix contingut per a tres destinataris dona tres textos completament
diferents, i el que canvia no és només el vocabulari: canvia **què cal explicar i
què es pot donar per sabut**.

*Sessió 7.*

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

*Sessions 3 i 7.*

## Demanar-li que raoni pas a pas ⭑

Els models donen millors resultats en tasques amb raonament si **els deixes
escriure els passos** en comptes de saltar a la resposta.

> Calcula quant costaria al mes. **Explica el raonament pas a pas abans de donar
> el resultat.**

Això té dos beneficis, i el segon és el que de veritat importa aquí:

1. **Encerta més.** Especialment amb càlculs, classificacions amb condicions i
   qualsevol cosa que tingui més d'un pas.
2. **Pots comprovar-ho.** Si veus els passos, pots trobar on s'ha equivocat. Si
   només et dona el resultat, o t'ho creus o ho refàs tu.

:::danger Que raoni no vol dir que encerti
Un model pot escriure un raonament impecable i arribar a un número equivocat.
**Els passos serveixen perquè tu els comprovis**, no com a garantia.

És exactament el que fas a la [sessió 13](/ba3-contingut-fonts-visual/s13-verificacio-de-fonts).
:::

*Útil a la sessió 2 (càlcul de tokens) i a les de fulls de càlcul.*

## Preguntar-ho tres vegades ⭑

Si una resposta t'importa i no la pots verificar contra cap font, **fes la mateixa
pregunta tres vegades en converses separades** i compara.

| Resultat | Què vol dir |
|---|---|
| Les tres coincideixen | No és una garantia, però és millor senyal |
| Es contradiuen | **No et refiïs de cap.** Verifica-ho a mà |

Funciona perquè cada resposta es genera de nou. Si el model «sap» la cosa, sortirà
igual; si se l'està inventant, cada vegada s'inventarà una cosa diferent.

**No serveix** demanar-l'hi tres vegades a la mateixa conversa: la segona vegada
ja té la primera resposta al davant i tendirà a repetir-la.

## Iterar

Iterar no és tornar a demanar el mateix esperant sort. És **corregir el prompt**.

| Símptoma | Què hi falta |
|---|---|
| Massa genèrica | Context: per a qui, per a què |
| Massa llarga | Format: extensió màxima |
| To equivocat | Audiència |
| Se salta coses | Instrucció: enumera-les explícitament |
| S'inventa dades | Dades d'entrada: dona-li tu la informació |
| Sona a fullet publicitari | Prohibicions: «sense cap superlatiu sobre nosaltres» |
| El resultat varia molt entre intents | Baixa la temperatura, o dona exemples |

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

*Sessió 7.*

## Encadenar prompts ⭑

Quan una tasca és gran, **parteix-la**. En comptes d'un prompt que ho demana tot,
fes una cadena on la sortida de cada pas és l'entrada del següent.

| Pas | Què demanes |
|---|---|
| 1 | Extreu del document els punts que parlen de terminis |
| 2 | *(sobre el resultat)* Ordena'ls per data i marca els que ja han passat |
| 3 | *(sobre el resultat)* Redacta'n un resum per al client |

Per què funciona millor que demanar-ho tot de cop:

- **Pots comprovar cada pas** abans de continuar. Si el pas 1 s'ha deixat coses,
  ho veus abans que contamini la resta.
- **Cada pas té una instrucció simple**, i els models fallen menys amb
  instruccions simples.
- **Pots reprendre'l pel mig** si el pas 3 no queda bé, sense refer-ho tot.

*Aplicat a les sessions 8, 14, 17 i 19.*

## Demanar-li que millori el teu prompt ⭑

Una de les coses més útils i que menys es fa: **ensenya-li el teu prompt i
demana-li que el millori**.

> Aquest és el prompt que penso fer servir: *[el prompt]*
>
> Digue'm què li falta perquè el resultat sigui bo, i quines preguntes
> m'hauries de fer abans de respondre.

És especialment útil quan et costa entendre per què un resultat no surt bé: sovint
et diu que li falta una informació que ni t'havies plantejat donar-li.

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

*Sessió 4.*

## Els paràmetres del model ⭑

A l'Open WebUI i a qualsevol API pots tocar dos paràmetres que canvien com
respon. Val la pena saber què fan.

| Paràmetre | Baix | Alt |
|---|---|---|
| **Temperatura** | Respostes més previsibles i repetibles | Respostes més variades i creatives |
| **Top-p** | Tria només entre les opcions més probables | Obre el ventall |

Els dos fan una cosa semblant des d'angles diferents. **La recomanació és tocar-ne
només un**, normalment la temperatura.

| Per a què | Temperatura |
|---|---|
| Extreure dades, classificar, calcular | Baixa |
| Documentació tècnica, informes | Baixa |
| Redacció professional | Mitjana |
| Idees, noms, esborranys creatius | Alta |

:::tip La conseqüència pràctica
Si el mateix prompt et dona resultats molt diferents cada vegada, **no és que el
model vagi boig: és que la temperatura és alta**.

I al revés: si necessites que una cosa surti sempre igual —un format fix, una
classificació— baixa-la.
:::

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

*Sessió 16.*

## Skills

Quan un prompt es repeteix, es converteix en una skill: un paquet d'instruccions
que es guarda, s'activa sol i es comparteix.

La part que decideix si funciona **no són les instruccions: és la descripció**,
perquè és l'únic que el sistema llegeix per decidir si l'activa.

*Sessió 29.*

## El que no funciona

| Això | Per què no |
|---|---|
| «Si us plau» | No millora res |
| Amenaçar-lo | Tampoc |
| «Ets el millor expert del món» | Molt menys que dir qui és el destinatari |
| Prompts d'una paraula | El model omple els buits amb el cas més corrent |
| Repetir el mateix esperant sort | La resposta canvia, el problema no |
| Enganxar un document sense delimitar-lo | No sap on acaba la teva instrucció |

### Dir què vols, no només què no vols

Una llista de prohibicions sola no funciona bé. El model ha de saber **què ha de
fer**, no només què ha d'evitar.

| Fluix | Millor |
|---|---|
| «No li preguntis dades personals» | «Demana-li només el model de l'equip i el missatge d'error» |
| «No siguis massa tècnic» | «Explica-ho com ho explicaries a algú que porta un forn de pa» |
| «No facis llistes» | «Escriu-ho en tres paràgrafs seguits» |

Les prohibicions **sí que funcionen** per a coses concretes de format («sense
introducció», «màxim 200 paraules»). El que funciona malament és definir una
conducta només en negatiu.

Amb els generadors d'imatge, encara pitjor: «sense text» de vegades genera text.

## El que sí que funciona i s'oblida

- **Donar-li un exemple** del resultat que vols. Encara que sigui un de sol.
- **Delimitar les dades** amb etiquetes o cometes triples.
- **Deixar-lo preguntar**: «Si et falta informació per fer-ho bé, pregunta-m'ho
  abans de començar.» Sovint fa la pregunta que t'havies saltat.
- **Demanar-li dues versions** i que et digui quina recomana. Comparar és més
  fàcil que jutjar en abstracte.
- **Fer-lo fer de destinatari**: «ets el client i reps aquest correu. Què penses?»
- **Donar-li permís per no saber-ho**: «Si no ho pots respondre amb el que t'he
  donat, digues que no ho saps.» Redueix les invencions de manera notable.

## Riscos que has de conèixer

| Nom | Què és |
|---|---|
| **Injecció de prompt** | Fer que el model ignori les seves instruccions amb el que li escrius, sovint de manera indirecta |
| **Fuita de prompt** | Aconseguir que reveli les instruccions que té configurades. Si el system prompt conté informació interna, això és una filtració |
| **Jailbreak** | Fer-li saltar les restriccions del fabricant |

Provar-ho **al teu propi assistent** abans de posar-lo davant d'un client és feina,
no entremaliadura. Es fa a la
[sessió 4, part 6](/ba1-fonaments-ia/s04-prompting-i-system-prompts).

:::warning La conseqüència per a tu
Si mai configures un assistent per a un client, **no posis res al system prompt
que no vulguis que se sàpiga**: ni preus interns, ni noms de proveïdors, ni
condicions que no siguin públiques.

Un system prompt no és un lloc segur.
:::

## Per anar més enllà

Hi ha tècniques més avançades que no fem al mòdul però que existeixen i que et
trobaràs si t'hi dediques: ReAct, Tree of Thoughts, RAG amb bases de dades
vectorials, i tot el camp del *context engineering*.

La font de la taula de sota és el millor punt de partida per a totes.

## Fonts

Aquesta guia està feta a partir de:

- **Prompt Engineering Guide**, DAIR.AI — [https://www.promptingguide.ai/](https://www.promptingguide.ai/)
  (llicència MIT). D'aquí surten les tècniques de few-shot, cadena de pensament,
  autoconsistència, encadenament de prompts, els paràmetres del model i la
  classificació de riscos.
- **Documentació de prompt engineering d'Anthropic** — estructura de prompts amb
  etiquetes, ús de rols i exemples.
- L'experiència del mòdul: la resta.

Que una guia digui d'on surt no és una formalitat. És exactament el que et
demanem a tu a partir de la
[sessió 13](/ba3-contingut-fonts-visual/s13-verificacio-de-fonts).
