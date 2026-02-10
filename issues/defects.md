# Defects and Observations

This document captures issues and inconsistencies identified
during exploratory and automated testing of the Demoblaze site.

# Defects and Observations

This document records issues and inconsistencies identified during exploratory and
automated testing of the Demoblaze test website. The site is assumed to contain
intentional defects as part of the assessment.

---

## Defect 1: Cart Does Not Always Update Immediately After Adding Item

### Description
After clicking “Add to cart”, the cart does not always reflect the newly added item
until the page is refreshed or revisited.

### Steps to Reproduce
1. Navigate to the homepage
2. Select any product
3. Click “Add to cart”
4. Navigate to the cart page

### Expected Result
The cart displays the added product immediately.

### Actual Result
In some cases, the cart appears empty or does not update until further navigation
or refresh.

### Notes
This behaviour appears inconsistent and may be related to client-side state
management or asynchronous updates.

---

## Defect 2: Add to Cart Confirmation Relies on Browser Alert

### Description
The confirmation that an item has been added to the cart is provided via a browser
alert dialog rather than an in-page confirmation message.

### Steps to Reproduce
1. Select any product
2. Click “Add to cart”

### Expected Result
A visible, in-page confirmation message indicating success.

### Actual Result
A browser alert dialog is displayed.

### Notes
Reliance on browser alerts may negatively impact accessibility and user experience.
It also complicates automated testing.

---

## Defect 3: Cart Allows Duplicate Items Without Clear Feedback

### Description
The same product can be added to the cart multiple times without any indication
that duplicates are being added.

### Steps to Reproduce
1. Select a product
2. Click “Add to cart” multiple times
3. Navigate to the cart

### Expected Result
Either quantity should increment clearly, or the user should receive feedback that
the item already exists in the cart.

### Actual Result
Multiple identical entries appear without clear differentiation.

### Notes
This could lead to unintended purchases or user confusion.

---

## Defect 4: Checkout Form Accepts Invalid or Empty Data

### Description
The “Place Order” form allows submission even when required fields contain invalid
or placeholder values.

### Steps to Reproduce
1. Add a product to the cart
2. Click “Place Order”
3. Enter incomplete or invalid values
4. Click “Purchase”

### Expected Result
Form validation should prevent submission until required fields are correctly
completed.

### Actual Result
The purchase can be completed without validation errors.

### Notes
This suggests missing client-side validation and could lead to data quality issues.

---

## Defect 5: Inconsistent Page Load Behaviour

### Description
Product listings and page content occasionally fail to load on initial navigation,
requiring a refresh.

### Steps to Reproduce
1. Navigate between categories repeatedly
2. Observe product list rendering

### Expected Result
Products consistently load on first navigation.

### Actual Result
Occasional empty or partially rendered product lists.

### Notes
This inconsistency reinforces the need for defensive waiting strategies in
automation and may indicate timing issues in the application.

---

## Summary

The issues documented above were identified through a combination of exploratory
and automated testing. They highlight common UI and state-management problems and
provide context for the defensive automation approach used in this assessment.
