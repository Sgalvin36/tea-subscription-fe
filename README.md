# Tea Subscription FE

Welcome to **Tea Subscription Manager** – an application designed to support those managing multiple subscriptions and wanting to see their users quickly at a glance.  

## 📑 Table of Contents
1. [About Tea Subscription Manager](#about-tea-subscription-manager)
2. [Features That Matter 💛](#features-that-matter)
3. [How to Use Tea Time](#how-to-use-tea-time)
4. [Project Structure 🔍](#project-structure)
5. [Authors 👥](#contributors)


## About Tea Subscription Manager
### Mission

Designed with simplicity in mind, the subscriptions page reveals all the current and historic subscriptions that the manager may have. They are able to sort them by price as well as clear indicators for which subscriptions are currently not active. Easily reactive an old subscription with a simple button click. Each subscription maintains the history of customers that have signed up for it or are still subscribed.

### Who Is This For?

This app is designed for:
- **Managers of Tea Subscriptions**: See all your subscriptions at a glance.

## Features That Matter 💛

- **Flexible Sorting Options**: Sort subscriptions by a price, high-to-low or low-to-high
- **Canceling Subscriptions**: Cancel an entire subscriptions with a simple click to remove it for all customers
- **Renew Subscriptions**: Need to bring back a best selling subscription? No worries, its still there and ready to be activated with a click of a button

## Getting Started 🛠

1. Clone the repository:
    ```bash
    git clone https://github.com/username/tea-subscription-fe.git
    ```
2. Install frontend and backend dependencies:
    ```bash
    # Frontend
    npm install
    # Backend
    bundle install
    ```
3. Start the app:
    ```bash
    # Start Rails API server
    rails server
    # Start frontend
    npm start
    ```
    
## How to Use Tea Time

1. **Launch on Mobile**: Access [app URL or localhost link if testing locally] on a mobile device for the best experience.
2. **Filter Recipes or Set Your Store Location**: Start by filtering recipes based on your preferences or by setting your nearest King Soopers location for accurate pricing.
3. **View a Recipe**: Click on a recipe to access the full recipe page, where you’ll find detailed cooking instructions and a list of ingredients.
   - **Store-Specific Pricing**: If you've already set your location, the recipe page will display real-time, store-specific prices for each ingredient.
   - **Set Location Link**: If a location hasn't been set yet, you’ll see a link directing you to the location page. Once you select a store, you’ll be navigated back to the recipe page with updated pricing specific to that store.

## Project Structure 🔍

- **`src`**: Contains all core application code.
  - **`components`**: Reusable UI components, such as recipe cards, store selection interfaces, and other interactive elements.
  - **`router`**: Defines all route handlers for navigating between pages in the app.
- **`assets`**: Stores local images used within the app.
- **`public`**: Contains public images and other static files accessible by the app.
- **`cypress`**: Contains all end-to-end tests and testing configurations.

## Authors 👥

Meet the team behind Fresh Start Recipes:

- [Shane Galvin](https://github.com/Sgalvin36)  

