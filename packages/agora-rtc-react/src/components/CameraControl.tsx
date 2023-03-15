import "./UserControl.css";

import type { ButtonHTMLAttributes, MouseEvent } from "react";

import { useCallback } from "react";
import { SVGCamera } from "./icons/SVGCamera";
import { SVGCameraMute } from "./icons/SVGCameraMute";

export interface CameraControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  cameraOn: boolean;
  onCameraChange: (cameraOn: boolean) => void;
}

export function CameraControl({
  cameraOn,
  onCameraChange,
  onClick,
  className = "",
  ...props
}: CameraControlProps) {
  const handleClick = useCallback(
    (evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      onCameraChange(!cameraOn);
      onClick?.(evt);
    },
    [onCameraChange, onClick, cameraOn],
  );

  return (
    <button {...props} className={`arr-user-control ${className}`} onClick={handleClick}>
      {cameraOn ? <SVGCamera /> : <SVGCameraMute />}
    </button>
  );
}
