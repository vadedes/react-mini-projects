import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//save data categories in an array
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  //set state for menuItems and categories
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  //filterItems function
  //if selected category is set to "all", show all items
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    //otherwise filter the items based on selected category then pass props to components
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
