const isUsingTestQuestion = false;
const state = isUsingTestQuestion
  ? [
      {
        question: "Test mode",
        gewichtung: 1,
        selectedAnswer: null,
        answers: [
          {
            text: "Antwort: EINFACH",
            x: 1,
            y: 1,
          },
          {
            text: "Antwort: KOMPLIZIERT",
            x: 2,
            y: 2,
          },
          {
            text: "Antwort: KOMPLEX",
            x: 3,
            y: 3,
          },
          {
            text: "Antwort: CHAOS I",
            x: 4,
            y: 4,
          },
          {
            text: "Antwort: CHAOS II",
            x: 5,
            y: 5,
          },
        ],
      },
    ]
  : [
      {
        question: "Welchen Umfang wird das Vorhaben voraussichtlich haben?",
        gewichtung: 0.5,
        selectedAnswer: null,
        answers: [
          {
            text: "Das Vorhaben ist relativ klein und überschaubar und die Umsetzung wird vermutlich nicht sehr lange brauchen",
            x: 1,
            y: 1,
          },
          {
            text: "Das Vorhaben ist eher ein mittelgroß und benötigt substanziell viel Zeit, es ist aber gut abgegrenzt",
            x: 3,
            y: 3,
          },
          {
            text: "Es ist ein großes Vorhaben mit einer langen Laufzeit, das viele Auswirkungen auf das Unternehmen haben kann",
            x: 5.0,
            y: 5.0,
          },
          { text: "Ich kann diese Frage nicht beantworten", x: 4, y: 4 },
        ],
      },
      {
        question: "Um was für eine Art Vorhaben handelt es sich?",
        gewichtung: 0.5,
        selectedAnswer: null,
        answers: [
          {
            text: "Es ist ein Produkt oder ein Service, der/das nach Fertigstellung auch weiterentwickelt / gewartet / uptodate gehalten werden muss",
            x: 3,
            y: 3,
          },
          {
            text: "Es handelt sich um ein zeitlich begrenztes Projekt bzw. Dienstleistung",
            x: 1,
            y: 1,
          },
          {
            text: "Es handelt sich um eine größere Initiative, die mehrere Bereiche beeinflusst",
            x: 3,
            y: 3,
          },
          {
            text: "Es handelt sich um ein Forschungsthema oder eine extrem herausfordernde Innovation, der Umfang ist daher unklar",
            x: 5,
            y: 5,
          },
          { text: "Ich kann diese Frage nicht beantworten", x: 4, y: 4 }, // angepasst
        ],
      },
      {
        question:
          "Wie klar sind Ziele, Anforderungen und eine Vision des Endergebnisses formuliert?",
        gewichtung: 1.0,
        selectedAnswer: null,
        answers: [
          { text: "Sehr klar", x: 0, y: 1 },
          { text: "Relativ gut", x: 0, y: 2 },
          { text: "Teilweise gut, teilweise schlecht", x: 0, y: 3 },
          { text: "Eher Schlecht", x: 0, y: 4 },
          { text: "Es ist alles sehr unklar", x: 0, y: 5 },
          { text: "Ich kann diese Frage nicht beantworten", x: 0, y: 4 },
        ],
      },
      {
        question:
          "Wurden alle beteiligten Stakeholder bezüglich definierter Ziele, erfasster Anforderungen und deren Prioritäten ausreichend eingebunden?",
        gewichtung: 1.0,
        selectedAnswer: null,
        answers: [
          {
            text: "Ziele und Anforderungen unterschiedlicher Stakeholder stehen oft im Widerspruch miteinander, oder es sind Stakeholder noch gar nicht eingebunden",
            x: 0,
            y: 5,
          },
          {
            text: "Ziele / Anforderungen sind nur grob angerissen. Wichtige Stakeholder (z. B. Führungsriege, umsetzendes Team,…) wurden nicht involviert.",
            x: 0,
            y: 4,
          },
          {
            text: "Es gibt zwar Ziele und Anforderungen, aber es sind noch nicht alle Stakeholder in ausreichend eingebunden und daher vermutlich nicht daran ausgerichtet",
            x: 0,
            y: 3,
          },
          {
            text: "Es ist nicht alles klar, aber sowohl Ziele, Pläne und Anforderungen sind mit einem Großteil der Stakeholder abgestimmt",
            x: 0,
            y: 2,
          },
          {
            text: "Kunden, Umsetzungsteam, Management, sowie technische, fachliche und regulatorische Fachleute sind bei Zielen, Anforderungen und Vision gut eingebunden",
            x: 0,
            y: 1,
          },
          { text: "Ich kann diese Frage nicht beantworten", x: 0, y: 4 },
        ],
      },
      {
        question:
          "Als wie stabil schätzen Sie die Anforderungen an das Endergebnis ein, sobald diese einmal erhoben wurden?",
        gewichtung: 0.5,
        selectedAnswer: null,
        answers: [
          { text: "Sehr stabil", x: 0, y: 1 },
          {
            text: "Relativ stabil, oder die Stakeholder sind sehr flexibel wenn es um die Umsetzung der Anforderungen geht",
            x: 0,
            y: 2,
          },
          {
            text: "Es kommen manchmal neue regulatorische Anforderungen hinzu, einige der Stakeholder merken erst im Verlauf des Vorhabens, was sie eigentlich wollen",
            x: 0,
            y: 3,
          },
          {
            text: "Anforderungen wurden in der Vergangenheit oft während des Prozesses angepasst oder hinzuerfunden",
            x: 0,
            y: 4,
          },
          {
            text: "Die Stakeholder und Experten im Rahmen des Vorhabens haben wenig Zeit, daher sind Anforderungen eher ein Work in Progress",
            x: 0,
            y: 5,
          },
          { text: "Ich kann diese Frage nicht beantworten", x: 0, y: 4 },
        ],
      },
      {
        question:
          "Wie vertraut ist das umsetzende Team mit den eingesetzten Technologien und Frameworks, mit denen das Vorhaben umgesetzt werden soll?",
        gewichtung: 1.0,
        selectedAnswer: null,
        answers: [
          {
            text: "Die Technologie ist bekannt und wurde auch zuvor schon erfolgreich eingesetzt",
            x: 1,
            y: 0,
          },
          {
            text: "Die Technologie ist relativ bekannt, es müssen aber noch einige Kollegen ongeboarded werden oder es gibt kleine Neuerungen",
            x: 2,
            y: 0,
          },
          {
            text: "Es gibt Erfahrungen, aber das Vorhaben hat auch Felder, die noch technologisch unbekannt sind und wo noch Skills aufgebaut werden müssen",
            x: 3,
            y: 0,
          },
          {
            text: "Das nötige Wissen existiert zwar, muss aber den meisten Personen im Umsetzungsteam noch beigebracht werden",
            x: 4,
            y: 0,
          },
          {
            text: "Bei dem innovativen Vorhaben werden Grundlagen geschaffen, es müssen noch viele Fragen beantwortet sind und viel Wissen aufgebaut werden",
            x: 5,
            y: 0,
          },
          { text: "Ich kann diese Frage nicht beantworten", x: 4, y: 0 },
        ],
      },
      {
        question:
          "Wie viele sonstige Risiken, technische Unbekannte oder unklare Lösungswege gibt es bei der Umsetzung?",
        gewichtung: 1.0,
        selectedAnswer: null,
        answers: [
          {
            text: "Es wurde eine ausführliche Risikoabschätzung gemacht und es gibt kaum Risiken oder unklare Punkte",
            x: 1,
            y: 0,
          },
          {
            text: "Es gibt ein paar Risiken und Unklarheiten, aber die negativen Auswirkungen wären nicht sonderlich weitreichend",
            x: 2,
            y: 0,
          },
          {
            text: "Es gibt Risiken oder Unklarheiten mit unterschiedlichen Auswirkungen, die aber allesamt akzeptabel sind",
            x: 3,
            y: 0,
          },
          {
            text: "Es gibt deutliche Risiken oder Unklarheiten, wobei die Auswirkungen durchaus schwerwiegend sein könnten",
            x: 4,
            y: 0,
          },
          {
            text: "Es gibt keine Risikoabschätzung und mehr Unklarheiten als Klarheiten",
            x: 5,
            y: 0,
          },
          { text: "Ich kann diese Frage nicht beantworten", x: 4, y: 0 },
        ],
      },
      {
        question:
          "Wie gut eingespielt ist das Team, welches für die Umsetzung des Vorhabens verantwortlich sein wird?",
        gewichtung: 0.5,
        selectedAnswer: null,
        answers: [
          {
            text: "Das Team hat praktisch noch nie miteinander gearbeitet.",
            x: 5,
            y: 0,
          },
          {
            text: "Die Menschen kennen sich zwar entfernt, aber ein gemeinsames Teamwork sehe ich eher kritisch.",
            x: 4,
            y: 0,
          },
          {
            text: "Man kennt sich und innerhalb der Firma herrschen auch gemeinsame Werte.",
            x: 3,
            y: 0,
          },
          {
            text: "Die Menschen kennen sich, haben in Teilen auch schon in Teams zusammen gearbeitet und sollten eigentlich gut harmonieren.",
            x: 2,
            y: 0,
          },
          {
            text: "Das Team kennt sich, das Teamwork funktioniert gut und die verschiedenen Spezialisten können sich gut ausgleichen, um pragmatische Lösungen zu finden.",
            x: 1,
            y: 0,
          },
          { text: "Ich kann diese Frage nicht beantworten", x: 3, y: 0 },
        ],
      },
    ];

