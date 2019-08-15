import React, { useState, useEffect } from "react";
import { FormContainer } from "../../containers/FormContainer";
import { CenterContainer } from "../../containers/CenterContainer";
import { Input } from "../../common/Input";
import styles from "./styles.module.scss";
import { Grid } from "../../common/Grid";
//import { SearchResults } from "../../common/SearchResultsWindow";

import GoogleMapLoader from "react-google-maps-loader";
import GooglePlacesSuggest from "react-google-places-suggest";

const FormContent = ({ handleInput, handleSearch, stateData, SearchToggle, updateBookingState, updateSearchToggle }) => {
  return (
    <>
      <div style={{ position: "relative", marginBottom: "1em" }}>
        <span className={styles.FromIcon} />
        <GoogleMapLoader
          params={{
            key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
            libraries: "places,geocode"
          }}
          render={googleMaps =>
            googleMaps && (
              <GooglePlacesSuggest
                googleMaps={googleMaps}
                autocompletionRequest={{
                  input: stateData.searchText
                }}
                // Optional props
                onSelectSuggest={(geocoded, original) => {
                  handleInput(SearchToggle.mode, geocoded.formatted_address);
                  updateBookingState({ searchText: "" });
                }}>
                <Input
                  placeholder='From (airport, address)'
                  formStateInputType={"fromLocation"}
                  onchange={handleInput}
                  type='text'
                  Grouped={true}
                  defaultValue={stateData.fromLocation}
                  style={{ paddingLeft: "50px" }}
                />
                <span className={styles.RouteIcon} />
                {/* {SearchToggle.mode === "fromLocation" && stateData.fromLocation.length > 0 && (
                  <SearchResults handleSearch={handleSearch} data={stateData.searchData} />
                )} */}
                <Input
                  placeholder='To (airport, address)'
                  formStateInputType={"toLocation"}
                  onchange={handleInput}
                  type='text'
                  Grouped={true}
                  defaultValue={stateData.toLocation}
                  style={{ paddingLeft: "50px" }}
                />
                <span className={styles.ToIcon} />
                {/* {SearchToggle.mode === "toLocation" && stateData.toLocation.length > 0 && (
                  <SearchResults handleSearch={handleSearch} data={stateData.searchData} />
                )} */}
              </GooglePlacesSuggest>
            )
          }
        />
      </div>

      <label>Pickup time</label>
      <Input placeholder='Pickup time' formStateInputType={"pickUpTime"} onchange={handleInput} type='time' Grouped={false} />

      <Grid col='2'>
        <div>
          <label>Passengers</label>
          <Input placeholder='0' formStateInputType={"passengers"} onchange={handleInput} type='number' min={0} Grouped={false} />
        </div>
        <div>
          <label>Luggage pieces</label>
          <Input placeholder='0' formStateInputType={"luggagePieces"} onchange={handleInput} type='number' min={0} Grouped={false} />
        </div>
      </Grid>
    </>
  );
};

export const AirportBookingWindow = () => {
  /*----initial State ----- */

  const [BookingState, updateBookingState] = useState({
    fromLocation: "",
    toLocation: "",
    pickUpTime: "",
    passengers: "",
    luggagePieces: "",
    searchText: "",
    searchData: []
  });

  const [SearchToggle, updateSearchToggle] = useState({
    mode: ""
  });

  /*----Handling Form Inputs and updating the state ----*/

  const handleInput = (type, value) => {
    if (type === "fromLocation" && value !== undefined) {
      updateSearchToggle({ mode: "fromLocation" });
      updateBookingState({ ...BookingState, searchText: value, fromLocation: value });
    } else if (type === "toLocation" && value !== undefined) {
      updateSearchToggle({ mode: "toLocation" });
      updateBookingState({ ...BookingState, searchText: value, toLocation: value });
    } else if (type === "pickUpTime" && value !== undefined) {
      updateBookingState({ ...BookingState, pickUpTime: value });
    } else if (type === "passengers" && value !== undefined) {
      updateBookingState({ ...BookingState, passengers: value });
    } else if (type === "luggagePieces" && value !== undefined) {
      updateBookingState({ ...BookingState, luggagePieces: value });
    }
  };

  //   const handleSearch = valueObj => {
  //     console.log("From Search:- ", JSON.stringify(valueObj));
  //     // handleInput(SearchToggle.mode, value);
  //     updateSearchToggle({ ...SearchToggle, mode: "" });
  //   };

  useEffect(() => {
    console.log(BookingState);
  });

  return (
    <CenterContainer>
      <FormContainer heading={"Start Your Trip with Rydeu"}>
        <FormContent
          handleInput={handleInput}
          //   handleSearch={handleSearch}
          stateData={BookingState}
          SearchToggle={SearchToggle}
          updateSearchToggle={updateSearchToggle}
          updateBookingState={updateBookingState}
        />
      </FormContainer>
    </CenterContainer>
  );
};
