// data/projects.js

const servicesContent = {
  en: {
    sectionText: "Offered Services",
    navbarText: "Services",
    services: [
      {
        title: "Systems Engineering Process/Method Development",
        description:
          "Development of customer-specific Systems Engineering processes: Design and adaptation of Systems Engineering processes tailored to the customer's specific requirements and goals.",
      },
      {
        title:
          "Integration of Agile Methods into the Systems Engineering Process",
        description:
          "Adaptation of traditional Systems Engineering approaches to integrate agile methods and principles.",
      },
      {
        title: "Definition of Tools and Technologies",
        description:
          "Selection and implementation of tools to support the Systems Engineering process, e.g., requirements management tools or modeling tools.",
      },
      {
        title: "Systems Engineering Coaching and Training",
        description:
          "Individual Systems Engineering coaching: One-on-one coaching for project teams or executives to deepen Systems Engineering concepts and support implementation.",
      },
      {
        title: "Workshops on Systems Engineering Basics",
        description:
          "Training and workshops to familiarize teams with the basics of Systems Engineering and promote a common language.",
      },
      {
        title: "Advanced Systems Engineering Training",
        description:
          "Training on specialized topics such as safety, integration of new technologies, or the application of specific standards.",
      },
      {
        title: "Requirements Management",
        description:
          "Requirements analysis and documentation: Support in capturing, analyzing, and documenting requirements to ensure that all stakeholder needs are captured.",
      },
      {
        title: "Requirements Tracking and Management",
        description:
          "Introduction of methods and tools for tracking requirements throughout the development lifecycle.",
      },
      {
        title: "Requirements Prioritization",
        description:
          "Consulting on the prioritization of requirements to ensure that the most critical requirements are fulfilled first.",
      },
      {
        title: "Architecture Management",
        description:
          "System architecture design: Support in developing a system architecture that defines the structure and relationships between system components.",
      },
      {
        title: "Interface Management",
        description:
          "Definition and monitoring of interfaces between different system components to ensure interoperability.",
      },
      {
        title: "Model-Based Architecture",
        description:
          "Introduction of model-based approaches for visualization and analysis of the system architecture.",
      },
      {
        title: "Integration and V&V Management",
        description:
          "Integration planning: Development of a plan for integrating various system components and conducting integration tests.",
      },
      {
        title: "Verification and Validation (V&V) Strategy",
        description:
          "Development of a verification and validation strategy to ensure that the system meets the requirements.",
      },
      {
        title: "V&V Test Planning and Execution",
        description:
          "Support in creating test plans, procedures, and protocols for verification and validation tests.",
      },
      {
        title: "Systems Engineering Change Management",
        description:
          "Change identification and evaluation: Support in identifying changes and assessing their impact on the system.",
      },
      {
        title: "Change Management Processes",
        description:
          "Development of processes to control and manage changes to ensure that changes are implemented systematically and in a controlled manner.",
      },
      {
        title: "Communication and Stakeholder Management",
        description:
          "Planning and implementation of communication strategies to inform and involve affected stakeholders about changes.",
      },
    ],
  },
  de: {
    sectionText: "Angebotene Leistungen",
    navbarText: "Leistungen",
    services: [
      {
        title: "Systems Engineering Prozess-/ Methodenentwicklung",
        description:
          "Entwicklung kundenspezifischer Systems Engineering Prozesse: Entwurf und Anpassung von Systems Engineering Prozessen, die den spezifischen Anforderungen und Zielen des Kunden gerecht werden.",
      },
      {
        title: "Integration agiler Methoden in den Systems Engineering Prozess",
        description:
          "Anpassung traditioneller Systems Engineering Ansätze, um agile Methoden und Prinzipien zu integrieren.",
      },
      {
        title: "Definition von Tools und Technologien",
        description:
          "Auswahl und Implementierung von Tools zur Unterstützung des Systems Engineering Prozesses, z. B. Anforderungsmanagement-Tools oder Modellierungswerkzeuge.",
      },
      {
        title: "Systems Engineering Coaching und Trainings",
        description:
          "Individuelles Systems Engineering Coaching: Einzel-Coaching für Projektteams oder Führungskräfte, um Systems Engineering Konzepte zu vertiefen und bei der Umsetzung zu unterstützen.",
      },
      {
        title: "Workshops zu Systems Engineering Grundlagen",
        description:
          "Schulungen und Workshops, um Teams mit den Grundlagen des Systems Engineering vertraut zu machen und die gemeinsame Sprache zu fördern.",
      },
      {
        title: "Fortgeschrittene Systems Engineering Trainings",
        description:
          "Schulungen zu spezialisierten Themen wie Sicherheit, Integration von neuen Technologien oder Anwendung bestimmter Normen.",
      },
      {
        title: "Anforderungsmanagement",
        description:
          "Anforderungsanalyse und -dokumentation: Unterstützung bei der Erfassung, Analyse und Dokumentation von Anforderungen, um sicherzustellen, dass alle Stakeholderbedürfnisse erfasst werden.",
      },
      {
        title: "Anforderungsverfolgung und -management",
        description:
          "Einführung von Methoden und Tools zur Verfolgung von Anforderungen über den gesamten Entwicklungszyklus hinweg.",
      },
      {
        title: "Anforderungspriorisierung",
        description:
          "Beratung bei der Priorisierung von Anforderungen, um sicherzustellen, dass die wichtigsten Anforderungen zuerst erfüllt werden.",
      },
      {
        title: "Architekturmanagement",
        description:
          "Systemarchitektur-Design: Unterstützung bei der Entwicklung einer Systemarchitektur, die die Struktur und die Beziehungen zwischen den Systemkomponenten definiert.",
      },
      {
        title: "Schnittstellenmanagement",
        description:
          "Festlegung und Überwachung von Schnittstellen zwischen den verschiedenen Systemkomponenten, um Interoperabilität zu gewährleisten.",
      },
      {
        title: "Modellbasierte Architektur",
        description:
          "Einführung von modellbasierten Ansätzen zur Visualisierung und Analyse der Systemarchitektur.",
      },
      {
        title: "Integrations- und V&V Management",
        description:
          "Integrationsplanung: Entwicklung eines Plans für die Integration der verschiedenen Systemkomponenten und Durchführung von Integrationstests.",
      },
      {
        title: "Verifikation und Validierung (V&V) Strategie",
        description:
          "Entwicklung einer Strategie zur Verifikation und Validierung, um sicherzustellen, dass das System den Anforderungen entspricht.",
      },
      {
        title: "V&V Testplanung und -durchführung",
        description:
          "Unterstützung bei der Erstellung von Testplänen, -verfahren und -protokollen für die Verifikations- und Validierungstests.",
      },
      {
        title: "Systems Engineering Change-Management",
        description:
          "Änderungsidentifikation und -bewertung: Unterstützung bei der Identifizierung von Änderungen und Bewertung ihrer Auswirkungen auf das System.",
      },
      {
        title: "Änderungsmanagementprozesse",
        description:
          "Entwicklung von Prozessen zur Steuerung und Verwaltung von Änderungen, um sicherzustellen, dass Änderungen systematisch und kontrolliert umgesetzt werden.",
      },
      {
        title: "Kommunikation und Stakeholder-Management",
        description:
          "Planung und Umsetzung von Kommunikationsstrategien, um die betroffenen Stakeholder über Änderungen zu informieren und einzubeziehen.",
      },
    ],
  },
};
