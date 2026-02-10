# Test Plan

This document outlines the functional testing approach, test prioritisation,
and automation strategy for the Demoblaze test website.

# Test Plan – Demoblaze Functional Testing

## 1. Introduction

This test plan outlines the functional testing approach for the Demoblaze test website
(https://www.demoblaze.com/index.html) as part of the Companies House Senior Test Engineer
technical assessment.

The objective is to demonstrate a clear, risk-based testing strategy, effective test
case design, and the considered use of UI automation to validate key user journeys.
The focus is on test quality, rationale, and communication rather than exhaustive
coverage.

---

## 2. Scope

### In Scope
- Core user journeys related to:
  - Browsing products
  - Viewing product details
  - Adding items to the cart
  - Cart validation
  - Placing an order
- Functional behaviour observable through the UI
- High-value paths that would impact users if broken

### Out of Scope
- Performance testing
- Security testing
- Backend/API testing
- Cross-browser or cross-device testing
- Visual regression testing

These areas are intentionally excluded to keep the scope aligned with the assessment
focus and time expectations.

---

## 3. Functional Test Types Prioritised

The following functional test types are prioritised:

### 3.1 Smoke Testing
Used to confirm that the application is fundamentally usable, including:
- Site loads correctly
- Navigation links function
- Products are visible

This ensures the application is in a testable state before deeper testing.

---

### 3.2 Happy Path Testing
Primary focus is placed on common user journeys, such as:
- Viewing a product
- Adding a product to the cart
- Completing a purchase

These paths represent the highest business value and user impact.

---

### 3.3 Validation and State Testing
Tests are designed to verify:
- Cart contents persist as expected
- Product information displayed matches the selected item
- User actions result in correct UI updates

This helps identify inconsistencies and state-management issues.

---

### 3.4 Exploratory Testing
Light exploratory testing is performed alongside automation to:
- Identify unexpected behaviours
- Discover UI inconsistencies
- Surface potential defects for documentation

Findings from exploratory testing inform defect reporting rather than automation.

---

## 4. Test Approach and Rationale

A **risk-based testing approach** is used to prioritise scenarios that:
- Represent real user behaviour
- Are critical to the primary purpose of the site
- Are most likely to expose functional issues

Only a small number of automated tests are implemented to ensure:
- Each test has a clear purpose
- Tests are readable and maintainable
- The focus remains on demonstrating testing judgement rather than volume

Automation is applied where it provides the most value and repeatability, rather than
attempting to automate all possible scenarios.

---

## 5. Automation Strategy

### 5.1 Tool Selection

**Playwright with TypeScript** is used for UI automation.

#### Rationale:
- Playwright provides reliable, modern browser automation with built-in waiting
  mechanisms, reducing flakiness in UI tests.
- TypeScript offers strong typing and improved readability, supporting maintainable
  and self-documenting tests.
- The framework is widely adopted in modern development and testing teams, including
  UK public sector organisations.
- Tests can be easily executed locally by assessors with minimal setup.

---

### 5.2 Automation Scope

Automation is limited to **up to five test cases**, each covering a high-value
functional scenario. These include:
- Core navigation flows
- Cart behaviour
- Purchase flow validation

Each automated test is documented separately with:
- Scenario description
- Reason for automation
- Risk addressed by the test

---

## 6. Test Environment

- Tests are executed against the publicly available Demoblaze test website.
- No test data setup or environment configuration is required.
- The site is treated as unstable by design, and tests are written defensively to
  handle known inconsistencies.

---

## 7. Defect Management

Any issues identified during testing are documented in a dedicated defects log,
including:
- Description of the issue
- Steps to reproduce
- Expected vs actual behaviour
- Observations or assumptions

Defects are not fixed as part of this assessment and are provided for visibility only.

---

## 8. Assumptions and Constraints

- The test site may contain intentional bugs and inconsistencies.
- Automation stability is prioritised over exhaustive coverage.
- The assessment is time-boxed; therefore, effort is focused on demonstrating testing
  principles rather than completeness.

---

## 9. Conclusion

This test plan demonstrates a structured, pragmatic approach to functional testing,
balancing automation with exploratory testing and prioritising scenarios that deliver
the highest value. The approach reflects real-world testing practices suitable for a
Senior Test Engineer role.
