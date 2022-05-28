import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const FindUs = () => {
    return (
        <div className="mb-10 mx-16">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center">Find Us</h3>
            <div className="w-full h-96 border-2 rounded-xl overflow-hidden">
                <LoadScript googleMapsApiKey={process.env.REACT_APP_GoogleMap_API_KEY}>
                    <GoogleMap
                        mapContainerStyle={{ width: '100%', height: '100%' }}
                        center={{
                            lat: 23.7075222,
                            lng: 90.4696992
                        }}
                        zoom={14}
                    >
                        <Marker position={{
                            lat: 23.7075222,
                            lng: 90.4696992
                        }}
                            cursor="The Bolts Manufacturing" />
                    </GoogleMap>

                </LoadScript>
            </div>

        </div>
    );
};

export default FindUs;