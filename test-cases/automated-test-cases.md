# Automated Test Cases

This document describes the automated functional test cases implemented for the
Demoblaze test website. Each test was selected based on risk, user impact, and
suitability for UI automation.

The focus is on validating high-value user journeys rather than achieving broad
test coverage.

---

## Test Case 1: Navigation to Product Category

**Test File:** `navigation.spec.ts`

### Scenario
Verify that a user can navigate to a product category and view available products.

### Steps Covered
- Load the homepage
- Select the “Phones” category
- Confirm that product cards are displayed

### Reason for Automation
Navigation is a fundamental user interaction. Automating this test ensures that
key navigation elements remain functional and that the site is in a usable state
before further interactions occur.

### Risk Addressed
If category navigation fails, users cannot browse products, making the site
effectively unusable.

---

## Test Case 2: View Product Details

**Test File:** `product-details.spec.ts`

### Scenario
Verify that selecting a product displays its detailed information.

### Steps Covered
- Load the homepage
- Select a product from the product list
- Validate that the product name, price, and description are visible

### Reason for Automation
Product detail pages are critical for user decision-making. Automating this test
ensures that essential product information is consistently displayed.

### Risk Addressed
Missing or broken product details could prevent users from completing a purchase
or lead to confusion and loss of trust.

---

## Test Case 3: Add Product to Cart

**Test File:** `add-to-cart.spec.ts`

### Scenario
Verify that a user can add a product to the cart and that the cart reflects the
addition.

### Steps Covered
- Select a product
- Add the product to the cart
- Navigate to the cart
- Confirm the cart contains one item

### Reason for Automation
Adding items to the cart is a core e-commerce function and a frequent source of
regressions. Automation provides fast feedback on whether this functionality
remains intact.

### Risk Addressed
Failures in cart functionality directly prevent users from progressing toward
checkout and completing a purchase.

---

## Test Case 4: Cart Displays Correct Product Information

**Test File:** `cart-validation.spec.ts`

### Scenario
Verify that the correct product information is displayed in the cart after adding
an item.

### Steps Covered
- Capture the selected product name
- Add the product to the cart
- Navigate to the cart
- Confirm the cart displays the expected product

### Reason for Automation
This test validates data integrity between the product listing and cart views.
It ensures that user actions result in accurate and consistent state changes.

### Risk Addressed
Incorrect cart contents could lead to user frustration, incorrect purchases, or
loss of confidence in the platform.

---

## Test Case 5: Place an Order Successfully

**Test File:** `place-order.spec.ts`

### Scenario
Verify that a user can complete the checkout process and receive a confirmation.

### Steps Covered
- Add a product to the cart
- Open the “Place Order” modal
- Enter required purchase details
- Complete the purchase
- Validate that a confirmation message is displayed

### Reason for Automation
This is a high-value end-to-end happy path that confirms multiple components work
together correctly, including cart state, form input handling, and confirmation
feedback.

### Risk Addressed
If users cannot complete purchases successfully, the primary purpose of the site
is broken, resulting in complete business failure.

---

## Summary

These automated tests were intentionally limited in number and focused on
high-impact scenarios. Each test provides clear value, is stable to run, and
validates behaviour that would be critical in a real-world production environment.
