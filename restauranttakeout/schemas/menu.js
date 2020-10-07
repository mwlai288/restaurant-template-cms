export default {
  name: "menu",
  title: "Menu",
  type: "document",
  icon: () => "🥡",
  fields: [
    {
      name: "name",
      title: "Menu Item",
      type: "string",
      description: "Name of the menu item",
    },
    {
      name: "lunch",
      title: "Lunch",
      type: "boolean",
      description: "Is it part of the lunch menu",
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      description: "Is it vegetarian",
    },
    {
      name: "spicy",
      title: "Spicy",
      type: "boolean",
      description: "Is it spicy",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of item in cents",
    },
  ],
};
