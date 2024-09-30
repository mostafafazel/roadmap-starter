#!/bin/bash

# Create content/ directory and subdirectories
mkdir -p content/roadmap/phases
mkdir -p content/roadmap/data
mkdir -p content/roadmap/visuals
mkdir -p content/news
mkdir -p content/grants
mkdir -p content/resources
mkdir -p content/legal

# Create roadmap index.md
cat <<EOL > content/roadmap/index.md
---
title: "Biosensor Development Roadmap"
description: "An in-depth roadmap for the development of advanced biosensors."
---

# Biosensor Development Roadmap

Welcome to our comprehensive roadmap outlining the development of cutting-edge biosensor technology.

- [Our Goals](/roadmap/goals)
- [Roadmap Phases](/roadmap/phases)
- [Data & Analytics](/roadmap/data)
- [Visuals & Diagrams](/roadmap/visuals)

Stay informed about our progress and milestones.
EOL

# Create roadmap goals.md
cat <<EOL > content/roadmap/goals.md
---
title: "Our Goals"
description: "Key objectives we aim to achieve in the biosensor development."
---

# Our Goals

Our biosensor development aims to achieve the following:

1. **Innovative Design**: Create highly sensitive and specific biosensors.
2. **Accessibility**: Ensure affordability and wide availability.
3. **Integration**: Seamlessly integrate biosensors with modern devices.

[Explore Roadmap Phases](/roadmap/phases)
EOL

# Create roadmap phases markdown files
cat <<EOL > content/roadmap/phases/phase1.md
---
title: "Phase 1: Research & Discovery"
description: "Initial phase focusing on research and discovery."
phase_number: 1
---

# Phase 1: Research & Discovery

In this phase, we focus on:

- **Literature Review**: Understanding existing technologies.
- **Feasibility Studies**: Assessing potential materials and methods.
- **Conceptual Design**: Drafting initial designs.

![Concept Diagram](/images/concept-diagram.png)

[Next Phase](/roadmap/phases/phase2)
EOL

cat <<EOL > content/roadmap/phases/phase2.md
---
title: "Phase 2: Prototyping & Development"
description: "Development of biosensor prototypes and testing."
phase_number: 2
---

# Phase 2: Prototyping & Development

In this phase, we develop prototypes and start testing.

- **Prototype Development**: Build working biosensor models.
- **Laboratory Testing**: Assess initial prototypes in controlled environments.

[Next Phase](/roadmap/phases/phase3)
EOL

cat <<EOL > content/roadmap/phases/phase3.md
---
title: "Phase 3: Commercialization"
description: "Final phase focusing on mass production and market introduction."
phase_number: 3
---

# Phase 3: Commercialization

In this phase, we prepare for mass production and introduce the biosensor to the market.

- **Mass Production**: Scale manufacturing processes.
- **Market Launch**: Launch the product in various markets.

[Previous Phase](/roadmap/phases/phase2)
EOL

# Create roadmap data (CSV and JSON files)
cat <<EOL > content/roadmap/data/sensors.csv
Sensor Type,Detection Method,Sensitivity,Specificity
Electrochemical,Enzyme-based,High,Moderate
Optical,Fluorescence,Very High,High
Piezoelectric,Mass Change,Moderate,High
EOL

cat <<EOL > content/roadmap/data/analytics.json
{
  "totalSensors": 150,
  "successfulTests": 125,
  "failedTests": 25,
  "developmentPhases": [
    { "phase": "Research", "progress": 100 },
    { "phase": "Prototyping", "progress": 75 },
    { "phase": "Commercialization", "progress": 50 }
  ]
}
EOL

# Create roadmap visuals
cat <<EOL > content/roadmap/visuals/timeline.md
---
title: "Development Timeline"
description: "Visual timeline of the roadmap."
---

# Development Timeline

<NuxtContentDisplayVisualization type="timeline" data="/roadmap/data/timeline-data.json" />

*Use the interactive timeline above to navigate through the phases.*
EOL

cat <<EOL > content/roadmap/visuals/diagrams.md
---
title: "Technical Diagrams"
description: "Diagrams for explaining the biosensor development."
---

# Technical Diagrams

Here are some technical diagrams related to the biosensor development process:

![Biosensor Design Diagram](/images/biosensor-design.png)
EOL

# Create news articles
for i in 1 2 3; do
cat <<EOL > content/news/article-$i.md
---
title: "News Article $i"
description: "Description for news article $i."
date: 2024-01-0$i
---

# News Article $i

This is the content of news article $i. Stay updated with the latest progress in biosensor development.
EOL
done

# Create grants information
for i in 1 2 3; do
cat <<EOL > content/grants/grant-$i.md
---
title: "Grant Opportunity $i"
description: "Details for grant opportunity $i."
deadline: "2024-05-0$i"
---

# Grant Opportunity $i

Explore the funding options available through grant opportunity $i.
EOL
done

# Create resources information
for i in 1 2 3; do
cat <<EOL > content/resources/resource-$i.md
---
title: "Resource $i"
description: "Description of resource $i."
---

# Resource $i

Details about resource $i. Useful links, guides, or other resources for biosensor development.
EOL
done

# Create legal documents
cat <<EOL > content/legal/terms.md
---
title: "Terms of Service"
description: "Legal terms and conditions."
---

# Terms of Service

Please read our terms of service carefully before using our platform.
EOL

cat <<EOL > content/legal/privacy.md
---
title: "Privacy Policy"
description: "Our privacy policy."
---

# Privacy Policy

We take your privacy seriously. This document outlines how we handle your data.
EOL

# Create about.md and index.md
cat <<EOL > content/about.md
---
title: "About Us"
description: "Learn more about our project and team."
---

# About Us

We are a team of scientists and engineers working on cutting-edge biosensor technologies.
EOL

cat <<EOL > content/index.md
---
title: "Home"
description: "Welcome to our biosensor development platform."
---

# Welcome to Our Biosensor Development Platform

Stay updated with the latest news, research, and developments in biosensor technology. Explore our roadmap, news, and resources.
EOL

echo "Content structure has been created successfully!"
