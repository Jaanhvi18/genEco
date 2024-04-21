import SearchBar from 'material-ui-search-bar';
import { useRef, useState } from 'react';
import Script from 'react-load-script';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('');
  const history = useHistory();  // Get access to the history object

  // Store autocomplete object in a ref.
  const autocompleteRef = useRef(null);

  const handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ['(cities)'],
    };

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    autocompleteRef.current = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options
    );

    autocompleteRef.current.setFields(['address_components', 'formatted_address']);
    autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
  };

  const handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = autocompleteRef.current.getPlace();
    const address = addressObject.address_components;

    if (address) {
      setCity(address[0].long_name);
      setQuery(addressObject.formatted_address);
      // Navigate to a new route, could be a details page
      history.push(`/place-details/${addressObject.place_id}`);
    }
  };

  return (
    <div>
      <Script
        url="https://maps.googleapis.com/maps/api/js?key=your_api_key&libraries=places"
        onLoad={handleScriptLoad}
      />
      <SearchBar
        id="autocomplete"  // Ensured ID matches the element ID used in Autocomplete init
        placeholder=""
        value={query}
        hintText="Search City"
        style={{
          margin: '0 auto',
          maxWidth: 800,
        }}
      />
    </div>
  );
};

export default Search;
