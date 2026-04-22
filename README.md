<img src="https://assets.angular.schule/header-intensivworkshop2.png">

#### **mit Johannes Hoppe**

<hr>

**Herzlich Willkommen – und schön, dass ihr dabei seid!**  
In diesem Repository findet ihr alle Infos zur Vorbereitung und während des Workshops den Quelltext unserer Beispielanwendung.

<!--
# 🎮 NEU: RxJS Playground

Du kannst dir entweder  
* den Code als ZIP-Datei herunterladen: [rxjs-playground.zip](XXX)<br>**oder**<br>
* dieses Repository per Git herunterladen und in den Ordner `rxjs-playground` wechseln.

```bash
cd rxjs-playground
npm install
ng serve
```

Öffne den Browser unter der URL [http://localhost:**4300**](http://localhost:4300) (!), um die Anwendung zu sehen.
Die Übungen befinden sich im Ordner `rxjs-playground/src/app/exercises/`.
-->


# ✅ Vorbereitung

Damit wir gleich durchstarten können, solltet ihr ein paar Vorbereitungen treffen.  
Die gesamte Installation wird rund 30 Minuten dauern. 

> [!IMPORTANT]  
> **Bitte erledigt die Vorbereitung rechtzeitig vor dem Kurs. Meldet euch bei uns, wenn etwas nicht klappt.**

## 1.) Benötigte Software

1. **Node.js 20, 22 oder 24** (jeweils die aktuelle Nebenversionsnummer): [https://nodejs.org](https://nodejs.org)
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
   + [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)
4. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)<br>
   _oder_ eine andere geeignete IDE wie **IntelliJ/WebStorm**
   + Wir empfehlen euch eine Auswahl an Extensions für Visual Studio Code.  
     Dazu haben wir ein Extension Pack vorbereitet, das alles Nötige einrichtet:  
     [Angular-Schule: Extension Pack (nur für Visual Studio Code)](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack)

## 2.) Proxy?

Falls in eurem Unternehmensnetz der Internetzugang durch einen Proxy erfolgt, sind ggf. gesonderte Einstellungen nötig.
Wir haben euch hierfür folgende Anleitung erstellt:
https://workshop.angular.schule/proxy  
Sollte es Probleme mit dem Proxy geben, meldet euch bitte bei uns, dann finden wir eine Lösung.


## 3.) Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl könnt ihr die CLI auf dem System installieren:

```bash
npm install --location=global @angular/cli
```

⚠️ Überprüft bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind:

```bash
node -v
# Erwartet:
# 20.19.x oder höher, 22.12.x oder höher, oder 24.0.x oder höher,
# aber nicht 21.x oder 23.x!

ng version
# Erwartet:
# Angular CLI : 21.x.x (!)
# Angular     : 21.x.x (!)
```

Falls ihr bereits eine ältere Version der Angular CLI auf eurem System installiert habt, führt die Installation bitte trotzdem durch.
Global sollte stets die neueste Version installiert sein.


## 4.) Startprojekt erzeugen

Bitte legt das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Führt in eurem Arbeitsverzeichnis den folgenden Befehl aus, um das Projekt zu erstellen:

> ⚠️ Bitte erstellt das Projekt nicht auf einem Netzlaufwerk, sondern direkt auf der lokalen Festplatte!

```bash
ng new book-rating --style=scss --no-ssr
```

Ihr könnt während der Installation die Angular-Unterstützung für KI-Tools aktivieren, falls ihr einen der aufgelisteten Dienste verwendet.
Falls nicht, wählt bei der Frage "*Which AI tools do you want to configure with Angular best practices?*" bitte die Option `None`.

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Wartet beim Schritt `Installing packages (npm)` mit Geduld ab!

Anschließend könnt ihr in den Ordner wechseln und die Anwendung mit dem Entwicklungswebserver starten:

```bash
cd book-rating
ng serve
```

> Im Browser sollte unter http://localhost:4200 nun eine Website mit dem Text *"Hello, book-rating"* erscheinen!

![Screenshot CLI](https://assets.angular.schule/chrome_cli_welcome_ng17.png)

Beendet danach den laufenden Webserver mit `Strg` + `C`.


## 5.) Test-Umgebung prüfen

Prüft bitte, ob der folgende Befehl ohne Fehlermeldungen ausführt:

```bash
ng test
```

Anschließend könnt ihr den Prozess wieder mit `q` oder `Strg` + `C` beenden.


## 6.) Styles installieren

Bitte führt diesen Befehl **im Projektverzeichnis `book-rating`** aus, um unser Paket mit CSS-Styles zu installieren.
Die Warnungen bei der Installation könnt ihr ignorieren.

```bash
npm i @angular-schule/workshop-styles
```


Öffnet dann bitte die Datei `src/styles.scss` im Projektordner `book-rating` und fügt die folgende Zeile ein:

```css
@use '@angular-schule/workshop-styles';
```

Damit werden die installierten Styles global in das Projekt eingebunden und sind aktiv.
Wir werden die Stylesheets im Workshop gemeinsam nutzen.


## 7.) Projekt erforschen

Öffnet den Projektordner `book-rating` in eurem Editor.
Nehmt euch nun ein paar Minuten Zeit, um die Struktur des generierten Projekts zu untersuchen.
So habt ihr die wichtigsten Dateien schon einmal gesehen, bevor wir den Aufbau in der Schulung ausführlich besprechen!


## Wir freuen uns schon! 🙂

Wenn bei allen Teilnehmenden das Grundgerüst steht, können wir ohne Zeitverlust loslegen.
Sollte es zu einer Fehlermeldung kommen, dann sendet uns den Fehlertext einfach per Mail an [team@angular.schule](mailto:team@angular.schule) oder bringt eure Fragen zum Technikcheck mit.

<hr>

<img src="https://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; https://angular.schule | Stand: 15.04.2026
