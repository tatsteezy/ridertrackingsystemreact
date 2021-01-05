import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

function InteractiveMap() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCOW0rwexUSAqaDFHyPNSybph7rbrlriQ8",
    })

    if (loadError) return "Error Loading Maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            map
        </div>
    )
}

export default InteractiveMap
