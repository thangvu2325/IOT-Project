export type deviceType = {
  id: string;
  customer?: customerType;
  deviceId: string;
  fullname: string;
  email: string;
  phone: string;
  battery: {
    source: string;
    voltage: number;
  };
  sim: {
    imsi: string;
  };
  sensors: {
    smokeValue: number;
  };
  signal: {
    band: string;
    deviceNetworkRssiDbm: number;
    gsmStatus: string;
    networkReport: {
      absoluteRadioFrequencyChannel: string;
      areaTacChangeCount: string;
      cellChangeCount: string;
      cellId: string;
      connectionStatus: string;
      extendedDiscontinuousReception: string;
      ipAddress: string;
      mcc: string;
      mnc: string;
      referenceSignalReceivedPower: string;
      referenceSignalReceivedQuality: string;
      requestedActiveTime: string;
      requestedPeriodicTrackingAreaUpdate: string;
      tac: string;
      updatedAt: Date;
    };
  };
  createdAt: Date;
  updatedAt: Date;
};
