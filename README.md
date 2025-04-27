# Animals Sample App 🐩

> _What could be more fun than having a pet? Making your own!_

## What Is This?

This is a digital pet platform where users can create and manage their own virtual pets. The app allows users to interact with their pets by feeding, playing, and resting them, while managing their happiness, hunger, and sleepiness levels.

## Features

- Name your animals and edit their names anytime.
- Add multiple animals of different types.
- Play with animals to make them happy.
- Feed animals to reduce their hunger.
- Rest animals to reduce their sleepiness.
- Animals' metrics (happiness, hunger, sleepiness) change over depending on which animal you choose.
- Happiness decreases faster when hunger or sleepiness is full.
- Each animal type has unique metric rates.

## How to Build the App

1. Clone the repository:
   ```bash
   git clone
   cd tamagotchi-challenge
   ```
2. Install dependencies:
   ```bash
   bun install
   ```
3. Start the development server:
   ```bash
   bun run dev
   ```
4. Open the app in your browser at `http://localhost:5173`.

## How to Run Tests

1. Run the test suite:
   ```bash
   bun jest
   ```
2. View the test coverage report:
   ```bash
   bun jest --coverage
   ```

## The Brief

- Users should be able to name animals.
- Users should be able to have multiple animals of different types.
- Playing with animals makes them happy.
- Feeding animals makes them less hungry.
- Resting animals makes them less sleepy.
- Animals start "neutral" on all metrics.
- Happiness should decrease over time.
- Hunger should increase over time.
- Sleepiness should increase over time.
- Happiness should decrease faster when sleep or hunger is full.
- Each animal type should have metrics which increase/decrease at different rates.

## Comments

- All points in the brief have been followed and work as described.
- The main functionality and business logic are tested. Each bullet point in the brief is explicitly tested.
- Use of 3rd party libraries is kept to a minimum.

---

Thank you for reviewing this project! 🚀
