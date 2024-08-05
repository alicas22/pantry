import React, { useRef } from "react";
import { Camera } from "react-camera-pro";
import { Button } from "@mui/material";

const CameraComponent = ({ setImage, deviceId }) => {
  const camera = useRef(null);

//   const handleTakePhoto = () => {
//     const photo = camera.current.takePhoto();
//     setImage(photo);
//   };

  return (
    <div>
      <Camera
        ref={camera}
        aspectRatio={16 / 9}
        videoSourceDeviceId={deviceId}
        errorMessages={{
          noCameraAccessible:
            "No camera device accessible. Please connect your camera or try a different browser.",
          permissionDenied:
            "Permission denied. Please refresh and give camera permission.",
          switchCamera:
            "It is not possible to switch camera to different one because there is only one video device accessible.",
          canvas: "Canvas is not supported.",
        }}
      />
<Button
        variant="contained"
        color="primary"
        onClick={() => {
          const photo = camera.current.takePhoto();
          console.log('Captured photo:', photo);  // Log the captured photo
          setImage(photo);  // Ensure only image data is set
        }}
        sx={{ borderRadius: 1 }}
      >
        Take photo
      </Button>
    </div>
  );
};

export default CameraComponent;
