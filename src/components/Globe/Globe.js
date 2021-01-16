import ReactGlobe from 'react-globe';

const Globe = (props) => {

    return (
        <ReactGlobe 
            options={{
                globeCloudsOpacity: 0.8,
                enableGlobeGlow: true,
                globeGlowCoefficient: 0.1,
                globeGlowColor: 'white',
                globeGlowPower: 5,
                globeGlowRadiusScale: 0.2,
                enableCameraRotate: true,
                cameraDistanceRadiusScale: 4,
                cameraMaxDistanceRadiusScale: 4.5,
                focusAnimationDuration: 1500,
                focusDistanceRadiusScale: 2,
                enableDefocus: false,
                enableMarkerGlow: true,
                markerExitAnimationDuration: 100,
                markerTooltipRenderer: marker => `
                    ${marker.city} (${marker.temp}, ${marker.weather})
                `,
                markerRadiusScaleRange: [0.005, 0.005],
                markerType: 'hex',
            }}
            height="600px" 
            width="100%"
            focus={props.focus}
            markers={props.markers}
            hexPolygonResolution={3}
        />
    )
}

export default Globe
