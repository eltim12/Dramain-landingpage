// src/components/LanguageSwitch.tsx
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown';
import { Button } from '@heroui/button';
import React from 'react';

// Language Switch Component
export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([i18n.language]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  const handleSelectionChange = (keys: any) => {
    // Safely update selectedKeys if it's a Set
    if (keys instanceof Set) {
      setSelectedKeys(keys);

      const firstKey = Array.from(keys)[0];
      if (typeof firstKey === 'string') {
        i18n.changeLanguage(firstKey).catch((err) => {
          console.error('Language change failed:', err);
        });
      }
    }
  };

  return (
    <Dropdown
      showArrow
      classNames={{
        base: 'before:bg-stone-800 dark:before:bg-stone-600', // Darker arrow background
        content: 'py-1 px-1 border border-stone-700 bg-stone-900 dark:bg-stone-800 text-white', // Dark content
      }}
    >
      <DropdownTrigger>
        <Button
          className="capitalize text-white rounded-xl px-4 py-2 font-bold text-[18px] border-white"
          variant="bordered"
          style={{ minWidth: '100px' }} // Adjust for oval shape
        >
          {selectedValue.toUpperCase() === 'EN' ? 'EN' : 'ID'}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Select language"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="faded"
        onSelectionChange={handleSelectionChange}
        className="bg-black text-white rounded-lg"
      >
        <DropdownItem key="en">English (EN)</DropdownItem>
        <DropdownItem key="id">Bahasa Indonesia (ID)</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};