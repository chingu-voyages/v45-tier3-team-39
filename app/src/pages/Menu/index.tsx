import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import CatDropdown from '~src/components/Dropdowns/CatDropdown';
import MenuCard from '~src/components/Card/MenuCard';
import { Badge } from '~src/components/Badge/Badge';
import { CardModal } from '~src/components/Modals/CardModal';
import { basketState } from '~src/atoms';
import { MenuItem, Category } from '@ordr/types';
import { apiURL } from '~src/urls';
import { Navbar } from '~src/components/Navigation/Navbar/Navbar';
import { RestaurantIcon } from '~src/components/Icons/RestaurantIcon';
import OrdrLoading from '~src/components/Loading/OrdrLoading';

export const MenuPage = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<MenuItem>();
  const [menuItems, setMenuItems] = useState<MenuItem[]>(); // [
  const [selectCategoryItems, setSelectCategoryItems] = useState<MenuItem[]>();
  const [categories, setCategories] = useState<string[]>();
  const basket = useRecoilValue(basketState);

  const fetchMenu = async () => {
    const res = await fetch(`${apiURL}/menu-items`);
    const json = await res.json();
    return json;
  };

  const fetchCategories = async () => {
    const res = (await fetch(`${apiURL}/categories`)).json();
    return res;
  };

  useEffect(() => {
    fetchMenu()
      .then((res) => {
        setMenuItems(res);
        setSelectCategoryItems(res);
      })
      .catch(console.error);
    fetchCategories()
      .then((res) => {
        const categoryNames = res.map(
          (categoryName: Category) => categoryName.name
        );
        const addAllCategory = [...categoryNames, 'all'];
        setCategories(addAllCategory);
      })
      .catch(console.error);
  }, []);

  const onSetCategory = (cat: string) => {
    if (cat === 'all') {
      setSelectCategoryItems(menuItems);
    } else {
      const categoryItems = menuItems?.filter(
        (item) => item.category.name === cat
      );
      setSelectCategoryItems(categoryItems);
    }
  };

  const basketUnits =
    basket.length > 0
      ? basket.reduce((prev, curr) => prev + curr.quantity, 0)
      : 0;

  if (!menuItems || !categories) {
    return <OrdrLoading />;
  }

  return (
    <div>
      <Navbar
        menu={
          categories && (
            <CatDropdown
              categories={categories}
              onSetCategory={onSetCategory}
            />
          )
        }
        icon={<RestaurantIcon />}
        title={'La Mia Pizza'}
        onClickLogout={() => console.log('logged out')}
        action={
          <div className="navbar-end indicator">
            <Badge
              label={basket.length > 0 ? basketUnits.toString() : '0'}
              customClasses="indicator-item"
            />
            <Link role="button" className="btn" to="/order">
              Your order
            </Link>
          </div>
        }
      />
      <div className="sm:mt-16 mt-40 grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {menuItems &&
          selectCategoryItems?.map((item) => {
            return (
              <MenuCard
                name={item.name}
                key={item._id}
                category={item.category}
                price={item.price}
                image_url={item.image_url}
                item_id={item._id}
                onAdd={() => {
                  setSelectedItem(item);
                }}
              />
            );
          })}
        {selectedItem && (
          <CardModal
            item_id={selectedItem._id}
            name={selectedItem.name}
            img_url={selectedItem.image_url}
            category={selectedItem.category}
            description={selectedItem.description}
            price={selectedItem.price}
            onClose={() => setSelectedItem(undefined)}
          />
        )}
      </div>
    </div>
  );
};