const question = document.getElementById("question");
const questionAnswerButtonContainer = document.getElementById(
  "question-answer-button-container"
);
const resultsContainer = document.getElementById("results-container");
const answerContainer = document.getElementById("answer-container");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const calculateResultsButton = document.getElementById(
  "calculate-results-button"
);
const resultDot = document.getElementById("result-image-dot");
const resultImage = document.getElementById("result-image");
const resultHeaderRequirements = document.getElementById(
  "result-summary-header-requirements"
);
const resultHeaderImplementation = document.getElementById(
  "result-summary-header-implementation"
);
const resultTextRequirements = document.getElementById(
  "result-summary-text-requirements"
);
const resultTextImplementation = document.getElementById(
  "result-summary-text-implementation"
);
const questionCounter = document.getElementById("question-counter");
const contact = document.getElementById("contact");

let currentQuestion = 0;

function calculateResults() {
  const results = state.reduce(
    (prev, question) => {
      const multiplyer = question.gewichtung;
      const { x, y } = question.answers[question.selectedAnswer];
      if (typeof x === "number" && x > 0) {
        prev.x += x * multiplyer;
        prev.xTotal += multiplyer;
      }
      if (typeof y === "number" && y > 0) {
        prev.y += y * multiplyer;
        prev.yTotal += multiplyer;
      }
      return prev;
    },
    { x: 0, y: 0, xTotal: 0, yTotal: 0 }
  );

  return { x: results.x / results.xTotal, y: results.y / results.yTotal };
}

