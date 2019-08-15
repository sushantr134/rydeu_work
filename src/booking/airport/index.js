import React, { useState, useEffect } from "react";
import { FormContainer } from "../../containers/FormContainer";
import { CenterContainer } from "../../containers/CenterContainer";
import { Input } from "../../common/Input";
import styles from "./styles.module.scss";
import { Grid } from "../../common/Grid";
import { SearchResults } from "../../common/SearchResultsWindow";

const FormContent = ({ handleInput, handleSearch, stateData, SearchToggle }) => {
  return (
    <>
      <div style={{ position: "relative", marginBottom: "1em" }}>
        <span className={styles.FromIcon} />
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
        {SearchToggle.mode === "fromLocation" && stateData.fromLocation.length > 0 && (
          <SearchResults handleSearch={handleSearch} data={stateData.searchData} />
        )}
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
        {SearchToggle.mode === "toLocation" && stateData.toLocation.length > 0 && (
          <SearchResults handleSearch={handleSearch} data={stateData.searchData} />
        )}
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
    searchData: [{ id: "1", name: "hello munich" }]
  });

  const [SearchToggle, updateSearchToggle] = useState({
    mode: ""
  });

  /*----Handling Form Inputs and updating the state ----*/

  const handleInput = (type, value) => {
    if (type === "fromLocation" && value !== undefined) {
      updateSearchToggle({ mode: "fromLocation" });
      updateBookingState({ ...BookingState, fromLocation: value });
    } else if (type === "toLocation" && value !== undefined) {
      updateSearchToggle({ mode: "toLocation" });
      updateBookingState({ ...BookingState, toLocation: value });
    } else if (type === "pickUpTime" && value !== undefined) {
      updateBookingState({ ...BookingState, pickUpTime: value });
    } else if (type === "passengers" && value !== undefined) {
      updateBookingState({ ...BookingState, passengers: value });
    } else if (type === "luggagePieces" && value !== undefined) {
      updateBookingState({ ...BookingState, luggagePieces: value });
    }
  };

  const handleSearch = value => {
    handleInput(SearchToggle.mode, value);
    updateSearchToggle({ ...SearchToggle, mode: "" });
  };

  useEffect(() => {
    console.log(BookingState);
  });

  return (
    <CenterContainer>
      <FormContainer heading={"Start Your Trip with Rydeu"}>
        <FormContent handleInput={handleInput} handleSearch={handleSearch} stateData={BookingState} SearchToggle={SearchToggle} />
      </FormContainer>
    </CenterContainer>
  );
};
