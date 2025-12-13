# Chingu Member Demographics Map

Hi, Chingus! 🗺️  

This project is a web application that allows users to explore demographic information about Chingu members. You can view members on a **map** or in a **paginated list**, and filter them based on attributes such as **role type, tier, country, and gender**.

The app is **user-friendly, responsive**, and provides clear error handling and feedback for invalid inputs.

---

## Table of Contents
- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Usage](#usage)  
- [Error Handling](#error-handling)  
- [Team](#team)  
- [Demo](#demo) 
- [Setup Instructions](#setup-instructions)   

---

## Overview
The Chingu Member Demographics Map allows users to:

- Explore where Chingu members live across the globe.  
- View detailed attributes of each member, including **role, tier, country, gender, and year of joining**.  
- Filter members using a **shared search component** for both Map and List screens.  
- Navigate between **Map** and **List** screens easily.  

This project was built collaboratively following **Agile methodology**, emphasizing both functionality and creative UI/UX design.

---

## Features
- **List Screen**:  
  - Paginated list of Chingu members.  
  - Displays attributes including:  
    - Gender  
    - Country code or name  
    - Year joined (from Timestamp)  
    - Role type  
    - Role  
    - Solo Project Tier  
    - Voyage Tier  
    - Voyage 

- **Map Screen**:  
  - Displays members’ locations using **MapBox**.  
  - Pins show the number of Chingus in each country.  

- **Shared Search Component**:  
  - Filter members by any combination of the following:  
    - Gender  
    - Country code or name  
    - Year joined  
    - Role type  
    - Role  
    - Solo Project Tier  
    - Voyage Tier  
    - Voyage  
  - Submit and Clear buttons update or reset results.  

- **Pagination**: For list results, using **React Paginate**.  

- **Error Handling**:  
  - Red warning if data fails to load.  
  - Yellow notification if no results match filters.  
  - Fallback messages for unexpected rendering errors.  

- **Responsive Design**: Works well on mobile and desktop.  

- **Footer**: Contains a link to the GitHub repo and team list.  

---

## Tech Stack
- **React** + **TypeScript**  
- **Tailwind CSS** for styling
- **Storybook** for UI development
- **React Paginate** for pagination  
- **MapBox** for the Map screen  

---

## Usage

- Navigate between **Home**, **Map**, and **List** screens using the header.  
- Use the **shared search component** to filter members by any combination of:
  - Gender
  - Country code or name
  - Year joined
  - Role type
  - Role
  - Solo Project Tier
  - Voyage Tier
  - Voyage
- Click **Submit** to apply filters.  
- Click **Clear** to reset all filter fields.  
- Use pagination controls on the List screen to navigate through results.  
- On the Map screen, click a **pin** to see the number of members in that country.

---

## Error Handling

- **Data failed to load** → displays a red warning message.  
- **No matches found** → displays a yellow notification message when filters return no results.  
- **Unexpected rendering errors** → fallback message prevents the app from crashing.  

All error messages are **polished, visually distinct, and provide actionable guidance** to users.

---

## Team

- Developer: Bastien Winant  
- Developer: Lilla Tóth
- Primary Scrum Master: Stephanie H
- Shadow Scrum Master: chartGod
- Product Owner: Amanda

---

## Demo

- Live demo: [Coming soon](#)

---

## Setup Instructions

1. Clone the repository:  
   ```bash
   git clone <your-repo-url>

2. **Navigate to the project folder**  
```bash
cd chingu-member-map

3. **Install dependencies**  
```bash
npm install

4. **Start the development server**  
```bash
npm start

5. **Open in your browser**  
Open [http://localhost:3000](http://localhost:3000) to view the app.