// results : {x: number, y: number}
function updateResultDot(results) {
  const xAxisMinUnit = 1;
  const xAxisMaxUnit = 5;
  const xLeftPaddingPixel = 127; // needs to be changed, if stacey-matrix image changes
  const xRightPaddingPixel = 50; // needs to be changed, if stacey-matrix image changes

  const yAxisMinUnit = 1;
  const yAxisMaxUnit = 5;
  const yTopPaddingPixel = 34; // needs to be changed, if stacey-matrix image changes
  const yBottomPaddingPixel = 99; // needs to be changed, if stacey-matrix image changes

  const maxImageSize = { x: 737, y: 685 }; // needs to be changed, if stacey-matrix image changes
  const { width, height } = resultImage.getBoundingClientRect();

  const xScaling = width / maxImageSize.x;
  const yScaling = height / maxImageSize.y;

  const xAxisMaxLengthPx =
    maxImageSize.x - xLeftPaddingPixel - xRightPaddingPixel;
  const yAxisMaxLengthPx =
    maxImageSize.y - yTopPaddingPixel - yBottomPaddingPixel;

  const xAxisLengthUnit = xAxisMaxUnit - xAxisMinUnit;
  const yAxisLengthUnit = yAxisMaxUnit - yAxisMinUnit;

  const xPosOnAxisPx =
    (xAxisMaxLengthPx / xAxisLengthUnit) * (results.x - xAxisMinUnit);
  const yPosOnAxisPx =
    (yAxisMaxLengthPx / yAxisLengthUnit) * (results.y - yAxisMinUnit);

  const left = xScaling * (xPosOnAxisPx + xLeftPaddingPixel);
  const top = yScaling * (maxImageSize.y - yPosOnAxisPx - yBottomPaddingPixel);

  const correctionForMeasurementInaccuracy = { x: -8, y: -4 }; // needs to be changed, if stacey-matrix image changes

  resultDot.style.left = `${left + correctionForMeasurementInaccuracy.x}px`;
  resultDot.style.top = `${top + correctionForMeasurementInaccuracy.y}px`;
}

