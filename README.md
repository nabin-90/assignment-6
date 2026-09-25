# FitLog

FitLog is a workout tracking web application where users can explore workouts, view workout details, add exercises to their daily plan, save workouts for later, and track completed workouts.

## Features

- Browse workout library
- View detailed workout information
- Add workouts to today's plan
- Save workouts for later
- Mark workouts as completed
- Remove workouts from the plan or saved list
- Sort workouts by duration, calories, or rating
- Workout and saved item counters in the navbar
- Toast notifications for user actions
- Responsive design for desktop, tablet, and mobile
- Local storage support for keeping plan and saved workouts after refresh
- Custom 404 page
- Loading state while fetching workout data

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Hot Toast
- Local Storage
- REST API

## API

Workout data is fetched from:

`https://api.abcz.workers.dev/api/fitlog`

Workout details:

`https://api.abcz.workers.dev/api/fitlog/:id`

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install