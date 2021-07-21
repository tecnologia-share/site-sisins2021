import {
  KeyboardEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CSSProperties } from 'styled-components';
import {
  Container,
  HelperText,
  Icon,
  SelectContainer,
  SelectControl,
  SelectIndicator,
  SelectInput,
  SelectMenu,
  SelectMenuItemContainer,
  SelectMenuItemText,
  SelectValue,
  SelectValueContainer,
} from './styles';

export interface SelectItem {
  value: string;
  label: string;
}

interface SelectProps {
  items: SelectItem[];
  value: string;
  placeholder?: string;
  onChange?: (item: SelectItem) => void;
  variant?: 'error' | 'success';
  helperText?: string;
  style?: CSSProperties;
  id: string;
}

const Select: React.FC<SelectProps> = ({
  items,
  value,
  onChange,
  placeholder,
  variant,
  helperText,
  id,
  style,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const currentLabel = useMemo(() => {
    const item = items.find((item) => item.value === currentValue);

    if (!item) return '';

    return item.label;
  }, [currentValue, items]);
  const [filteringCurrentValue, setFilteringCurrentValue] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onSelectClick = (data) => {
      const { detail: idSelected } = data;

      if (idSelected !== id) {
        closeMenu();
      }
    };

    window.addEventListener('component-select-click', onSelectClick);

    return () => {
      window.removeEventListener('component-select-click', onSelectClick);
    };
  }, [id]);

  const handleSelectControlClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (menuOpen) return;

      window.dispatchEvent(
        new CustomEvent('component-select-click', { detail: id })
      );
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
    },
    [id, items, menuOpen]
  );

  const closeMenu = () => {
    setMenuOpen(false);
    inputRef.current.value = '';
  };

  const handleIndicatorClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();

      if (menuOpen) {
        event.stopPropagation();
        closeMenu();
      }
    },
    [menuOpen]
  );

  const handleItemSelect = useCallback(
    (selectedValue: string) => {
      setCurrentValue(selectedValue);

      if (onChange) {
        const selectedItem = items.find((item) => item.value === selectedValue);
        onChange(selectedItem);
      }
    },
    [items, onChange]
  );

  const filterItems = useCallback(() => {
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
  }, [items]);

  const scrollToValue = useCallback(
    (selectedItemValue: string, upToDown = true) => {
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
    },
    [filteredItems]
  );

  const changeFilteringCurrentValue = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
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
    },
    [filteredItems, filteringCurrentValue, handleItemSelect, scrollToValue]
  );

  return (
    <Container style={style}>
      <SelectContainer>
        <SelectControl onClick={handleSelectControlClick}>
          <SelectValueContainer>
            <SelectValue visible={!menuOpen} disabled={!value}>
              {value
                ? currentLabel
                : placeholder || 'Nenhuma opção selecionada'}
            </SelectValue>
            <SelectInput
              ref={inputRef}
              onChange={filterItems}
              onKeyDown={changeFilteringCurrentValue}
              placeholder={menuOpen && (currentLabel || placeholder)}
            />
          </SelectValueContainer>
          <SelectIndicator onClick={handleIndicatorClick}>
            <Icon
              src={
                menuOpen ? 'icons/IndicatorUp.svg' : 'icons/IndicatorDown.svg'
              }
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
      </SelectContainer>

      {helperText && <HelperText variant={variant}>{helperText}</HelperText>}
    </Container>
  );
};

export default Select;