function renderQuestionAndAnswers() {
  const data = state[currentQuestion];

  answerContainer.innerHTML = "";
  data.answers.forEach((answer, i) => {
    const labelWrapper = document.createElement("label");
    labelWrapper.classList.add("answer");
    labelWrapper.setAttribute("for", `answer-${i}`);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.id = `answer-${i}`;
    input.value = i;
    input.onchange = onSelectAnswer;
    input.checked = data.selectedAnswer === i;

    const labelText = document.createElement("p");
    labelText.textContent = answer.text;

    labelWrapper.appendChild(input);
    labelWrapper.appendChild(labelText);
    answerContainer.appendChild(labelWrapper);
  });

  question.textContent = data.question;
}

function onSelectAnswer(event) {
  const data = state[currentQuestion];
  data.selectedAnswer = Number(event.target.value);
  updateButtons();
}

function updateButtons() {
  backButton.disabled = false;
  nextButton.disabled = false;
  calculateResultsButton.disabled = false;
  backButton.classList.remove("display-none");
  nextButton.classList.remove("display-none");
  calculateResultsButton.classList.add("display-none");

  if (currentQuestion === 0) {
    backButton.disabled = true;
  }
  if (currentQuestion === state.length - 1) {
    nextButton.classList.add("display-none");
    calculateResultsButton.classList.remove("display-none");
  }
  const noAnswerSelected = state[currentQuestion].selectedAnswer === null;
  if (noAnswerSelected) {
    nextButton.disabled = true;
    calculateResultsButton.disabled = true;
  }
}

onBackButton = function onBackButton() {
  currentQuestion -= 1;
  render();
};

onNextButton = function onNextButton() {
  currentQuestion += 1;
  render();
};

onCalculateResultsButton = function onCalculateResultsButton() {
  resultsContainer.classList.remove("display-none");
  questionAnswerButtonContainer.classList.add("display-none");

  const results = calculateResults();
  const axisSpecificResults = getResultTexts(results);

  let requirementsTextContent = `KLARHEIT DER ANFORDERUNGEN: ${results.y.toFixed(
    1
  )}`;
  const requirementsLabel = axisSpecificResults.y.label;
  if (requirementsLabel) requirementsTextContent += ` (${requirementsLabel})`;

  let implementationTextContent = `BEKANNTHEIT DER UMSETZUNG: ${results.x.toFixed(
    1
  )}`;
  const implementationLabel = axisSpecificResults.x.label;
  if (implementationLabel)
    implementationTextContent += ` (${implementationLabel})`;

  resultHeaderRequirements.textContent = requirementsTextContent;
  resultTextRequirements.textContent = axisSpecificResults.y.text;
  resultHeaderImplementation.textContent = implementationTextContent;
  resultTextImplementation.textContent = axisSpecificResults.x.text;

  const areaResult = getResultArea(results);
  const areaTexts = getAreaRelatedTexts(areaResult);
  const intro = areaTexts?.intro;
  const example = areaTexts?.example;
  const recommendation = areaTexts?.recommendation;

  if (intro) {
    const areaTextContainer = document.createElement("div");
    areaTextContainer.classList.add("area-text-container");

    const header = document.createElement("h4");
    header.textContent = `BEREICH: ${areaResult}`;

    const text = document.createElement("p");
    text.textContent = intro;

    areaTextContainer.appendChild(header);
    areaTextContainer.appendChild(text);
    resultsContainer.appendChild(areaTextContainer);
  }
  if (example) {
    const areaTextContainer = document.createElement("div");
    areaTextContainer.classList.add("area-text-container");

    const header = document.createElement("h4");
    header.textContent = "BEISPIEL";

    const text = document.createElement("p");
    text.textContent = example;

    areaTextContainer.appendChild(header);
    areaTextContainer.appendChild(text);
    resultsContainer.appendChild(areaTextContainer);
  }
  if (recommendation) {
    const areaTextContainer = document.createElement("div");
    areaTextContainer.classList.add("area-text-container");

    const header = document.createElement("h4");
    header.textContent = "EMPFEHLUNG";

    const text = document.createElement("p");
    text.innerHTML = recommendation;

    areaTextContainer.appendChild(header);
    areaTextContainer.appendChild(text);
    resultsContainer.appendChild(areaTextContainer);
  }

  updateResultDot(results);

  contact.classList.remove("display-none");
};

