import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/phonebook-actions';
import { SearchTitle } from './SearchContact.styles';
import selectors from 'redux/phonebook-selectors';

export default function SearchContact() {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <SearchTitle>Find contacts by name</SearchTitle>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(actions.setFilter(e.target.value))}
      />
    </label>
  );
}
