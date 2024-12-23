# vue3-celestial-astronomy

# Demo link --> [mikizuk-celestial-astronomy](https://mikizuk-celestial-astronomy.netlify.app)

# Moon and Sun Altitude Visualisation

This project provides a graphical user interface for visualising the altitude of the Moon and the Sun over a 24-hour cycle. Built with Vue 3 and TypeScript in Vite, it integrates modern libraries such as `@unovis`, `unocss`, and `@observerly/astrometry` to create a compact, visually appealing dark-mode interface.

## Features

- **Graphical Visualisation**: Displays the altitude of the Moon and the Sun throughout a 24-hour cycle.
- **Place Selector**: Allows users to select a place using geocoding data fetched from an external API, adapting the chart to the chosen location.
- **Time Selector**: Enables users to specify a time range for the visualisation, providing greater flexibility.
- **Adaptive Chart**: The visualisation dynamically updates based on the selected place and time range.
- **Dark Mode Default**: The UI is styled to be visually appealing in dark mode.
- **Tailwind-esque Styling**: Utilises `unocss` for utility-first, fast, and minimal styling.
- **Modern Tooling**: Built with Vue 3's `<script setup>` syntax for seamless development.

## Technologies Used

- **Vue 3**: Frontend framework for building user interfaces.
- **TypeScript**: For static typing and improved code maintainability.
- **Vite**: Fast and modern development environment.
- **@unovis**: For creating interactive visualisations. Learn more at [Unovis page](https://unovis.dev/)
- **@observerly/astrometry**: For accurate calculations related to Moon and Sun positions. Learn more at [observerly/astrometry](https://github.com/observerly/astrometry)
- **unocss**: Tailwind-like utility-first CSS framework.
- **Google Geocoding API**: Used for fetching geocoding data to enable place selection. Learn more at [Google Geocoding API Documentation](https://developers.google.com/maps/documentation/geocoding/overview).

geocoding-api

## Project Setup

### Installation

To get started, clone the repository and install dependencies:

```bash
# Install dependencies
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

This will launch the project in your default browser. The application supports hot module replacement, allowing changes to be reflected immediately.

### Build

To create a production build:

```bash
npm run build
```

The built files will be output to the `dist` directory. You can preview the production build using:

```bash
npm run preview
```

## Usage

1. Launch the application.
2. The interface will display a graph showing the altitude of the Moon and the Sun over a 24-hour cycle.
3. Hover over the graph for detailed altitude values at specific times.

## Resources

- [Vue 3 Documentation](https://vuejs.org/guide/introduction.html)
- [Vue TypeScript Guide](https://vuejs.org/guide/typescript/overview.html)
- [Unovis Documentation](https://unovis.dev/docs/)
- [Unocss Documentation](https://github.com/unocss/unocss)
- [Observerly Astrometry](https://github.com/observerly/astrometry)
- [Vite Documentation](https://vitejs.dev/guide/)

---
