## Project Overview

DriveCost is a modern fuel consumption calculator built with React and Tailwind CSS. It helps users calculate and visualize their vehicle's fuel efficiency and associated costs.

### Features
- Calculate fuel consumption (L/100km)
- Convert to Miles Per Gallon (MPG)
- Compute total fuel costs
- Display cost per kilometer and per 100km
- Interactive UI with real-time calculations
- Responsive design with animated components

### Technical Stack
- React 19
- Tailwind CSS for styling
- Vite for build tooling
- Lucide React for icons
- Custom hooks for business logic

### How It Works
1. Users input three values:
   - Distance traveled (kilometers)
   - Fuel used (liters)
   - Fuel price per liter
2. The application calculates:
   - Fuel consumption rate (L/100km)
   - Fuel efficiency (MPG)
   - Total cost
   - Cost per kilometer
   - Cost per 100km

### Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```