// ---- CALUCALTE RESULTS ----
const ranges = [
  { id: 1, min: 1, max: 2.5 },
  { id: 2, min: 2.5, max: 3.5 },
  { id: 3, min: 3.5, max: 5 },
];

// result : { x: number, y: number }
function getResultTexts(result) {
  const resultData = [
    {
      rangeId: 1,
      requirements:
        "Die Ziele zur Erreichung des Vorhabens sind eindeutig. Die Beteiligten haben ein gemeinsames Verständnis für die gewünschten Ergebnisse.",
      implementation:
        "Die Schritte zur Erreichung des Vorhabens sind klar, und die Beteiligten haben ein gemeinsames Verständnis für den Weg. Es gibt etablierte Methoden oder Prozesse, die problemlos angewendet werden können.",
      requirementsLabel: "KLAR",
      implementationLabel: "BEKANNT",
    },
    {
      rangeId: 2,
      requirements:
        "Die Ziele und die Abstimmung zur Erreichung des Vorhabens sind vorhanden, aber nicht vollständig klar.",
      implementation:
        "Die Schritte zur Erreichung des Vorhabens sind ungefähr bekannt, aber nicht einfach zu planen.",
    },
    {
      rangeId: 3,
      requirements:
        "Die Ziele zur Erreichung des Vorhabens sind sehr nebulös. Ein Design-Thinking Workshop könnte hier unterschiedliche Stakeholder auf eine gemeinsame Vision vereinen. Danach könnte man die initialen Anforderungen in einem Backlog erfassen, um diese transparent besprechbar zu machen.",
      implementation:
        "Die Implementierung des Vorhabens ist eher Neuland und daher sehr schwer planbar",
      requirementsLabel: "UNKLAR",
      implementationLabel: "UNBEKANNT",
    },
  ];

  const implementationRangeId = ranges.find((range) => {
    return range.min <= result.x && range.max >= result.x;
  }).id;
  const requirementRangeId = ranges.find((range) => {
    return range.min <= result.y && range.max >= result.y;
  }).id;

  const xResultData = resultData.find(
    (data) => data.rangeId === implementationRangeId
  );
  const yResultData = resultData.find(
    (data) => data.rangeId === requirementRangeId
  );

  return {
    x: {
      text: xResultData.implementation,
      label: xResultData.implementationLabel,
    },
    y: {
      text: yResultData.requirements,
      label: yResultData.requirementsLabel,
    },
  };
}

// result : { x: number, y: number }
function getResultArea(result) {
  const { x, y } = result;

  const range1 = ranges[0];
  const range2 = ranges[1];
  const range3 = ranges[2];

  const resultRadius = Math.sqrt(x ** 2, y ** 2);

  const maxValue = range3.max;
  const isChaos =
    (x - maxValue) ** 2 + (y - maxValue) ** 2 < (maxValue - range3.min) ** 2;
  if (isChaos) return "CHAOS";
  if (resultRadius >= range2.min) return "KOMPLEX";
  if (resultRadius > range1.min) return "KOMPLIZIERT";
  else return "EINFACH";
}

