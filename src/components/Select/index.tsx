import {
  MouseEventHandler,
  useMemo,
  useRef,
  useState,
  KeyboardEvent,
} from 'react';
import {
  Container,
  SelectControl,
  SelectValueContainer,
  SelectValue,
  SelectInput,
  SelectIndicator,
  SelectMenu,
  SelectMenuItemContainer,
  SelectMenuItemText,
  Icon,
} from './styles';

interface Item {
  value: string;
  label: string;
}

interface SelectProps {
  items: Item[];
  value?: string;
  onChange?: (item: Item) => void;
}

const Select: React.FC<SelectProps> = ({ items, value, onChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(
    value ? value : items.length > 0 ? items[0].value : ''
  );
  const currentLabel = useMemo(() => {
    const item = items.find((item) => item.value === currentValue);

    if (!item) return 'Nenhuma opção selecionada';

    return item.label;
  }, [currentValue, items]);
  const [filteringCurrentValue, setFilteringCurrentValue] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectMenuRef = useRef<HTMLDivElement>(null);

  const handleSelectControlClick: MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    event.preventDefault();
    event.stopPropagation();

    if (menuOpen) return;

    setMenuOpen(true);
    setFilteredItems(items);
    if (items.length > 0) {
      setFilteringCurrentValue(items[0].value);
    }
    inputRef.current.focus();

    const handleOutsideSelectClick = () => {
      closeMenu();

      document.body.removeEventListener('click', handleOutsideSelectClick);
    };

    document.body.addEventListener('click', handleOutsideSelectClick);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    inputRef.current.value = '';
  };

  const handleIndicatorClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    if (menuOpen) {
      event.stopPropagation();
      closeMenu();
    }
  };

  const handleItemSelect = (selectedValue: string) => {
    setCurrentValue(selectedValue);

    if (onChange) {
      const selectedItem = items.find((item) => item.value === selectedValue);
      onChange(selectedItem);
    }
  };

  const filterItems = () => {
    const inputValue = inputRef.current.value.trim();

    if (inputValue) {
      const filtered = items.filter((item) =>
        item.label.toLowerCase().includes(inputValue.toLowerCase())
      );

      if (filtered.length > 0) {
        setFilteringCurrentValue(filtered[0].value);
      } else {
        setFilteringCurrentValue('');
      }

      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);

      if (items.length > 0) {
        setFilteringCurrentValue(items[0].value);
      }
    }
  };

  const scrollToValue = (selectedItemValue: string, upToDown = true) => {
    const currentValueDiv = selectMenuRef.current.querySelector(
      `#select-item-${selectedItemValue}`
    ) as HTMLDivElement;
    const itemHeight = currentValueDiv.offsetHeight;
    const scrollHeight = currentValueDiv.parentElement.offsetHeight;
    const totalScrollHeight = currentValueDiv.parentElement.scrollHeight;
    const minScrollTop = currentValueDiv.parentElement.scrollTop;
    const maxScrollTop = minScrollTop + scrollHeight;

    const itemIsVisible = () => {
      const itemArrayPosition = filteredItems.findIndex(
        (item) => item.value === selectedItemValue
      );
      const itemScrollPosition = itemArrayPosition * itemHeight;

      if (
        itemScrollPosition < minScrollTop ||
        itemScrollPosition + 2 * itemHeight > maxScrollTop
      )
        return false;

      return true;
    };

    if (itemIsVisible()) {
      return;
    }

    if (upToDown) {
      const itemInversePosition =
        filteredItems.length -
        filteredItems.findIndex((item) => item.value === selectedItemValue) -
        1;

      const heightToScroll =
        totalScrollHeight - itemInversePosition * itemHeight - scrollHeight;

      currentValueDiv.parentElement.scrollTo({ top: heightToScroll });
    } else {
      const itemPosition = filteredItems.findIndex(
        (item) => item.value === selectedItemValue
      );

      const heightToScroll = itemPosition * itemHeight;

      currentValueDiv.parentElement.scrollTo({ top: heightToScroll });
    }
  };

  const changeFilteringCurrentValue = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    switch (event.key) {
      case 'ArrowUp': {
        event.preventDefault();

        const currentSelectedItemIndex = filteredItems.findIndex(
          (item) => item.value === filteringCurrentValue
        );

        if (currentSelectedItemIndex > 0) {
          const newFilteringValue =
            filteredItems[currentSelectedItemIndex - 1].value;
          setFilteringCurrentValue(newFilteringValue);
          scrollToValue(newFilteringValue, false);
        }

        break;
      }
      case 'ArrowDown': {
        event.preventDefault();

        const currentSelectedItemIndex = filteredItems.findIndex(
          (item) => item.value === filteringCurrentValue
        );

        if (filteredItems.length > currentSelectedItemIndex + 1) {
          const newFilteringValue =
            filteredItems[currentSelectedItemIndex + 1].value;
          setFilteringCurrentValue(newFilteringValue);
          scrollToValue(newFilteringValue, true);
        }
        break;
      }
      case 'Enter': {
        if (filteringCurrentValue) {
          handleItemSelect(filteringCurrentValue);
        }
        closeMenu();
        inputRef.current.blur();
        break;
      }
    }
  };

  return (
    <Container>
      <SelectControl onClick={handleSelectControlClick}>
        <SelectValueContainer>
          <SelectValue visible={!menuOpen}>{currentLabel}</SelectValue>
          <SelectInput
            ref={inputRef}
            onChange={filterItems}
            onKeyDown={changeFilteringCurrentValue}
            placeholder={currentLabel}
          />
        </SelectValueContainer>
        <SelectIndicator onClick={handleIndicatorClick}>
          <Icon
            src={menuOpen ? 'icons/IndicatorUp.svg' : 'icons/IndicatorDown.svg'}
          />
        </SelectIndicator>
      </SelectControl>
      <SelectMenu ref={selectMenuRef} open={menuOpen}>
        {filteredItems.map((item) => (
          <SelectMenuItemContainer
            active={item.value === filteringCurrentValue}
            key={item.value}
            id={`select-item-${item.value}`}
            onClick={() => handleItemSelect(item.value)}
          >
            <SelectMenuItemText>{item.label}</SelectMenuItemText>
          </SelectMenuItemContainer>
        ))}
      </SelectMenu>
    </Container>
  );
};

export default Select;
