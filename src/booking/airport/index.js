import React from "react";
import { FormContainer } from "../../containers/FormContainer";
import { CenterContainer } from "../../containers/CenterContainer";
import { Input } from "../../common/Input";
import styles from "./styles.module.scss";
import { Grid } from "../../common/Grid";

export const AirportBookingWindow = () => {
  return (
    <CenterContainer>
      <FormContainer heading={"Book a transfer"}>
        <div style={{ position: "relative" }}>
          <span className={styles.FromIcon} />
          <Input placeholder='From (airport, address)' type='text' Grouped={true} style={{ paddingLeft: "50px" }} />
          <span className={styles.RouteIcon} />
          <Input placeholder='To (airport, address)' type='text' Grouped={false} style={{ paddingLeft: "50px" }} />
          <span className={styles.ToIcon} />
        </div>

        <label>Pickup time</label>
        <Input placeholder='Pickup time' type='time' Grouped={false} />

        <Grid col='2'>
          <div>
            <label>Passengers</label>
            <Input placeholder='0' type='number' min={0} Grouped={false} />
          </div>
          <div>
            <label>Luggage pieces</label>
            <Input placeholder='0' type='number' Grouped={false} />
          </div>
        </Grid>
      </FormContainer>
    </CenterContainer>
  );
};