function getAreaRelatedTexts(area) {
  const texts = {
    EINFACH: {
      intro:
        "Im einfachen Bereich gibt es keine Unklarheiten, weder in Fragen der Anforderungen, der Abstimmung zwischen den Stakeholdern, noch in der Umsetzung – also ist das Umsetzungsteam gut vorbereitet und kann die Aufgabe umsetzen. Hier kann eine Projektleitung einen Plan erstellen und dieser kann vom Umsetzungsteam abgearbeitet werden.",
      recommendation:
        "Insgesamt handelt es sich um eine geringe Komplexität und einfache Umsetzung bei guter Abstimmung. Projektmanagement auf Basis von Wasserfall, V-Modell oder Kanban werden hier gute Ergebnisse liefern. Warum? Projektmanagement geht davon aus, dass ein Vorhaben vollständig geplant und dann in sukzessiven Arbeitsschritten einzelne Stationen wie Entwurf, Design, Implementierung, Validierung und Abschluss durchläuft. Der Fokus von Projektmanagement liegt auf effizienter Auslastung der beteiligten Personen und dem Befolgen eines Masterplans, und ermöglicht eine detaillierte Aufwandsplanung sowie klare Deadlines. Ihre Antworten deuten auf ein sehr überschaubares Vorhaben hin, für das diese Art von Projektmanagement geeignet ist.",
      example:
        "Die Umsetzung einer neuen Verschlüsselungstechnik für E-Mails. Hier gibt es Klarheit bei der Anforderung und eine geradlinig planbare Umsetzung. ",
    },
    KOMPLIZIERT: {
      intro:
        "Bei einem kompliziertem Umfeld gibt es Abstimmungsbedarf zwischen den Stakeholdern um initiale Mehrdeutigkeiten zu vermeiden, aber dies ist mit einem guten Projektplan problemlos machbar. Es gibt Abhängigkeiten in der Umsetzung, aber selbst bei längeren komplizierten Projekten gibt es kaum „bewegliche Teile“ oder Unsicherheit. Sollte diese Beschreibung nicht zu ihrem Vorhaben passen, ist das Projekt vielleicht doch komplexer, als angenommen.",
      recommendation:
        "Insgesamt handelt es sich um einen geringen bis mittleren Komplexitätsgrad, die eine Umsetzung komplizierter machen können, als dass klassisches Projektmanagement ausreichen könnte. Ob Projektmanagement hier noch ausreicht, oder ein agiles Projekt auf Basis von Kanban hier die besten Ergebnisse liefert, hängt sehr von Kontext, Umsetzungsumfang, Team und Stakeholder-Abstimmung ab. Warum? Projektmanagement geht davon aus, dass ein Vorhaben vollständig geplant und dann in sukzessiven Arbeitsschritten einzelne Stationen wie Entwurf, Design, Implementierung, Validierung und Abschluss durchläuft. Der Fokus von Projektmanagement liegt auf effizienter Auslastung der beteiligten Personen und dem Befolgen eines Masterplans, und ermöglicht eine detaillierte Aufwandsplanung sowie klare Deadlines. Ihre Antworten deuten jedoch darauf hin, dass das Vorhaben nur kompliziert ist, dass im Verlaufe des Projektes also wenige Überraschungen auf den Plan treten könnten, selbst wenn die Umsetzung einiges an Aufwand bedeutet.",
      example:
        "Umsetzung einer regulatorischen Vorgabe wie VAIT oder DORA im Versicherungskontext. Hierbei ist eine tiefgehende Durchdringung der Materie notwendig, aber es gibt trotzdem wenig Unvorhersehbarkeit bei Umsetzung. Ein anderes Beispiel, bei dem ein eigentlich kompliziertes Projekt (der Bau eines Flughafens) doch eher in den Bereich des Komplexen überging, war der Berlin Brandenburg Airport (alias BER). Üblicherweise hat ein Flughafen klare Anforderungen und bekannte Technologie, beim BER jedoch gab es jedoch mit Bund und Ländern (Berlin und Brandenburg) mehrere Stakeholder, die auf die Anforderungen einwirkten, und eine sehr lange Laufzeit, was neben Überraschungen durch viele Bau in der Folge ungeplante regulatorische Probleme auf den Plan rief und in Folge der Verlängerung der Projektlaufzeit auch die Finanzierung des Projektes (Kreditzinsen) zu einem eigenen Problem werden ließ.",
    },
    KOMPLEX: {
      intro:
        "Die Anforderungen sind unklar oder die technische Umsetzung des Projektes ist in dieser Form schon einmal vom umsetzenden Team durchgeführt worden. Daher werden Teile der Arbeit erst gemacht werden müssen, bis man andere Teile der Umsetzung versteht, Lernerfahrungen werden nötig sein und es werden Überraschungen auf das umsetzende Team zukommen, die man aktuell nicht einschätzen kann. ",
      example:
        "Neues Bestandsführungssystem bei einem Versicherer. Hier müssen alle Prozesse neu gedacht werden, bestehende und angebundene Systeme müssen eingebettet werden und Daten müssen migriert werden. Es lässt sich nicht alles vorplanen, und man kann davon ausgehen, dass es Überraschungen geben wird, auf die man während der Umsetzung reagieren muss.",
      recommendation:
        "In einem solchen Umfeld bietet sich agiles Arbeiten mit einem Framework wie Scrum an. Scrum bändigt Komplexität, indem inkrementell vorgegangen wird, und regelmäßig Zwischenergebnisse mit Stakeholdern besprochen werden, um die Anforderungen weiter zu schärfen. Zudem schafft Scrum einen lernenden Prozess, bei dem das Team regelmäßig den Arbeitsprozess und die Vorgehensweise verbessert, und diese sich dem organisatorischen Umfeld, den Umsetzenden, den Stakeholdern und nicht zuletzt auch dem Markt kontinuierlich anpasst.<br>Die Stacey Matrix liefert nicht alle Antworten, sondern nur eine Ersteinschätzung. Das Umfeld, die Arbeitsweise der Mitarbeiter, aktuelle Rahmenbedingungen im Unternehmen, oder die Verfügbarkeit der Mitarbeiter, sind ebenfalls entscheidend bei der Wahl eines Vorgehens. Der Fragebogen deckt diese Punkte in wenigen Fragen bestmöglich ab, eine realistischere Einschätzung wird jedoch mehr als 5 Minuten in Anspruch nehmen.",
    },
    CHAOS: {
      intro:
        "Chaotisch beschreibt einen Bereich, in dem man praktisch keine Vorhersagen machen kann. Weder ist bekannt, was genau entwickelt werden soll, noch, wie man sein Ziel erreichen kann und ob man die passenden Ressourcen dafür zur Verfügung hat.",
      example:
        "Einführung eines Kundenportals bei einem Versicherungsunternehmen, was bisher ausschließlich papierbasiert gearbeitet hat. Es fehlen Erfahrungswerte in Technologie und Vorgehen, und es ist nicht klar, was umgesetzt werden muss, es fehlt also eine Vision des Projektes. ",
      recommendation:
        "Es bietet sich an, mit Methoden wie dem Design Thinking Klarheit zu schaffen, bis das Vorhaben nicht mehr als Chaotisch sondern nur noch als Komplex bewertet wird, um es dann mit Agilen Arbeitsweisen angehen zu können. Haben beispielsweise über Design Thinking und Prototyping alle Beteiligten ein Bild entwickeln können, wie das Ergebnis des Vorhabens am Ende aussehen soll, werden sowohl Anforderungen als auch Umsetzungsmethodik klarer. Dann kann man danach in einer Initiierungsphase Anforderungen transparent in einem Product Backlog erfassen und dann eine technische Umsetzung der Anforderungen mit einem agilen Vorgehensmodell (wie Scrum) angehen. So können regelmäßig Fortschritte erzielt werden, selbst wenn im Gesamtvorhaben ab und zu mal unvorhersehbare Probleme auftreten. Ein solches Vorhaben kann aufgrund seiner hohen Komplexität von Risikomanagement, Stakeholdermanagement und Kostenkontrolling flankiert werden.",
    },
  };

  return texts[area];
}

function updateQuestionCounter() {
  questionCounter.textContent = `FRAGE ${currentQuestion + 1} VON ${
    state.length
  }`;
}

// ---- ENTRYPOINT --------
function render() {
  renderQuestionAndAnswers();
  updateButtons();
  updateQuestionCounter();
}

const resizeObserver = new ResizeObserver(() => {
  updateResultDot(calculateResults());
});
resizeObserver.observe(resultImage);

render();
