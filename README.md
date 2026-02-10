# Companies House – Senior Test Engineer Technical Assessment

This repository contains a functional test plan and a small suite of automated UI tests created as part of the Companies House Senior Test Engineer technical assessment.

The purpose of this submission is to demonstrate test planning, test case design, and the considered use of automation rather than exhaustive test coverage.

In a production setting, this test suite would typically be integrated into a CI pipeline; this has been intentionally omitted to keep the submission focused on test design and automation as per the assessment scope.
---

## Test Website

All testing has been carried out against the following test site:

https://www.demoblaze.com/index.html

The site is assumed to contain intentional defects and inconsistencies as part of the assessment.

---

## Approach Summary

- A risk-based testing approach was used to prioritise high-value user journeys such as browsing products, adding items to the cart, and completing a purchase.
- Automation was intentionally limited to five focused test cases to emphasise quality, clarity, and maintainability.
- Exploratory testing was used alongside automation to identify defects and inconsistencies, which are documented separately.

---

## Tools and Technologies

- Language: TypeScript
- Automation Framework: Playwright
- Test Runner: Playwright Test

### Rationale

Playwright was selected due to its reliability for UI testing, built-in waiting mechanisms, and ease of setup. TypeScript improves readability and maintainability through strong typing and clearer intent in test code.

This combination reflects modern testing practices commonly used in contemporary development teams.

---

## Repository Structure

    ├── test-plan/
    │   └── test-plan.md              # Functional test plan and strategy
    ├── tests/
    │   └── *.spec.ts                 # Automated Playwright test cases
    ├── test-cases/
    │   └── automated-test-cases.md   # Documentation for each automated test
    ├── issues/
    │   └── defects.md                # Defects and observations identified during testing
    ├── playwright.config.ts
    ├── package.json
    └── README.md

---

## Running the Tests

### Prerequisites

- Node.js (version 18 or later)
- npm

### Installation

    npm install
    npx playwright install

### Run All Tests

    npm test

### Run Tests with Playwright UI

    npm run test:ui

---

## Assumptions and Constraints

- The test site may behave inconsistently by design.
- No test data setup or environment configuration is required.
- The assessment is time-boxed; therefore, the test suite focuses on demonstrating testing judgement rather than completeness.

---

## Notes for Assessors

Each section of this repository maps directly to the assessment requirements:

- Test Plan: Testing approach and rationale
- Automated Tests: Practical automation examples
- Test Case Documentation: Explanation of test selection
- Defects Log: Issues identified during testing

This structure is intended to make the submission easy to review and discuss during interview.
