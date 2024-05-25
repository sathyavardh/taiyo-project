
### Project Overview

This project is a COVID-19 dashboard that includes features like contact management and visualization of COVID-19 data using charts and maps. It consists of two main sections: **Contact** and **Charts & Map**.

#### Overview

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Components

#### `App`

- Main component that sets up the routing and layout structure of the application.
- Renders the `Header`, `Navigation`, and content based on the current route.

#### `Header`

- Common header component displayed at the top of each page.
- Provides navigation and branding for the application.

#### `Navigation`

- Sidebar navigation component used for navigating between different sections of the application.
- Visible only on larger screens (`md` and above).

#### `Contact`

- Component for managing contacts.
- Includes a list of contacts and an option to add new contacts.
- Utilizes a dialog for adding new contacts.

#### `ContactDialog`

- Dialog component used for adding new contacts.

#### `ContactList`

- Component responsible for rendering the list of contacts.

#### `ChartsAndMap`

- Component for displaying charts and maps related to COVID-19 data.
- Includes a line graph component (`LineGraph`) and a map component (`Map`).

#### `LineGraph`

- Component for visualizing historical COVID-19 data using a line graph.

#### `Map`

- Component for displaying a map with markers representing COVID-19 data for different countries.

### Routing

- The application uses React Router (`react-router-dom`) for client-side routing.
- Two main routes are defined:
  - `/`: Displays the `Contact` component.
  - `/charts`: Displays the `ChartsAndMap` component.

### Documentation

#### Setup

1. Install dependencies using `npm install`.
2. Start the development server using `npm start`.

#### Folder Structure

- `Components`: Contains all the reusable components used in the application.
- `api`: Contains functions for fetching COVID-19 data.
- `common`: Contains common components such as `Header`, `Navigation`, and `Loader`.
- `Contact`: Contains components related to contact management.
- `ChartsAndMaps`: Contains components related to visualizing COVID-19 data.

#### Deployment

- Deploy the application using the appropriate deployment method for your chosen platform.
- Ensure that all necessary environment variables are configured, such as API keys for fetching COVID-19 data.

#### Customization

- Customize the styling of components using CSS or a CSS framework of your choice.
- Update the API endpoints or data sources as needed for fetching COVID-19 data.
- Extend the functionality of existing components or add new components as required.

#### Dependencies

- `react-router-dom`: For client-side routing.
- `react-query`: For data fetching and caching.
- `leaflet`: For displaying maps.
- `chart.js`: For creating charts and graphs.

#### Additional Notes

- Ensure proper error handling and validation in form components.
- Test the application thoroughly across different screen sizes and browsers.

### Conclusion

This documentation provides an overview of the COVID-19 dashboard application, its components, routing, deployment process, customization options, and dependencies. Use this as a reference guide for understanding and further developing the application.